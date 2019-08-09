import React,{Component}from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity
}from 'react-native';
import PropTypes from 'prop-types';

export default class LoadingMore extends Component {
  static propTypes = {
    isLoading: PropTypes.bool
  }
  static defaultProps = {
    isLoading: false
  }
  constructor(props) {
    super(props);
    this.state = {
      isLoading: props.isLoading
    };
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{flexDirection:'row',alignSelf:'center',alignItems:'center',padding:10 }}>
          <ActivityIndicator
            size={'small'}
            color={'#ffddff'}
            animating={true}
            style={{width: 15 ,height: 15}}
          />
          <Text style={{
            color: 'black',
            fontSize: 16,
            marginLeft: 15
          }}>
            正在加载...
          </Text>
        </View>
      );
    }
    // else if(this.props.onLoading){
    //   return (
    //     <TouchableOpacity
    //       onPress={()=>{
    //         this.setState({
    //             isLoading:true
    //         });
    //         this.props.onLoading&&this.props.onLoading()
    //       }}
    //     >
    //       <Text style={{
    //         color: 'black',
    //         fontSize: 16,
    //         alignSelf:'center',
    //         padding: 10
    //       }}>
    //         点击加载更多...
    //       </Text>
    //     </TouchableOpacity>
    //   );
    // }
    else {
      return null;
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
        isLoading: nextProps.isLoading
    });
}
}
