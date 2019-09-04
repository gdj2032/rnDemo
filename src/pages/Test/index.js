import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Animated, Easing } from "react-native";
import { Button, Icon } from "@ant-design/react-native";
import { connect } from "react-redux";
import { containers } from "../../style";
import { scaleSize } from "../../utils";
import MyTest from "./MyTest";
import SongFetch from "./SongFetch";

const screen = [
  {
    nav: 'AnimatedScreen',
    name: 'Animated 动画'
  },{
    nav: 'AntdScreen',
    name: 'AntDesign'
  },{
    nav: 'IconsScreen',
    name: 'Icons'
  },
]

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

  _onPress(nav) {
    this.props.navigation.navigate(nav);
  }

  render() {
    return (
      <View style={containers}>
        <ScrollView>
          {
            screen.map(ele => <Button key={ele.nav} onPress={this._onPress.bind(this, ele.nav)}>{ele.name}</Button>)
          }
          <MyTest/>
          <SongFetch/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
