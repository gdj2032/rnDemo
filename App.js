import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { createStackNavigator, SafeAreaView } from "react-navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import createAppStore from "./src/store";

import { screenTime } from "./src/utils";
import mainRouteConfigMap from "./src/pages";
import { themesColor } from "./src/style";

const routes = {
  ...mainRouteConfigMap,
};

const Navigator = createStackNavigator(routes, {
  headerMode: "none",
  cardStyle: { shadowColor: 'transparent' }
});

export default class App extends Component {
  states = createAppStore();

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, screenTime);
  }

  render() {
    const { store, persistor } = this.states;
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <SafeAreaView style={styles.container}>
            <Navigator />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themesColor.backgroundColor
  }
});
