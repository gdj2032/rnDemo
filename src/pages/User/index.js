import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button, Icon } from '@ant-design/react-native';
import { themesColor, containers } from '../../style';

export default class User extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => <Icon name="user" size="md" color={tintColor} focused={focused} />,
    // tabBarOnPress({ navigation, defaultHandler }) {
    // },
  };

  render() {
    return (
      <View style={containers}>
        <Text>User</Text>
        <Button onPress={() => this.props.navigation.navigate('FullScreen')} >123</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
