import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import SongListItem from "../../components/SongListItem";
import { container } from "../../style";
import CreateHeader from "../../components/CreateHeader";
import { reduxStore } from "../../utils/utils";
import { UpdateSongList } from '../../actions/setting';

export default class MyCreatePanel extends Component {
  state = {
    isShowList: this.props.data.isShowList,
    data: this.props.data
  };
  _isShowHeader() {}

  _onShowPanel() {
    const { dispatch } = reduxStore;
    dispatch(UpdateSongList({isShowList: !this.state.isShowList}))
    this.setState({ isShowList: !this.state.isShowList });
  }

  _onAdd() {
    alert('add')
  }
  _onMore() {
    alert('more')
  }

  _onSongList() {
    this.props.navigation.navigate('SongListScreen', { data: this.state.data })
  }
  render() {
    const { isShowList, data } = this.state;
    return (
      <View style={[container, styles.container]}>
        <CreateHeader
          data={data}
          onPress={this._isShowHeader.bind(this)}
          visible={isShowList}
          onShowPanel={this._onShowPanel.bind(this)}
          onAdd={this._onAdd.bind(this)}
          onMore={this._onMore.bind(this)}
        />
        {
          isShowList &&
          data.list.length > 0 &&
          data.list.map(ele => <SongListItem data={ele} key={ele.id} onPress={this._onSongList.bind(this)} />)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  }
});
