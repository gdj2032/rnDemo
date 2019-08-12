import React, {Component} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback} from 'react-native';
import { themesColor } from '../../style';

export default class TextItem1 extends Component {

  static defaultProps = {
    active: true,
  }

  render() {
    const { text, onPress, style, textStyle, active } = this.props;
    return (
      <TouchableNativeFeedback style={[styles.touch, style]} onPress={onPress}>
        <Text style={[active ? styles.text1 : styles.text2, textStyle]}>{text}</Text>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  touch: {
  },
  text1: {
    fontSize: 18,
    fontWeight: '400',
    color: themesColor.black
  },
  text2: {
    fontSize: 14,
    fontWeight: '400',
    color: themesColor.gray
  },
});
