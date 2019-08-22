import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from "prop-types";

export default class MusicVideoScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <View>
        <Text>navigationOptions</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
