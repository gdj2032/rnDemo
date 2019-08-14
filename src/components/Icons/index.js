import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

export default class Icons extends Component {
  render() {
    const { name, type } = this.props;
    return (
      <Icon
        name={name}
        type={type}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({});
