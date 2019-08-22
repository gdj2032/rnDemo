import React, { Component } from "react";
import { StyleSheet, Slider, View } from "react-native";
import PropTypes from "prop-types";
import { Icon } from "@ant-design/react-native";

export default class SliderItem extends Component {
  static defaultProps = {
    isMute: false,
    volume: 100
  };

  static propTypes = {
    onSlider: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      isMute: false,
      volume: 100
    };
  }

  _onSliderValueChange(value) {
    let isMute = value === 0;
    this.setState({
      volume: value,
      isMute: isMute
    });
    this.props.onSlider(value);
  }

  render() {
    return (
      <View style={styles.volume}>
        <Icon name="sound" type="md" color={"#000000"} />
        <Slider
          style={{ flex: 1 }}
          value={this.props.volume}
          minimumValue={0}
          maximumValue={100}
          thumbImage={require("./icon_control_slider.png")}
          maximumTrackTintColor={"#A5A5A5"} //滑块右侧轨道的颜色
          minimumTrackTintColor={"#FF3030"} //滑块左侧轨道的颜色
          onValueChange={this._onSliderValueChange.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  volume: {
    width: "100%",
    height: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    marginBottom: 20,
  }
});
