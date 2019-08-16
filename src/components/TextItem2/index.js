import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { themesColor, text_f12_black } from '../../style';

export default class TextItem2 extends Component {

  render() {
    const { text, onPress, style, textStyle } = this.props;
    return (
      <TouchableOpacity style={[styles.item, style]} onPress={onPress}>
        <Text style={[text_f12_black, textStyle]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: themesColor.gray1,
  },
});
