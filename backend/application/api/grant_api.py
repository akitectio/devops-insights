from flask import Blueprint, request, jsonify
from application.utils.http_code import HttpCode
from application.services.keycloak.grant import login, logout, refresh_token

grant_api_blueprint = Blueprint("grant", __name__, url_prefix="/grant")


@grant_api_blueprint.route("/login", methods=["POST"])
def post_login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), HttpCode.BAD_REQUEST

    try:
        token_response = login(username, password)

        if not token_response or 'error' in token_response:
            error_description = token_response.get(
                'error_description', 'Unknown error')
            return jsonify({"error": error_description}), HttpCode.UNAUTHORIZED

        return jsonify({"token": token_response}), HttpCode.OK

    except Exception as e:
        return jsonify({"error": str(e)}), HttpCode.INTERNAL_ERROR


@grant_api_blueprint.route("/logout", methods=["POST"])
def post_logout():
    _refresh_token = request.json.get("refresh_token")
    if not refresh_token:
        return jsonify({"error": "Refresh token is required"}), HttpCode.BAD_REQUEST

    logout_response = logout(_refresh_token)
    if 'error' in logout_response:
        return jsonify({"error": logout_response.get('error')}), HttpCode.UNAUTHORIZED

    return jsonify({"message": "Logged out successfully"}), HttpCode.OK


@grant_api_blueprint.route("/refresh_token", methods=["POST"])
def post_refresh_token():
    _refresh_token = request.json.get("refresh_token")
    if not refresh_token:
        return jsonify({"error": "Refresh token is required"}), HttpCode.BAD_REQUEST

    token_response = refresh_token(_refresh_token)
    if 'error' in token_response:
        return jsonify({"error": token_response.get('error')}), HttpCode.UNAUTHORIZED

    return jsonify({"token_response": token_response}), HttpCode.OK
