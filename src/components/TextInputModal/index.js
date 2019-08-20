import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Modal, Provider, Icon } from '@ant-design/react-native';
import { themesColor, text_f14_fw5_white } from '../../style';

export default class TextInputModal extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({});
  static defaultProps = {
    visible: false
  };

  static propTypes = {
    onClose: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      searchText: null,
    };
  }

  _onClose() {
    this.props.onClose(false);
  }

  _onChangeText = (value) => {
    this.setState({ searchText: value });
  }

  render() {
    const { visible } = this.props;
    const { searchText } = this.state;
    return (
      <Provider>
        <Modal
          visible={visible}
          onClose={() => this._onClose()}
          transparent={false}
        >
          <View style={styles.top}>
            <View style={styles.inputView}>
              <Icon name="search" size="md" color={themesColor.white} />
              <TextInput
                style={styles.textInput}
                placeholder={'搜索歌单内的歌曲'}
                placeholderTextColor={themesColor.white}
                onChangeText={this._onChangeText.bind(this)}
              />
              {
                !!searchText &&
                <Icon name="close" size="md" color={themesColor.white} />
              }
            </View>
            <TouchableWithoutFeedback onPress={() => this._onClose()}>
              <Text style={text_f14_fw5_white}>取消</Text>
            </TouchableWithoutFeedback>
          </View>
          <ScrollView style={styles.result}>
            <Text>123{searchText}123</Text>
          </ScrollView>
        </Modal>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    width: '100%',
    height: 48,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themesColor.black2,
  },
  inputView: {
    flex: 1,
    height: 36,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themesColor.black3,
    borderRadius: 18,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textInput: {
    flex: 1,
    color: themesColor.white
  },
  result: {
    // width: '100%',
    // height: '100%',
  }
});
