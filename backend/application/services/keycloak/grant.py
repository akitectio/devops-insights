from application.utils.keycloak_client import KeycloakClient
from application.utils.http_code import HttpCode
from application.utils.http_client import HttpContentType


def login(username, password):
    keycloak_client = KeycloakClient()
    endpoint = f"realms/{keycloak_client.realm}/protocol/openid-connect/token"
    data = {
        "client_id": keycloak_client.client_id,
        "username": username,
        "password": password,
        "client_secret": keycloak_client.client_secret,
        "grant_type": "password",
        "scope": "openid"
    }
    headers = {"Content-Type": HttpContentType.FORM_URLENCODED}
    response = keycloak_client.http_client.post(
        endpoint, data=data, headers=headers)
    if response.status_code != HttpCode.OK:
        return {"error": f"API request failed with status {response.status_code}"}
    try:
        return response.json()
    except ValueError:
        return {"error": "Invalid JSON response from server"}


def logout(refresh_token):
    keycloak_client = KeycloakClient()
    endpoint = f"realms/{keycloak_client.realm}/protocol/openid-connect/logout"
    data = {
        "client_id": keycloak_client.client_id,
        "refresh_token": refresh_token,
    }
    headers = {"Content-Type": HttpContentType.FORM_URLENCODED}
    response = keycloak_client.http_client.post(
        endpoint, data=data, headers=headers)
    if response.status_code != HttpCode.OK:
        return {"error": f"API request failed with status {response.status_code}"}
    return {"message": "Logged out successfully"}


def refresh_token(refresh_token):
    keycloak_client = KeycloakClient()
    endpoint = f"realms/{keycloak_client.realm}/protocol/openid-connect/token"
    data = {
        "client_id": keycloak_client.client_id,
        "refresh_token": refresh_token,
        "client_secret": keycloak_client.client_secret,
        "grant_type": "refresh_token"
    }
    headers = {"Content-Type": HttpContentType.FORM_URLENCODED}
    response = keycloak_client.http_client.post(
        endpoint, data=data, headers=headers)
    if response.status_code != HttpCode.OK:
        return {"error": f"API request failed with status {response.status_code}"}
    try:
        return response.json()
    except ValueError:
        return {"error": "Invalid JSON response from server"}
