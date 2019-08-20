import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import PropTypes from "prop-types";
import { Icon } from '@ant-design/react-native';
import { text_f16_fw5_white, themesColor, text_f10_white, text_f12_white } from '../../../style';
import CoverView from '../../../components/CoverView';

const navButton = [
  {
    key: 1,
    text: '评论',
    icon: 'message',
  },{
    key: 2,
    text: '分享',
    icon: 'share-alt'
  },{
    key: 3,
    text: '下载',
    icon: 'download'
  },{
    key: 4,
    text: '多选',
    icon: 'select'
  },
]
export default class SLMessage extends Component {
  static defaultProps = {
    visible: false,
  };

  static propTypes = {
    onMessage: PropTypes.func,
    onShare: PropTypes.func,
    onDownload: PropTypes.func,
    onSelect: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  _onNavPress(key) {
    this.selectKey(key);
  }

  selectKey(key) {
    switch (key) {
      case 1:
        return this.props.onMessage && this.props.onMessage();
      case 2:
        return this.props.onShare && this.props.onShare();
      case 3:
        return this.props.onDownload && this.props.onDownload();
      case 4:
        return this.props.onSelect && this.props.onSelect();
      default:
        return false;
    }
  }

  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        {this.props.children}
        <View style={styles.message}>
          <View style={styles.imageView}>
            <Image source={require('../../../image/sl_screen1.png')} style={styles.imageView}/>
            <CoverView>
              <View style={styles.center}>
                <Image source={require('../../../image/heart.png')} style={styles.heart}/>
              </View>
            </CoverView>
            <View style={styles.topLeft}>
              <Icon name="caret-right" size="xs" color={themesColor.white} />
              <Text style={text_f10_white}>{data.all}</Text>
            </View>
          </View>
          <View style={styles.msgView}>
            <Text style={text_f16_fw5_white}>{data.title}</Text>
            <View style={styles.msg_text}>
              <Image source={require('../../../image/song.png')} style={styles.msg_image} />
              <Text style={text_f12_white}>{'xxxxxx之旅'}</Text>
              <Icon name="right" size="md" color={themesColor.white} />
            </View>
          </View>
        </View>
        <View style={styles.navMsg}>
          {
            navButton.map(ele =>
              <TouchableOpacity onPress={() => this._onNavPress(ele.key)}>
                <Icon name={ele.icon} size="md" color={themesColor.white} />
                <Text style={text_f10_white}>{ele.text}</Text>
              </TouchableOpacity>
            )
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
  },
  message: {
    width: '100%',
    height: 180,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  imageView: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  heart: {
    width: 90,
    height: 90,
  },
  topLeft: {
    position: 'absolute',
    top: 5,
    right: 5,
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgView: {
    height: 150,
    alignItems: 'center',
    marginLeft: 10,
  },
  msg_text: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  msg_image: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navMsg: {
    width: '100%',
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
