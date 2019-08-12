import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class RecommendItem extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>RecommendItem</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
  }
});
