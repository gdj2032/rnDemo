import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { themesColor, text_f14_fw5_white } from '../../style';
import { CheckNum, setSpText, scaleSize } from '../../utils';
import PlayNumber from '../PlayNumber';

export default class RecommendItem extends Component {

  render() {
    const { title, number, imageText, BackgroundImage, leftTopIcon, onPress, author, showPlay } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.contain}>
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
            <PlayNumber num={CheckNum(number)}/>
          }
          {
            imageText &&
            <View style={styles.imageText}>
              <Text style={text_f14_fw5_white}>{imageText}</Text>
            </View>
          }
          {
            showPlay &&
            <View style={styles.showPlay}>
              <Icon name="play-circle" size="md" color={themesColor.red} />
            </View>
          }
        </View>
        <View style={styles.title}>
          <Text numberOfLines={2} style={styles.title_text}>{title}</Text>
          {
            author && <Text style={styles.author_text}>{author}</Text>
          }
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: scaleSize(320),
    height: scaleSize(420),
    marginTop: 10,
  },
  contain: {
    width: scaleSize(320),
    height: scaleSize(320),
    borderRadius: 5,
  },
  leftTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: scaleSize(50),
    height: scaleSize(50),
    backgroundColor: themesColor.red,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 20,
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
    marginBottom: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showPlay: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    backgroundColor: themesColor.gray1,
    borderRadius: 20,
    opacity: 0.5
  },
  image_bg: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  title: {
    height: scaleSize(100),
    marginTop: 2,
  },
  title_text: {
    fontSize: setSpText(12),
    color: themesColor.black,
    fontWeight: '500',
  },
  author_text: {
    fontSize: setSpText(12),
    color: themesColor.gray,
  },
});
