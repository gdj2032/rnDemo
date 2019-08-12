import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { themesColor } from '../../style';

export default class TextItem2 extends Component {

  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.item} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
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
  text: {
    fontSize: 12,
    color: themesColor.black
  },
});
