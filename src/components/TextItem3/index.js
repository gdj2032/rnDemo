import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import Icons from '../../components/Icons';
import { themesColor } from '../../style';
import { setSpText, scaleSize } from '../../utils';

export default class TextItem3 extends Component {

  render() {
    const { data, onPress } = this.props;
    const { number, title, isAntd, icon, type } = data;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.icons}>
          {
            isAntd ?
            <Icon name={icon} size="lg" color={themesColor.black} />
            :
            <Icons name={icon} type={type} color={themesColor.black} size={30} />
          }
        </View>
        <View style={styles.contain}>
          <Text style={styles.text1}>{title}</Text>
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
    height: 60,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contain: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: themesColor.gray1,
  },
  cont: {
    flexDirection: 'row',
    marginRight: 10,
  },
  text1: {
    fontSize: setSpText(16),
    fontWeight: '400',
    color: themesColor.black,
  }
});
