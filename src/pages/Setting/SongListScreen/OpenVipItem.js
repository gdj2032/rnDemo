import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import PropTypes from "prop-types";
import { Icon } from '@ant-design/react-native';
import RowView from '../../../components/RowView';
import { themesColor, text_f14_fw5_white, text_f12_gray, text_f14_fw4_black } from '../../../style';

export default class OpenVipItem extends Component {

  render() {
    const { defVip, isSelect } = this.props;
    return (
      <View style={styles.contain}>
        <View style={styles.openVip}>
          <RowView>
            <View style={styles.music}>
              <Image source={require('../../../image/vip_music.png')} style={styles.vip_music} />
            </View>
            <Text style={text_f14_fw4_black}>{defVip[0]}</Text>
          </RowView>
          <RowView>
            <Text style={text_f12_gray}>{defVip[1]}</Text>
            <Icon name="right" size="md" color={themesColor.gray}/>
          </RowView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    width: '100%',
    height: 50,
    backgroundColor: themesColor.black2,
  },
  openVip: {
    width: '100%',
    height: 50,
    backgroundColor: themesColor.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: themesColor.gray1,
  },
  music: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vip_music: {
    width: 30,
    height: 30,
  },
});
