import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Flex, Icon } from '@ant-design/react-native';
import RecommendItem from '../../components/RecommendItem';
import { container } from '../../style';
import TextItem1 from "../../components/TextItem1";
import TextItem2 from "../../components/TextItem2";
import { scaleSize } from "../../utils";

export default class RecommendSongList extends Component {

  _onPress(list) {
    alert(list.name);
  }

  _onRecommend(ele) {
    alert(ele.title);
  }
  render() {
    const {songList, songListSquare, RecommendData} = this.props;
    return (
      <View style={container}>
        <View style={styles.songHeader}>
          <TextItem1 text={songList} />
          <TextItem2 text={songListSquare.name} onPress={this._onPress.bind(this, songListSquare)} />
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
                  source={ele.req}
                  style={styles.image_bg}
                />
              }
              leftTopIcon={ele.leftTop}
              onPress={this._onRecommend.bind(this, ele)}
            />
          ))}
        </Flex>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  songHeader: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image_bg: {
    flex: 1,
    width: scaleSize(120),
    height: scaleSize(120),
    borderRadius: 5,
  },
});
