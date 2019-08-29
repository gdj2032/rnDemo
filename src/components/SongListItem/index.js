import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { Icon, SwipeAction } from '@ant-design/react-native';
import { scaleSize } from '../../utils';
import { themesColor, text_f16_fw5_black, text_f12_gray } from '../../style';
import CoverView from '../CoverView';
import TextItem2 from '../TextItem2';

export default class SongListItem extends Component {
  render() {
    const { data, onPress, onDelete } = this.props;
    const right = [
      {
        text: 'Delete',
        onPress: () => onDelete(),
        style: { backgroundColor: themesColor.red, color: themesColor.white },
      },
    ];
    return (
      <SwipeAction
        autoClose
        right={!data.isLove &&right}
        style={{ backgroundColor: 'transparent' }}
      >
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.container}>
            <View style={[styles.image, styles.imgs]}>
              <Image
                style={styles.image}
                source={require('../../image/song.png')}
              />
              {data.isLove && <CoverView />}
            </View>
            <View style={styles.contain}>
              <View>
                <View>
                  <Text style={text_f16_fw5_black}>{data.title}</Text>
                </View>
                {!data.download ? (
                  <View>
                    <Text style={text_f12_gray}>{`${data.all}首`}</Text>
                  </View>
                ) : (
                  <View>
                    <Text style={text_f12_gray}>{`${data.all}首，已下载${data.download}首`}</Text>
                  </View>
                )}
              </View>
              {
                data.isLove && <TextItem2 text={data.love} />
              }
              {
                data.isSing && <Icon name="sound" size="md" color={themesColor.red} />
              }
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SwipeAction>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: scaleSize(120),
    height: scaleSize(120),
    borderRadius: 5
  },
  imgs: {
    marginRight: 10,
  },
  contain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
