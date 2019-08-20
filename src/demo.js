import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from "prop-types";

export default class demo extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
  });
  static defaultProps = {
    visible: false,
  };

  static propTypes = {
    onClose: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <View>
        <Text>demo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
