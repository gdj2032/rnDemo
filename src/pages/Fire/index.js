import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from '@ant-design/react-native';
import { themesColor, containers } from '../../style';
import Header from '../../components/Header';
import TextItem1 from '../../components/TextItem1';
import MyMusicScroll from './MyMusicScroll';
import SpacerItem from '../../components/SpacerItem';
import FireNavItem from './FireNavItem';
import MyCreatePanel from './MyCreatePanel';
import { defFireScroll, defFireNav } from '../../utils/defaultData';


@connect(state => ({
  local: state.local,
}))
export default class Fire extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => <Icon name="fire" size="md" color={tintColor} focused={focused} />
  };

  state = {
    songList: this.props.local.songList,
    slData: this.props.local.songList.slData,
  }

  render() {
    const { songList, slData } = this.state;
    return (
      <View style={containers}>
        <Header
          LeftItem={() => <Icon name="cloud" size="md" color={themesColor.black} />}
          CenterItem={() => <TextItem1 text={'我的音乐'} />}
          defaultItem={true}
        />
        <ScrollView>
          <MyMusicScroll data={defFireScroll} />
          <SpacerItem />
          <FireNavItem data={defFireNav} />
          <SpacerItem style={styles.spacer} />
          <MyCreatePanel
            data={songList}
            navigation={this.props.navigation}
            slData={slData}
            />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spacer: {
    marginTop: 10,
    backgroundColor: themesColor.gray2,
  }
});
