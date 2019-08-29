import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import Header from '../../../components/Header';
import {
  themesColor,
  text_f14_fw4_black,
  text_f10_black,
} from '../../../style';
import MusicVideo from '../../../components/MusicVideo';
import { reduxStore } from '../../../utils/utils';
import { UpdateAllMusic } from '../../../actions/setting'

export default class MusicVideoScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: this.props.navigation.state.params.data,
      slData: this.props.navigation.state.params.slData,
      allMusicData: this.props.navigation.state.params.allMusicData,
      lyrObj: null,
    };
  }

  componentDidMount() {
    this.getLyrObj();
  }

  componentWillUnmount() {
    this.setState({ lyrObj: null });
  }

  getLyrObj = () => {
    const { data, allMusicData } = this.state;
    let need = allMusicData.filter(ele => ele.id === data.id);
    if(need.cache && need.cache.lyrObj) {
      this.setState({ lyrObj: need.cache.lyrObj });
    }
  }

  goBack = () => this.props.navigation.goBack(null);

  _onShare = () => {
    alert('_onShare');
  }

  _updateData = (data) => {
    this.setState({ data });
    let allMusicData = this.state.allMusicData;
    let need = allMusicData.filter(ele => ele.id === data.id);
    if(need.cache && need.cache.lyrObj) {
      this.setState({ lyrObj: need.cache.lyrObj });
    }
  }

  _setLyrObj = (lyrObj) => {
    const { data } = this.state;
    let allMusicData = this.state.allMusicData;
    allMusicData.forEach(ele => {
      if(ele.id === data.id) {
        ele.cache.lyrObj = lyrObj;
      }
    });
    const { dispatch } = reduxStore;
    dispatch(UpdateAllMusic({data: allMusicData}));
  }

  render() {
    const { data, slData, lyrObj } = this.state;
    return (
      <View style={styles.containers}>
        <Header
          LeftItem={() =>
            <TouchableOpacity onPress={this.goBack}>
              <Icon name="left" size="md" color={themesColor.black}/>
            </TouchableOpacity>
          }
          CenterItem={() =>
            <View style={{alignItems: 'center'}}>
              <Text style={text_f14_fw4_black}>{data.name}</Text>
              <Text style={text_f10_black}>{data.editor}</Text>
            </View>
          }
          RightItem={() =>
            <TouchableOpacity onPress={this._onShare}>
              <Icon name="share-alt" size="md" color={themesColor.black}/>
            </TouchableOpacity>
          }
        />
        <MusicVideo
          data={data}
          slData={slData}
          lyrObj={lyrObj}
          updateData={(data) => this._updateData(data)}
          setLyrObj={(data) => this._setLyrObj(data)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: themesColor.white
  }
});
