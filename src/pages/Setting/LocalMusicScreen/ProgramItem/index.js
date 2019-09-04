import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from "prop-types";
import { text_f12_gray } from '../../../../style';

export default class ProgramItem extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '节目'
  });
  static defaultProps = {
    visible: false,
  };

  static propTypes = {
    onClose: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <View style={styles.containers}>
        <Text style={text_f12_gray}>下载的节目会出现在这里</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containers: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
