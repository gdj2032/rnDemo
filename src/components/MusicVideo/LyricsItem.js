import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import PropTypes from "prop-types";

let lyrObj = []; //存放歌词
export default class LyricsItem extends Component {
  static defaultProps = {
    currentTime: 0.0,
    lyrObj: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      lyrObj: this.props.lyrObj,
      data: this.props.data,
      currentTime: this.props.currentTime
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if(this.state.data.id !== nextProps.data.id) {
      this.setState({
        data: nextProps.data,
        lyrObj: nextProps.lyrObj,
      });
    }
    if(this.state.lyrObj !== nextProps.lyrObj) {
      this.setState({
        lyrObj: nextProps.lyrObj,
      });
    }
    this.setState({
      currentTime: nextProps.currentTime,
    })
  }

  renderItem() {
    // 数组
    var itemAry = [];
    const { lyrObj } = this.state;
    for (var i = 0; i < lyrObj.length; i++) {
      var item = lyrObj[i].txt;
      if (this.state.currentTime.toFixed(2) > lyrObj[i].total && this.state.currentTime.toFixed(2) < lyrObj[i + 1 === lyrObj.length ? i : i + 1].total) {
        //正在唱的歌词
        itemAry.push(
          <View key={i} style={[styles.itemStyle, styles.active]}>
            <Text style={{ color: "red", textAlign: 'center', fontSize: 20 }}> {item} </Text>
          </View>
        );
        this._scrollView.scrollTo({ x: 0, y: 30 * i, animated: true });
      } else {
        //所有歌词
        itemAry.push(
          <View key={i} style={styles.itemStyle}>
            <Text style={{ color: "black", textAlign: 'center', fontSize: 14, }}> {item} </Text>
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
          ref={(ref) => {
            this._scrollView = ref;
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.list_hf} />
          {this.renderItem()}
          <View style={styles.list_hf} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemStyle: {
    height: 30,
    lineHeight: 30,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(255,255,255,0.0)"
  },
  list_hf: {
    height: 200,
  },
  active: {
    backgroundColor: '#dfdfdf'
  }
});
