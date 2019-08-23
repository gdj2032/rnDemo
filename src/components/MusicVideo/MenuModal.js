import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback, FlatList} from 'react-native';
import { Icon, Modal } from "@ant-design/react-native";
import PropTypes from "prop-types";

export default class MenuModal extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
  });
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

  renderItem = (item) => {
    return(
      <View style={styles.renderItem}>
        <Text>{item.name}</Text>
        <Text>-</Text>
        <Text>{item.editor}</Text>
      </View>
    )
  }

  render() {
    const { visible, onClose, data, slData } = this.props;
    return (
      <Modal
        visible={visible}
        popup
        animationType="slide-up"
        onClose={onClose}
        maskClosable={true}
        style={styles.modal}
      >
        <View style={styles.m_top}>
          <View style={styles.mt_left}>
            <Icon name="retweet" size="md" color={'#000'} />
            <Text>循环播放</Text>
          </View>
          <View style={styles.mt_right}>
            <Icon name="folder-add" size="md" color={'#000'} />
            <Text>收藏全部</Text>
            <Icon name="delete" size="md" color={'#000'} />
          </View>
        </View>
        <View style={styles.m_list}>
          <FlatList
            data={slData}
            renderItem={({item}) => this.renderItem(item)}
            keyExtractor={(item) => item}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.line} />}
          />
        </View>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.close}>
            <Text>关闭</Text>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    height: 500,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  m_top: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#A5A5A5',
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  mt_left: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mt_right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  m_list: {
    width: '100%',
    height: 360,
    paddingLeft: 10,
    paddingRight: 10,
  },
  renderItem: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  close: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#A5A5A5',
    borderTopWidth: 1,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#e5e5e5'
  }
});
