// entry
import React from "react";
import { Provider } from "react-redux";
import { AppRegistry, Platform, Button } from "react-native";
import { Router, AndroidBackButton } from "./common/routing";
import registerServiceWorker from "./common/web/registerServiceWorker";
import { store } from "./common/store";
import App from "./containers/app";
import Navigation from "./containers/navigation";
import Counter from "./containers/counter";

import { ConnectedRouter, push } from "react-router-redux";

// TODO: handle navigation with redux
// TODO: remove Navigation and Counter (will be handled by redux router)
const main = props => {
  return (
    <Provider store={store}>
      <Router>
        <AndroidBackButton>
          <App statusBar={false}>
            <Navigation />
            <Counter title="count" />
          </App>
        </AndroidBackButton>
      </Router>
    </Provider>
  );
};

export default main;

if (Platform.OS === "web") {
  AppRegistry.registerComponent("rnb", () => main);
  AppRegistry.runApplication("rnb", {
    rootTag: document.getElementById("root")
  });
  registerServiceWorker();
}
