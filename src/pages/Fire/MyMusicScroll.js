import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import NavBtnItem from "../../components/NavBtnItem";

export default class MyMusicScroll extends Component {

  _onPress(val) {
    alert(val.title)
  }
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {data.map((ele, index) => (
            <NavBtnItem
              style={{ marginRight: data.length - 1 !== index ? 30 : 10 }}
              key={ele.title}
              text={ele.title}
              icon_name={"alert"}
              onPress={this._onPress.bind(this, ele)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10
  },
  scroll: {
    flexDirection: "row"
    // justifyContent: 'space-between',
    // alignItems: 'center',
  }
});
