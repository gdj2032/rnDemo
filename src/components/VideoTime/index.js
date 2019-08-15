import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { text_f12_white, themesColor } from '../../style';

export default class VideoTime extends Component {

  render() {
    const { time } = this.props;
    return (
      <View style={styles.container}>
        <Icon name="align-left" size="xxs" color={themesColor.white} style={styles.trans} />
        <Text style={text_f12_white}>{time}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    flexDirection: 'row',
  },
  trans: {
    transform: [{rotate: '-90deg'}]
  }
});
