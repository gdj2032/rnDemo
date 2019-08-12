import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Flex, Icon } from '@ant-design/react-native';
import RecommendItem from '../../components/RecommendItem';
import { themesColor } from '../../style';

export default class RecommendSongList extends Component {
  render() {
    const {songList, songListSquare, RecommendData} = this.props;
    return (
      <View style={styles.recommend}>
        <View style={styles.songHeader}>
          <View style={styles.rec}>
            <Text style={styles.rec_text}>{songList}</Text>
          </View>
          <TouchableOpacity style={styles.square}>
            <Text style={styles.square_text}>{songListSquare.name}</Text>
          </TouchableOpacity>
        </View>
        <Flex wrap="wrap" style={styles.wrap}>
          {RecommendData.map((ele, index) => (
            <RecommendItem
              key={index}
              title={ele.title}
              number={ele.number}
              imageText={ele.imageText}
              BackgroundImage={() =>
                <Image
                  source={require('../../image/song.png')}
                  style={styles.image_bg}
                />
              }
              leftTopIcon={ele.leftTop}
            />
          ))}
        </Flex>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  recommend: {
    marginTop: 10,
  },
  songHeader: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rec: {
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
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image_bg: {
    flex: 1,
    width: 120,
    height: 120,
    borderRadius: 5,
  },
});
