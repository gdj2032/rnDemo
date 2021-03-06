import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Slider,
  BackHandler,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Video from "react-native-video";
import { Icon } from "@ant-design/react-native";
import Orientation from 'react-native-orientation';
import MoreSettingView from "./MoreSettingView";

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

const deviceWidth = Dimensions.get("window").width; //设备的宽度
const deviceHeight = Dimensions.get("window").height; //设备的高度

export default class PlayVideo extends Component {
  static navigationOptions = {
    header: null
  };

  static defaultProps = {
    paused: true,
    url: null,
    disableProgress: false,
    disableTime: false,
    disableVolume: false,
    disableBack: false,
    disableEllipsis: false,
    disablePaused: false,
    disableFullScreen: false,
    noNeedPaused: false,
    setFullScreen: () => {},
  }

  state = {
    rate: 1,
    volume: 1,
    isMute: false,
    muted: false,
    resizeMode: "contain",
    duration: 0.0,
    currentTime: 0.0,
    paused: this.props.paused,
    isFullScreen: false,
    videoWidth: deviceHeight,
    videoHeight: deviceWidth,
    isShowMore: false,
  };

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackAndroid);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackAndroid);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      paused: nextProps.paused,
    });
  }

  onBackAndroid = () => {
    this.props.navigation.goBack();
    return true;
  };

  onLoad = data => {
    // console.log('onLoad', data);
    this.setState({ duration: data.duration });
  };

  onProgress = data => {
    this.setState({ currentTime: data.currentTime });
    // console.log(data.currentTime + "hhh");
  };

  onEnd = () => {
    this.setState({ paused: true });
    this.video.seek(0);
  };

  onAudioBecomingNoisy = () => {
    this.setState({ paused: true });
  };

  onAudioFocusChanged = (event: { hasAudioFocus: boolean }) => {
    this.setState({ paused: !event.hasAudioFocus });
  };

  _onSliderValueChange = () => {
    this.setState({ paused: true });
  };

  _onSlidingComplete = (value) => {
    this.video.seek(value);
    this.setState({ paused: false });
  };

  renderRateControl(rate) {
    const isSelected = this.state.rate === rate;

    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ rate });
        }}
      >
        <Text
          style={[
            styles.controlOption,
            { fontWeight: isSelected ? "bold" : "normal" }
          ]}
        >
          {rate}x
        </Text>
      </TouchableOpacity>
    );
  }

  renderResizeModeControl(resizeMode) {
    const isSelected = this.state.resizeMode === resizeMode;

    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ resizeMode });
        }}
      >
        <Text
          style={[
            styles.controlOption,
            { fontWeight: isSelected ? "bold" : "normal" }
          ]}
        >
          {resizeMode}
        </Text>
      </TouchableOpacity>
    );
  }

  renderVolumeControl() {
    return (
      <View style={[styles.volume, { width: this.state.isFullScreen ? 300 : 120 }]}>
        <Icon name="sound" type="md" color={'#FFF'} />
        <Slider
          style={{flex: 1}}
          value={this.state.volume * 100}
          minimumValue={0}
          maximumValue={100}
          thumbImage={require('./icon_control_slider.png')}
          maximumTrackTintColor={'#FFF'}//滑块右侧轨道的颜色
          minimumTrackTintColor={'#FF3030'}//滑块左侧轨道的颜色
          onValueChange={this._onSliderValueChange.bind(this)}
        />
      </View>
    );
  }

  _onSliderValueChange(value) {
    let isMute = (value === 0);
    this.setState({
      volume: value / 100,
      isMute: isMute,
    });
  }
  onChangePause() {
    if(this.props.noNeedPaused) {
      return;
    }
    this.setState({ paused: !this.state.paused });
  }

  _onBack = () => {
    if(!this.state.isFullScreen) {
      console.log(this.props.navigation)
      this.props.navigation.goBack(null);
      return;
    };
    Orientation.lockToPortrait();
    this.setState({
      isFullScreen: false,
    })
    this.props.setFullScreen(false);
  }

  _onMore = () => {
    this.setState({
      isShowMore: true,
      // paused: true,
    });
  }

  _onPause = () => {
    this.setState({ paused: !this.state.paused });
  }

  _onFullScreen = () => {
    const { isFullScreen } = this.state;
    this.props.setFullScreen(!isFullScreen);
    this.setState({
      isFullScreen: !isFullScreen,
    })
    if(isFullScreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }
  };

  _onCloseMore = (bool) => {
    this.setState({
      isShowMore: bool,
      // paused: false,
    });
  }

  onPlayRateChange = (rate) => {
    this.setState({
      rate,
      isShowMore: false,
    });
  }
  onEndTimeChange = (index) => {
    this.setState({
      isShowMore: false,
    });
  }

  onMuteVolume = (isMute) => {
    if(isMute) {
      volume = 0;
    } else {
      volume = 1.0;
    }
    // let volume = this.state.volume;
    // if (!isMute && volume === 0) {
    //   volume = 1.0;
    // }
    this.setState({
      isMute: isMute,
      volume: volume,
      isShowMore: false,
    })
  }
  render() {
    const { style, disableTime, disableVolume, disableProgress, disableBack, disableEllipsis, disablePaused, disableFullScreen } = this.props;
    const { isFullScreen, videoWidth, videoHeight, isShowMore, isMute } = this.state;

    return (
      <View style={[styles.container, style, this.state.isFullScreen && {width: videoWidth, height: videoHeight}]} >
        <TouchableWithoutFeedback
          style={styles.fullScreen}
          onPress={() => this.onChangePause()}
        >
          <Video
            ref={(ref) => {
              this.video = ref;
            }}
            /* For ExoPlayer */
            source={{uri: this.props.url || 'https://gslb.miaopai.com/stream/HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__.mp4?ssig=bbabfd7684cae53660dc2d4c2103984e&time_stamp=1533631567740&cookie_id=&vend=1&os=3&partner=1&platform=2&cookie_id=&refer=miaopai&scid=HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__', type: 'mpd'}}
            style={styles.fullScreen}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={this.onEnd}
            onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            onAudioFocusChanged={this.onAudioFocusChanged}
            repeat={false}
          />

        </TouchableWithoutFeedback>
        {
          disableProgress &&
          <View style={styles.controls}>
            <View style={styles.progress}>
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
            </View>
          </View>
        }
        {
          disableBack &&
          <View style={styles.backImg}>
            <TouchableWithoutFeedback onPress={() => this._onBack()}>
              <Icon name="left" size="md" color={'white'} />
            </TouchableWithoutFeedback>
          </View>
        }
        {
          disableEllipsis &&
          <View style={styles.moreImg}>
            <TouchableWithoutFeedback onPress={() => this._onMore()}>
              <Icon name="ellipsis" size="md" color={'white'} />
            </TouchableWithoutFeedback>
          </View>
        }
        <View style={styles.stopImg}>
          {
            disablePaused &&
            <TouchableWithoutFeedback onPress={() => this._onPause()}>
              <Icon name={this.state.paused ? 'caret-right' : 'pause'} size="md" color={'white'} />
            </TouchableWithoutFeedback>
          }
          {
            disableTime &&
            <Text style={styles.progressCTime}>
              {formatTime(this.state.currentTime)}
            </Text>
          }
          {
            disableVolume && this.renderVolumeControl()
          }
        </View>
        <View style={styles.fullImg}>
          {
            disableTime &&
            <Text style={styles.progressCTime}>
              {formatTime(this.state.duration)}
            </Text>
          }
          {
            disableFullScreen &&
            <TouchableWithoutFeedback onPress={this._onFullScreen.bind(this)}>
              <Icon name={isFullScreen ? 'fullscreen-exit' : 'fullscreen' } size="md" color={'white'} />
            </TouchableWithoutFeedback>
          }
        </View>
        {
          this.state.isShowMore &&
          <MoreSettingView
            isMute={isMute}
            isShowMore={isShowMore}
            isFullScreen={isFullScreen}
            selectedRate={this.state.rate}
            selectedEndTimeIndex={0}
            onClose={(bool) => this._onCloseMore(bool)}
            onPlayRateChanged={(rate) => { this.onPlayRateChange(rate); }}
            onEndTimeSelected={(index) => { this.onEndTimeChange(index); }}
            onFavoriteTapped={() => { this.setState({isShowMore: false}) }}
            onDownloadTapped={() => { this.setState({isShowMore: false}) }}
            onMuteVolumeTapped={(isMute) => { this.onMuteVolume(isMute); }}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "black",
  },
  fullScreen: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  controls: {
    backgroundColor: "transparent",
    borderRadius: 5,
    position: "absolute",
    bottom: 0,
    left: 20,
    right: 20,
    height: 56,
  },
  progress: {
    flex: 1,
  },
  progressCTime: {
    width: 60,
    textAlign: 'center',
    fontSize: 14,
    color: "#FFFFFF",
  },
  innerProgressCompleted: {
    flex: 1,
    height: 2,
    backgroundColor: "#FF3030"
  },
  innerProgressRemaining: {
    flex: 1,
    height: 2,
    backgroundColor: "#2C2C2C"
  },
  controlOption: {
    fontSize: 12,
    color: "white",
    lineHeight: 12
  },
  backImg: {
    backgroundColor: "transparent",
    position: 'absolute',
    top: 5,
    left: 5,
    paddingRight: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreImg: {
    backgroundColor: "transparent",
    position: 'absolute',
    top: 5,
    right: 5,
    paddingLeft: 5,
    paddingBottom: 5,
  },
  stopImg: {
    backgroundColor: "transparent",
    position: 'absolute',
    left: 5,
    bottom: 5,
    paddingRight: 5,
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullImg: {
    backgroundColor: "transparent",
    position: 'absolute',
    right: 5,
    bottom: 5,
    paddingLeft: 5,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  volume: {
    position: 'absolute',
    bottom: 0,
    left: 80,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});
