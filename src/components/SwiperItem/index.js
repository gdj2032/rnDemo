import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import {themesColor} from '../../style';

const Imgs = [
  require('../../image/swiper1.png'),
  require('../../image/swiper2.png'),
  require('../../image/swiper3.png'),
  require('../../image/swiper4.png'),
  require('../../image/swiper5.png'),
]

export default class SwiperItem extends Component {
  render() {
    const { height, autoplayTimeout } = this.props;
    return (
      <Swiper
        style={styles.wrapper}
        // showsButtons
        height={height || 150}
        autoplay={true}
        autoplayTimeout={autoplayTimeout || 5}
        paginationStyle={{ bottom: 10 }} //小圆点的位置：距离底部10p
        dot={//未选中的圆点样式
          <View
            style={[{
              backgroundColor: themesColor.white,
            }, styles.dot_style]}
          />
        }
        activeDot={//选中的圆点样式
          <View
            style={[{
              backgroundColor: themesColor.red,
            }, styles.dot_style]}
          />
        }
      >
        {
          Imgs.map((ele, index) =>
            <View style={styles.slide} key={index}>
              <Image
                source={ele}
                style={styles.image}
              />
            </View>
          )
        }
        {/* <View style={styles.slide}>
          <Image
            source={require('../../image/swiper1.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../image/swiper2.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../image/swiper3.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../image/swiper4.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../image/swiper5.png')}
            style={styles.image}
          />
        </View> */}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    borderRadius: 20
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  dot_style: {
    width: 6,
    height: 6,
    borderRadius: 6,
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 5,
  }
});
