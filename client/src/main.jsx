import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";
import { ClientProvider } from "./Context.jsx";
const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-75u0gzvq2kz8rrir.us.auth0.com"
    clientId="LRl4LJvJ2Uu9VemQIDJgS6RSjvNvGPxM"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ClientProvider>
      <App />
    </ClientProvider>
  </Auth0Provider>
);
