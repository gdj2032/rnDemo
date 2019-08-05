import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator } from 'react-navigation';

import mainRouteConfigMap from './src/pages';
import { screenTime } from './src/utils';

const routeConfigMap = {
  ...mainRouteConfigMap,
};

const Navigator = createStackNavigator(routeConfigMap, {
  headerMode: 'none',
});

export default class App extends Component {

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, screenTime);
  }

  render() {
    return (
      <Navigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
