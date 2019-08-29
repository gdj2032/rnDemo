import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import PropTypes from "prop-types";
import { Icon } from "@ant-design/react-native";
import RowView from "../../../components/RowView";
import {
  themesColor,
  text_f14_fw4_red,
  text_f12_gray,
  text_f14_fw4_black,
  text_f12_black
} from "../../../style";
import TouchRowView from "../../../components/TouchRowView";

export default class DailySticky extends Component {
  static defaultProps = {
    isSelectAll: false,
  };

  static propTypes = {
    onSelectAll: PropTypes.func,
    onCarryOut: PropTypes.func,
    onSelect: PropTypes.func,
  };

  state = {
    checked: false,
    isOpenSelect: false,
  };

  componentWillReceiveProps(nextProps) {
    if(!nextProps.isOpenSelect) {
      this.setState({ checked: false });
    }
  }

  _onOpenSelect = () => {
    this.props.onOpenSelect();
    this.setState({ isOpenSelect: true });
  }

  _onSelectAll = () => {
    this.setState({ checked: !this.state.checked })
    this.props.onSelectAll && this.props.onSelectAll(!this.state.checked);
  }

  _onCarryOut = (bool) => {
    this.setState({ isOpenSelect: false });
    this.props.onCarryOut && this.props.onCarryOut(bool);
  }

  noSelect = () => {
    return (
      <View style={styles.noSelect}>
        <RowView>
          <View style={styles.left_icon}>
            <Icon name="play-circle" size="md" color={themesColor.black} />
          </View>
          <Text style={text_f14_fw4_black}>播放全部</Text>
        </RowView>
        <TouchRowView onPress={() => this._onOpenSelect()}>
          <Icon name="unordered-list" size="md" color={themesColor.black} />
          <Text style={text_f14_fw4_black}>选择</Text>
        </TouchRowView>
      </View>
    );
  };

  select = () => {
    const color = this.state.checked ? themesColor.red : themesColor.gray;
    return (
      <View style={styles.noSelect}>
        <TouchRowView onPress={() => this._onSelectAll()}>
          <View style={styles.left_icon}>
            <Icon name="check-circle" size="md" color={color} />
          </View>
          <Text style={text_f14_fw4_black}>全选</Text>
        </TouchRowView>
        <TouchableWithoutFeedback onPress={() => this._onCarryOut(false)}>
          <View>
            <Text style={text_f14_fw4_red}>完成</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  render() {
    const { isOpenSelect } = this.state;
    return (
      <View style={styles.contain}>
        {
          isOpenSelect ?
          this.select()
          :
          this.noSelect()
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    width: "100%",
    height: 50,
    backgroundColor: themesColor.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingRight: 10,
    justifyContent: 'center',
  },
  noSelect: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  left_icon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
