import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { Button, Icon, NoticeBar } from "@ant-design/react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { containers } from '../../../style';
import { reduxStore } from '../../../utils/utils';
import { defSongList, defDailyInfo } from '../../../utils/defaultData';
import { UpdateVideoList, UpdateSongList, UpdateAllMusic, UpdateDailyRecommend, UpdateDownload } from "../../../actions/setting";
import types from '../../../actions/types';
import allMusic from '../../../utils/AllMusic';
import BasicSliderExample from './BasicSliderExample';

@connect(state => ({
  local: state.local
}))
export default class AntdScreen extends Component {
  static defaultProps = {
    visible: false,
  };

  static propTypes = {
    onClose: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onPress() {
    // console.log(this.props);
    // this.props.dispatch(types.localProfile({age: 10}))
    const { dispatch, getState } = reduxStore;
    // let data =getState.local.dailyRecommend.data;
    // console.log(data)
    // let list = []
    // data.forEach(ele => {
    //   list.push(ele.id)
    // });
    // defDailyInfo.list = list.sort((a, b) => a-b);
    // dispatch(types.localProfile({age: 25}))
    // dispatch(UpdateSongList({list: defSongList.list}));
    // dispatch(UpdateAllMusic({data: allMusic}))

    // dispatch(UpdateDailyRecommend({data: data.sort((a, b) => a.id - b.id)}))
    // dispatch(types.loading(1));
    dispatch(UpdateDownload({data: []}))
  }


  render() {
    return (
      <View style={containers}>
        <NoticeBar>
        Notice: The arrival time of incomes and transfers of Yu 'E Bao will be
          delayed during National Day.
        </NoticeBar>
        <Button style={{marginBottom: 50,}} onPress={this.onPress.bind(this)}>Button</Button>
        <ScrollView>
        <BasicSliderExample/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
