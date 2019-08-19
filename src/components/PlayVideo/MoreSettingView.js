import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { Modal, Provider } from '@ant-design/react-native';

export default class MoreSettingView extends Component {

  static defaultProps = {
    onClose: () => {},
  }
  _onClose() {
    this.props.onClose(false);
  }
  render() {
    const { isShowMore } = this.props;
    return (
      <View style={styles.contain}>
        <Provider>
          <Modal
            visible={isShowMore}
            onClose={() => this._onClose()}
            transparent={false}
          >
            <View style={styles.content}>
              <Text style={{color: '#fff'}}>收藏</Text>
              <Text style={{color: '#fff'}}>倍速</Text>
              <Text style={{color: '#fff'}}>音量</Text>
            </View>
          </Modal>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  content: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  }
});
