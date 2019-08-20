import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon } from '@ant-design/react-native';
import Header from '../../../components/Header';
import { themesColor, text_f14_fw5_white, text_f12_white } from '../../../style';
import SearchButton from './SearchButton';
import TextInputModal from '../../../components/TextInputModal';
import SLMessage from './SLMessage';

const defTitle = '歌单';

export default class SongListScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    tabBarVisible: false,
  });

  constructor(props) {
    super(props);
    this.state = {
      title: defTitle,
      isShowSearch: false,
      data: this.props.navigation.state.params.data
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
    const { title, isShowSearch, data } = this.state;
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
        <ScrollView>
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
        </ScrollView>
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
    backgroundColor: themesColor.black2,
    opacity: 0.8
  },
});
