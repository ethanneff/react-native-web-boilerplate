import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text } from "react-native";
import { Link } from "../../common/routing";

const main = props => (
  <Link to={props.to} style={props.style} underlayColor={props.underlayColor}>
    <Text>{props.title}</Text>
  </Link>
);

main.propTypes = {};

main.defaultProps = {};

export default main;
