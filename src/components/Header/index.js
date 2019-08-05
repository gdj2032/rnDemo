import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { screenTime } from '../../utils';

export default class Header extends Component {

  render() {
    return (
      <View style={styles.screen}>
        <Text>Header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
