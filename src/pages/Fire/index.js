import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { themesColor } from '../../style';
import Header from '../../components/Header';
import TextItem1 from '../../components/TextItem1';
import MyMusicScroll from './MyMusicScroll';
import SpacerItem from '../../components/SpacerItem';
import MySelect from './MySelect';
import MyCreatePanel from './MyCreatePanel';

const sc_data1 = [
  {
    id: 1,
    title: '因乐交友',
  },{
    id: 2,
    title: '私人FM',
  },{
    id: 3,
    title: '最新电音',
  },{
    id: 4,
    title: 'Sati空间',
  },{
    id: 5,
    title: '私藏推荐',
  },{
    id: 6,
    title: '亲子频道',
  },{
    id: 7,
    title: '古典专区',
  },
]

const sc_data2 = [
  {
    id: 1,
    title: '本地音乐',
    number: 220,
    icon: null,
  },{
    id: 2,
    title: '最近播放',
    number: 102,
    icon: null,
  },{
    id: 3,
    title: '我的电台',
    number: 0,
    icon: null,
  },{
    id: 4,
    title: '我的收藏',
    number: 6,
    icon: null,
  },
]

export default class Fire extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => <Icon name="fire" size="md" color={tintColor} focused={focused} />,
    // tabBarOnPress({ navigation, defaultHandler }) {
    // },
  };
  render() {
    return (
      <View style={styles.container}>
        <Header
          LeftItem={() => <Icon name="cloud" size="md" color={themesColor.black} />}
          CenterItem={() => <TextItem1 text={'我的音乐'} />}
          defaultItem={true}
        />
        <ScrollView>
          <MyMusicScroll data={sc_data1} />
          <SpacerItem />
          <MySelect data={sc_data2} />
          <SpacerItem style={styles.spacer} />
          <MyCreatePanel />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themesColor.backgroundColor,
  },
  spacer: {
    marginTop: 10,
    borderBottomWidth: 0,
    backgroundColor: themesColor.gray2,
  }
});
