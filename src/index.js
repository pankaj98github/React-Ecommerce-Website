import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/productcontext";
import { FilterProvider } from "./context/filtercontext";
import { CartProvider } from "./context/cartcontext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-r5615yf3kaagrn6o.us.auth0.com"
    clientId="JvyisRsv59HucowmJHQbjdeYkvNLN45Y"
    redirectUri={window.location.origin}
  >
    <AppProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </AppProvider>
  </Auth0Provider>
);

