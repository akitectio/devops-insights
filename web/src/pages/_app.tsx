import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/configureStore";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

// define a root css for tailwind
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
