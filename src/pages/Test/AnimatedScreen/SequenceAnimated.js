import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Easing,
  Image
} from "react-native";

/**
按顺序执行一个动画数组里的动画，等待一个完成后再执行下一个。如果当前的动画被中止，后面的动画则不会继续执行，格式如下：
Animated.sequence(Animates<Array>)，
刚才知道了 Animated.parallel() 的用法，那么使用起来  Animated.sequence() 会上手更快，他们用法几乎一样，
区别就在于 Animated.sequence() 顺序执行一个动画数组里的动画，可以理解为同步操作，
而 Animated.parallel() 是异步操作，
这两种方式并没有好与坏，只有适合不适合，
例如下面的这个效果就是适合使用 Animated.sequence() 来完成，而使用 Animated.parallel() 的话则不行。
 */

export default class SequenceAnimated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotateValue: new Animated.Value(0),
      rotateShakeValue: new Animated.Value(0),
      macValue: new Animated.Value(0)
    };
    this._SequenceAnimated = Animated.sequence([
      Animated.timing(this.state.rotateValue, {
        toValue: 1,
        duration: 5000,
        easing: Easing.in
      }),
      Animated.timing(this.state.rotateShakeValue, {
        toValue: 1,
        duration: 500,
        easing: Easing.in,
        delay: 300
      }),
      Animated.spring(this.state.macValue, {
        toValue: 1,
        friction: 3,
        tension: 10
      })
    ]);
  }

  _onPress = () => {
    this._SequenceAnimated.start();
  };

  render() {
    const turnRotateZ = this.state.rotateValue.interpolate({
      inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      outputRange: [
        "0deg",
        "180deg",
        "360deg",
        "540deg",
        "720deg",
        "900deg",
        "10800deg",
        "1260deg",
        "1440deg",
        "1620deg",
        "1800deg"
      ]
    });
    const marginLeft = this.state.rotateShakeValue.interpolate({
      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
      outputRange: [0, -20, 20, -20, 20, 0]
    });
    const macTop = this.state.macValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, 30]
    });
    return (
      <View style={styles.row}>
        <Text>SequenceAnimated 顺序执行</Text>
        <Animated.View
          style={{
            width: 80,
            height: 80,
            marginLeft: marginLeft,
            transform: [{ rotateZ: turnRotateZ }]
          }}
        >
          <Image source={require("./zp.jpg")} style={styles.image1} />
        </Animated.View>
        <Animated.View
          style={{
            width: 50,
            height: 50,
            position: "absolute",
            top: macTop,
            left: 180
          }}
        >
          <Image
            ref="image"
            style={{ width: 50, height: 50 }}
            source={require("./mac.png")}
          ></Image>
        </Animated.View>
        <TouchableOpacity onPress={this._onPress.bind(this)}>
          <Text>点击</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    width: "100%",
    height: 120,
    alignItems: "center",
    borderWidth: 1
  },
  image1: {
    width: 80,
    height: 80
  }
});
