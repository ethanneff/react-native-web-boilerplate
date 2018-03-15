// TODO: handle status bar

// react
import React from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  AppState,
  Text,
  Dimensions,
  NetInfo
} from "react-native";

// redux
import PropTypes from "prop-types";
import * as constants from "./constants";
import * as actions from "./actions";
import reducers from "./reducers";
import { connect } from "react-redux";
import { injectReducer } from "../../common/store";

class main extends React.Component {
  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
    Dimensions.addEventListener("change", this._handleDimensionChange);
    NetInfo.addEventListener("connectionChange", this._handleNetworkChange);
    NetInfo.getConnectionInfo().then(change =>
      this._handleNetworkChange(change)
    );
    this.props.onStateChange(AppState.currentState);
    this.props.onDimensionChange({
      window: Dimensions.get("window"),
      screen: Dimensions.get("screen")
    });
  }

  componentWillUnmount() {
    NetInfo.removeEventListener("connectionChange", this._handleNetworkChange);
    AppState.removeEventListener("change", this._handleAppStateChange);
    Dimensions.addEventListener("change", this._handleDimensionChange);
  }

  _handleNetworkChange = change => {
    this.props.onNetworkChange(change.currentTarget || change);
  };

  _handleDimensionChange = change => {
    this.props.onDimensionChange(change);
  };

  _handleAppStateChange = change => {
    this.props.onStateChange(change);
  };

  render() {
    const { props } = this;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <Text>{props.store.dimensions.window.height}</Text>
        <Text>{props.store.dimensions.window.width}</Text>
        <Text>{props.store.status}</Text>
        <Text>{props.store.network.effectiveType}</Text>
        {props.children}
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

injectReducer(constants.reducer, reducers);

export default connect(
  state => ({
    store: state[constants.reducer]
  }),
  dispatch => ({
    onNetworkChange: value => dispatch(actions.updateNetwork(value)),
    onStateChange: value => dispatch(actions.updateState(value)),
    onDimensionChange: value => dispatch(actions.updateDimension(value))
  })
)(main);
