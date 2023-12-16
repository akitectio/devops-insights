from functools import wraps
from flask import request, jsonify
import jwt
from application.utils.http_code import HttpCode


def has_permission(payload, required_permission):
    roles = payload.get('realm_access', {}).get('roles', [])
    return required_permission in roles


def token_required(required_permission):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            auth_header = request.headers.get('Authorization')
            if not auth_header:
                return jsonify({"error": "Authorization token is missing"}), HttpCode.UNAUTHORIZED

            try:
                token = auth_header.split(" ")[1]
                payload = jwt.decode(
                    token, options={"verify_signature": False})
            except jwt.ExpiredSignatureError:
                return jsonify({"error": "Token has expired"}), HttpCode.UNAUTHORIZED
            except jwt.InvalidTokenError:
                return jsonify({"error": "Invalid token"}), HttpCode.UNAUTHORIZED

            if not has_permission(payload, required_permission):
                return jsonify({"error": "Insufficient permissions"}), HttpCode.FORBIDDEN

            request.user = payload
            return f(*args, **kwargs)
        return decorated_function
    return decorator
