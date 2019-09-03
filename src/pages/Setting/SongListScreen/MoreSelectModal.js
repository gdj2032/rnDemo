import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import PropTypes from "prop-types";
import { Icon } from "@ant-design/react-native";
import { themesColor } from '../../../style';

const selectData = [
  {
    id: 's1',
    text: '下一首播放',
    icon: 'play-circle',
  },
  {
    id: 's2',
    text: '收藏到歌单',
    icon: 'plus-circle',
  },
  {
    id: 's3',
    text: '下载',
    icon: 'download',
  },
  {
    id: 's4',
    text: '删除',
    icon: 'delete',
  },
]

export default class MoreSelectModal extends Component {
  static defaultProps = {
    active: false,
  };

  static propTypes = {
    onPaly: PropTypes.func,
    onAdd: PropTypes.func,
    onDownload: PropTypes.func,
    onDelete: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.data.length > 0) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  }

  touchBtn = (item) => {
    const color = this.state.active ? themesColor.black : themesColor.gray;
    return(
      <TouchableWithoutFeedback onPress={() => this.state.active && this.selectKey(item.id)} key={item.id}>
        <View style={styles.center}>
          <Icon name={item.icon} size="md" color={color} />
          <Text style={{color: color}}>{item.text}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  selectKey(key) {
    switch (key) {
      case 's1':
        return this.props.onPaly && this.props.onPaly();
      case 's2':
        return this.props.onAdd && this.props.onAdd();
      case 's3':
        return this.props.onDownload && this.props.onDownload();
      case 's4':
        return this.props.onDelete && this.props.onDelete();
      default:
        return false;
    }
  }

  render() {
    const { visible, onClose, height } = this.props;
    return (
      <View style={styles.contain}>
        {
          selectData.map(ele => this.touchBtn(ele))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    width: '100%',
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  center: {
    width: 72,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
