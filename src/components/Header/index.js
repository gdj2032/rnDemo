import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { themesColor } from '../../style';

export default class Header extends Component {

  listening = () => {
    alert('listening');
    // this.props.navigation;
  }

  render() {
    const { LeftItem, CenterItem, defaultItem, RightItem, style } = this.props;
    return (
      <View style={[styles.header, style]}>
        { LeftItem() }
        { CenterItem() }
        {
          defaultItem ?
          <TouchableOpacity style={styles.trans} onPress={this.listening}>
            <Icon name="align-right" size="md" color={themesColor.black}/>
          </TouchableOpacity>
          :
          RightItem()
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 40,
    // backgroundColor: '#fffddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trans: {
    transform: [{rotate: '90deg'}]
  }
});
