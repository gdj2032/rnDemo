import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button, Icon, NoticeBar } from "@ant-design/react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { containers } from '../../../style';
import { reduxStore } from '../../../utils/utils';
import { defSongList } from '../../../utils/defaultData';
import { UpdateVideoList, UpdateSongList, UpdateAllMusic, UpdateDailyRecommend } from "../../../actions/setting";
import types from '../../../actions/types';
import allMusic from '../../../utils/AllMusic';

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
    const { dispatch } = reduxStore;
    // dispatch(types.localProfile({age: 25}))
    // dispatch(UpdateSongList({list: defSongList.list}));
    dispatch(UpdateAllMusic({data: allMusic}))
    // dispatch(UpdateDailyRecommend({data: [], time: null}))
    // dispatch(types.loading(1));
  }


  render() {
    return (
      <View style={containers}>
        <NoticeBar>
        Notice: The arrival time of incomes and transfers of Yu 'E Bao will be
          delayed during National Day.
        </NoticeBar>
        <Button style={{marginBottom: 50,}} onPress={this.onPress.bind(this)}>Button</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
