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

export default class FadeOutAnimated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeOutOpacity1: new Animated.Value(1),
      animatedValue2: new Animated.Value(0)
    };
    this.fade_renderItem1 = Animated.timing(this.state.fadeOutOpacity1, {
      toValue: 0, //透明度动画最终值
      duration: 2000, //动画时长2000毫秒
      easing: Easing.linear
    });
  }

  _onPress1 = () => {
    this.fade_renderItem1.start(() => this.state.fadeOutOpacity1.setValue(1));
  };


  render() {
    return (
      <View style={styles.row}>
        <Animated.View
          style={{
            opacity: this.state.fadeOutOpacity1,
            backgroundColor: "red"
          }}
        >
          <Text style={{ color: "#fff" }}>FadeOutAnimated 淡入淡出</Text>
        </Animated.View>
        <TouchableOpacity onPress={this._onPress1.bind(this)}>
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
