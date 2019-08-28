import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { Icon, Toast } from '@ant-design/react-native';
import { themesColor, containers } from '../../style';
import Header from '../../components/Header';
import TextItem1 from '../../components/TextItem1';
import MyMusicScroll from './MyMusicScroll';
import SpacerItem from '../../components/SpacerItem';
import FireNavItem from './FireNavItem';
import MyCreatePanel from './MyCreatePanel';
import { defFireScroll, defFireNav } from '../../utils/defaultData';
import AddModal from "./AddModal";
import { createSongList } from '../../utils/realm';
import { reduxStore } from '../../utils/utils';
import { UpdateSongList } from '../../actions/setting';


@connect(state => ({
  local: state.local,
}))
export default class Fire extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => <Icon name="fire" size="md" color={tintColor} focused={focused} />
  };

  state = {
    songList: this.props.local.songList,
    isShowAddModal: false,
  }

  _onComplete = (value) => {
    if(!value) {
      Toast.info('请输入歌单标题', 1);
      return;
    }
    this.setState({ isShowAddModal: false });
    let createData = createSongList;
    createData.title = value;
    console.log(createData)
    const { dispatch } = reduxStore;
    let data = this.state.songList.list;
    data.push(createData)
    console.log(data)
    // dispatch(UpdateSongList({list: data}));
  }

  render() {
    const { songList, isShowAddModal } = this.state;
    return (
      <View style={containers}>
        <Header
          LeftItem={() => <Icon name="cloud" size="md" color={themesColor.black} />}
          CenterItem={() => <TextItem1 text={'我的音乐'} />}
          defaultItem={true}
        />
        <ScrollView>
          <MyMusicScroll data={defFireScroll} />
          <SpacerItem />
          <FireNavItem data={defFireNav} />
          <SpacerItem style={styles.spacer} />
          <MyCreatePanel
            data={songList}
            navigation={this.props.navigation}
            onShowAddModal={() => this.setState({ isShowAddModal: true })}
            />
        </ScrollView>
        <AddModal
          visible={isShowAddModal}
          onClose={(bool) => this.setState({ isShowAddModal: bool })}
          onComplete={(value) => this._onComplete(value)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spacer: {
    marginTop: 10,
    backgroundColor: themesColor.gray2,
  }
});
