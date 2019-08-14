import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from '@ant-design/react-native';
import { themesColor } from '../../style';
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
  }

  render() {
    const { songList } = this.state;
    return (
      <View style={styles.container}>
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
          <MyCreatePanel data={songList}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themesColor.backgroundColor,
  },
  spacer: {
    marginTop: 10,
    borderBottomWidth: 0,
    backgroundColor: themesColor.gray2,
  }
});
