// web entry
import { AppRegistry } from "react-native";
import App from "./containers/app";
import registerServiceWorker from "./common/web/registerServiceWorker";

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", { rootTag: document.getElementById("root") });
registerServiceWorker();
