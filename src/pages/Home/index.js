import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, RefreshControl} from 'react-native';
import { Button, Icon } from '@ant-design/react-native';
import { SafeAreaView } from 'react-navigation';
import { themesColor } from '../../style';
import Header from '../../components/Header';
import TextInputButton from '../../components/TextInputButton';
import SwiperItem from '../../components/SwiperItem';
import NavBtnItem from '../../components/NavBtnItem';
import SpacerItem from '../../components/SpacerItem';

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
    isRefreshing: false,
    loadMore: false,
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

  _onScroll(event) {
    if(this.state.loadMore){
      return;
    }
    let y = event.nativeEvent.contentOffset.y;
    let height = event.nativeEvent.layoutMeasurement.height;
    let contentHeight = event.nativeEvent.contentSize.height;
    console.log('offsetY-->' + y);
    console.log('height-->' + height);
    console.log('contentHeight-->' + contentHeight);
    if(y + height >= contentHeight-20 ){
      this.setState({
        loadMore: true
      });
    }
  }

  //下拉刷新
  _onRefresh() {
    console.log(123);
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({isRefreshing: false});
    }, 3000);
  }

  render() {
    const { isRefreshing, navBtn, recommendSongList, songListSquare } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Header
          LeftItem={() => <Icon name={'audio'} size="md" color={themesColor.black}/>}
          CenterItem={() => <TextInputButton/>}
          defaultItem={true}
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={this._onRefresh.bind(this)}
              enabled={true}
              tintColor={themesColor.red}
              title={'加载中...'}
              titleColor={themesColor.blue}
              colors={[themesColor.red]}
              progressBackgroundColor={themesColor.white}
            />
          }
          onScroll={this._onScroll.bind(this)}
          scrollEventThrottle={50}
        >
          <SwiperItem />
          <View style={styles.navBtn}>
            {
              navBtn.map(ele => <NavBtnItem key={ele.text} text={ele.text} icon_name={ele.icon_name} />)
            }
          </View>
          <SpacerItem />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: themesColor.backgroundColor,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  navBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
