import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Modal, Provider, Icon } from '@ant-design/react-native';
import { themesColor, text_f14_fw5_white } from '../../style';
import SLFlatList from '../../pages/Setting/SongListScreen/SLFlatList';

export default class TextInputModal extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({});
  static defaultProps = {
    visible: false
  };

  static propTypes = {
    onClose: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      searchText: [],
      data: this.props.data,
      slData: this.props.slData,
      value: null,
    };
  }

  _onClose() {
    this.setState({ searchText: [], value: null });
    this.props.onClose(false);
  }

  _onChangeText = (value) => {
    if(!value) {
      this.setState({ searchText: [], value: null });
      return;
    }
    const slData = this.state.slData;
    let searchText = [];
    slData.forEach(ele => {
      let text = ele.name + ele.editor+ ele.details;
      if(text.indexOf(value) != -1) {
        searchText.push(ele)
      }
    });
    this.setState({ searchText: searchText, value: value });
  }

  render() {
    const { visible } = this.props;
    const { searchText, data, slData, value } = this.state;
    return (
      <Provider>
        <Modal
          visible={visible}
          onClose={() => this._onClose()}
          transparent={false}
        >
          <View style={styles.top}>
            <View style={styles.inputView}>
              <Icon name="search" size="md" color={themesColor.white} />
              <TextInput
                style={styles.textInput}
                placeholder={'搜索歌单内的歌曲'}
                placeholderTextColor={themesColor.white}
                onChangeText={this._onChangeText.bind(this)}
              />
              {
                value &&
                <Icon name="close" size="md" color={themesColor.white} />
              }
            </View>
            <TouchableWithoutFeedback onPress={() => this._onClose()}>
              <Text style={text_f14_fw5_white}>取消</Text>
            </TouchableWithoutFeedback>
          </View>
          {
            searchText.length > 0 &&
            <ScrollView style={styles.result}>
              <SLFlatList
                data={data}
                slData={searchText}
                navigation={this.props.navigation}
              />
              <View style={{height: 100}}/>
            </ScrollView>
          }
        </Modal>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    width: '100%',
    height: 48,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themesColor.black2,
  },
  inputView: {
    flex: 1,
    height: 36,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themesColor.black3,
    borderRadius: 18,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textInput: {
    flex: 1,
    color: themesColor.white
  },
  result: {
    width: '100%',
    height: '100%',
  }
});
