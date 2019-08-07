import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { themesColor } from '../../style';
export default class NavBtnItem extends Component {

  render() {
    const { text, icon_name } = this.props;
    return (
      <TouchableOpacity style={styles.nav}>
        <View style={styles.calendar}>
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
    width: 56,
    height: 72,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  calendar: {
    width: 48,
    height: 48,
    backgroundColor: themesColor.red,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: themesColor.black,
  }
});
