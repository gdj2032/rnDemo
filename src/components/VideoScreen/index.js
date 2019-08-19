import React, { Component } from "react";
import { StyleSheet, Text, View, PanResponder, Animated } from "react-native";
import { connect } from "react-redux";
import VideoPage from "./VideoPage";
import { scaleSize } from "../../utils";

@connect(state => ({
  local: state.local
}))
export default class VideoScreen extends Component {

  static defaultProps = {
    paused: true,
    setPaused: () => {},
    setFullScreen: () => {},
    url: null,
    disableBack: false,
    disableEllipsis: false,
    disablePaused: false,
    disableFullScreen: false,
    style: null,
  }

  state = {
    paused: this.props.paused,
    isFullScreen: false
  };

  setFullScreen(bool) {
    this.setState({ isFullScreen: bool });
    this.props.setFullScreen(bool);
  }

  render() {
    const { paused, isFullScreen } = this.state;
    const { style, url, disableBack, disableEllipsis, disablePaused, disableFullScreen } = this.props;
    return (
      <View style={[isFullScreen ? styles.container2 : styles.container1, style]}>
        <VideoPage
          url={url}
          disableBack={disableBack}
          disableEllipsis={disableEllipsis}
          disablePaused={disablePaused}
          disableFullScreen={disableFullScreen}
          paused={paused}
          setFullScreen={(bool) => this.setFullScreen(bool)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    height: 100,
    textAlign: "center",
    borderWidth: 1,
    borderBottomColor: "black"
  },
  container1: {
    width: '100%',
    height: scaleSize(600)
  },
  container2: {
    flex: 1,
  },
});
