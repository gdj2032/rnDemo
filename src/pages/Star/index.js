import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button, Icon } from '@ant-design/react-native';
import { themesColor } from '../../style';

export default class Star extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => <Icon name="star" size="md" color={tintColor} focused={focused} />,
    // tabBarOnPress({ navigation, defaultHandler }) {
    // },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Star</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themesColor.backgroundColor,
  },
});