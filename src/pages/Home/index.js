import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, RefreshControl, TouchableOpacity} from 'react-native';
import { Flex, Icon } from '@ant-design/react-native';
import { SafeAreaView } from 'react-navigation';
import { themesColor } from '../../style';
import Header from '../../components/Header';
import TextInputButton from '../../components/TextInputButton';
import SwiperItem from '../../components/SwiperItem';
import NavBtnItem from '../../components/NavBtnItem';
import SpacerItem from '../../components/SpacerItem';
import PullScrollView from '../../components/PullScrollView';
import RecommendSongList from './RecommendSongList';
import NewSongDish from './NewSongDish';

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

export default class Home extends Component {
  static navigationOptions = {
    headerRight: (
      <Icon name="align-right" size="lg" color={themesColor.black}/>
    ),
    tabBarIcon: ({ tintColor, focused }) => <Icon name="home" size="md" color={tintColor} focused={focused} />,
    // tabBarOnPress({ navigation, defaultHandler }) {
    // },
  };

  state = {
    navBtn: [
      {
        text: '每日推荐',
        icon_name: 'calendar',
        nav: '',
      },{
        text: '歌单',
        icon_name: 'menu',
        nav: '',
      },{
        text: '排行榜',
        icon_name: 'align-left',
        nav: '',
      },{
        text: '电台',
        icon_name: 'customer-service',
        nav: '',
      },{
        text: '直播',
        icon_name: 'play-square',
        nav: '',
      },
    ],
    songList: '推荐歌单',
    songListSquare: {
      name: '歌单广场',
      nav: ''
    }
  }

  onPullRelease(resolve) {
    //刷新完毕，重置下拉刷新，再次更新刷新和加载更多状态
    console.log('onPullRelease')
    setTimeout(() => {
      resolve();
    }, 3000);
  }

  render() {
    const { navBtn, songList, songListSquare } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Header
          LeftItem={() => <Icon name={'audio'} size="md" color={themesColor.black}/>}
          CenterItem={() => <TextInputButton/>}
          defaultItem={true}
        />
        <PullScrollView
          onPullRelease={this.onPullRelease.bind(this)}
        >
          <SwiperItem />
          <View style={styles.navBtn}>
            {
              navBtn.map(ele => <NavBtnItem key={ele.text} text={ele.text} icon_name={ele.icon_name} />)
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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themesColor.backgroundColor,
    paddingTop: 5,
  },
  navBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
