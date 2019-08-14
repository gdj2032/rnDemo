import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import SongListItem from "../../components/SongListItem";
import { containers } from "../../style";
import CreateHeader from "../../components/CreateHeader";

const def_data = {
  text: "我创建的歌单",
  list: [
    {
      id: 1,
      title: "我喜欢的音乐",
      isLove: true,
      love: "心动模式",
      all: 434,
      download: 218,
      isSing: false
    },
    {
      id: 2,
      title: "最近听的",
      isLove: false,
      love: "非心动模式",
      all: 100,
      download: 30,
      isSing: true
    },
    {
      id: 3,
      title: "周杰伦",
      isLove: false,
      love: "非心动模式",
      all: 200,
      download: 0,
      isSing: false
    },
    {
      id: 4,
      title: "林俊杰",
      isLove: false,
      love: "非心动模式",
      all: 227,
      download: 0,
      isSing: false
    }
  ]
};

export default class MyCreatePanel extends Component {
  state = {
    visible: false,
    data: def_data
  };
  _isShowHeader() {}

  _onShowPanel() {
    this.setState({ visible: !this.state.visible });
  }

  _onAdd() {
    alert('add')
  }
  _onMore() {
    alert('more')
  }
  render() {
    const { visible, data } = this.state;
    return (
      <View style={containers}>
        <CreateHeader
          data={data}
          onPress={this._isShowHeader.bind(this)}
          visible={visible}
          onShowPanel={this._onShowPanel.bind(this)}
          onAdd={this._onAdd.bind(this)}
          onMore={this._onMore.bind(this)}
        />
        {visible && <SongListItem data={data} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
