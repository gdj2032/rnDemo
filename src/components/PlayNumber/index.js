import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { themesColor, text_f10_white } from '../../style';
import { setSpText } from '../../utils';

export default class PlayNumber extends Component {

  render() {
    const { num, style, numStyle } = this.props;
    return (
      <View style={[styles.play, style]}>
        <Icon name="caret-right" size="xxs" color={themesColor.white} />
        <Text style={[text_f10_white, numStyle]}>{num}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  play: {
    position: 'absolute',
    top: 0,
    right: 2,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
