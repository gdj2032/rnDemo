import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class FullScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    tabBarVisible: false
  });

  render() {
    return (
      <View>
        <Text>FullScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
