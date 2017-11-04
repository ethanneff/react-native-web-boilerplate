import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Dimensions, StatusBar } from "react-native";
import View from "../view";

let { height, width } = Dimensions.get("window");
Dimensions.addEventListener("change", function(dimension) {
  height = dimension.window.height;
  width = dimension.window.width;
});

let statusBarHeight = StatusBar.currentHeight;
let statusBar = height > width ? 20 : 0;

const main = props => {
  return <View style={(props.style, styles.container)} />;
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: "blue"
  }
});

main.propTypes = {};

main.defaultProps = {};

export default main;
