// entry
import React from "react";
import { Provider } from "react-redux";
import { AppRegistry, Platform } from "react-native";
import { Router, AndroidBackButton } from "./common/routing";
import { store } from "./common/store";
import registerServiceWorker from "./common/web/registerServiceWorker";
import App from "./containers/app";
import Navigation from "./containers/navigation";
import Counter from "./containers/counter";

const APP_NAME = "rnb";

// TODO: handle navigation with redux
// TODO: remove Navigation and Counter (will be handled by redux router)
const main = () => (
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

export default main;

AppRegistry.registerComponent(APP_NAME, () => main);
if (Platform.OS === "web") {
  AppRegistry.runApplication(APP_NAME, {
    rootTag: document.getElementById("root")
  });
  registerServiceWorker();
}
