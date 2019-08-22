import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Slider, TouchableWithoutFeedback} from 'react-native';
import PropTypes from "prop-types";
import { Icon } from "@ant-design/react-native";
import Video from "react-native-video";
import { contain } from '../../style';
import SliderItem from './SliderItem';
import LyricsItem from './LyricsItem';

function formatTime(second) {
  let h = 0,
    i = 0,
    s = parseInt(second);
  if (s > 60) {
    i = parseInt(s / 60);
    s = parseInt(s % 60);
  }
  // 补零
  let zero = function(v) {
    return v >> 0 < 10 ? "0" + v : v;
  };
  // console.log([zero(h), zero(i), zero(s)].join(":"));
  if(s === 60) {
    s = 0;
    i = i + 1;
  }
  if(second <= 3600) {
    return [zero(i), zero(s)].join(":");
  }
  if(i === 60) {
    i = 0;
    h = h + 1;
  }
  h = parseInt(s % 60 % 60);
  return [zero(h), zero(i), zero(s)].join(":");
}

export default class MusicVideo extends Component {
  static defaultProps = {
    visible: false,
  };

  static propTypes = {
    onClose: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      paused: false,
      muted: false,
      volume: 100,
      currentTime: 0,
      duration: 0,
    };
  }

  _onSlider = (value) => {
    this.setState({ volume: value });
  }

  onProgress = data => {
    this.setState({ currentTime: data.currentTime });
    // console.log(data.currentTime + "hhh");
  };

  onLoad = data => {
    // console.log('onLoad', data);
    this.setState({ duration: data.duration });
  };

  onEnd = () => {
    this.video.seek(0);
  };

  onBuffer = (e) => {
    console.log(e)
  };

  _onSliderValueChange = () => {
    this.setState({ paused: true });
  };

  _onSlidingComplete = (value) => {
    this.video.seek(value);
    this.setState({ paused: false });
  };

  onAudioBecomingNoisy = () => {
    this.setState({ paused: true });
  };
  onAudioFocusChanged = (event: { hasAudioFocus: boolean }) => {
    this.setState({ paused: !event.hasAudioFocus });
  };

  _onPlayStatus = () => {
    alert('_onPlayStatus')
  }
  _onPrevious = () => {
    alert('_onPrevious')
  }

  _onPaused = () => {
    this.setState({ paused: !this.state.paused })
  }
  _onNext = () => {
    alert('_onNext')
  }
  _onMenu = () => {
    alert('_onMenu')
  }
  render() {
    const { data, muted, paused, volume } = this.state;
    return (
      <View style={contain}>
        <SliderItem volume={volume} onSlider={this._onSlider} />
        <LyricsItem data={data} currentTime={this.state.currentTime} />
        <View style={styles.mus_bottom}>
          <Video
            source={{uri: data.url}}
            ref={(ref) => {
              this.video = ref;
            }}
            rate={1.0}
            volume={volume / 100}
            muted={muted}
            paused={paused}
            resizeMode="cover"
            repeat={true}
            playInBackground
            playWhenInactive={true}
            progressUpdateInterval={250.0}
            ignoreSilentSwitch={"ignore"}
            onProgress={this.onProgress}
            onLoad={this.onLoad}
            onEnd={this.onEnd}
            onBuffer={this.onBuffer}
            onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            onAudioFocusChanged={this.onAudioFocusChanged}
          />
          <View style={styles.controls}>
            <View style={styles.trackingControls}>
              <View style={styles.progress}>
                <Text style={styles.progressCTime}>
                  {formatTime(this.state.currentTime)}
                </Text>
                <Slider
                  style={{ flex: 1 }}
                  value={this.state.currentTime}
                  minimumValue={0}
                  maximumValue={this.state.duration}
                  thumbImage={require("./icon_control_slider.png")}
                  maximumTrackTintColor={"#A5A5A5"} //滑块右侧轨道的颜色
                  minimumTrackTintColor={"#FF3030"} //滑块左侧轨道的颜色
                  onValueChange={this._onSliderValueChange.bind(this)}
                  onSlidingComplete={this._onSlidingComplete.bind(this)}
                />
                <Text style={styles.progressCTime}>
                  {formatTime(this.state.duration)}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.row_icon}>
            <TouchableWithoutFeedback onPress={() => this._onPlayStatus()}>
              <Icon name="retweet" size={40} color={'#000'} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPrevious()}>
              <Icon name="vertical-right" size={40} color={'#000'} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPaused()}>
              <Icon name={paused ? 'play-circle': 'pause-circle'} size={40} color={'#000'} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onNext()}>
              <Icon name="vertical-left" size={40} color={'#000'} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onMenu()}>
              <Icon name="unordered-list" size={40} color={'#000'} />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}

const palyStatus = ['顺序', '循环', '随机', '单曲'];

const styles = StyleSheet.create({
  mus_bottom: {
    width: '100%',
    height: 150,
  },
  controls: {
    backgroundColor: "transparent",
    borderRadius: 5,
    position: "absolute",
    top: 20,
    left: 0,
    right: 0
  },
  progress: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 3,
    alignItems: 'center'
  },
  progressCTime: {
    width: 60,
    textAlign: 'center',
    fontSize: 14,
    color: "#000",
  },
  row_icon: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
