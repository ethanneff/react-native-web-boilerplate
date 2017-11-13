// entry
import React from "react";
import { AppRegistry, Platform } from "react-native";
import { Router, AndroidBackButton } from "./common/routing";
import registerServiceWorker from "./common/web/registerServiceWorker";
import Window from "./components/window";
import Welcome from "./containers/welcome";

const main = props => {
  return (
    <Router>
      <AndroidBackButton>
        <Window>
          <Welcome />
        </Window>
      </AndroidBackButton>
    </Router>
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
