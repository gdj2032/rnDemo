import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import PropTypes from "prop-types";
import { themesColor, transform90 } from '../../style';

export default class Header extends Component {

  static propTypes = {
    onDefaultPress: PropTypes.func,
    onEllipsisPress: PropTypes.func,
  };

  render() {
    const {
      LeftItem, CenterItem, RightItem, defaultItem, ellipsisItem,
      style, IconColor,
      onDefaultPress, onEllipsisPress
    } = this.props;
    return (
      <View style={[styles.header, style]}>
        { LeftItem && LeftItem() }
        { CenterItem && CenterItem() }
        { RightItem && RightItem() }
        {
          defaultItem &&
          <TouchableOpacity onPress={onDefaultPress} style={transform90}>
            <Icon name="align-right" size="md" color={IconColor || themesColor.black}/>
          </TouchableOpacity>
        }
        {
          ellipsisItem &&
          <TouchableOpacity onPress={onEllipsisPress} style={[transform90, styles.rightItem]}>
            <Icon name="ellipsis" size="md" color={themesColor.white} />
          </TouchableOpacity>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightItem: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 60,
  },
});
