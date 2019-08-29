import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import PropTypes from "prop-types";
import {
  themesColor,
  text_f16_fw4_black,
  text_f12_gray,
  text_f10_gray,
  text_f16_fw4_gray,
  transform90,
  fonts,
} from '../../../style';
import { Icon } from '@ant-design/react-native';
import TouchRowView from '../../../components/TouchRowView';
import RowView from '../../../components/RowView';
import CheckBoxItem from '../../../components/CheckBoxItem';

export default class DRFlatList extends Component {
  static defaultProps = {
    isOpenSelect: false,
    isSelectAll: false,
  };

  static propTypes = {
    onNext: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      list: this.props.data,
      drData: this.props.drData,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  _onPress = (item) => {
    this.props.onNext(item);
  }

  _onPaly = () => {
    alert('_onPaly');
  }

  _onEllipsis = () => {
    alert('_onEllipsis');
  }

  SQIcon = () => (
    <View style={[styles.sq_view, styles.marRight]}>
      <Text style={styles.sq_text}>SQ</Text>
    </View>
  )

  _onCheckBox = (item) => {
    let drData = this.state.drData;
    drData.forEach(ele => {
      if(ele.id === item.id) {
        ele.isSelect = !item.isSelect
      }
    });
    this.setState({ drData });
  }

  CloudIcon = () => (
    <Icon name="cloud" size="xxs" color={themesColor.gray} style={styles.marRight} />
  )

  DownLoadIcon = () => (
    <Icon name="check-circle" size="xxs" color={themesColor.blue} style={styles.marRight} />
  )

  CloudDownIcon = () => (
    <Icon name="cloud-download" size="xxs" color={themesColor.blue} style={styles.marRight} />
  )

  ExclusiveIcon = () => (
    <View style={[styles.sq_view, styles.marRight]}>
      <Text style={styles.sq_text}>独家</Text>
    </View>
  )

  renderIcon = (item) => {
    return(
      <RowView>
        { item.isCloud && item.isDownload && this.CloudDownIcon() }
        { item.isCloud && !item.isDownload && this.CloudIcon() }
        { !item.isCloud && item.isDownload && this.DownLoadIcon() }
        { item.isExclusive && this.ExclusiveIcon() }
        { item.isSQ && this.SQIcon() }
      </RowView>
    )
  }

  renderItem = (item) => {
    return(
      <TouchRowView style={styles.renderItem} onPress={() => this._onPress(item)}>
        <View style={styles.center_wh50}>
          {
            this.props.isOpenSelect ?
            <CheckBoxItem
              onChange={() => this._onCheckBox(item)}
              checked={item.isSelect}
            />
            :
            <Image
              source={require('../../../image/song.png')}
              style={{width: 30, height: 30, borderRadius: 5}}
            />
          }
        </View>
        <RowView style={styles.render_details}>
          <View style={{flex: 1}}>
            <View>
              <Text style={text_f16_fw4_black} numberOfLines={1}>{item.name}</Text>
            </View>
            <RowView>
              {this.renderIcon(item)}
              <Text style={text_f10_gray} numberOfLines={1}>{item.details}</Text>
            </RowView>
          </View>
          <RowView style={{flex: 0.2, justifyContent: 'flex-end'}}>
            {
              item.isMV &&
              <TouchableOpacity onPress={this._onPaly}>
                <Icon name="youtube" size="md" color={themesColor.gray} />
              </TouchableOpacity>
            }
            <TouchableOpacity onPress={this._onEllipsis}>
              <Icon name="ellipsis" size="lg" color={themesColor.black} style={transform90} />
            </TouchableOpacity>
          </RowView>
        </RowView>
      </TouchRowView>
    )
  }

  render() {
    const { drData } = this.state;
    return (
      <View style={styles.contain}>
        <FlatList
          data={drData}
          keyExtractor={item => item.name}
          renderItem={({item}) => this.renderItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: themesColor.white,
  },
  center_wh50: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listHead: {
    height: 50,
  },
  renderItem: {
    width: '100%',
    height: 50,
  },
  render_details: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sq_view: {
    width: 20,
    height: 12,
    borderWidth: 1,
    borderColor: themesColor.red,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sq_text: {
    color: themesColor.red,
    fontSize: fonts.vxx,
    fontWeight: '600'
  },

  marRight: {
    marginRight: 4,
  },
});
