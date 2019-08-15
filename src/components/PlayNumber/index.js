import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { themesColor } from '../../style';
import { setSpText } from '../../utils';

export default class PlayNumber extends Component {

  render() {
    const { num, style, numStyle } = this.props;
    return (
      <View style={[styles.play, style]}>
        <Icon name="caret-right" size="xxs" color={themesColor.white} />
        <Text style={[styles.rt_num, numStyle]}>{num}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  play: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 20,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rt_num: {
    color: themesColor.white,
    fontSize: setSpText(12),
  },
});
