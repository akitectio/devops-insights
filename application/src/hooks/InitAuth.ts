import React from "react";
import { useDispatch } from "react-redux";
import keycloak from "../configs/keycloak";
import { onLogin, onLogout } from "../redux-toolkit/auth/authSlice";

const InitAuth = ({ children }: any) => {
  const dispatch = useDispatch();
  const [keycloakInitialized, setKeycloakInitialized] = React.useState(false);

  React.useEffect(() => {
    console.log("vao key cloak");
    keycloak
      .init({ onLoad: "login-required", checkLoginIframe: false })
      .then((authenticated) => {
        if (authenticated) {
          console.log("keycloak", keycloak);
          const user: any = keycloak.tokenParsed;
          dispatch(onLogin(user));
        } else {
          dispatch(onLogout());
        }
        setKeycloakInitialized(true);
      })
      .catch(() => {
        dispatch(onLogout());
        setKeycloakInitialized(true);
      });
  }, [dispatch]);

  return children;
};

export default InitAuth;
