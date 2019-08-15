import React, { Component } from "react";
import { StyleSheet, Text, View, PanResponder, Animated } from "react-native";
import { Button, Icon } from "@ant-design/react-native";
import Video from "react-native-video";
import { connect } from "react-redux";
import { themesColor, containers } from "../../style";
import Icons from "../../components/Icons";
import VideoScreen from "./VideoScreen";

const url = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
@connect(state => ({
  local: state.local
}))
export default class Test extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name="eye" size="md" color={tintColor} focused={focused} />
    )
  };

  state = {
    list: this.props.local.videoList.list,
    paused: true
  };

  onPress() {
    console.log(this.props);
    // this.props.dispatch(types.localProfile({age: 10}))
    const { dispatch } = reduxStore;
    // dispatch(types.localProfile({age: 25}))
    dispatch(UpdateLocalProfile({ age: 15 }));
  }

  render() {
    const { paused } = this.state;
    return (
      <View style={containers}>
        <Icons name="sc-telegram" type="evilicon" color="#517fa4" size={40} />
        <Icons name="music" type="font-awesome" color="#517fa4" size={40} />
        <Button onPress={this.onPress.bind(this)}>Button</Button>
        <View style={styles.container}>
          {/* <VideoScreen /> */}
          　　　　
          <Video
            autoPlay={true}
            loop={true}
            style={styles.videocontent}
            fullScreenOnly={false}
            inlineOnly={true}
            url={url}
          />
        </View>
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  videocontent: {
    width: 1000,
    height: 660
  }
});
