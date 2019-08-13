import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { themesColor } from '../../style';
import { CheckText, CheckNum, setSpText, scaleSize } from '../../utils';
import PlayNumber from '../PlayNumber';

export default class RecommendItem extends Component {

  render() {
    const { title, number, imageText, BackgroundImage, leftTopIcon, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.containers} onPress={onPress}>
        <View style={styles.container}>
          <View style={{flex: 1}}>
            {
              (BackgroundImage && BackgroundImage()) || <Image source={require('../../image/song.png')} style={styles.image_bg} />
            }
          </View>
          {
            leftTopIcon &&
            <View style={styles.leftTop}>
              <Icon name={leftTopIcon} size="xxs" color={themesColor.white} />
            </View>
          }
          {
            number &&
            <PlayNumber style={styles.rightTop} num={CheckNum(number)}/>
          }
          {
            imageText &&
            <View style={styles.imageText}>
              <Text style={styles.image_text}>{imageText}</Text>
            </View>
          }
        </View>
        <View style={styles.title}>
          <Text numberOfLines={10} style={styles.title_text}>{CheckText(title)}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containers: {
    width: scaleSize(120),
    height: scaleSize(160),
    marginTop: 10,
  },
  container: {
    width: scaleSize(120),
    height: scaleSize(120),
    borderRadius: 5,
  },
  leftTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: scaleSize(20),
    height: scaleSize(20),
    backgroundColor: themesColor.red,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 20,
  },
  rightTop: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 20,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rt_num: {
    color: themesColor.white,
    fontSize: setSpText(12),
  },
  imageText: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_text: {
    color: themesColor.white,
    fontSize: setSpText(18),
    fontWeight: '500',
  },
  image_bg: {
    flex: 1,
    width: scaleSize(120),
    height: scaleSize(120),
    borderRadius: 5,
  },
  title: {
    flex: 1,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title_text: {
    fontSize: setSpText(12),
    color: themesColor.black,
    fontWeight: '500',
  }
});
