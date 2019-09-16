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
import { Icon, Toast } from "@ant-design/react-native";
import { connect } from 'react-redux';
import Header from "../../../components/Header";
import { themesColor, text_f14_fw5_white, contain } from "../../../style";
import SearchButton from "./SearchButton";
import TextInputModal from "../../../components/TextInputModal";
import SLMessage from "./SLMessage";
import SLFlatList from "./SLFlatList";
import StickyItem from "./StickyItem";
import StickyHeader from "../../../components/StickyHeader";
import { reduxStore, removeArray } from '../../../utils/utils';
import { UpdateAllMusic, UpdateSongList, UpdateDailyRecommend, UpdateSinging } from '../../../actions/setting';
import EllipsisModal from "../../../components/EllipsisModal";
import AddFolderModal from "../../../components/AddFolderModal";
import MoreSelectModal from "./MoreSelectModal";

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
      isShowSearch: false,//显示搜索框
      isShowEllipsisModal: false,//显示更多modal
      ellipsisModalData: null,//当前选中更多的data
      isShowAddFolderModal: false,//显示收藏到歌单的modal
      isShowMoreSelectModal: false,//显示多选modal
      scrollY: new Animated.Value(0),
      headHeight: -1,
      isSelect: false,//是否多选
      isSelectAll: false,//是否全选
      selected: [],//选中的歌曲
      data: this.props.navigation.state.params.data,//歌单信息
      slData: this.props.navigation.state.params.slData,//歌单列表
      isDailyRecommend: false,//是否为每日推荐
    };
  }

  componentDidMount() {
    if(this.props.navigation.state.params.key === 'daily') {
      this.setState({ isDailyRecommend: true, });
    } else {
      this.setState({ isDailyRecommend: false, });
    }
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
    this.setState({
      isSelect: !this.state.isSelect,
      isSelectAll: false,
      isShowMoreSelectModal: !this.state.isShowMoreSelectModal,
      selected: [],
    });
  };

  _onAddSong = () => {
    alert("_onAddSong");
  };

  _onNext = (item) => {
    const { data, slData } = this.state;
    this._onShowSearch(false)
    this.props.dispatch(UpdateSinging({ singingData: data, currentSong: item}));
    this.props.navigation.navigate('MusicVideoScreen', {data: item, slData: slData});//data-当前播放的歌曲 slData-歌曲列表
  };

  _SelectedItem = (item) => {
    const selected = item.filter(ele => ele.isSelect === true);
    console.log(selected);
    this.setState({ selected });
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
    const { data, slData, isDailyRecommend } = this.state;
    data.list.remove(item.id);
    this._onShowEllipsisModal(false);
    const { dispatch } = reduxStore;
    if(!isDailyRecommend) {
      let list = this.props.local.songList.list;
      list.forEach(ele => {
        if(ele.id === data.id) {
          ele.list.remove(item.id);
        }
      });
      this.setState({
        data: data,
        slData: removeArray(slData, item)
      });
      dispatch(UpdateSongList({list : list}))
    } else {
      let list = this.props.local.dailyRecommend.data;
      let newArr = removeArray(list, item);
      this.setState({
        data: data,
        slData: newArr
      });
      dispatch(UpdateDailyRecommend({info : data, data: newArr}));
    }
    Toast.info('歌曲已删除', 1);
  }
  _onShowAddFolderModal = (val) => {
    this.setState({ isShowAddFolderModal: val });
  }

  _onAddSongList = (item) => {
    const { ellipsisModalData, selected } = this.state;
    if(ellipsisModalData){
      const id = ellipsisModalData.id;
      if(item.list.indexOf(id) !== -1) {
        Toast.info('歌曲已存在', 1);
        return;
      }
      const { dispatch } = reduxStore;
      const list = this.props.local.songList.list;
      list.forEach(ele => {
        if(ele.id === item.id) {
          ele.list.unshift(id);
          // ele.list.sort((a, b) => a - b);
        }
      });
      console.log(list);
      Toast.info('歌曲已添加', 1);
      dispatch(UpdateSongList({list : list}));
    }
    if(selected && selected.length > 0){
      const { selected } = this.state;
      let needAddId = [];
      selected.forEach(ele =>{
        let exitId = item.list.find(e => e === ele.id);
        if(!exitId) {
          needAddId.push(ele.id);
        }
      });
      if(needAddId.length === 0) {
        Toast.info('歌曲已存在', 1);
        return;
      }
      const { dispatch } = reduxStore;
      const list = this.props.local.songList.list;
      list.forEach(ele => {
        if(ele.id === item.id) {
          ele.list = needAddId.concat(ele.list)
        }
      });
      console.log(list);
      Toast.info(`已收藏到歌单`, 1);
      dispatch(UpdateSongList({list : list}));
      this._onSelect();
    }
    this._onShowAddFolderModal(false);
    this.setState({ ellipsisModalData: null, selected: [] });
  }

  _onMoreSelectPlay = () => {
    const { selected } = this.state;
    console.log(selected);
    alert('_onMoreSelectPlay');
  }
  _onMoreSelectAdd = () => {
    const { selected } = this.state;
    console.log(selected);
    this._onShowAddFolderModal(true);
  }
  _onMoreSelectDownload = () => {
    alert('_onMoreSelectDownload')
  }
  _onMoreSelectDelete = () => {
    alert('_onMoreSelectDelete')
  }
  render() {
    const {
      title,
      isShowSearch,
      isShowEllipsisModal,
      isShowAddFolderModal,
      isShowMoreSelectModal,
      ellipsisModalData,
      headHeight,
      scrollY,
      data,
      slData,
      isSelect,
      isSelectAll,
      selected,
      isDailyRecommend,
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
              isDailyRecommend={isDailyRecommend}
              navigation={this.props.navigation}
              onMessage={this._onMessage}
              onShare={this._onShare}
              onDownload={this._onDownload}
              onSelect={this._onSelect}
            >
              {
                !isDailyRecommend &&
                <View style={{ width: "100%", height: 48 }}>
                  {!isShowSearch && (
                    <SearchButton onShowSearch={() => this._onShowSearch(true)} />
                  )}
                </View>
              }
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
              onSelectAll={val =>
                this.setState({ selected: val ? slData : [], isSelectAll: val })
              }
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
            onPlayAll={() => this._onNext(slData[0])}
            SelectedItem={(item) => this._SelectedItem(item)}
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
          selected={selected}
          songList={this.props.local.songList.list}
          visible={isShowAddFolderModal}
          onClose={() => this._onShowAddFolderModal(false)}
          onAddSongList={(val) => this._onAddSongList(val)}
        />
        {
          isShowMoreSelectModal &&
          <MoreSelectModal
            data={selected}
            onPaly={() => this._onMoreSelectPlay()}
            onAdd={() => this._onMoreSelectAdd()}
            onDownload={() => this._onMoreSelectDownload()}
            onDelete={() => this._onMoreSelectDelete()}
          />
        }
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
