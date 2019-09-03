import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, FlatList} from 'react-native';
import PropTypes from "prop-types";
import { Icon, Modal, Provider } from "@ant-design/react-native";
import { text_f10_gray, themesColor, text_f16_fw4_black } from '../../style';
import SongListItem2 from '../SongListItem2';

export default class AddFolderModal extends Component {
  static defaultProps = {
    visible: false,
    height: 300,
  };

  static propTypes = {
    onClose: PropTypes.func,
    onAddSongList: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  _onAddSongList = (item) => {
    this.props.onAddSongList && this.props.onAddSongList(item)
  }

  render() {
    const { visible, data, songList, onClose, height } = this.props;
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
          <View style={styles.flatList}>
            <FlatList
              data={songList}
              renderItem={({item}) =>
                <SongListItem2
                  data={item}
                  key={item.title}
                  onPress={() => this._onAddSongList(item)}
                />
              }
              keyExtractor={(item) => item.title}
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
    height: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  m_top: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
  flatList: {
    height: 240,
  },
});
