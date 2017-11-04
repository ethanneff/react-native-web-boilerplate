import React from "react";
import Theme from "../../common/theme";
import View from "../view";

const main = props => {
  return <View style={Theme.window}>{props.children}</View>;
};

export default main;
