import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { screenTime } from '../../utils';

export default class ScreenTimer extends Component {

  state = {
    isScreen: false,
    time: screenTime / 1000,
  }
  componentDidMount() {
    if(this.state.isScreen) {
      return;
    }
    this.timer = setInterval(() => {
      if(this.state.time >= 0) {
        this.setState({ time: this.state.time - 1 })
      } else {
        this.setState({ isScreen: true });
        clearTimeout(this.timer);
      }
    }, 1000);
  }
  render() {
    return (
      <View style={styles.screen}>
        <Text>{this.state.time} '2333'</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    position: 'absolute',
    zIndex: 1000,
  }
});
