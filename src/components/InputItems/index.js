import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import { themesColor } from '../../style';
import { scaleSize } from '../../utils';

export default class InputItems extends Component {

  state = {
    value: '好听的歌曲',
  }
  render() {
    const { value } = this.state;
    return (
      <TextInput
        style={styles.input}
        placeholder={'好听的歌曲'}
        onChangeText={(value) => this.setState({value})}
        value={value}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: scaleSize(240),
    height: 30,
    backgroundColor: themesColor.gray1,
    borderRadius: 15,
  }
});
