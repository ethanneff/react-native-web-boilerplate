import React from "react";
import { StyleSheet } from "react-native";
import { Route } from "../../common/routing";
import View from "../../components/view";
import Text from "../../components/text";
import Link from "../../components/link";
import Topic from "./topic";

const main = props => (
  <View>
    <Text title="Topics" />
    <Link
      to={`${props.match.url}/rendering`}
      style={styles.subNavItem}
      underlayColor="#f0f4f7"
      title="Rendering with React"
    />
    <Link
      to={`${props.match.url}/components`}
      style={styles.subNavItem}
      underlayColor="#f0f4f7"
      title="Components"
    />
    <Link
      to={`${props.match.url}/props-v-state`}
      style={styles.subNavItem}
      underlayColor="#f0f4f7"
      title="Props v. State"
    />
    <Route path={`${props.match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={props.match.url}
      render={() => (
        <Text title="Please select a topic." style={styles.topic} />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  subNavItem: {
    paddingVertical: 10
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default main;
