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
import * as reducers from "./reducers"; // TODO: remove
import sagas from "./sagas"; // TODO: remove
import * as constants from "./constants"; // TODO: remove
import * as actions from "./actions";
import { connect } from "react-redux";
import { injectReducer } from "redux-reducers-injector"; // TODO: remove
import { injectSaga } from "redux-sagas-injector"; // TODO: remove
import { withRouter } from "react-router-dom"; // TODO: move router to redux

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
        <Text>
          {this.props.title}: {this.props.counter}
        </Text>
        <Button
          title="onIncrement"
          onPress={this.props.onIncrement}
          style={styles.button}
        />
        <Button
          title="onIncrementValue"
          onPress={this.props.onIncrementValue}
          style={styles.button}
        />
        <Button
          title="onDecrement"
          onPress={this.props.onDecrement}
          style={styles.button}
        />
        <Button
          title="onDecrementAsync"
          onPress={this.props.onDecrementAsync}
          style={styles.button}
        />
        <Button
          title="onIncrementAsync"
          onPress={this.props.onIncrementAsync}
          style={styles.button}
        />
        <Button
          title="onIncrementIfOdd"
          onPress={this.props.onIncrementIfOdd}
          style={styles.button}
        />
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

injectReducer(constants.reducer, reducers); // TODO: move to reducers
injectSaga(constants.reducer, sagas); // TODO: move to sagas

export default withRouter(
  connect(
    state => ({
      counter: state[constants.reducer].counter
    }),
    dispatch => ({
      onIncrement: () => dispatch(actions.increment()),
      onIncrementValue: () => dispatch(actions.incrementValue(2)),
      onDecrement: () => dispatch(actions.decrement()),
      onDecrementAsync: () => dispatch(actions.decrementAsync()),
      onIncrementAsync: () => dispatch(actions.incrementAsync()),
      onIncrementIfOdd: () => dispatch(actions.incrementIfOdd())
    })
  )(main)
);
