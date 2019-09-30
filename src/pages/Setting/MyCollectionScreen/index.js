import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import { Icon, Toast } from "@ant-design/react-native";
import Header from '../../../components/Header';
import { themesColor, text_f16_fw4_black, fonts, contain, text_f12_gray, text_f14_fw4_black, transform90, } from '../../../style';
import RowView from '../../../components/RowView';
import SpacerItem from '../../../components/SpacerItem';

const TITLE = '我的收藏'

@connect(state => ({
  local: state.local,
}))
export default class MyCollectionScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allMusic: this.props.local.allMusic.data,
      data: this.props.local.allMusic.data,
    };
  }

  goBack = () => this.props.navigation.goBack(null);

  onSearch = (val) => {
    console.log(val)
    const { allMusic } = this.state;
    if(!val) {
      this.setState({ data: allMusic });
      return;
    }
    const data = allMusic.filter(e => `${e.name}${e.editor}${e.details}`.indexOf(val) !== -1)
    console.log(data)
    this.setState({ data });
  }

  renderItem = (item, index) => {
    return(
      <RowView style={styles.rowView}>
        <RowView>
          <View style={styles.row_index}>
            <Text style={text_f12_gray}>{index}</Text>
          </View>
          <View>
            <Text style={text_f14_fw4_black}>{item.name}</Text>
            <Text style={text_f12_gray}>{item.editor}</Text>
          </View>
        </RowView>
        <TouchableOpacity onPress={() => this.onPress(item)} style={styles.ellipsis}>
          <Icon name="ellipsis" size="lg" color={themesColor.black} style={transform90} />
        </TouchableOpacity>
      </RowView>
    )
  }

  onPress = (item) => {

  }

  render() {
    const { data } = this.state;
    return (
      <View style={contain}>
        <Header
          style={{ backgroundColor: themesColor.white }}
          LeftItem={() => (
            <TouchableOpacity onPress={this.goBack}>
              <Icon name="left" size="md" color={themesColor.black} />
            </TouchableOpacity>
          )}
          CenterItem={() => <Text style={text_f16_fw4_black}>{TITLE}</Text>}
          defaultItem={true}
        />
        <View style={styles.searchInput}>
          <Icon name="search" size="md" color={themesColor.gray} />
          <TextInput
            style={styles.search}
            placeholder={'请输入歌名'}
            onChangeText={this.onSearch}
          />
        </View>
        <FlatList
          data={data}
          style={styles.flatList}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) => this.renderItem(item, index)}
          ItemSeparatorComponent={() => <SpacerItem/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchInput: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: themesColor.gray2,
    height: 36,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  search: {
    flex: 1,
    height: 24,
    fontSize: fonts.xx
  },
  flatList: {
    backgroundColor: themesColor.white,
  },
  rowView: {
    height: 48,
    justifyContent: 'space-between',
  },
  row_index: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ellipsis: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
