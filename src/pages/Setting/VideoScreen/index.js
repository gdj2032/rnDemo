import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { containers } from '../../../style';
import PlayVideo from '../../../components/PlayVideo';
import { deviceWidth } from '../../../utils/scale';

export default class VideoScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    tabBarVisible: false
  });

  state = {
    paused: false,
    isFullScreen: false,
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  _setFullScreen = (bool) => {
    this.setState({
      isFullScreen: bool,
    });
  }
  render() {
    const { navigation } = this.props;
    const data = navigation.state.params.data;
    const { paused } = this.state;
    console.log(this.state.isFullScreen);
    return (
      <View style={containers}>
        <View style={this.state.isFullScreen ? styles.full : styles.video}>
          <PlayVideo
            url={data && data.video}
            paused={paused}
            navigation={navigation}
            disableVolume={true}
            disableProgress={true}
            disableTime={true}
            disableBack={true}
            disableEllipsis={true}
            disablePaused={true}
            disableFullScreen={true}
            setFullScreen={(bool) => this._setFullScreen(bool)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  video: {
    width: deviceWidth,
    height: deviceWidth * 9 / 16,
  },
  full: {
    flex: 1,
  }
});
