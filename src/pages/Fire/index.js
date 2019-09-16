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
import { reduxStore } from '../../utils/utils';
import { UpdateSongList } from '../../actions/setting';
import { createSongList } from '../../utils/realm';
import { gotoMusicVideoScreen } from '../../utils';

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

  componentWillReceiveProps(nextProps) {
    this.setState({ songList: nextProps.songList })
  }

  _onComplete = (value) => {
    console.log(value)
    if(!value) {
      Toast.info('请输入歌单标题', 1);
      return;
    }
    let data = this.props.local.songList.list;
    console.log(data)
    let isExit = data.find(ele => ele.title === value);
    if(isExit) {
      Toast.info('歌单标题已存在', 1);
      return;
    }
    this.setState({ isShowAddModal: false });
    const createData = {...createSongList};
    createData.title = value;
    createData.id = new Date().getTime();
    console.log(createData)
    const { dispatch } = reduxStore;
    data.push(createData)
    console.log(data)
    dispatch(UpdateSongList({list: data}));
  }

  _onDelete = (value) => {
    const { dispatch } = reduxStore;
    let data = this.props.local.songList.list;
    let spIndex = 0;
    data.forEach((ele, index) => {
      if(ele.id === value.id) {
        spIndex = index;
      }
    });
    data.splice(spIndex, 1);
    dispatch(UpdateSongList({list: data}));
  }

  _onDefaultPress = () => {
    const { local } = this.props;
    gotoMusicVideoScreen(local);
  }

  render() {
    const { songList, isShowAddModal } = this.state;
    return (
      <View style={containers}>
        <Header
          LeftItem={() => <Icon name="cloud" size="md" color={themesColor.black} />}
          CenterItem={() => <TextItem1 text={'我的音乐'} />}
          defaultItem={true}
          onDefaultPress={() => this._onDefaultPress()}
        />
        <ScrollView>
          <MyMusicScroll data={defFireScroll} />
          <SpacerItem />
          <FireNavItem data={defFireNav} navigation={this.props.navigation} />
          <SpacerItem style={styles.spacer} />
          <MyCreatePanel
            data={songList}
            allMusicData={this.props.local.allMusic.data}
            navigation={this.props.navigation}
            onShowAddModal={() => this.setState({ isShowAddModal: true })}
            onDelete={(data) => this._onDelete(data)}
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
