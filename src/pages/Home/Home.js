import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { Button, Icon } from '@ant-design/react-native';
import { SafeAreaView } from 'react-navigation';
import { themesColor } from '../../style';

const instructions = Platform.select({
  ios: 'ios Home ',
  android: 'android Home',
});


export default class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => <Icon name="home" size="md" color={tintColor} focused={focused} />,
    // tabBarOnPress({ navigation, defaultHandler }) {
    // },
  };
  componentWillMount() {
    this.props.navigation.setParams({ title: "Home" })
  }
  onSetting = () => {
    this.props.navigation.navigate('HomeNav')
  }

  render() {
    console.log(this.props)
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.setting}>
          <TouchableWithoutFeedback onPress={this.onSetting}>
            <Icon name="setting" size="lg" color={themesColor.blue} />
          </TouchableWithoutFeedback>
        </View>
        <Text style={styles.instructions}>{instructions}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 10,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
  },
});
