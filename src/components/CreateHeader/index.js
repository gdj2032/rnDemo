import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { themesColor } from '../../style';
import { setSpText } from '../../utils';

export default class CreateHeader extends Component {

  render() {
    const { data, visible, onShowPanel, onAdd, onMore } = this.props;
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onShowPanel}>
          <View style={styles.left}>
            <Icon name={visible ? 'down' : 'right'} size="sm" color={themesColor.black} />
            <Text style={styles.left_t1}>{data.text}</Text>
            <Text style={styles.left_t2}>{`(${data.list.length})`}</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.right}>
          <TouchableWithoutFeedback onPress={onAdd} style={styles.right_icon}>
            <Icon name="plus" size="md" color={themesColor.black} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={onMore} style={styles.right_icon}>
            <Icon name="ellipsis" size="md" color={themesColor.black} style={styles.more}/>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    flex: 0.8,
    flexDirection: 'row',
  },
  left_t1: {
    fontSize: setSpText(18),
    fontWeight: '500',
    color: themesColor.black,
  },
  left_t2: {
    fontSize: setSpText(14),
    color: themesColor.gray,
  },
  right: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  right_icon: {
    flex: 0.5,
  },
  more: {
    transform: [{rotate: '90deg'}]
  },
});
