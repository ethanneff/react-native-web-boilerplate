import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import Link from "../link";
import View from "../view";

const main = props => {
  const navigation = props.items.map((item, index) => {
    return (
      <Link
        key={index}
        to={item.nav}
        underlayColor={(item.color, styles.navColor)}
        style={(item.style, styles.navItem)}
        title={item.title}
      />
    );
  });

  return <View style={styles.nav}>{navigation}</View>;
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navColor: {
    color: "#f8f8f8"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ccc"
  }
});

main.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      nav: PropTypes.string.isRequired,
      style: PropTypes.object,
      color: PropTypes.object
    }).isRequired
  ).isRequired
};

main.defaultProps = {};

export default main;
