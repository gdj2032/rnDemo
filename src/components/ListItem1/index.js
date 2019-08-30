import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { Icon } from "@ant-design/react-native";
import PropTypes from "prop-types";
import { themesColor, text_f14_fw4_black } from '../../style';
import Icons from '../Icons';

export default class ListItem1 extends Component {
  static defaultProps = {
    visible: false,
  };

  static propTypes = {
    onPress: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    const { name, icon, onPress, icons, type } = this.props;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.row}>
          <View style={styles.icon}>
            {
              icon && <Icon name={icon} size="lg" color={themesColor.black} />
            }
            {
              icons && type && <Icons name={icons} type={type} color={themesColor.black} size={54} />
            }
          </View>
          <View style={styles.text}>
            <Text style={text_f14_fw4_black}>{name}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    width: '100%',
    height: 54,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    width: 54,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: themesColor.gray1
  },
});
