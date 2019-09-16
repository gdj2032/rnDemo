import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import { connect } from "react-redux";
import { Icon, Toast } from "@ant-design/react-native";
import {
  contain,
  containers,
  themesColor,
  text_f14_fw4_black,
  transform90,
  text_f12_gray,
  paddingLeftRight,
  text_f12_black
} from "../../../../style";
import RowView from "../../../../components/RowView";
import TouchRowView from "../../../../components/TouchRowView";

@connect(state => ({
  local: state.local
}))
export default class SongTab extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "歌曲"
  });

  constructor(props) {
    super(props);
    this.state = {
      // allMusicData: this.props.local.allMusic.data,
      // downloadData: this.props.local.download.data,
      data: null
    };
  }

  componentDidMount() {
    this.getDownloadData();
  }

  getDownloadData = () => {
    console.log(this.props);
    const { allMusic, download } = this.props.local;
    const allMusic_data = allMusic.data;
    const download_data = download.data;
    let data = [];
    download_data.forEach(ele => {
      let item = allMusic_data.filter(e => e.id === ele.id);
      item[0].size = ele.size;
      item[0].path = ele.path;
      data.push(item[0]);
    });
    this.setState({ data });
  };

  _searchButton = () => {
    return (
      <View style={styles.search}>
        <View style={styles.inputView}>
          <Icon name="search" size="md" color={themesColor.black} />
          <TextInput style={styles.input} placeholder={"搜索本地歌曲"} />
        </View>
      </View>
    );
  };

  _scrollItem = item => {
    return (
      <View key={item.id} style={styles.scrollItem}>
        <TouchableWithoutFeedback onPress={() => this._onScrollItem()}>
          <View style={styles.sc_left}>
            <View>
              <Text style={text_f14_fw4_black}>{item.name}</Text>
            </View>
            <RowView>
              <Text style={text_f12_gray}>{item.editor} - </Text>
              <Text style={text_f12_gray}>{item.size}</Text>
            </RowView>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this._onEllipsis()}>
          <Icon
            name="ellipsis"
            size="lg"
            color={themesColor.black}
            style={transform90}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  };

  _onScrollItem = () => {
    alert("_onScrollItem");
  };

  _onEllipsis = () => {
    alert("_onEllipsis");
  };

  _onPlayAll = () => {
    alert('_onPlayAll')
  }

  _onSetting = () => {
    alert('_onSetting')
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <View style={containers}>
        {this._searchButton()}
        <RowView style={styles.play_setting}>
          <TouchRowView onPress={() => this._onPlayAll()}>
            <Icon
              name="play-circle"
              size="md"
              color={themesColor.black}
            />
            <Text style={text_f12_black}>播放全部</Text>
          </TouchRowView>
          <TouchRowView onPress={() => this._onSetting()}>
            <Icon
              name="setting"
              size="md"
              color={themesColor.black}
            />
            <Text style={text_f12_black}>管理</Text>
          </TouchRowView>
        </RowView>
        <View style={contain}>
          <ScrollView>
            {data && data.map(item => this._scrollItem(item))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    width: "100%",
    height: 48,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center"
  },
  play_setting: {
    width: "100%",
    height: 32,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  inputView: {
    width: "100%",
    height: 32,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: themesColor.gray1,
    borderRadius: 16
  },
  input: {
    flex: 1,
    height: 32,
    textAlign: "center"
  },
  scrollItem: {
    width: "100%",
    height: 54,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  sc_left: {
    flex: 1,
  },
});
