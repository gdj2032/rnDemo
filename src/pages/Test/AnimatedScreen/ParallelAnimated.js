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

// 组合动画 Animated.parallel 异步执行
// 同时开始一个动画数组里的全部动画。默认情况下，如果有任何一个动画停止了，其余的也会被停止。可以通过stopTogether 选项设置为 false 来取消这种关联，格式如下：
// Animated.parallel(Animates<Array>, [conf<Object>])：，conf参数格式：
// {
//   stopTogether: false
// }
// 第一个参数接受一个元素为动画的数组，通过执行 start() 方法可以并行执行该数组中的所有方法。
// 如果数组中任意动画被中断的话，该数组内对应的全部动画会一起停止，不过我们可以通过第二个（可选）参数 conf 中的 stopTogether 来取消这种牵连特性。

export default class ParallelAnimated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacityValue: new Animated.Value(1),
      actionValue: new Animated.Value(0)
    };

    this.parallelAnimated = Animated.parallel(
      [
        Animated.timing(this.state.opacityValue, {
          toValue: 1,
          duration: 2000
        }),
        Animated.timing(this.state.actionValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear
        })
      ],
      {
        stopTogether: false
      }
    );
  }

  _onPress() {
    this.state.opacityValue.setValue(0);
    this.state.actionValue.setValue(0);
    this.parallelAnimated.start();
  }
  render() {
    const opacity = this.state.opacityValue.interpolate({
      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
      outputRange: [0, 1, 0, 1, 0, 1]
    });
    const neckTop = this.state.actionValue.interpolate({
      inputRange: [0, 1],
      outputRange: [350, 60]
    });
    const left = this.state.actionValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-60, 20]
    });
    const rotateZ = this.state.actionValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    return (
      <View style={styles.row}>
        <Animated.View
          style={{
            backgroundColor: "yellow",
            opacity: opacity,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "#000" }}>ParallelAnimated1 异步执行</Text>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: neckTop,
            left: 65,
            backgroundColor: "gray"
          }}
        >
          <Text style={{ color: "#000" }}>ParallelAnimated2</Text>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 40,
            left: left,
            transform: [{ rotateZ: rotateZ }],
            backgroundColor: "pink"
          }}
        >
          <Text style={{ color: "#000" }}>Left</Text>
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
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1
  }
});
