// entry
import React from "react";
import { Provider } from "react-redux";
import { AppRegistry, Platform } from "react-native";
import { Router, AndroidBackButton } from "./common/routing";
import registerServiceWorker from "./common/web/registerServiceWorker";
import store from "./common/store";
import App from "./containers/app";
import Welcome from "./containers/welcome";

const main = props => {
  return (
    <Provider store={store}>
      <Router>
        <AndroidBackButton>
          <App statusBar={false}>
            <Welcome />
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
