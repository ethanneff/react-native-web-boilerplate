// web entry
import { AppRegistry } from "react-native";
import App from "./containers/app";
import registerServiceWorker from "./common/web/registerServiceWorker";

AppRegistry.registerComponent("rnb", () => App);
AppRegistry.runApplication("rnb", { rootTag: document.getElementById("root") });
registerServiceWorker();
