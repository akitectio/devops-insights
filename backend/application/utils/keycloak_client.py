from application.utils.http_client import HttpClient
from application.config import KEYCLOAK_BASE_URL, KEYCLOAK_REALM, KEYCLOAK_CLIENT_ID, KEYCLOAK_CLIENT_SECRET


class KeycloakClient:
    def __init__(self):
        self.http_client = HttpClient(KEYCLOAK_BASE_URL)
        self.realm = KEYCLOAK_REALM
        self.client_id = KEYCLOAK_CLIENT_ID
        self.client_secret = KEYCLOAK_CLIENT_SECRET

    def is_token_valid(self, token):
        """
        Kiểm tra xem token có hợp lệ không.

        Args:
        - token (str): JWT token cần kiểm tra.

        Returns:
        - bool: True nếu token hợp lệ, False nếu không.
        """
        endpoint = f"realms/{self.realm}/protocol/openid-connect/token/introspect"
        data = {
            "client_id": self.client_id,
            "client_secret": self.client_secret,
            "token": token
        }
        headers = {"Content-Type": "application/x-www-form-urlencoded"}

        response = self.http_client.post(endpoint, data=data, headers=headers)
        if response.status_code == 200:
            token_info = response.json()
            return token_info.get('active', False)

        print(
            f"Failed to validate token: {response.status_code} - {response.text}")
        return False
