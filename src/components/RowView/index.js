import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from "prop-types";

export default class RowView extends Component {

  render() {
    return (
      <View style={styles.row}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
