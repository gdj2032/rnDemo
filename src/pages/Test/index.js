import React, {Component} from 'react';
import {StyleSheet, Text, View, PanResponder, Animated} from 'react-native';
import { Button, Icon } from '@ant-design/react-native';
import { themesColor } from '../../style';
import PullToRefresh from '../../components/PullToRefresh';

export default class Test extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => <Icon name="eye" size="md" color={tintColor} focused={focused} />,
    // tabBarOnPress({ navigation, defaultHandler }) {
    // },
  };

  _onRefresh = () => {
    console.log('onRefresh');
  }

  render() {
    return (
      <View style={styles.container}>
        <PullToRefresh
          onRefresh={this._onRefresh.bind(this)}
        >
          <Text>11111</Text>
          <Text>2222</Text>
          <Text>44444</Text>
        </PullToRefresh>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themesColor.backgroundColor,
  }
});
