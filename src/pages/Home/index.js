import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import { Button, Icon } from '@ant-design/react-native';
import { SafeAreaView } from 'react-navigation';
import { themesColor } from '../../style';
import Header from '../../components/Header';
import TextInputButton from '../../components/TextInputButton';

const instructions = Platform.select({
  ios: 'ios Home ',
  android: 'android Home',
});


export default class Home extends Component {
  static navigationOptions = {
    headerRight: (
      <Icon name="align-right" size="lg" color={themesColor.black}/>
    ),
    tabBarIcon: ({ tintColor, focused }) => <Icon name="home" size="md" color={tintColor} focused={focused} />,
    // tabBarOnPress({ navigation, defaultHandler }) {
    // },
  };
  onSetting = () => {
    console.log(123)
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Header
          LeftItem={() => <Icon name={'audio'} size="md" color={themesColor.black}/>}
          CenterItem={() => <TextInputButton/>}
          defaultItem={true}
        />
        <ScrollView>
          <Text style={styles.instructions}>{instructions}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themesColor.backgroundColor,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    fontSize: 24,
  },
});
