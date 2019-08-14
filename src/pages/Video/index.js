import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button, Icon } from '@ant-design/react-native';
import { themesColor, containers } from '../../style';

export default class Video extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => <Icon name="play-square" size="md" color={tintColor} focused={focused} />,
  };
  render() {
    return (
      <View style={containers}>
        <Text>Video</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
