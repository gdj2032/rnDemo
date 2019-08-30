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
import { UpdateAllMusic, UpdateLyrObj } from '../../../actions/setting'

export default class MusicVideoScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: this.props.navigation.state.params.data,
      slData: this.props.navigation.state.params.slData,
      lyrObj: null,
    };
  }

  async componentDidMount() {
    await this.getLyrObj();
    await this.setCurrentTime();
  }

  componentWillUnmount() {
    this.setState({ lyrObj: null });
  }

  getLyrObj = async () => {
    const { lyrObj } = reduxStore.getState.local;
    const lyrData = lyrObj.data;
    if(lyrData.length === 0) {
      return;
    }
    const { data } = this.state;
    let exit = lyrData.filter(ele => ele.id === data.id);
    if(exit.length !== 0) {
      this.setState({ lyrObj: exit[0].lyr });
    } else {
      this.setState({ lyrObj: null });
    }
  }

  setCurrentTime = () => {
    const { data } = this.state;
    const { dispatch, getState } = reduxStore;
    let allMusicData = getState.local.allMusic.data;
    allMusicData.forEach(ele => {
      if(ele.id === data.id) {
        ele.cache = {
          currentTime: new Date().getTime(),
          times: ele.cache && ele.cache.times ? ele.cache.times + 1 : 1
        }
      }
    })
    console.log(allMusicData)
    dispatch(UpdateAllMusic({data: allMusicData}));
  }

  goBack = () => this.props.navigation.goBack(null);

  _onShare = () => {
    alert('_onShare');
  }

  _updateData = (data) => {
    this.setState({ data }, async () => {
      await this.getLyrObj()
    });
  }

  _setLyrObj = (lyr) => {
    const { data } = this.state;
    const { dispatch, getState } = reduxStore;
    let lyrData = getState.local.lyrObj.data;
    const exit = lyrData.find(ele => ele.id === data.id);
    if(exit) return;
    const newLyr = {
      id: data.id,
      lyr: lyr,
    }
    lyrData.push(newLyr);
    dispatch(UpdateLyrObj({data: lyrData}));
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
