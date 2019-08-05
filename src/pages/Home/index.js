import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


const instructions = Platform.select({
  ios: 'ios Home ',
  android: 'android Home',
});


export default class Home extends Component {
  // static navigationOptions = {
  //   tabBarIcon: ({ tintColor, focused }) => <TabBarIcon icon="tabBarHome" color={tintColor} focused={focused} />,
  //   tabBarOnPress({ navigation, defaultHandler }) {
  //     if (navigation.isFocused()) {
  //       resetHandle();
  //     } else {
  //       reloadHandle();
  //       defaultHandler();
  //     }
  //   },
  // };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
