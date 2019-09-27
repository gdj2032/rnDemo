import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PropTypes from "prop-types";
import { Icon, Toast } from "@ant-design/react-native";
import Header from '../../../components/Header';
import { themesColor, text_f16_fw4_black,  } from '../../../style';

const TITLE = '我的收藏'

export default class MyCollectionScreen extends Component {
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

  goBack = () => this.props.navigation.goBack(null);

  render() {
    return (
      <View>
        <Header
          style={{ backgroundColor: themesColor.white }}
          LeftItem={() => (
            <TouchableOpacity onPress={this.goBack}>
              <Icon name="left" size="md" color={themesColor.black} />
            </TouchableOpacity>
          )}
          CenterItem={() => <Text style={text_f16_fw4_black}>{TITLE}</Text>}
          defaultItem={true}
        />
        <Text>MyCollectionScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
