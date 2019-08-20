import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon } from '@ant-design/react-native';
import Header from '../../../components/Header';
import { themesColor, text_f14_fw5_white, text_f12_white } from '../../../style';
import SearchButton from './SearchButton';
import TextInputModal from '../../../components/TextInputModal';

const defTitle = '歌单';

export default class SongListScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    tabBarVisible: false
  });

  constructor(props) {
    super(props);
    this.state = {
      title: defTitle,
      isShowSearch: false,
      searchText: null,
    };
  }

  _onDefaultPress = () => {
    alert('_onDefaultPress');
  }
  _onEllipsisPress = () => {
    alert('_onEllipsisPress');
  }

  goBack = () => this.props.navigation.goBack(null);

  _onShowSearch(bool) {
    this.setState({ isShowSearch: bool });
  }
  render() {
    const { title, searchText, isShowSearch } = this.state;
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
          <SearchButton onShowSearch={() => this._onShowSearch(true)} />
          {/* <Text style={text_f14_fw5_white}>{searchText}</Text> */}
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
