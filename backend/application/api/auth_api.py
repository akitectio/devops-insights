from flask import Blueprint, request, jsonify
from application.utils.http_code import HttpCode
from application.services.keycloak.auth import get_user_info

auth_api_blueprint = Blueprint("auth", __name__, url_prefix="/auth")


@auth_api_blueprint.route("/user_info", methods=["GET"])
def user_info():
    access_token = request.headers.get('Authorization', None)
    if not access_token:
        return jsonify({"error": "Authorization token is required"}), HttpCode.BAD_REQUEST

    try:
        user_info = get_user_info(access_token)
        if user_info.get("error"):
            return jsonify({"error": user_info.get("error")}), HttpCode.INTERNAL_ERROR

        return jsonify({"user_info": user_info}), HttpCode.OK

    except Exception as e:
        return jsonify({"error": str(e)}), HttpCode.INTERNAL_ERROR
