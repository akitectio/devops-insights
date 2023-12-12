from flask import Blueprint, request, jsonify
from application.utils.keycloak_client import KeycloakClient


auth_api_blueprint = Blueprint("auth", __name__, url_prefix="/auth")


@auth_api_blueprint.route("/login", methods=["POST"])
def post():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Thiếu username hoặc password"}), 400

    keycloak_client = KeycloakClient()
    try:
        token_response = keycloak_client.login(username, password)
        if 'error' in token_response:
            if token_response.get('error_description') == 'Invalid user credentials':
                return jsonify({"error": "Sai mật khẩu"}), 401
            return jsonify({"error": token_response.get('error_description')}), 401
        return jsonify(token_response), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
