import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Video from 'react-native-video';
import { Icon } from '@ant-design/react-native';
import { text_f10_white, themesColor, text_f16_fw5_black, fonts } from '../../style';
import { scaleSize, CheckNum } from '../../utils';
import TextItem2 from '../TextItem2';
import { VideoType } from '../../utils/DataType';
import PlayNumber from '../PlayNumber';
import VideoTime from '../VideoTime';
import { dateFormat, CheckText } from '../../utils/utils';
import SpacerItem from '../SpacerItem';
import BadgeItem from '../BadgeItem';

export default class VideoItem extends Component {

  Images = <Image style={styles.image} source={require('../../image/song.png')} />

  render() {
    const { data } = this.props;
    if(!data) {
      return null;
    }
    return (
      <View style={styles.container}>
        <View style={styles.video}>
          <Text>video</Text>
          <PlayNumber num={CheckNum(data.number)} style={styles.number} numStyle={styles.numText} />
          <VideoTime time={dateFormat(data.time)} />
          <View style={styles.paly}>
            <Icon name="caret-right" size="lg" color={themesColor.white} />
          </View>
        </View>
        <View style={styles.type}>
          <TextItem2 text={VideoType[data.type]} style={styles.typeItem} textStyle={text_f10_white} />
        </View>
        <View>
          <View style={styles.row}>
            <Text style={text_f16_fw5_black}>{CheckText(data.title)}</Text>
            {this.Images}
          </View>
          <SpacerItem />
          <View style={styles.row}>
            <View style={styles.row_left}>
              {this.Images}
              <Text>{data.author}</Text>
            </View>
            <View style={styles.row_right}>
              <BadgeItem text={data.like}>
                <Icon name="like" size="md" color={themesColor.gray} />
              </BadgeItem>
              <BadgeItem text={data.messageNumber}>
                <Icon name="message" size="md" color={themesColor.gray} />
              </BadgeItem>
              <Icon name="ellipsis" size="md" color={themesColor.gray} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    height: scaleSize(300),
    borderRadius: 5,
  },
  video: {
    width: '100%',
    height: scaleSize(200),
    backgroundColor: 'black',
    borderRadius: 5,
  },
  type: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  typeItem: {
    paddingTop: 2,
    paddingBottom: 2,
  },
  number: {
    left: 5,
    bottom: 5,
    top: null,
    right: null,
  },
  numText: {
    color: themesColor.white,
  },
  paly:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: scaleSize(30),
    height: scaleSize(30),
    borderRadius: scaleSize(30),
  },
  row: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  row_left: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  row_right: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});