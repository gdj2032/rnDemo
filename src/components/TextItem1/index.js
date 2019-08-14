import React, {Component} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import { themesColor } from '../../style';
import { setSpText } from '../../utils';

export default class TextItem1 extends Component {

  static defaultProps = {
    active: true,
  }

  render() {
    const { text, onPress, style, textStyle, active } = this.props;
    return (
      <TouchableWithoutFeedback style={[styles.touch, style]} onPress={onPress}>
        <Text style={[active ? styles.text1 : styles.text2, textStyle]}>{text}</Text>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  touch: {
    textAlign: 'center'
  },
  text1: {
    fontSize: setSpText(18),
    fontWeight: '400',
    color: themesColor.black
  },
  text2: {
    fontSize: setSpText(14),
    fontWeight: '400',
    color: themesColor.gray
  },
});
