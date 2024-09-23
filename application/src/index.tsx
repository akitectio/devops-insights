import { PrimeReactProvider } from "primereact/api";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import InitAuth from "./hooks/InitAuth";
import "./index.css";
import store from "./redux-toolkit/rootStore";
import reportWebVitals from "./reportWebVitals";

const options = {};

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <Provider store={store}>
    <InitAuth>
      <BrowserRouter>
        <PrimeReactProvider value={options}>
          <App />
        </PrimeReactProvider>
      </BrowserRouter>
    </InitAuth>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
