import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated, TouchableOpacity, Image} from 'react-native';
import PropTypes from "prop-types";
import { Icon } from '@ant-design/react-native';
import { connect } from 'react-redux';
import { containers, themesColor, text_f12_white, fonts } from '../../../style';
import Header from '../../../components/Header';
import RowView from '../../../components/RowView';
import { getDate } from '../../../utils/utils';
import StickyHeader from '../../../components/StickyHeader';
import DRFlatList from './DRFlatList';
import DailySticky from './DailySticky';
import { reduxStore } from '../../../utils/utils';
import { UpdateAllMusic } from '../../../actions/setting';

@connect(state => ({
  local: state.local,
}))
export default class DailyRecommendScreen extends Component {
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
      scrollY: new Animated.Value(0),
      headHeight: -1,
      isSelectAll: false,
      isOpenSelect: false,
      data: this.props.navigation.state.params.data,
      dailyRecommend: this.props.navigation.state.params.dailyRecommend
    };
  }

  goBack = () => this.props.navigation.goBack(null);

  _onOpenSelect = () => {
    this.setState({ isOpenSelect: !this.state.isOpenSelect, isSelectAll: false });
  };

  _onNext = (item) => {
    const { dispatch } = reduxStore;
    let allMusicData = this.props.local.allMusic.data;
    allMusicData.forEach(ele => {
      if(ele.id === item.id) {
        ele.cache = {
          currentTime: new Date().getTime(),
          times: ele.cache && ele.cache.times ? ele.cache.times + 1 : 1
        }
      }
    })
    console.log(allMusicData)
    dispatch(UpdateAllMusic({data: allMusicData}));
    this.props.navigation.navigate('MusicVideoScreen', {data: item, slData: this.state.slData, allMusicData: allMusicData});
  };

  render() {
    const {
      headHeight,
      scrollY,
      data,
      dailyRecommend,
      isSelectAll,
      isOpenSelect,
    } = this.state;
    console.log(isOpenSelect)
    return (
      <View style={containers}>
        <Header
          LeftItem={() => (
            <TouchableOpacity onPress={this.goBack}>
              <Icon name="left" size="md" color={themesColor.white} />
            </TouchableOpacity>
          )}
          defaultItem={true}
          IconColor={themesColor.white}
        />
        <Animated.ScrollView
          onScroll={
            Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { y: this.state.scrollY } } // 记录滑动距离
                }
              ],
              { useNativeDriver: true }
            ) // 使用原生动画驱动
          }
          scrollEventThrottle={1}
        >
          <View
            onLayout={e => {
              let { height } = e.nativeEvent.layout;
              this.setState({ headHeight: height }); // 给头部高度赋值
            }}
            style={styles.historyDaily}
          >
            <RowView style={{alignItems: 'baseline'}}>
              <Text style={[text_f12_white, {fontSize: fonts.lg}]}>{getDate(new Date(), 'DD')}</Text>
              <Text style={text_f12_white}>/{getDate(new Date(), 'MM')}</Text>
            </RowView>
            <View>
              <Text style={text_f12_white}>历史日推</Text>
            </View>
          </View>
          <StickyHeader
            stickyHeaderY={headHeight} // 把头部高度传入
            stickyScrollY={scrollY} // 把滑动距离传入
          >
            <DailySticky />
          </StickyHeader>
          <DRFlatList
            data={data}
            drData={dailyRecommend.data}
            onNext={(val) => this._onNext(val)}
          />
        </Animated.ScrollView>
        <View style={styles.bc_image}>
          <Image
            style={styles.image}
            source={require('../../../image/sl_screen2.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  historyDaily: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bc_image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 400,
    zIndex: -20,
  },
  image: {
    width: '100%',
    height: 200,
  }
});
