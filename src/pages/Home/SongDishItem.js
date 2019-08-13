import React, {Component} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import { Flex, Icon } from '@ant-design/react-native';
import { containers } from '../../style';
import RecommendItem from '../../components/RecommendItem';
import { scaleSize } from '../../utils';
export default class SongDishItem extends Component {

  _onRecommend(ele) {
    alert(ele.title);
  }
  render() {
    const { data, showPlay } = this.props;
    return (
      <View style={containers}>
        <Flex wrap="wrap" style={styles.wrap}>
          {
            data.map(ele =>
              <RecommendItem
                key={ele.title}
                title={ele.title}
                author={ele.author}
                showPlay={showPlay}
                BackgroundImage={() =>
                  <Image
                    source={ele.req}
                    style={styles.image_bg}
                  />
                }
                onPress={this._onRecommend.bind(this, ele)}
              />
            )
          }
        </Flex>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image_bg: {
    flex: 1,
    width: scaleSize(120),
    height: scaleSize(120),
    borderRadius: 5,
  },
});
