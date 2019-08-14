import React, {Component} from 'react';
import {StyleSheet, Text, View, PanResponder, Animated} from 'react-native';
import { Button, Icon } from '@ant-design/react-native';
import { connect } from 'react-redux';
import { themesColor, containers } from '../../style';
import PullScrollView from '../../components/PullScrollView';
import Icons from '../../components/Icons';
import types from '../../actions/types';
import { reduxStore } from '../../utils/utils';
import { UpdateLocalProfile } from '../../actions/setting';

@connect(state => ({
  local: state.local,
}))
export default class Test extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => <Icon name="eye" size="md" color={tintColor} focused={focused} />,
    // tabBarOnPress({ navigation, defaultHandler }) {
    // },
  };

  state = {
    // data: [{key: '1'}, {key: '12'}, {key: '122'}, {key: '11'}, {key: '12s2'}, {key: '1aa1'}, {key: '1aqaa1'}, {key: '1aqaaaa1'}, {key: '1aasqaa1'}],
  }
  // onPullRelease(resolve) {
  //   //刷新完毕，重置下拉刷新，再次更新刷新和加载更多状态
  //   console.log('onPullRelease')
  //   setTimeout(() => {
  //     let data = this.state.data;
  //     data.push({key: 'q'});
  //     this.setState({data})
  //     resolve();
  //   }, 3000);
  // }
  // moreLoading() {
  //   setTimeout(() => {
  //     let data = this.state.data;
  //     data.push({key: 'q'});
  //     this.setState({data})
  //   }, 1000);
  // }
  // dataItem = () => {
  //   const { data } = this.state;
  //   return (
  //     data.map((ele, index) => <Text key={index} style={styles.text}>{ele.key}</Text>)
  //   )
  // }

  onPress() {
    console.log(this.props);
    // this.props.dispatch(types.localProfile({age: 10}))
    const {dispatch} = reduxStore;
    // dispatch(types.localProfile({age: 25}))
    dispatch(UpdateLocalProfile({age: 15}))
  }
  render() {
    const { data } = this.state;
    return (
      <View style={containers}>
        {/* <PullScrollView
          isScrollView={true}
          style={{backgroundColor: 'white'}}
          onPullRelease={this.onPullRelease.bind(this)}
          isNeedMoreLoading={true}
          moreLoading={this.moreLoading.bind(this)}
        >
          {
            this.dataItem()
          }
        </PullScrollView> */}
        {/* <PullScrollView
          isScrollView={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item}
          numColumns={1}
          data={data}
          renderItem={({item}, index) => <Text index={index} style={styles.text}>{item.key}</Text>}
          style={{ backgroundColor: 'white' }}
          onPullRelease={this.onPullRelease.bind(this)}
          isNeedMoreLoading={true}
          moreLoading={this.moreLoading.bind(this)}
        /> */}
        <Icons name="sc-telegram" type="evilicon" color="#517fa4" size={40} />
        <Icons name='music' type='font-awesome' color="#517fa4" size={40} />
        <Button onPress={this.onPress.bind(this)}>Button</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    height: 100,
    textAlign: 'center',
    borderWidth: 1,
    borderBottomColor: 'black',
  }
});
