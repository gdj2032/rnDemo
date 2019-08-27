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
//衰变效果，以一个初始的速度和一个衰减系数逐渐减慢变为0，格式如下：
// Animated.decay(animateValue, conf<Object>)，conf参数格式：
// {
//   velocity: 起始速度，必填参数。
//   deceleration: 速度衰减比例，默认为0.997。
// }

export default class DecayAnimated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decayValue: new Animated.ValueXY({x: 0, y: 0})
    };

    this._DecayAnimated = Animated.decay(
      this.state.decayValue,
      {
        velocity: 5,
        deceleration: 0.9
      }
    )
  }

  _onPress() {
    this._DecayAnimated.start()
  }
  render() {
    return (
      <View style={styles.row}>
        <Animated.View
          style={{
            backgroundColor: "red",
            transform:[
              {translateX: this.state.decayValue.x},
              {translateY: this.state.decayValue.y},
            ]
          }}
        >
          <Text style={{ color: "#000" }}>_DecayAnimated 衰变效果</Text>
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
