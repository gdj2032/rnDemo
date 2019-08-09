import React, {Component} from 'react';
import {StyleSheet, Text, View, PanResponder, Animated} from 'react-native';
import { Button, Icon } from '@ant-design/react-native';
import { themesColor } from '../../style';
import PullScrollView from '../../components/PullScrollView';

export default class Test extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => <Icon name="eye" size="md" color={tintColor} focused={focused} />,
    // tabBarOnPress({ navigation, defaultHandler }) {
    // },
  };

  state = {
  }
  onPullRelease(resolve) {
    //刷新完毕，重置下拉刷新，再次更新刷新和加载更多状态
    console.log('onPullRelease')
    setTimeout(() => {
      resolve();
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <PullScrollView
          style={{flex: 1, backgroundColor: 'white'}}
          onPullRelease={this.onPullRelease}
        >
          <Text>11111</Text>
          <Text>2222</Text>
          <Text>44444</Text>
          <Text>11111</Text>
          <Text>2222</Text>
          <Text>44444</Text>
          <Text>11111</Text>
          <Text>2222</Text>
          <Text>44444</Text>
          <Text>11111</Text>
        </PullScrollView>
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
