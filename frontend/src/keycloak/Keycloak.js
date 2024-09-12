import Keycloak from 'keycloak-js';
let { VIE_KEYCLOAK_REALM, VIE_KEYCLOAK_URL, VIE_KEYCLOAK_CLIENT_ID } = import.meta.env;

const keycloakConfig = {
    url: VIE_KEYCLOAK_URL,
    realm: VIE_KEYCLOAK_REALM,
    clientId: VIE_KEYCLOAK_CLIENT_ID
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;