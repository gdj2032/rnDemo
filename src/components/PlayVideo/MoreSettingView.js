import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity
} from "react-native";
import { Modal, Provider } from "@ant-design/react-native";
import { Icon } from "@ant-design/react-native";
import PropTypes from "prop-types";

export default class MoreSettingView extends Component {
  static defaultProps = {
    selectedRate: 1.0,
    selectedEndTimeIndex: -1,
    isMute: false,
    isDownload: false,
  };

  static propTypes = {
    onClose: PropTypes.func,
    onPlayRateChanged: PropTypes.func,
    onEndTimeSelected: PropTypes.func,
    onFavoriteTapped: PropTypes.func,
    onDownloadTapped: PropTypes.func,
    onMuteVolumeTapped: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      isMute: this.props.isMute,
      isDownload: this.props.isDownload,
      selectedEndTimeIndex: this.props.selectedEndTimeIndex,
      selectedRate: this.props.selectedRate,
    };
  }

  _onClose() {
    this.props.onClose(false);
  }

  onChangeEndTime(index) {
    this.setState({
      selectedEndTimeIndex: index,
    });
    this.props.onEndTimeSelected && this.props.onEndTimeSelected();
  }

  onChangeRate(item) {
    this.setState({
      selectedRate: item
    });
    this.props.onPlayRateChanged && this.props.onPlayRateChanged(item);
  }

  _onTapFavorite = () => {
    this.props.onFavoriteTapped && this.props.onFavoriteTapped();
  };

  _onTapDownload = () => {
    this.props.onDownloadTapped && this.props.onDownloadTapped();
  };

  _onTapMute = () => {
    let isMute = !this.state.isMute;
    this.props.onMuteVolumeTapped && this.props.onMuteVolumeTapped(isMute);
  };

  render() {
    const { isShowMore } = this.props;
    return (
      <View style={styles.contain}>
        <Provider>
          <Modal
            visible={isShowMore}
            onClose={() => this._onClose()}
            transparent={false}
          >
            <View style={styles.content}>
              <View style={styles.optionView}>
                <TouchableOpacity style={styles.itemView} onPress={this._onTapFavorite}>
                  <Icon name="heart" type="md" color={'#FFF'} />
                  <Text style={styles.textItem}>加入收藏</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.itemView, {marginLeft: 40}]} onPress={this._onTapDownload}>
                <Icon name="cloud-download" type="md" color={'#FFF'} />
                  <Text style={styles.textItem}>缓存</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.itemView, {marginLeft: 40}]} onPress={this._onTapMute}>
                <Icon name="sound" type="md" color={'#FFF'} />
                  <Text style={[styles.textItem, this.state.isMute ? {color: '#ff5500'} : null]}>静音</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.optionView}>
                <Text style={styles.optionText}>定时关闭</Text>
                {endTimeItems.map((item, index) => {
                  let isSelected = this.state.selectedEndTimeIndex === index;
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.optionItem}
                      onPress={() => this.onChangeEndTime(index)}
                    >
                      <Text
                        style={[
                          styles.optionText,
                          isSelected ? styles.optionText_active : null
                        ]}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View style={styles.optionView}>
                <Text style={styles.optionText}>多倍速播放</Text>
                {playRateItems.map((item, index) => {
                  let isSelected = this.state.selectedRate === item;
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.optionItem}
                      onPress={() => this.onChangeRate(item)}
                    >
                      <Text
                        style={[
                          styles.optionText,
                          isSelected ? styles.optionText_active : null
                        ]}
                      >
                        {item}X
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </Modal>
        </Provider>
      </View>
    );
  }
}

const playRateItems = [0.5, 1.0, 1.25, 1.5, 2.0];
const endTimeItems = ["不开启", "播完当前", "30:00", "60:00"];
export const onePixel = 1 / PixelRatio.get();

const styles = StyleSheet.create({
  contain: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  content: {
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  optionView: {
    flexDirection:'row',
    alignItems:'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: onePixel,
    borderBottomColor: 'white',
    width: 320,
    height: 60,
  },
  itemView: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
  },
  textItem: {
    fontSize: 14,
    color:'white',
    marginTop: 5
  },
  optionText: {
    fontSize: 14,
    color:'white',
  },
  optionText_active: {
    color: '#ff5500'
  },
  optionItem: {
    marginLeft: 20
  },
});
