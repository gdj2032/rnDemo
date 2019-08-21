import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image, Animated,} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon } from '@ant-design/react-native';
import Header from '../../../components/Header';
import { themesColor, text_f14_fw5_white } from '../../../style';
import SearchButton from './SearchButton';
import TextInputModal from '../../../components/TextInputModal';
import SLMessage from './SLMessage';
import SLFlatList from './SLFlatList';
import OpenVipItem from './OpenVipItem';
import StickyHeader from '../../../components/StickyHeader';

const defTitle = '歌单';

const defVip = ['含7首vip专属歌曲', '首月vip仅5元']

export default class SongListScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    tabBarVisible: false,
  });

  constructor(props) {
    super(props);
    this.state = {
      title: defTitle,
      isShowSearch: false,
      scrollY: new Animated.Value(0),
      headHeight: -1,
      data: this.props.navigation.state.params.data,
      slData: this.props.navigation.state.params.slData,
    };
  }

  _onDefaultPress = () => {
    alert('_onDefaultPress');
  }
  _onEllipsisPress = () => {
    alert('_onEllipsisPress');
  }

  goBack = () => this.props.navigation.goBack(null);


  _onShowSearch = (bool) => {
    this.setState({isShowSearch: bool});
  }

  _onMessage = () => {
    alert('_onMessage')
  }
  _onShare = () => {
    alert('_onShare')
  }
  _onDownload = () => {
    alert('_onDownload')
  }
  _onSelect = () => {
    alert('_onSelect')
  }


  render() {
    const { title, isShowSearch, isAbsolute, headHeight, scrollY, data, slData } = this.state;
    return (
      <SafeAreaView style={styles.containers}>
        <Header
          LeftItem={() =>
            <TouchableOpacity onPress={this.goBack}>
              <Icon name="left" size="md" color={themesColor.white}/>
            </TouchableOpacity>
          }
          CenterItem={() => <Text style={text_f14_fw5_white}>{title}</Text>}
          defaultItem={true}
          ellipsisItem={true}
          IconColor={themesColor.white}
          onDefaultPress={this._onDefaultPress.bind(this)}
          onEllipsisPress={this._onEllipsisPress.bind(this)}
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
          >
            <SLMessage
              data={data || null}
              navigation={this.props.navigation}
              onMessage={this._onMessage}
              onShare={this._onShare}
              onDownload={this._onDownload}
              onSelect={this._onSelect}
            >
              <SearchButton onShowSearch={() => this._onShowSearch(true)} />
            </SLMessage>
          </View>

          <StickyHeader
            stickyHeaderY={this.state.headHeight} // 把头部高度传入
            stickyScrollY={this.state.scrollY} // 把滑动距离传入
          >
            <OpenVipItem defVip={defVip} />
          </StickyHeader>
          <SLFlatList slData={slData} />
        </Animated.ScrollView>
        <TextInputModal
          visible={isShowSearch}
          onClose={(bool) => this._onShowSearch(bool)}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: themesColor.black3,
    opacity: 0.8,
  },
});
