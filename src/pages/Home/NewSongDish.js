import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextItem1 from '../../components/TextItem1';
import TextItem2 from '../../components/TextItem2';
import { themesColor } from '../../style';

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
    ]
  }

  _onPress(val, visible) {
    if(visible === this.state.visible) return;
    this.setState({ visible: visible });
  }

  render() {
    const { visible, songDish, songDishSquare } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.contains}>
          <View style={styles.con_title}>
            <TextItem1 text={songDish[0]} active={visible} onPress={this._onPress.bind(this,songDish[0], true)} />
            <Text style={styles.line}>|</Text>
            <TextItem1 text={songDish[1]} active={!visible} onPress={this._onPress.bind(this,songDish[1], false)} />
          </View>
          <TextItem2 text={songDishSquare[visible ? 0: 1].name} />
        </View>
        {
          visible ?
          <View>
            <Text>{songDish[0]}</Text>
          </View>
          :
          <View>
            <Text>{songDish[1]}</Text>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
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
  line: {
    color: themesColor.gray1
  }
});
