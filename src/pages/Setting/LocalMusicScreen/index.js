import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import PropTypes from "prop-types";
import { Icon, Toast } from "@ant-design/react-native";
import { connect } from 'react-redux';
import Header from "../../../components/Header";
import { themesColor, text_f14_fw5_white, containers, contain } from "../../../style";
import RowView from '../../../components/RowView';
import SingleItem from './SingleItem';
import ProgramItem from './ProgramItem';
import MVItem from './MVItem';
import { gotoMusicVideoScreen } from '../../../utils';

const topTab = [
  {
    id: 1,
    title: '单曲',
  },{
    id: 2,
    title: '节目',
  },{
    id: 3,
    title: 'MV',
  },
]

@connect(state => ({
  local: state.local,
}))
export default class LocalMusicScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
  });

  constructor(props) {
    super(props);
    this.state = {
      selectId: 1,
    };
  }

  goBack = () => this.props.navigation.goBack(null);

  _onDefaultPress = () => {
    const { local } = this.props;
    gotoMusicVideoScreen(local);
  };

  _onSelect = (id) => {
    this.setState({ selectId: id });
  };

  selectKey(key) {
    switch (key) {
      case 1:
        return <SingleItem />;
      case 2:
        return <ProgramItem />;
      case 3:
        return <MVItem />;
      default:
        return false;
    }
  }

  render() {
    const { selectId } = this.state;
    return (
      <View style={containers}>
        <Header
          LeftItem={() => (
            <TouchableOpacity onPress={this.goBack}>
              <Icon name="left" size="md" color={themesColor.black} />
            </TouchableOpacity>
          )}
          CenterItem={() =>
            <RowView style={styles.topRowView}>
              {
                topTab.map(ele => this._topTabItem(ele))
              }
            </RowView>
          }
          defaultItem={true}
          onDefaultPress={this._onDefaultPress.bind(this)}
        />
        <View style={contain}>
          {
            this.selectKey(selectId)
          }
        </View>
      </View>
    );
  }

  _topTabItem = (item) => {
    const { selectId } = this.state;
    const isActive = selectId === item.id;
    return(
      <TouchableWithoutFeedback onPress={() => this._onSelect(item.id)} key={item.id}>
        <View style={[styles.topTabItem, isActive && styles.activeTab]}>
          <Text style={{color: isActive ? themesColor.white : themesColor.red,}}>{item.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  topRowView: {
    width: 240,
    height: 32,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: themesColor.red,
  },
  topTabItem: {
    width: 80,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: themesColor.red,
    borderRadius: 16,
  },
});
