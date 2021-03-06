import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, RefreshControl, TouchableOpacity} from 'react-native';
import { Flex, Icon } from '@ant-design/react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { themesColor, containers } from '../../style';
import Header from '../../components/Header';
import TextInputButton from '../../components/TextInputButton';
import SwiperItem from '../../components/SwiperItem';
import NavBtnItem from '../../components/NavBtnItem';
import SpacerItem from '../../components/SpacerItem';
import PullScrollView from '../../components/PullScrollView';
import RecommendSongList from './RecommendSongList';
import NewSongDish from './NewSongDish';
import { reduxStore, randomArr } from '../../utils/utils';
import { defHomeNavBtn } from '../../utils/defaultData';
import { UpdateDailyRecommend } from '../../actions/setting';
import { gotoMusicVideoScreen } from '../../utils';

const RecommendData = [
  {
    id: 1,
    title: '2019云音乐热歌榜（持续更新）',
    number: 1230450,
    imageText: '热歌榜',
    leftTop: 'global',
    url: '',
    req: require('../../image/bg1.png'),
  },{
    id: 2,
    title: '一周影视热歌。。。发生的的风格',
    number: 223022,
    imageText: '一周影视热歌',
    leftTop: 'smile',
    url: '',
    req: require('../../image/bg2.png'),
  },{
    id: 3,
    title: '氛围乐 | 缠绵悱恻 恢弘壮阔',
    number: 564213,
    imageText: null,
    leftTop: null,
    url: '',
    req: require('../../image/bg3.png'),
  },{
    id: 4,
    title: '700首经典流行老哥【80/90/00后KTV金曲】',
    number: 123056214,
    imageText: null,
    leftTop: null,
    url: '',
    req: require('../../image/bg4.png'),
  },{
    id: 5,
    title: '精选 | 网络热歌分享',
    number: 65842510,
    imageText: null,
    leftTop: null,
    url: '',
    req: require('../../image/bg5.png'),
  },{
    id: 6,
    title: '怀旧 | 先下细数90后的回忆杀',
    number: 321056,
    imageText: null,
    leftTop: null,
    url: '',
    req: require('../../image/bg6.png'),
  },
]

@connect(state => ({
  local: state.local,
}))
export default class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => <Icon name="home" size="md" color={tintColor} focused={focused} />,
  };

  state = {
    navBtn: defHomeNavBtn,
    songList: '推荐歌单',
    songListSquare: {
      name: '歌单广场',
      nav: ''
    }
  }

  componentDidMount() {
    reduxStore.dispatch = this.props.dispatch;
    reduxStore.navigation = this.props.navigation;
    this.setDailyRecommend();
  }

  setDailyRecommend() {
    const { dailyRecommend, allMusic } = this.props.local;
    const date = new Date()
    const nowDay = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const allMusicData = allMusic.data;
    if(dailyRecommend.time !== nowDay) {
      let ranArr = randomArr(allMusicData.length, 15);
      ranArr = ranArr.sort((a, b) => a - b)
      let list = [];
      ranArr.forEach(ele => {
        list.push(allMusicData[ele]);
      })
      console.log(list);
      dailyRecommend.info.list = ranArr;
      this.props.dispatch(UpdateDailyRecommend({data: list, time: nowDay, info: dailyRecommend.info}))
    }
  }

  onPullRelease(resolve) {
    //刷新完毕，重置下拉刷新，再次更新刷新和加载更多状态
    console.log('onPullRelease')
    setTimeout(() => {
      resolve();
    }, 3000);
  }

  _onSearch() {
    alert('wait')
  }

  _onDefaultPress = () => {
    const { local } = this.props;
    gotoMusicVideoScreen(local);
  }

  _onNavPress(ele) {
    if(ele.title === '每日推荐') {
      const { dailyRecommend } = this.props.local;
      this.props.navigation.navigate('SongListScreen', { data: dailyRecommend.info, slData: dailyRecommend.data, key: 'daily' })
    } else {
      alert(ele.title)
    }
  }

  render() {
    const { navBtn, songList, songListSquare } = this.state;
    return (
      <View style={containers}>
        <Header
          LeftItem={() => <Icon name={'audio'} size="md" color={themesColor.black}/>}
          CenterItem={() => <TextInputButton onPress={this._onSearch.bind(this)} />}
          defaultItem={true}
          onDefaultPress={() => this._onDefaultPress()}
        />
        <PullScrollView
          onPullRelease={this.onPullRelease.bind(this)}
        >
          <SwiperItem />
          <View style={styles.navBtn}>
            {
              navBtn.map(ele => <NavBtnItem key={ele.title} text={ele.title} icon_name={ele.icon_name} onPress={() => this._onNavPress(ele)} />)
            }
          </View>
          <SpacerItem />
          <RecommendSongList
            songList={songList}
            songListSquare={songListSquare}
            RecommendData={RecommendData}
          />
          <NewSongDish />
        </PullScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
});
