import React, {Component} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import { text_f16_fw4_black, text_f12_fw4_gray } from '../../style';

export default class TextItem1 extends Component {

  static defaultProps = {
    active: true,
  }

  render() {
    const { text, onPress, style, textStyle, active } = this.props;
    return (
      <TouchableWithoutFeedback style={[styles.touch, style]} onPress={onPress}>
        <Text style={[active ? text_f16_fw4_black : text_f12_fw4_gray, textStyle]}>{text}</Text>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  touch: {
    textAlign: 'center'
  },
});
