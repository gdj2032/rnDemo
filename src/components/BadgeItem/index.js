import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { themesColor, fonts } from '../../style';

export default class BadgeItem extends Component {

  render() {
    const { text } = this.props;
    return (
      <View style={styles.container}>
        {this.props.children}
        <View style={styles.text}>
          <Text style={styles.badge}>{text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
  },
  text: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: themesColor.white
  },
  badge: {
    color: themesColor.gray,
    fontSize: fonts.xxxx,
  },
});
