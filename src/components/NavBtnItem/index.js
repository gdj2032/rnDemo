import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { themesColor } from '../../style';
import { setSpText, scaleSize } from '../../utils';
export default class NavBtnItem extends Component {

  render() {
    const { text, icon_name, style, iconStyle, onPress } = this.props;
    return (
      <TouchableOpacity style={[styles.nav, style]} onPress={onPress}>
        <View style={[styles.calendar, iconStyle]}>
          <Icon name={icon_name} size="md" style={{color: themesColor.white}}/>
        </View>
        <View>
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    width: scaleSize(56),
    height: scaleSize(72),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  calendar: {
    width: scaleSize(48),
    height: scaleSize(48),
    backgroundColor: themesColor.red,
    borderRadius: scaleSize(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: setSpText(12),
    color: themesColor.black,
  }
});
