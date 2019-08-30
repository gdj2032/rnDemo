import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated
} from "react-native";
import { Icon } from "@ant-design/react-native";
import { connect } from 'react-redux';
import Header from "../../../components/Header";
import { themesColor, text_f14_fw5_white, contain } from "../../../style";
import SearchButton from "./SearchButton";
import TextInputModal from "../../../components/TextInputModal";
import SLMessage from "./SLMessage";
import SLFlatList from "./SLFlatList";
import StickyItem from "./StickyItem";
import StickyHeader from "../../../components/StickyHeader";
import { reduxStore } from '../../../utils/utils';
import { UpdateAllMusic } from '../../../actions/setting';
import EllipsisModal from "../../../components/EllipsisModal";
import AddFolderModal from "../../../components/AddFolderModal";

const defTitle = "歌单";

const defVip = ["含7首vip专属歌曲", "首月vip仅5元"];

@connect(state => ({
  local: state.local,
}))
export default class SongListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: defTitle,
      isShowSearch: false,
      isShowEllipsisModal: false,
      ellipsisModalData: null,
      isShowAddFolderModal: false,
      scrollY: new Animated.Value(0),
      headHeight: -1,
      isSelect: false,
      isSelectAll: false,
      data: this.props.navigation.state.params.data,
      slData: this.props.navigation.state.params.slData
    };
  }

  _onDefaultPress = () => {
    alert("_onDefaultPress");
  };
  _onEllipsisPress = () => {
    alert("_onEllipsisPress");
  };

  goBack = () => this.props.navigation.goBack(null);

  _onShowSearch = bool => {
    this.setState({ isShowSearch: bool });
  };

  _onMessage = () => {
    alert("_onMessage");
  };
  _onShare = () => {
    alert("_onShare");
  };
  _onDownload = () => {
    alert("_onDownload");
  };
  _onSelect = () => {
    this.setState({ isSelect: !this.state.isSelect, isSelectAll: false });
  };

  _onAddSong = () => {
    alert("_onAddSong");
  };

  _onNext = (item) => {
    this._onShowSearch(false)
    this.props.navigation.navigate('MusicVideoScreen', {data: item, slData: this.state.slData});
  };

  _onShowEllipsisModal = (val, item) => {
    this.setState({ isShowEllipsisModal: val });
    if(item) {
      this.setState({ ellipsisModalData: item });
    }
  };

  _onModalNext = (item) => {
    this._onShowEllipsisModal(false);
    const { slData } = this.state;
    let nextData = null;
    slData.find((ele, index) => {
      if(ele.id === item.id) {
        let i = index + 1;
        if(index === slData.length - 1) {
          i = 0
        }
        nextData = slData[i];
      }
    })
    this.props.navigation.navigate('MusicVideoScreen', {data: nextData, slData: slData});
  };

  _onModalAddFolder = (item) => {
    this._onShowEllipsisModal(false);
    this._onShowAddFolderModal(true);
  }
  _onModalDownLoad = (item) => {
    alert('_onModalDownLoad')
  }
  _onModalComment = (item) => {
    alert('_onModalComment')
  }
  _onModalShare = (item) => {
    alert('_onModalShare')
  }
  _onModalSonger = (item) => {
    alert('_onModalSonger')
  }
  _onModalDelete = (item) => {
    alert('_onModalDelete')
  }
  _onShowAddFolderModal = (val) => {
    this.setState({ isShowAddFolderModal: val });
  }

  _onSongList = (val) => {
    alert('_onSongList')
  }

  render() {
    const {
      title,
      isShowSearch,
      isShowEllipsisModal,
      isShowAddFolderModal,
      ellipsisModalData,
      headHeight,
      scrollY,
      data,
      slData,
      isSelect,
      isSelectAll
    } = this.state;
    return (
      <View style={styles.containers}>
        <Header
          style={{ backgroundColor: themesColor.black3 }}
          LeftItem={() => (
            <TouchableOpacity onPress={this.goBack}>
              <Icon name="left" size="md" color={themesColor.white} />
            </TouchableOpacity>
          )}
          CenterItem={() => <Text style={text_f14_fw5_white}>{title}</Text>}
          defaultItem={true}
          ellipsisItem={true}
          IconColor={themesColor.white}
          onDefaultPress={this._onDefaultPress.bind(this)}
          onEllipsisPress={this._onEllipsisPress.bind(this)}
        />
        <Animated.ScrollView
          onScroll={
            Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { y: this.state.scrollY } } // 记录滑动距离
                }
              ],
              { useNativeDriver: true }
            ) // 使用原生动画驱动
          }
          scrollEventThrottle={1}
        >
          <View
            onLayout={e => {
              let { height } = e.nativeEvent.layout;
              this.setState({ headHeight: height }); // 给头部高度赋值
            }}
          >
            <SLMessage
              data={data}
              navigation={this.props.navigation}
              onMessage={this._onMessage}
              onShare={this._onShare}
              onDownload={this._onDownload}
              onSelect={this._onSelect}
            >
              <View style={{ width: "100%", height: 48 }}>
                {!isShowSearch && (
                  <SearchButton onShowSearch={() => this._onShowSearch(true)} />
                )}
              </View>
            </SLMessage>
          </View>

          <StickyHeader
            stickyHeaderY={headHeight} // 把头部高度传入
            stickyScrollY={scrollY} // 把滑动距离传入
          >
            <StickyItem
              defVip={defVip}
              isSelect={isSelect}
              onCarryOut={val => this.setState({ isSelect: val })}
              onSelectAll={val => this.setState({ isSelectAll: val })}
            />
          </StickyHeader>
          <SLFlatList
            data={data}
            slData={slData}
            isSelect={isSelect}
            isSelectAll={isSelectAll}
            navigation={this.props.navigation}
            onAddSong={this._onAddSong}
            onNext={(val) => this._onNext(val)}
            onEllipsis={(item) => this._onShowEllipsisModal(true, item)}
          />
        </Animated.ScrollView>
        <TextInputModal
          data={data}
          slData={slData}
          visible={isShowSearch}
          navigation={this.props.navigation}
          onClose={bool => this._onShowSearch(bool)}
          onNext={(val) => this._onNext(val)}
        />
        <EllipsisModal
          data={ellipsisModalData}
          visible={isShowEllipsisModal}
          onClose={() => this._onShowEllipsisModal(false)}
          onNext={(val) => this._onModalNext(val)}
          onAddFolder={(val) => this._onModalAddFolder(val)}
          onDownLoad={(val) => this._onModalDownLoad(val)}
          onComment={(val) => this._onModalComment(val)}
          onShare={(val) => this._onModalShare(val)}
          onSonger={(val) => this._onModalSonger(val)}
          onDelete={(val) => this._onModalDelete(val)}
        />
        <AddFolderModal
          data={ellipsisModalData}
          songList={this.props.local.songList.list}
          visible={isShowAddFolderModal}
          onClose={() => this._onShowAddFolderModal(false)}
          onSongList={(val) => this._onSongList(val)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: themesColor.white
  }
});
