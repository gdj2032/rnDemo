import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';

export default class SwiperItem extends Component {

  render() {
    return (
      <Swiper
        style={styles.wrapper}
        // showsButtons
        height={120}
        autoplay={true}
        autoplayTimeout={5}
      >
        <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
      borderRadius: 20,
  },
  slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
      borderRadius: 20,
  },
  slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
      borderRadius: 20,
  },
  text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
  }
});
