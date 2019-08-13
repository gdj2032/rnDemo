import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { Button, Icon } from '@ant-design/react-native';
import { themesColor } from '../../style';
import Header from '../../components/Header';
import TextItem1 from '../../components/TextItem1';
import MyMusicScroll from './MyMusicScroll';
import SpacerItem from '../../components/SpacerItem';
import TextItem3 from '../../components/TextItem3';

const sc_data = [
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
          <MyMusicScroll data={sc_data} />
          <SpacerItem />
          <TextItem3 text={'本地音乐'} number={220} />
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
});
