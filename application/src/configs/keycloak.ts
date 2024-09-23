import Keycloak from "keycloak-js";

if (
  !process.env.REACT_APP_KEYCLOAK_URL ||
  !process.env.REACT_APP_KEYCLOAK_REALM ||
  !process.env.REACT_APP_KEYCLOAK_CLIENT_ID
) {
  throw new Error("Missing Keycloak environment variables");
}

const keycloakConfig = {
  url: process.env.REACT_APP_KEYCLOAK_URL || "default-keycloak-url",
  realm: process.env.REACT_APP_KEYCLOAK_REALM || "default-realm",
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID || "default-client-id",
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
