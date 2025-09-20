import React from "react";
import ReactDOM from "react-dom/client";
import { setupIonicReact, IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";

import App from "./App";

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

setupIonicReact();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IonReactRouter>
      <IonApp>
        <Route path="/" component={App} />
      </IonApp>
    </IonReactRouter>
  </React.StrictMode>
);
