import React, { Component } from "react";
import { StyleSheet, View, PanResponder, Text, Animated } from "react-native";
import { Icon } from "@ant-design/react-native";

const factor = 2;

//下拉状态
const RefreshStatus = {
  none: 0,
  pull: 1,
  loading: 2,
};

const RefreshText = ['', '下拉中...', '加载中...']

export default class PullToRefresh extends Component {
  static defaultProps = {
    refreshHeight: 100, //下拉组件高度
    maxHeight: 200, //下拉最长距离
    isSelfRefresh: false, //是否自定义下拉组件
    selfRefresh: () => {}, //自定义下拉组件
    onRefresh: () => {}, //刷新事件
  };

  constructor(props) {
    super(props);
    this.state = {
      refreshStatus: 0,
      top: -this.props.refreshHeight,
      bodyTop: 0,
      rotate: 0,
    };
  }

  componentDidMount() {}

  _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt, gs) => {
      if(this.state.refreshStatus !== RefreshStatus.none) {
        return;
      }
      if(gs.dy < 0) {
        return;
      }
      this._top = this.state.top;
      this.setState({
        refreshStatus: RefreshStatus.pull
      });
      clearInterval(this.transTimer)
      this.iconTrans();
    },
    onPanResponderMove: (evt, gs) => {
      if(this.state.refreshStatus !== RefreshStatus.pull) {
        return;
      }
      if(gs.dy < 0) {
        return;
      }
      const gy = gs.dy;
      const { top, bodyTop } = this.state;
      const { refreshHeight, maxHeight } = this.props;
      if (gy > refreshHeight && this._top < 0) {
        this.setState({
          top: 0
        });
      }
      if (gy > maxHeight) {
        this.setState({
          bodyTop: bodyTop + factor / 2
        });
        return;
      }
      if (gy <= refreshHeight) {
        this.setState({
          top: this._top + gy
        });
      }
      if (gy > refreshHeight) {
        this.setState({
          bodyTop: top + factor
        });
        return;
      }
    },
    onPanResponderRelease: (evt, gs) => {
      if(gs.dy < 0) {
        return;
      }
      this.setState({
        top: 0,
        bodyTop: 0,
        refreshStatus: RefreshStatus.loading
      }, () => {
        this.props.onRefresh();
        setTimeout(() => {
          this.setState({
            top: -this.props.refreshHeight,
            bodyTop: 0,
            refreshStatus: RefreshStatus.none
          });
          clearInterval(this.transTimer)
        }, 2000);
      });
    }
  });

  iconTrans = () => {
    this.transTimer = setInterval(() => {
      this.setState({
        rotate: this.state.rotate + 10
      })
    }, 10);
  }

  defaultRefreshItem = () => {
    return (
      <View style={styles.defaultItem}>
        <Icon name="loading-3-quarters" size="md" style={{transform: [{rotate: `${this.state.rotate}deg`}]}} />
        <Text>{RefreshText[this.state.refreshStatus]}</Text>
      </View>
    );
  };
  render() {
    const { top, bodyTop } = this.state;
    const { refreshHeight, isSelfRefresh, selfRefresh } = this.props;
    return (
      <Animated.View
        style={styles.container}
        {...this._panResponder.panHandlers}
        style={[{ top: top }]}
      >
        <View style={{ width: "100%", height: refreshHeight }}>
          {(isSelfRefresh && selfRefresh()) || this.defaultRefreshItem()}
        </View>
        <View
          style={[
            styles.container,
            { top: bodyTop }
          ]}
        >
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF"
  },
  defaultItem: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
