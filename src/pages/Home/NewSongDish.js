import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextItem1 from '../../components/TextItem1';
import TextItem2 from '../../components/TextItem2';
import { themesColor, containers } from '../../style';
import NewSong from './NewSong';
import NewDish from './NewDish';

const DishData = [
  {
    id: 1,
    title: '热门单曲',
    Author: '',
    req: require('../../image/dish1.png'),
  },{
    id: 2,
    title: '假面自白',
    Author: '万象',
    req: require('../../image/dish2.png'),
  },{
    id: 3,
    title: '山海之外',
    Author: '点击404',
    req: require('../../image/dish3.png'),
  },
]

const SongData = [
  {
    id: 1,
    title: '安静',
    Author: '周杰伦',
    req: require('../../image/song1.png'),
  },{
    id: 2,
    title: '泡沫',
    Author: '邓紫棋',
    req: require('../../image/song2.png'),
  },{
    id: 3,
    title: '江南',
    Author: '林俊杰',
    req: require('../../image/song3.png'),
  },
]

export default class NewSongDish extends Component {

  state = {
    visible: true,
    songDish: ['新碟', '新歌'],
    songDishSquare: [
      {
        name: '更多新碟',
        nav: ''
      },{
        name: '新歌推荐',
        nav: ''
      }
    ],
  }

  _onPress(visible) {
    if(visible === this.state.visible) return;
    this.setState({ visible: visible });
  }

  render() {
    const { visible, songDish, songDishSquare } = this.state;
    return (
      <View style={[containers, styles.container]}>
        <View style={styles.contains}>
          <View style={styles.con_title}>
            <View style={styles.v_title}>
              <TextItem1 text={songDish[0]} active={visible} onPress={this._onPress.bind(this, true)} />
            </View>
            <Text style={styles.line}>|</Text>
            <View style={styles.v_title}>
              <TextItem1 text={songDish[1]} active={!visible} onPress={this._onPress.bind(this, false)} />
            </View>
          </View>
          <TextItem2 text={songDishSquare[visible ? 0: 1].name} />
        </View>
        {
          visible ?
          <NewSong SongData={SongData} />
          :
          <NewDish DishData={DishData} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  contains: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  con_title: {
    width: 100,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  v_title: {
    width: 40,
  },
  line: {
    color: themesColor.gray1
  }
});
