import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { themesColor } from '../../style';

export default class CoverView extends Component {

  render() {
    return (
      <View style={styles.position}>
        <View style={styles.blacks}/>
        <View style={styles.iconView}>
          {
            this.props.children ||
            <View style={styles.center}>
              <Icon name="heart" size="lg" color={themesColor.white} />
            </View>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
position: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  blacks: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 5,
    backgroundColor: themesColor.black,
    opacity: 0.6,
  },
  iconView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
