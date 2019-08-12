import React, {Component} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback} from 'react-native';
import { themesColor } from '../../style';

export default class TextItem1 extends Component {

  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableNativeFeedback style={styles.rec} onPress={onPress}>
        <Text style={styles.rec_text}>{text}</Text>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  rec: {
  },
  rec_text: {
    fontSize: 18,
    fontWeight: '400',
    color: themesColor.black
  },
});
