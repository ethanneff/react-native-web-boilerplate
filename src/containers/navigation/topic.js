import React from "react";
import { StyleSheet } from "react-native";
import Text from "../../components/text";

const main = props => (
  <Text style={styles.topic} title={props.match.params.topicId} />
);

const styles = StyleSheet.create({
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default main;
