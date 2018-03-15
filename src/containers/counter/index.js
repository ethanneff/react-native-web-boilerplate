// react
import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

// redux
import PropTypes from "prop-types";
import * as constants from "./constants";
import * as actions from "./actions";
import reducers from "./reducers";
import { connect } from "react-redux";
import { injectReducer } from "../../common/store";

const main = props => (
  <View>
    <Text>
      {props.title} : {props.store}
    </Text>
    <Button
      title="onIncrement"
      onPress={props.onIncrement}
      style={styles.button}
    />
    <Button
      title="onIncrementValue"
      onPress={props.onIncrementValue}
      style={styles.button}
    />
    <Button
      title="onDecrement"
      onPress={props.onDecrement}
      style={styles.button}
    />
    <Button
      title="onDecrementAsync"
      onPress={props.onDecrementAsync}
      style={styles.button}
    />
    <Button
      title="onIncrementAsync"
      onPress={props.onIncrementAsync}
      style={styles.button}
    />
    <Button
      title="onIncrementIfOdd"
      onPress={props.onIncrementIfOdd}
      style={styles.button}
    />
  </View>
);

const styles = StyleSheet.create({
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

main.propTypes = {
  title: PropTypes.string.isRequired
};

main.defaultProps = {
  subtitle: "counter"
};

injectReducer(constants.reducer, reducers);

export default connect(
  state => ({
    store: state[constants.reducer]
  }),
  dispatch => ({
    onIncrement: () => dispatch(actions.increment()),
    onIncrementValue: () => dispatch(actions.incrementValue(2)),
    onDecrement: () => dispatch(actions.decrement()),
    onDecrementAsync: () => dispatch(actions.decrementAsync()),
    onIncrementAsync: () => dispatch(actions.incrementAsync(2)),
    onIncrementIfOdd: () => dispatch(actions.incrementIfOdd())
  })
)(main);
