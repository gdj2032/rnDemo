import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon } from '@ant-design/react-native';
import Header from '../../../components/Header';
import {
  themesColor,
  text_f14_fw4_black,
  text_f10_black,
} from '../../../style';
import MusicVideo from '../../../components/MusicVideo';

export default class MusicVideoScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: this.props.navigation.state.params.data,
      slData: this.props.navigation.state.params.slData
    };
  }

  goBack = () => this.props.navigation.goBack(null);

  _onShare = () => {
    alert('_onShare');
  }
  render() {
    const { data, slData } = this.state;
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
          updateData={(data) => this.setState({ data })}
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
