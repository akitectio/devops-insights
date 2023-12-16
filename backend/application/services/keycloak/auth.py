from application.utils.keycloak_client import KeycloakClient
from application.utils.http_code import HttpCode


def get_user_info(access_token):
    keycloak_client = KeycloakClient()
    endpoint = f"realms/{keycloak_client.realm}/protocol/openid-connect/userinfo"
    headers = {"Authorization": f"{access_token}"}
    response = keycloak_client.http_client.get(endpoint, headers=headers)
    if response.status_code != HttpCode.OK:
        return {"error": f"API request failed with status {response.status_code}"}
    try:
        return response.json()
    except ValueError:
        return {"error": "Invalid JSON response from server"}


def is_user_locked(access_token, username):
    keycloak_client = KeycloakClient()
    endpoint = f"admin/realms/{keycloak_client.realm}/users"
    params = {'username': username}
    headers = {'Authorization': f'Bearer {access_token}'}
    print(headers)
    response = keycloak_client.http_client.get(
        endpoint, params=params, headers=headers)
    print(response.url)

    if response.status_code == HttpCode.OK:
        users = response.json()
        for user in users:
            if user['username'] == username:
                return not user['enabled']
        return False
    else:
        print(
            f"Failed to query users: {response.status_code} - {response.text}")
        return False
