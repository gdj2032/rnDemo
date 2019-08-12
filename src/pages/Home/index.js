import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, RefreshControl, TouchableOpacity} from 'react-native';
import { Button, Icon } from '@ant-design/react-native';
import { SafeAreaView } from 'react-navigation';
import { themesColor } from '../../style';
import Header from '../../components/Header';
import TextInputButton from '../../components/TextInputButton';
import SwiperItem from '../../components/SwiperItem';
import NavBtnItem from '../../components/NavBtnItem';
import SpacerItem from '../../components/SpacerItem';
import PullScrollView from '../../components/PullScrollView';

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
    recommendSongList: '推荐歌单',
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
    const { navBtn, recommendSongList, songListSquare } = this.state;
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
          <View style={styles.song}>
            <View style={styles.songHeader}>
              <View style={styles.recommend}>
                <Text style={styles.rec_text}>{recommendSongList}</Text>
              </View>
              <TouchableOpacity style={styles.square}>
                <Text style={styles.square_text}>{songListSquare.name}</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    paddingLeft: 10,
    paddingRight: 10,
  },
  navBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  song: {
    marginTop: 10,
  },
  songHeader: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recommend: {
  },
  rec_text: {
    fontSize: 18,
    fontWeight: '400',
    color: themesColor.black
  },
  square: {
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: themesColor.gray1,
  },
  square_text: {
    fontSize: 12,
    color: themesColor.black
  },
});
