import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { scaleSize } from '../../utils';
import { themesColor, text_f16_fw5_black, text_f12_gray } from '../../style';

export default class SongListItem2 extends Component {
  render() {
    const { data, onPress } = this.props;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <View style={[styles.image, styles.imgs]}>
            <Image
              style={styles.image}
              source={require('../../image/song.png')}
            />
          </View>
          <View style={styles.contain}>
            <View>
              <Text style={text_f16_fw5_black}>{data.title}</Text>
            </View>
            <View>
              <Text style={text_f12_gray}>{`${data.list.length}首`}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
