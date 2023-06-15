import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";
const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-75u0gzvq2kz8rrir.us.auth0.com"
    clientId="LRl4LJvJ2Uu9VemQIDJgS6RSjvNvGPxM"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
