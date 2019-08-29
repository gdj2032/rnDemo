import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import PropTypes from "prop-types";
import { Icon } from '@ant-design/react-native';
import {
  themesColor,
  text_f16_fw4_black,
  text_f12_gray,
  text_f10_gray,
  text_f16_fw4_gray,
  transform90,
  fonts,
  containers,
} from '../../../style';
import RowView from '../../../components/RowView';
import TouchRowView from '../../../components/TouchRowView';
import CheckBoxItem from './CheckBoxItem';
import { reduxStore } from '../../../utils/utils';

export default class SLFlatList extends Component {
  static defaultProps = {
    isSelect: false,
    isSelectAll: false,
    noNeedHeader: false,
  };

  static propTypes = {
    onAddSong: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      slData: this.props.slData,
      isSelectAll: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    let slData = this.state.slData;
    if(nextProps.isSelectAll !== this.state.isSelectAll) {
      slData.forEach(ele => {
        ele.isSelect = nextProps.isSelectAll;
      });
      this.setState({ slData, isSelectAll: nextProps.isSelectAll });
    }
    if(!this.props.isSelect) {
      slData.forEach(ele => {
        ele.isSelect = false;
      });
      this.setState({ slData, isSelectAll: nextProps.isSelectAll });
    }
  }

  ListHeaderComponent = () => {
    const { data, noNeedHeader } = this.props;
    if(noNeedHeader) {
      return null;
    }
    return(
      <RowView style={styles.listHead}>
        <View style={styles.center_wh50}>
          <Icon name="play-circle" size="lg" color={themesColor.black} />
        </View>
        <Text style={text_f16_fw4_black}>播放全部</Text>
        <Text style={text_f12_gray}>{`(共${data.all}首)`}</Text>
      </RowView>
    )
  }

  _onPress = (item) => {
    console.log(item)
    this.props.navigation.navigate('MusicVideoScreen', {data: item, slData: this.state.slData});
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
    let slData = this.state.slData;
    slData.forEach(ele => {
      if(ele.id === item.id) {
        ele.isSelect = !item.isSelect
      }
    });
    this.setState({ slData });
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

  renderItem = (item, index) => {
    return(
      <TouchRowView style={styles.renderItem} onPress={() => this._onPress(item)}>
        <View style={styles.center_wh50}>
          {
            this.props.isSelect ?
            <CheckBoxItem
              onChange={() => this._onCheckBox(item)}
              checked={item.isSelect}
            />
            :
            <Text style={text_f16_fw4_gray}>{index + 1}</Text>
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
    const { slData } = this.state;
    return (
      <View>
        {
          slData.length > 0 ?
          <FlatList
            style={styles.flatList}
            data={slData}
            keyExtractor={item => item.name}
            ListHeaderComponent={() => this.ListHeaderComponent()}
            renderItem={({item, index}) => this.renderItem(item, index)}
          />
          :
          <TouchableOpacity style={styles.addSong} onPress={this.props.onAddSong}>
            <Text style={styles.addText}>添加歌曲</Text>
          </TouchableOpacity>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: themesColor.white
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
  addSong: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: themesColor.red,
    fontSize: fonts.x,
    borderWidth: 1,
    borderColor: themesColor.red,
    borderRadius: 10,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
