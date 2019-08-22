import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import PropTypes from "prop-types";

let lyrObj = []; //存放歌词
export default class LyricsItem extends Component {
  static defaultProps = {
    currentTime: 0.0
  };

  static propTypes = {
    onClose: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      currentTime: this.props.currentTime
    };
  }

  componentDidMount() {
    this.init();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ currentTime: nextProps.currentTime })
  }

  componentWillUnmount() {
    lyrObj = [];
  }
  init = () => {
    const { data } = this.state;
    console.log(data);
    const { lrc } = data;
    console.log(lrc);
    let lrcArr = lrc.trim().split("[");
    console.log(lrcArr);
    lrcArr.forEach(val => {
      let obj = {}; //用于存放时间
      val = val.replace(/(^\s*)|(\s*$)/g, ""); //正则,去除前后空格
      let indeofLastTime = val.indexOf("]"); // ]的下标
      let timeStr = val.substring(1, indeofLastTime); //把时间切出来 0:04.19
      let minSec = "";
      let timeMsIndex = timeStr.indexOf("."); // .的下标
      console.log(timeStr);
      let curTime = '';
      if (timeMsIndex !== -1) {
        //存在毫秒 0:04.19
        minSec = timeStr.split('.'); // 0:04.
        obj.ms = Number(minSec[1]) //毫秒值 19
        curTime = minSec[0].split(":"); // [0,04]
      } else {
        //不存在毫秒 0:04
        minSec = timeStr;
        obj.ms = 0;
        curTime = minSec.split(":"); // [0,04]
      }
      console.log(curTime);
      obj.min = Number(curTime[0]); //分钟 0
      obj.sec = Number(curTime[1]); //秒钟 04
      obj.txt = val.substring(indeofLastTime + 1, val.length); //歌词文本: 留下唇印的嘴
      obj.txt = obj.txt.replace(/(^\s*)|(\s*$)/g, "");
      obj.dis = false;
      obj.total = obj.min * 60 + obj.sec + obj.ms / 100; //总时间
      console.log(obj);
      if (obj.txt.length > 0) {
        lyrObj.push(obj);
      }
      console.log(lyrObj);
    });
  }

  renderItem() {
    // 数组
    var itemAry = [];
    for (var i = 0; i < lyrObj.length; i++) {
      var item = lyrObj[i].txt;
      if (this.state.currentTime.toFixed(2) > lyrObj[i].total) {
        //正在唱的歌词
        itemAry.push(
          <View key={i} style={styles.itemStyle}>
            <Text style={{ color: "blue", textAlign: 'center' }}> {item} </Text>
          </View>
        );
        _scrollView.scrollTo({ x: 0, y: 30 * i, animated: false });
      } else {
        //所有歌词
        itemAry.push(
          <View key={i} style={styles.itemStyle}>
            <Text style={{ color: "red", textAlign: 'center' }}> {item} </Text>
          </View>
        );
      }
    }

    return itemAry;
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <ScrollView
          ref={scrollView => {
            _scrollView = scrollView;
          }}
        >
          {this.renderItem()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemStyle: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    backgroundColor: "rgba(255,255,255,0.0)"
  }
});
