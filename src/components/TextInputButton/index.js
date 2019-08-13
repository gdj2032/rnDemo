import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { themesColor } from '../../style';
import { scaleSize } from '../../utils';

export default class TextInputButton extends Component {

  render() {
    return (
      <TouchableOpacity style={styles.touch}>
        <Icon name="search" size="md" color={themesColor.gray}/>
        <Text style={styles.text}>请输入歌曲名称</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touch: {
    width: scaleSize(280),
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themesColor.gray1,
    borderRadius: 15,
  },
  text: {
    color: themesColor.gray,
  }
});
