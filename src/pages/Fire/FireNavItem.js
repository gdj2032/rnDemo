import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextItem3 from '../../components/TextItem3';

export default class FireNavItem extends Component {

  _onPress(val) {
    this.props.navigation.navigate(val.nav, {info: val})
  }
  render() {
    const { data } = this.props;
    return (
      <View>
        {
          data.map(ele =>
            <TextItem3
              key={ele.title}
              data={ele}
              onPress={this._onPress.bind(this, ele)}
              /> )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
