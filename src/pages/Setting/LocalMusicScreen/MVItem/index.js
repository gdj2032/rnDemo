import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from "prop-types";
import { text_f12_gray } from '../../../../style';


export default class MVItem extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'MV'
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
        <Text style={text_f12_gray}>下载的MV会出现在这里</Text>
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
