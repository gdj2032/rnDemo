import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextItem3 from '../../components/TextItem3';

export default class MySelect extends Component {

  _onPress(val) {
    alert(val.title)
  }
  render() {
    const { data } = this.props;
    return (
      <View>
        {
          data.map(ele => <TextItem3 text={ele.title} number={ele.number} onPress={this._onPress.bind(this, ele)} /> )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
