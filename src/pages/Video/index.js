import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Tabs, Icon } from '@ant-design/react-native';
import { themesColor, containers, text_f16_fw5 } from '../../style';
import Header from '../../components/Header';
import TextInputButton from '../../components/TextInputButton';
import { tabListTitle, navTitle } from './TabList';

export default class Video extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name="play-square" size="md" color={tintColor} focused={focused} />
    )
  };

  _onSearch() {
    alert('wait');
  }
  render() {
    return (
      <View style={containers}>
        <Header
          LeftItem={() => (
            <Icon name="video-camera" size="md" color={themesColor.black} />
          )}
          CenterItem={() => (
            <TextInputButton onPress={this._onSearch.bind(this)} />
          )}
          defaultItem={true}
        />
        <View style={ styles.tabs}>
          <Tabs
            tabs={tabListTitle}
            initialPage={0}
            tabBarPosition="top"
            tabBarTextStyle={text_f16_fw5}
            tabBarActiveTextColor={themesColor.red}
            tabBarInactiveTextColor={themesColor.black}
            tabBarUnderlineStyle={styles.underline}
            animated={false}
          >
            {renderTabs}
          </Tabs>
        </View>
      </View>
    );
  }
}

const renderTabs = (tab, index) => {
  const Content = navTitle[tab.title];
  return (
    <ScrollView style={styles.scroll} key={index}>
      <Content />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flex: 1,
  },
  underline: {
    backgroundColor: themesColor.red,
  },
  scroll:{
    backgroundColor: themesColor.white
  }
});
