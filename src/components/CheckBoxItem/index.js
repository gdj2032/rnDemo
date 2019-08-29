import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import PropTypes from "prop-types";
import { Icon } from '@ant-design/react-native';
import { themesColor } from '../../style';

export default class CheckBoxItem extends Component {
  static defaultProps = {
    checked: false,
  };

  static propTypes = {
    onChange: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { checked, onChange } = this.props;
    return (
      <TouchableWithoutFeedback onPress={onChange}>
        <View style={styles.icon}>
          <Icon name="check-circle" size="md" color={checked ? themesColor.red : themesColor.gray} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
