// TODO: handle status bar
// TODO: handle landscape change
// TODO: handle open close
// TODO: handle network

import React from "react";
import {
  AppState,
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  StatusBar,
  Dimensions
} from "react-native";
import PropTypes from "prop-types";

let { height, width } = Dimensions.get("window");

class main extends React.Component {
  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
    Dimensions.addEventListener("change", this._handleOrientationChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
    Dimensions.addEventListener("change", this._handleOrientationChange);
  }

  _handleOrientationChange = nextAppDimentions => {
    console.log(nextAppDimentions);
  };

  _handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("App has come to the foreground!");
    }
  };

  render() {
    return (
      <View>
        <StatusBar barStyle="default" />
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

main.propTypes = {
  statusBar: PropTypes.bool.isRequired
};

main.defaultProps = {
  title: "app"
};

export default main;
