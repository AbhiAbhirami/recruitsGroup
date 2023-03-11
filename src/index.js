import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/scss/main.scss";
import reportWebVitals from "./reportWebVitals";
import "font-awesome/css/font-awesome.min.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./core/Auth";
import { AppRoutes } from "./routing/AppRoutes";
import { setupAxios } from "./core/AuthHelpers";
import store from "./store/store";
import { Provider } from "react-redux";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));
setupAxios(axios);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
