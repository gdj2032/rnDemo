import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { themesColor } from '../../style';

export default class SpacerItem extends Component {

  render() {
    return (
      <View style={styles.spacer}/>
    );
  }
}

const styles = StyleSheet.create({
  spacer: {
    width: '100%',
    height: 10,
    borderBottomWidth: 1,
    borderBottomColor: themesColor.gray1,
    marginBottom: 10,
  }
});
