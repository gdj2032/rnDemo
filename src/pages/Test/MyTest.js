import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  TouchableOpacity
} from "react-native";

export default class MyTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeOutValue: new Animated.Value(0)
    };

    this._fadeOut = Animated.timing(this.state.fadeOutValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.in
    });
  }

  _onPress = () => {
    this.state.fadeOutValue.setValue(0);
    this._fadeOut.start(() => this._onPress());
  };

  render() {
    const distance = this.state.fadeOutValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 100, 0]
    });
    const textSize = this.state.fadeOutValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 36, 18]
    });
    const rotateZ = this.state.fadeOutValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ["0deg", "180deg", "360deg"]
    });
    return (
      <View style={styles.row}>
        <Animated.View
          style={{
            backgroundColor: "yellow",
            marginLeft: distance,
            transform: [{ rotateZ: rotateZ }]
          }}
        >
          <Animated.Text
            style={{
              fontSize: textSize
            }}
          >
            MyTest
          </Animated.Text>
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
    marginTop: 20
  }
});
