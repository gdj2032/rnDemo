import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { contain, spacer_line } from '../../../style';
import VideoItem from '../../../components/VideoItem';
import SpacerItem from '../../../components/SpacerItem';

@connect(state => ({
  local: state.local,
}))
export default class Recommend extends Component {

  state = {
    data: this.props.local.videoList.list,
  }

  render() {
    const { data } = this.state;
    return (
      <View style={[contain, styles.contain]}>
        <FlatList
          data={data}
          renderItem={({item}) => <VideoItem data={item} />}
          ItemSeparatorComponent={() => <SpacerItem style={spacer_line} />}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    marginTop: 10,
  }
});
