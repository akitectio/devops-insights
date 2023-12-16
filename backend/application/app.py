from flask import Flask, request
from application.api import (
    grant_api_blueprint,
    auth_api_blueprint
)
from application.utils.http_code import HttpCode
from jwt import ExpiredSignatureError
from flask_cors import CORS
import os
from application.extensions import db


def create_app():
    """Application factory, used to create application"""
    app = Flask("application")
    if os.getenv("FLASK_ENV") == "development":
        app.run(debug=True)
    CORS(app)
    app.config.from_object("application.config")

    configure_extensions(app)
    register_blueprints(app)
    configure_token_error(app)

    @app.route("/")
    def default():
        return (
            str(os.getenv("FLASK_BUILD_VERSION"))
            + "<br /> - "
            + os.getenv("FLASK_BUILD_DATE")
            + "<br /> - Requester IP: "
        )

    @app.teardown_request
    def checkin_db(exc):
        db.session.remove()
    return app


def configure_extensions(app):
    """Configure flask extensions"""
    db.init_app(app)


def configure_token_error(app):
    @app.errorhandler(ExpiredSignatureError)
    def handle_expired_error(e):
        return {"msg": "Hết hạn Token"}, HttpCode.UnAuthorized


def register_blueprints(app):
    """Register all blueprints for application"""
    app.register_blueprint(grant_api_blueprint)
    app.register_blueprint(auth_api_blueprint)
