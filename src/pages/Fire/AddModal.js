import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Icon, Modal, Provider } from "@ant-design/react-native";
import PropTypes from "prop-types";
import { text_f16_fw4_black, text_f16_fw4_gray } from '../../style';

export default class AddModal extends Component {
  static defaultProps = {
    visible: false,
  };

  static propTypes = {
    onClose: PropTypes.func,
    onComplete: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  _onClose = () => {
    this.props.onClose && this.props.onClose(false)
  }

  _onChangeText = (value) => {
    this.setState({ value });
  }

  _onComplete = (value) => {
    this.props.onComplete(value);
    this.setState({ value: null });
  }

  render() {
    const { visible } = this.props;
    const { value } = this.state;
    return (
      <Provider>
        <Modal
          style={styles.modal}
          visible={visible}
          animationType="slide"
          transparent={true}
          onClose={() => this._onClose()}
          popup
          maskClosable
        >
          <View style={styles.top}>
            <TouchableWithoutFeedback onPress={() => this._onClose()}>
              <Text style={text_f16_fw4_black}>取消</Text>
            </TouchableWithoutFeedback>
            <Text>新建歌单</Text>
            <TouchableWithoutFeedback onPress={() => this._onComplete(value)}>
              <Text style={value ? text_f16_fw4_black : text_f16_fw4_gray}>完成</Text>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.input}>
            <TextInput
              style={{flex: 1, padding: 0}}
              placeholder={'歌单标题'}
              autoFocus={true}
              onChangeText={this._onChangeText}
              value={value}
            />
          </View>
        </Modal>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    height: 120,
    borderRadius: 20,
    marginTop: 80,
  },
  top: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    width: '100%',
    height: 30,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
  },
});
