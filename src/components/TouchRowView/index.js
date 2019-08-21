import React, { Component } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import PropTypes from "prop-types";

export default class TouchRowView extends Component {
  render() {
    const { style, children, onPress } = this.props;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.row, style]}>{children}</View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center"
  }
});
