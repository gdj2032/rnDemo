import React, { Component } from "react";
import {
  Text,
  View,
  Animated,
  Easing,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  kbContainer: {
    // 必须要有一个背景或者一个border，否则本身高度将不起作用
    backgroundColor: "transparent",
    overflow: "hidden"
  },
  kb_text_c: {
    fontSize: 18,
    color: "#181818"
  }
});

export default class ScrollHorizontalText extends Component {
  static defaultProps = {
    enableAnimation: true
  };
  static propTypes = {
    scrollWidth: PropTypes.number,
    data: PropTypes.Array,
    textStyle: PropTypes.Object,
    scrollStyle: PropTypes.Object,
    kbContainer: PropTypes.Object,
    onChange: PropTypes.func,
    enableAnimation: PropTypes.boolean,
    duration: PropTypes.number,
    delay: PropTypes.number,
    onPress: PropTypes.func
  };

  constructor(props) {
    super(props);
    const translateValue = new Animated.ValueXY({ x: 0, y: 0 });
    // translateValue.addListener(({ x, y }) => {
    // })
    this.state = {
      translateValue,
      // 滚屏高度
      scrollWidth: this.props.scrollWidth || 100,
      // 滚屏内容
      kb_content: [],
      // Animated.View 滚动到的 y轴坐标
      kb_tempValue: 0,
      // 最大偏移量
      kb_contentOffsetX: 0,
      // 每一次滚动切换之前延迟的时间
      delay: this.props.delay || 500,
      // 每一次滚动切换的持续时间
      duration: this.props.duration || 500,
      enableAnimation: true
    };
    this.createKbItem = this.createKbItem.bind(this);
  }

  componentDidMount() {
    const content = this.props.data || [];
    if (content.length !== 0) {
      const h = (content.length + 1) * this.state.scrollWidth;
      this.setState({
        kb_content: content.concat(content[0]),
        kb_contentOffsetX: h
      });

      // 开始动画
      // this._startAnimation()
      this.startAnimation();
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        enableAnimation: nextProps.enableAnimation
      },
      () => {
        this.startAnimation();
      }
    );
  }

  componentWillUnmount() {
    if (this.animation) {
      clearTimeout(this.animation);
    }
    if (this.state.translateValue) {
      this.state.translateValue.removeAllListeners();
    }
  }
  overStep(name: string, num: number = 13) {
    if (name.length > num) {
      return `${name.substring(0, num)}...`;
    }
    return name;
  }
  createKbItem(kbItem, index) {
    return (
      <View
        key={index}
        style={[
          {
            justifyContent: "center",
            width: this.state.scrollWidth
          },
          this.props.scrollStyle
        ]}
      >
        <TouchableOpacity onPress={() => this.props.onPress(kbItem.content)}>
          <Text style={[styles.kb_text_c, this.props.textStyle]}>
            {this.overStep(kbItem.title)}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  startAnimation = () => {
    if (this.state.enableAnimation) {
      if (!this.animation) {
        this.animation = setTimeout(() => {
          this.animation = null;
          this.startAnimationSeamless();
        }, this.state.delay);
      }
    }
  };

  startAnimationSeamless = () => {
    this.state.kb_tempValue -= this.state.scrollWidth;
    if (this.props.onChange) {
      const index = Math.abs(this.state.kb_tempValue) / this.state.scrollWidth;
      this.props.onChange(index < this.state.kb_content.length - 1 ? index : 0);
    }
    Animated.sequence([
      // Animated.delay(this.state.delay),
      Animated.timing(this.state.translateValue, {
        isInteraction: false,
        toValue: { x: this.state.kb_tempValue, y: 0 },
        duration: this.state.duration, // 动画持续的时间（单位是毫秒），默认为500
        easing: Easing.linear
      })
    ]).start(() => {
      // 无缝切换
      if (
        this.state.kb_tempValue - this.state.scrollWidth ===
        -this.state.kb_contentOffsetX
      ) {
        // 快速拉回到初始状态
        this.state.translateValue.setValue({ x: 0, y: 0 });
        this.state.kb_tempValue = 0;
      }
      this.startAnimation();
    });
  };

  render() {
    return (
      <View
        style={[
          styles.kbContainer,
          { width: this.state.scrollWidth,
            height: 50, },
          this.props.kbContainer
        ]}
      >
        {this.state.kb_content.length !== 0 ? (
          <Animated.View
            style={[
              { flexDirection: "row" },
              { transform: [{ translateX: this.state.translateValue.x }] }
            ]}
          >
            {this.state.kb_content.map(this.createKbItem)}
          </Animated.View>
        ) : null}
      </View>
    );
  }
}
