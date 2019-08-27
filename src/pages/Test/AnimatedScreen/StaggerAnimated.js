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
/**
 * StaggerAnimated 延迟执行动画
一个动画数组，传入一个时间参数来设置队列动画间的延迟，
即在前一个动画开始之后，隔一段指定时间才开始执行下一个动画里面的动画，并不关心前一个动画是否已经完成，所以有可能会出现同时执行（重叠）的情况，
其格式如下：
Animated.stagger(delayTime<Number>, Animates<Array>)
其中 delayTime 为指定的延迟时间（毫秒），第二个传入一个动画事件数组。
 */

export default class StaggerAnimated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redValue: new Animated.Value(0),
      blackValue: new Animated.Value(0),
    };

    this._StaggerAnimated = Animated.stagger(
      2000,
      [
        Animated.timing(
          this.state.redValue,
          {
            toValue: 1,
            duration: 3000,
            easing: Easing.in,
          }
        ),
        Animated.timing(
          this.state.blackValue,
          {
            toValue: 1,
            duration: 3000,
            easing: Easing.in,
          }
        ),
      ]
    )
  }

  _onPress() {
    this._StaggerAnimated.start()
  }
  render() {
    const redLeft = this.state.redValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 200]
    })
    const blackLeft = this.state.blackValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 200]
    })
    return (
      <View style={styles.row}>
        <Text>StaggerAnimated 延迟执行</Text>
        <Animated.View
          style={{
            backgroundColor: "red",
            width: 50,
            height: 50,
            marginLeft: redLeft
          }}
        >
        </Animated.View>
        <Animated.View
          style={{
            backgroundColor: "black",
            width: 50,
            height: 50,
            marginLeft: blackLeft
          }}
        >
        </Animated.View>
        <TouchableOpacity onPress={this._onPress.bind(this)} style={{alignItems: 'center', marginBottom: 50,}}>
          <Text>点击</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  row: {
    borderWidth: 1,
  }
});
