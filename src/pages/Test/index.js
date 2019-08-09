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
    data: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3],
    data2: [],
  }
  onPullRelease(resolve) {
    //刷新完毕，重置下拉刷新，再次更新刷新和加载更多状态
    console.log('onPullRelease')
    setTimeout(() => {
      resolve();
    }, 3000);
  }
  moreLoading() {
    setTimeout(() => {
      let data2 = this.state.data2;
      data2.push('q');
      this.setState({data2})
    }, 1000);
  }

  render() {
    const { data, data2 } = this.state;
    return (
      <View style={styles.container}>
        <PullScrollView
          style={{flex: 1, backgroundColor: 'white'}}
          onPullRelease={this.onPullRelease.bind(this)}
          isNeedLoadingMore={true}
          moreLoading={this.moreLoading.bind(this)}
        >
          {
            data.map((ele, index) => <Text key={index} style={styles.text}>{ele}</Text>)
          }
          {
            data2.length > 0 && data2.map((ele, index) => <Text key={index} style={styles.text}>{ele}</Text>)
          }
        </PullScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themesColor.backgroundColor,
  },
  text: {
    height: 50,
    textAlign: 'center',
    borderWidth: 1,
    borderBottomColor: 'black',
  }
});
