import React from "react";
import { Link } from "../../common/routing";
import Text from "../text";
import View from "../view";

const main = props => (
  <View style={props.style}>
    <Link to={props.to} style={styles.link}>
      <Text title={props.title} />
    </Link>
  </View>
);

const styles = {
  link: {
    color: "black",
    textDecoration: "none"
  }
};

main.propTypes = {};

main.defaultProps = {};

export default main;
