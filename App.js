import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator, SafeAreaView } from 'react-navigation';

import { screenTime } from './src/utils';
import mainRouteConfigMap from './src/pages';
import { themesColor } from './src/style';

const routes = {
  ...mainRouteConfigMap
};

const Navigator = createStackNavigator(routes, {
  headerMode: 'none'
})

export default class App extends Component {

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, screenTime);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Navigator />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themesColor.backgroundColor,
  }
});
