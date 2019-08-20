import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import PropTypes from "prop-types";
import { Icon } from '@ant-design/react-native';
import { themesColor, text_f12_white } from '../../../style';

export default class SearchButton extends Component {
  static defaultProps = {
  };

  static propTypes = {
    onShowSearch: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { onShowSearch } = this.props;
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onShowSearch}>
          <View style={styles.contain}>
            <Icon name="search" size="md" color={themesColor.white}/>
            <Text style={text_f12_white}>搜索歌单内的歌曲</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.4,
  },
  contain: {
    width: '100%',
    height: 36,
    borderRadius: 18,
    backgroundColor: themesColor.gray3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
