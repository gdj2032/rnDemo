import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { themesColor } from '../../style';

export default class SpacerItem extends Component {

  render() {
    const { style } = this.props;
    return (
      <View style={[styles.spacer, style]}></View>
    );
  }
}

const styles = StyleSheet.create({
  spacer: {
    width: '100%',
    height: 1,
    backgroundColor: themesColor.gray1,
  }
});
