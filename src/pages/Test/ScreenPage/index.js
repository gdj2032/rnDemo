import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Button,
  BackHandler,
  Image,
  Dimensions
} from "react-native";
import Video from "react-native-video";
import { Icon } from "@ant-design/react-native";

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
  console.log([zero(h), zero(i), zero(s)].join(":"));
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

export default class ScreenPage extends Component {
  static navigationOptions = {
    header: null
  };

  static defaultProps = {
    paused: true,
    setPaused: () => {},
    url: null,
    disableBack: false,
  }

  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: "contain",
    duration: 0.0,
    currentTime: 0.0,
    paused: this.props.paused,
    isFullScreen: false,
  };

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackAndroid);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackAndroid);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ paused: nextProps.paused });
  }

  onBackAndroid = () => {
    this.props.navigation.goBack();
    return true;
  };

  onLoad = data => {
    console.log('onLoad', data);
    this.setState({ duration: data.duration });
  };

  onProgress = data => {
    this.setState({ currentTime: data.currentTime });
    console.log(data.currentTime + "hhh");
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

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return (
        parseFloat(this.state.currentTime) / parseFloat(this.state.duration)
      );
    }
    return 0;
  }

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

  renderVolumeControl(volume) {
    const isSelected = this.state.volume === volume;

    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ volume });
        }}
      >
        <Text
          style={[
            styles.controlOption,
            { fontWeight: isSelected ? "bold" : "normal" }
          ]}
        >
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    );
  }

  onChangePause() {
    this.setState({ paused: !this.state.paused });
    this.props.setPaused(!this.state.paused);
  }

  // 屏幕旋转时宽高会发生变化，可以在onLayout的方法中做处理，比监听屏幕旋转更加及时获取宽高变化
  _onFullScreen = () => {
    if(this.state.isFullScreen) {
      this.video.dismissFullscreenPlayer();
    } else {
      this.video.presentFullscreenPlayer();
    }
    this.setState({
      isFullScreen: !this.state.isFullScreen,
    })
  };

  render() {
    const { style, disableBack } = this.props;
    const { isFullScreen } = this.state;
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

    return (
      <View style={[styles.container, style]} >
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
        <View style={styles.controls}>
          <View style={styles.trackingControls}>
            <View style={styles.progress}>
              <View
                style={[styles.innerProgressCompleted, { flex: flexCompleted }]}
              />
              <View
                style={[styles.innerProgressRemaining, { flex: flexRemaining }]}
              />
            </View>
          </View>
        </View>
        {
          !disableBack &&
          <View style={styles.backImg}>
            <Icon name="left" size="md" color={'white'} />
          </View>
        }
        <View style={styles.moreImg}>
          <Icon name="ellipsis" size="md" color={'white'} />
        </View>
        <View style={styles.stopImg}>
          {
            this.state.paused ?
            <Icon name="caret-right" size="md" color={'white'} />
            :
            <Icon name="pause" size="md" color={'white'} />
          }
          <Text style={styles.progressCTime}>
            {formatTime(this.state.currentTime)}
          </Text>
        </View>
        <View style={styles.fullImg}>
          <Text style={styles.progressCTime}>
            {formatTime(this.state.duration)}
          </Text>
          <TouchableWithoutFeedback onPress={this._onFullScreen.bind(this)}>
            <Icon name="fullscreen" size="md" color={'white'} />
          </TouchableWithoutFeedback>
        </View>
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
    bottom: 2,
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
  },
  moreImg: {
    backgroundColor: "transparent",
    position: 'absolute',
    top: 5,
    right: 5,
  },
  stopImg: {
    backgroundColor: "transparent",
    position: 'absolute',
    left: 5,
    bottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullImg: {
    backgroundColor: "transparent",
    position: 'absolute',
    right: 5,
    bottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
