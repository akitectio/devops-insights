from application.utils.http_client import HttpClient

from application.config import KEYCLOAK_BASE_URL, KEYCLOAK_REALM, KEYCLOAK_CLIENT_ID, KEYCLOAK_CLIENT_SECRET


class KeycloakClient:
    def __init__(self):
        self.http_client = HttpClient(KEYCLOAK_BASE_URL)
        self.realm = KEYCLOAK_REALM
        self.client_id = KEYCLOAK_CLIENT_ID
        self.client_secret = KEYCLOAK_CLIENT_SECRET

    def login(self, username, password):
        endpoint = f"realms/{self.realm}/protocol/openid-connect/token"
        data = {
            "client_id": self.client_id,
            "username": username,
            "password": password,
            "client_secret": self.client_secret,
            "grant_type": "password"
        }
        headers = {"Content-Type": "application/x-www-form-urlencoded"}
        response = self.http_client.post(
            endpoint, data=data, headers=headers)
        print("Response:", response.json())
        return response.json()
