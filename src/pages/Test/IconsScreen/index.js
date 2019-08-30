import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from "prop-types";
import { containers } from '../../../style';
import Icons from "../../../components/Icons";

export default class IconsScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
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
      <View style={containers}>
        <Icons name="sc-telegram" type="evilicon" color="#517fa4" size={40} />
        <Icons name="music" type="font-awesome" color="#517fa4" size={40} />
        <Icons name="external-link" type="evilicon" color="#517fa4" size={40} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
