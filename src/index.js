// web entry
import App from "./components/App";
import { AppRegistry } from "react-native";
import registerServiceWorker from "./web/registerServiceWorker";

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", { rootTag: document.getElementById("root") });
registerServiceWorker();
