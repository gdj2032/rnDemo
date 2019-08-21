import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import PropTypes from "prop-types";
import { themesColor } from '../../../style';

export default class SLFlatList extends Component {
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

  render() {
    const { slData } = this.props;
    return (
      <FlatList
      style={styles.flatList}
        data={slData}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <Text>播放全部</Text>}
        renderItem={({item}) => <View>
          <Text>{item.id}</Text>
          <Text>{item.id}</Text>
          <Text>{item.id}</Text>
        </View>}
      />
    );
  }
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    backgroundColor: themesColor.white
  },
});
