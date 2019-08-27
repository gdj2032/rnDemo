import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Easing,
  ScrollView
} from "react-native";

// 最常用的动画类型，使一个值按照一个过渡曲线而随时间变化，格式如下：
// Animated.timing(animateValue, conf<Object>)，conf参数格式：
// {
//   duration：动画持续的时间（单位是毫秒），默认为500。
//   easing：一个用于定义曲线的渐变函数。Easing模预置了 linear、ease、elastic、bezier 等诸多缓动特性。iOS默认为Easing.inOut(Easing.ease)，。
//   delay：开始动画前的延迟时间（毫秒），默认为0。
// }


export default class TimingAnimated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animatedValue: new Animated.Value(0)
    };

    this.rotate_renderItem = Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.in
    });
  }

  _onPress = () => {
    this.state.animatedValue.setValue(0);
    this.rotate_renderItem.start(() => this._onPress());
  };

  render() {
    return (
      <View>
        {this.renderItem1()}
        {this.renderItem2()}
        {this.renderItem3()}
        {this.renderItem4()}
      </View>
    );
  }

  renderItem1 = () => {
    const marginLeft = this.state.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 100, 0]
    });
    return (
      <View style={styles.row}>
        <Animated.View
          style={{
            marginLeft: marginLeft
          }}
        >
          <Text>TimingAnimated 线性动画</Text>
        </Animated.View>
        <TouchableOpacity onPress={this._onPress.bind(this)}>
          <Text numberOfLines={1}>点击</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderItem2 = () => {
    const rotateZ = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    return (
      <View style={styles.rows}>
        <Animated.View
          style={{
            transform: [{ rotateZ: rotateZ }],
          }}
        >
          <Text>rotateZ</Text>
        </Animated.View>
      </View>
    );
  };

  renderItem3 = () => {
    const rotateX = this.state.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ["0deg", "180deg", "0deg"]
    });
    return (
      <View style={styles.row}>
        <Animated.View
          style={{
            transform: [{ rotateX: rotateX }],
          }}
        >
          <Text>rotateX</Text>
        </Animated.View>
      </View>
    );
  };

  renderItem4 = () => {
    const textSize = this.state.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18]
    });
    return (
      <View style={styles.row}>
        <Animated.Text
          style={{
            fontSize: textSize,
          }}
        >
          textSize
        </Animated.Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  row: {
    width: '100%',
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1
  },
  rows: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1
  }
});
