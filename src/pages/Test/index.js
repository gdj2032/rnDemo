import React, { Component } from "react";
import { StyleSheet, Text, View, PanResponder, Animated } from "react-native";
import { Button, Icon } from "@ant-design/react-native";
import Video from "react-native-video";
import { connect } from "react-redux";
import { themesColor, containers } from "../../style";
import Icons from "../../components/Icons";
import { UpdateVideoList, UpdateSongList } from "../../actions/setting";
import { defVideoList, defSongListData } from "../../utils/defaultData";
import { reduxStore } from "../../utils/utils";
import { scaleSize } from "../../utils";
import { deviceWidth } from "../../utils/scale";
import BasicSliderExample from "./BasicSliderExample";
import MovieListScreen from "./MovieListScreen";

@connect(state => ({
  local: state.local
}))
export default class Test extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name="eye" size="md" color={tintColor} focused={focused} />
    ),
  });

  state = {
    list: this.props.local.videoList.list,
  };

  componentDidMount() {
    // console.log(this.props.navigation);
  }

  onPress() {
    // console.log(this.props);
    // this.props.dispatch(types.localProfile({age: 10}))
    const { dispatch } = reduxStore;
    // dispatch(types.localProfile({age: 25}))
    dispatch(UpdateSongList({slData: defSongListData}));
  }

  render() {
    return (
      <View style={containers}>
        <Icons name="sc-telegram" type="evilicon" color="#517fa4" size={40} />
        <Icons name="music" type="font-awesome" color="#517fa4" size={40} />
        <Button onPress={this.onPress.bind(this)}>Button</Button>
        {/* <BasicSliderExample/> */}
        {/* <MovieListScreen/> */}
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
