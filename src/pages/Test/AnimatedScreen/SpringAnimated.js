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
//弹簧效果，基础的单次弹跳物理模型实现的 spring 动画，格式如下：
// Animated.spring(animateValue, conf<Object>)，conf参数格式：
// {
//   friction: 控制“弹跳系数”、夸张系数，默认为7。
//   tension: 控制速度，默认为40。
//   speed: 控制动画的速度，默认为12。
//   bounciness: 反弹系数，默认为8。
// }

export default class SpringAnimated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      springValue: new Animated.Value(1)
    };

    this._SpringAnimated = Animated.spring(
      this.state.springValue,
      {
        toValue: 1,
        friction: 2,
        tension: 20,
      }
    )
  }

  _onPress() {
    this.state.springValue.setValue(0.1);
    this._SpringAnimated.start()
  }
  render() {
    return (
      <View style={styles.row}>
        <Animated.View
          style={{
            backgroundColor: "#ddefaa",
            transform:[
              {scale: this.state.springValue}
            ]
          }}
        >
          <Text style={{ color: "#000" }}>SpringAnimated 弹簧效果</Text>
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
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
  }
});
