import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { contain, spacer_line } from '../../../style';
import TabsVideoList from '../../../components/TabsVideoList';
import SpacerItem from '../../../components/SpacerItem';

@connect(state => ({
  local: state.local,
}))
export default class Recommend extends Component {

  state = {
    data: this.props.local.videoList.list,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.local.videoList.list, })
  }

  render() {
    const { data } = this.state;
    return (
      <View style={[contain, styles.contain]}>
        <FlatList
          data={data}
          renderItem={({item}) => <TabsVideoList data={item} />}
          ItemSeparatorComponent={() => <SpacerItem style={spacer_line} />}
          keyExtractor={item => item.title}
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
