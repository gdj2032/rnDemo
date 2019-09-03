import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView, Image} from 'react-native';
import { Icon, Modal, Provider } from "@ant-design/react-native";
import PropTypes from "prop-types";
import { text_f16_fw4_black, text_f10_gray, themesColor } from '../../style';
import ListItem1 from '../ListItem1';

export default class EllipsisModal extends Component {

  static defaultProps = {
    visible: false,
    height: 500,
  };

  static propTypes = {
    onClose: PropTypes.func,
    onNext: PropTypes.func,
    onAddFolder: PropTypes.func,
    onDownLoad: PropTypes.func,
    onComment: PropTypes.func,
    onShare: PropTypes.func,
    onSonger: PropTypes.func,
    onDelete: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  _onNext = (data) => {
    this.props.onNext && this.props.onNext(data);
  }

  _onAddFolder = (data) => {
    this.props.onAddFolder && this.props.onAddFolder(data);
  }

  _onDownLoad = (data) => {
    this.props.onDownLoad && this.props.onDownLoad(data);
  }

  _onComment = (data) => {
    this.props.onComment && this.props.onComment(data);
  }

  _onShare = (data) => {
    this.props.onShare && this.props.onShare(data);
  }

  _onSonger = (data) => {
    this.props.onSonger && this.props.onSonger(data);
  }

  _onDelete = (data) => {
    this.props.onDelete && this.props.onDelete(data);
  }

  render() {
    const { visible, height, onClose, data } = this.props;
    return (
      <Provider>
        <Modal
          visible={visible}
          popup
          animationType="slide-up"
          onClose={onClose}
          maskClosable={true}
          style={[styles.modal, {height: height}]}
        >
          {
            data &&
            <View style={styles.m_top}>
              <Image style={styles.m_top_image} source={require('../../image/song.png')} />
              <View style={styles.m_top_text}>
                <Text style={text_f16_fw4_black}>{data.name}</Text>
                <Text style={text_f10_gray}>{data.editor}</Text>
              </View>
            </View>
          }
          <ScrollView>
            <ListItem1
              name={'下一首播放'}
              icon={'play-circle'}
              onPress={() => this._onNext(data)}
            />
            <ListItem1
              name={'收藏到歌单'}
              icon={'folder-add'}
              onPress={() => this._onAddFolder(data)}
            />
            <ListItem1
              name={'下载'}
              icon={'download'}
              onPress={() => this._onDownLoad(data)}
            />
            <ListItem1
              name={'评论'}
              icon={'message'}
              onPress={() => this._onComment(data)}
            />
            <ListItem1
              name={'分享'}
              icons={'external-link'}
              type={'evilicon'}
              onPress={() => this._onShare(data)}
            />
            {
              data &&
              <ListItem1
                name={`歌手: ${data.editor}`}
                icon={'user'}
                onPress={() => this._onSonger(data)}
              />
            }
            <ListItem1
              name={'删除'}
              icon={'delete'}
              onPress={() => this._onDelete(data)}
            />
          </ScrollView>
        </Modal>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    height: 500,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  m_top: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: themesColor.gray1
  },
  m_top_image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  m_top_text: {
    marginLeft: 10,
  },
});
