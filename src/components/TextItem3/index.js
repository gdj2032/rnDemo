import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import Icons from '../../components/Icons';
import { themesColor, containers } from '../../style';
import { setSpText, scaleSize } from '../../utils';

export default class TextItem3 extends Component {

  render() {
    const { text, number, onPress } = this.props;
    return (
      <TouchableOpacity style={[styles.container, containers]} onPress={onPress}>
        <View style={styles.icons}>
          <Icons name='music' type='font-awesome' color={themesColor.black} size={30} />
        </View>
        <View style={styles.contain}>
          <Text style={styles.text1}>{text}</Text>
          <View style={styles.cont}>
            <Text>{number}</Text>
            <Icon name="right" size="sm" color={themesColor.gray} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    width: scaleSize(80),
    justifyContent: 'center',
  },
  contain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: themesColor.gray1,
  },
  cont: {
    flexDirection: 'row',
  },
  text1: {
    fontSize: setSpText(18),
    fontWeight: '500',
    color: themesColor.black,
  }
});
