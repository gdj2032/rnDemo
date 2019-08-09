import React, { Component } from "react";
import { StyleSheet, Text, View, Animated, TouchableOpacity, Easing } from "react-native";
import PropTypes from 'prop-types';
import { themesColor } from "../../style";

const pointsNum = 3; //点数量

const LoadMoreState = {
  state: {
    hide: 0,
    loading: 1,
    noMore: 2,
    error: 4,
  },
  stateText: {
    loading: 'loading',
    noMore: 'noMore',
    tip: 'tip',
    error: 'error'
  }
}

const Config = {
  screenW: 500,
  normalTextColor: themesColor.black
}

export default class LoadMore extends Component {

  static defaultProps = {
    state: LoadMoreState.state.hide, //默认不显示
    loadAnim: false //默认不用动画
  };
  static propTypes = {
    state: PropTypes.number, //当前状态
    onRetry: PropTypes.func, //重试回调
    loadAnim: PropTypes.bool //是否显示加载动画，flatlist尾部组件不支持
  }
  constructor(props) {
    super(props);
    // 初始化点的数量
    this.arr = [];
    for (let i = 0; i < pointsNum; i++) {
      this.arr.push(i);
    }
    // 初始化动画
    this.animatedValue = [];
    this.arr.forEach(value => {
      this.animatedValue[value] = new Animated.Value(0);
    });
    this.state = {
      curState: this.props.state
    };
  }
  componentDidMount() {
    this.isMount = true;
  }
  componentWillUnmount() {
    this.isMount = false;
  }
  /**
   * 动画执行，逐个显示
   */
  animate() {
    this.arr.forEach(value => {
      this.animatedValue[value].setValue(0);
    });
    const animations = this.arr.map(item => {
      return Animated.timing(this.animatedValue[item], {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      });
    });
    this.loadingAnim = Animated.sequence(animations);
    this.loadingAnim.start(result => {
      if (Boolean(result.finished)) this.animate();
    });
  }
  render() {
    return (
      <View style={[styles.container]}>
        {this.state.curState !== LoadMoreState.state.hide
          ? this.renderLoad()
          : null}
      </View>
    );
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      curState: nextProps.state
    });
    switch (nextProps.state) {
      case LoadMoreState.state.loading:
        if (this.props.loadAnim) {
          this.animate();
        }
        break;
      case LoadMoreState.state.hide:
        this.arr.forEach(item => {
          this.animatedValue[item].stopAnimation(value => {
            // console.log('剩余时间' + (1 - value) * 200);
          });
        });
        break;
      case LoadMoreState.state.noMore:
        setTimeout(() => {
          if (this.isMount) {
            this.setState({
              curState: LoadMoreState.state.hide
            });
          }
        }, 3000);
        break;
    }
  }
  /**
   * 根据状态返回绘制文字
   * @returns {string}
   */
  renderLoadText() {
    switch (this.state.curState) {
      case LoadMoreState.state.loading:
        if (this.props.loadAnim) {
          return LoadMoreState.stateText.loading;
        } else {
          return LoadMoreState.stateText.loading + "...";
        }
      case LoadMoreState.state.noMore:
        return LoadMoreState.stateText.noMore;
      case LoadMoreState.state.tip:
        return LoadMoreState.stateText.tip;
      case LoadMoreState.state.error:
        return LoadMoreState.stateText.error;
    }
  }
  // 绘制文字
  renderLoad() {
    const animations = this.arr.map((value, index) => {
      return (
        <Animated.Text
          key={index}
          style={{
            opacity: this.animatedValue[value],
            fontSize: Config.screenW * 0.06,
            color: Config.normalTextColor
          }}
        >
          .
        </Animated.Text>
      );
    });
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: Config.screenW * 0.14
        }}
        onPress={() =>
          new DoubleClick().filterDoubleClick(
            function() {
              if (this.state.curState === LoadMoreState.state.error) {
                this.props.onRetry && this.props.onRetry();
                this.setState({
                  curState: LoadMoreState.state.loading
                });
                this.animate();
              }
            }.bind(this)
          )
        }
      >
        <Text
          style={{
            color: Config.normalTextColor,
            fontSize: Config.screenW * 0.04,
            marginRight: Config.screenW * 0.02
          }}
        >
          {this.renderLoadText()}
        </Text>
        {/*是加载状态绘制。。。的动画*/}
        {this.state.curState === LoadMoreState.state.loading ? (
          <View style={styles.pointsView}>{animations}</View>
        ) : null}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  pointsView: {
    height: Config.screenW * 0.14,
    flexDirection: "row",
    alignItems: "center"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});



// {/*绘制加载view*/}
// <LoadMore
//   state={this.state.loadMoreState}
//   onRetry={() => this.props.onRetry()}
//   loadAnim={this.props.loadAnim}
// />