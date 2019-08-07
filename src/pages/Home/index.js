import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import { Button, Icon } from '@ant-design/react-native';
import { SafeAreaView } from 'react-navigation';
import { themesColor } from '../../style';
import Header from '../../components/Header';
import TextInputButton from '../../components/TextInputButton';
import SwiperItem from '../../components/SwiperItem';
import NavBtnItem from '../../components/NavBtnItem';

const navBtn = [
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
];

export default class Home extends Component {
  static navigationOptions = {
    headerRight: (
      <Icon name="align-right" size="lg" color={themesColor.black}/>
    ),
    tabBarIcon: ({ tintColor, focused }) => <Icon name="home" size="md" color={tintColor} focused={focused} />,
    // tabBarOnPress({ navigation, defaultHandler }) {
    // },
  };
  onSetting = () => {
    console.log(123)
  }

  render() {
    console.log(this.props)
    return (
      <SafeAreaView style={styles.container}>
        <Header
          LeftItem={() => <Icon name={'audio'} size="md" color={themesColor.black}/>}
          CenterItem={() => <TextInputButton/>}
          defaultItem={true}
        />
        <ScrollView>
          <SwiperItem />
          <View style={styles.navBtn}>
            {
              navBtn.map(ele => <NavBtnItem key={ele.text} text={ele.text} icon_name={ele.icon_name} />)
            }
          </View>
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
