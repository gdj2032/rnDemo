import React, { Component } from "react";
import { StyleSheet, Text, View, PanResponder, Animated } from "react-native";
import { Button, Icon } from "@ant-design/react-native";
import Video from "react-native-video";
import { connect } from "react-redux";
import { themesColor, containers } from "../../style";
import Icons from "../../components/Icons";
import { UpdateVideoList } from "../../actions/setting";
import { defVideoList } from "../../utils/defaultData";
import { reduxStore } from "../../utils/utils";
import ScreenPage from "./ScreenPage";
import { scaleSize } from "../../utils";
import { deviceWidth } from "../../utils/scale";

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
    dispatch(UpdateVideoList({ list: defVideoList }));
  }

  render() {
    const { paused } = this.state;
    return (
      <View style={containers}>
        {/* <Icons name="sc-telegram" type="evilicon" color="#517fa4" size={40} />
        <Icons name="music" type="font-awesome" color="#517fa4" size={40} />
        <Button onPress={this.onPress.bind(this)}>Button</Button> */}
        <View style={styles.container}>
          <ScreenPage
            paused={true}
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
    width: '100%',
    height: scaleSize(600)
  },
});
