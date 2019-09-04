import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import PropTypes from "prop-types";
import { Icon, Toast } from "@ant-design/react-native";
import { contain, containers, themesColor } from '../../../../style';

export default class SongTab extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '歌曲'
  });
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
    };
  }

  _searchButton = () => {
    return(
      <View style={styles.search}>
        <View style={styles.inputView}>
          <Icon name="search" size="md" color={themesColor.black} />
          <TextInput
            style={styles.input}
            placeholder={'搜索本地歌曲'}
          />
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={containers}>
        {this._searchButton()}
        <Text>SongTab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    width: '100%',
    height: 48,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
  },
  inputView: {
    width: '100%',
    height: 32,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: themesColor.gray1,
    borderRadius: 16,
  },
  input: {
    flex: 1,
    height: 32,
    textAlign: 'center'
  },
});
