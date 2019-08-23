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

let lyrObj = []; //存放歌词

export default class MusicVideo extends Component {

  static propTypes = {
    updateData: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      slData: this.props.slData,
      lyrObjs: [],
      paused: false,
      muted: false,
      volume: 100,
      currentTime: 0,
      duration: 0,
    };
  }

  // init = () => {
  //   this.setState({
  //     paused: false,
  //     muted: false,
  //     currentTime: 0,
  //     duration: 0,
  //   });
  //   // this.video.seek(0);
  //   lyrObj = [];
  // }
  async componentDidMount() {
    await this.init();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
    }, async () => {
      await this.init();
    })
  }

  init = () => {
    lyrObj = [];
    const { data } = this.state;
    console.log(data);
    const { lrc } = data;
    // console.log(lrc);
    let lrcArr = lrc.trim().split("[");
    // console.log(lrcArr);
    lrcArr.forEach(val => {
      let obj = {}; //用于存放时间
      val = val.replace(/(^\s*)|(\s*$)/g, ""); //正则,去除前后空格
      let indeofLastTime = val.indexOf("]"); // ]的下标
      let timeStr = val.substring(1, indeofLastTime); //把时间切出来 0:04.19
      let minSec = "";
      let timeMsIndex = timeStr.indexOf("."); // .的下标
      // console.log(timeStr);
      let curTime = '';
      if (timeMsIndex !== -1) {
        //存在毫秒 0:04.19
        minSec = timeStr.split('.'); // 0:04.
        obj.ms = Number(minSec[1]) //毫秒值 19
        curTime = minSec[0].split(":"); // [0,04]
      } else {
        //不存在毫秒 0:04
        minSec = timeStr;
        obj.ms = 0;
        curTime = minSec.split(":"); // [0,04]
      }
      // console.log(curTime);
      obj.min = Number(curTime[0]); //分钟 0
      obj.sec = Number(curTime[1]); //秒钟 04
      obj.txt = val.substring(indeofLastTime + 1, val.length); //歌词文本: 留下唇印的嘴
      obj.txt = obj.txt.replace(/(^\s*)|(\s*$)/g, "");
      obj.dis = false;
      obj.total = obj.min * 60 + obj.sec + obj.ms / 100; //总时间
      // console.log(obj);
      if (obj.txt.length > 0) {
        lyrObj.push(obj);
      }
      // console.log(lyrObj);
    });
    // lyrObj.sort((a, b) => a.total > b.total);
    this.setState({ lyrObjs: lyrObj })
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
    this.setState({
      paused: true,
      currentTime: 0,
    });
    const { data, slData } = this.state;
    let index = data.id - 2;
    if(index < 0) {
      index = slData.length - 1;
    }
    console.log(slData[index])
    this.props.updateData(slData[index]);
    this.setState({ paused: false });
  }

  _onPaused = () => {
    this.setState({ paused: !this.state.paused })
  }
  _onNext = () => {
    this.setState({
      paused: true,
      currentTime: 0,
    });
    const { data, slData } = this.state;
    let index = data.id;
    if(index > slData.length - 1) {
      index = 0;
    }
    console.log(slData[index])
    this.props.updateData(slData[index]);
    this.setState({ paused: false });
  }
  _onMenu = () => {
    alert('_onMenu')
  }
  render() {
    const { data, muted, paused, volume, lyrObjs } = this.state;
    return (
      <View style={contain}>
        <SliderItem volume={volume} onSlider={this._onSlider} />
        <LyricsItem data={this.state.data} currentTime={this.state.currentTime} lyrObj={lyrObjs} />
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
