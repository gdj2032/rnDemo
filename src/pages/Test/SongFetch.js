import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button, Icon } from "@ant-design/react-native";
import RNFetchBlob from 'react-native-fetch-blob';
import base64 from 'react-native-base64';

export default class SongFetch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: 10001,
        name: '江南',
        editor: '林俊杰',
        details: '林俊杰 - 第二天堂',
        url: 'http://music.163.com/song/media/outer/url?id=108914.mp3',
        isSQ: true,
        isMV: true,
        isCloud: false,
        isDownload: false,
        isExclusive: false,
        isSelect: false,cache: null,
        lrc: '[ti:江南][ar:林俊杰][al:靓点屋精选辑][by:][offset:0][00:00.00]江南 - 林俊杰 (JJ Lin)[00:09.28]词：李瑞洵[00:18.56]曲：林俊杰[00:27.85]编曲：蔡政勋/陈建玮[00:37.13]风到这里就是黏[00:39.46][00:40.56]黏住过客的思念[00:43.42][00:45.03]雨到了这里缠成线[00:47.53][00:48.68]缠着我们留恋人世间[00:51.52][00:53.02]你在身边就是缘[00:55.29][00:56.54]缘分写在三生石上面[00:59.61][01:01.07]爱有万分之一甜[01:03.44][01:04.58]宁愿我就葬在这一点[01:07.80][01:08.90]圈圈圆圆圈圈[01:10.87]天天年年天天的我[01:13.72]深深看你的脸[01:16.02]生气的温柔[01:18.05]埋怨的温柔的脸[01:23.39][01:24.17]不懂爱恨情愁煎熬的我们[01:27.80]都以为相爱就像风云的善变[01:31.36][01:32.00]相信爱一天抵过永远[01:35.99][01:36.73]在这一刹那冻结了时间[01:39.42][01:40.26]不懂怎么表现温柔的我们[01:43.94]还以为殉情只是古老的传言[01:48.09]离愁能有多痛痛有多浓[01:52.34]当梦被埋在江南烟雨中[01:55.56]心碎了才懂[01:58.81][02:21.27]圈圈圆圆圈圈[02:22.81]天天年年天天的我[02:25.85]深深看你的脸[02:28.11]生气的温柔[02:30.20]埋怨的温柔的脸[02:35.54][02:36.08]不懂爱恨情愁煎熬的我们[02:39.84]都以为相爱就像风云的善变[02:43.91]相信爱一天抵过永远[02:48.24]在这一刹那冻结了时间[02:52.20]不懂怎么表现温柔的我们[02:55.81]还以为殉情只是古老的传言[02:59.24][02:59.97]离愁能有多痛痛有多浓[03:04.34]当梦被埋在江南烟雨中[03:07.62]心碎了才懂[03:11.12][03:20.13]相信爱一天抵过永远[03:24.40]在这一刹那冻结了时间[03:28.51]不懂怎么表现温柔的我们[03:32.15]还以为殉情只是古老的传言[03:36.21]离愁能有多痛痛有多浓[03:40.39]当梦被埋在江南烟雨中[03:45.69]心碎了才懂',
      },
    };
  }

  _onPress = () => {
    const { data } = this.state;
    console.log(data)
    this.download(data)
  }

  // /var/mobile/Containers/Data/Application/FE778F08-3F62-422F-8DE5-A745D6B3DE4F/Documents/10001.mp3'
  path1 = `${RNFetchBlob.fs.dirs.DocumentDir}/10001.mp3`
  path2 = '/var/mobile/Containers/Data/Application/FE778F08-3F62-422F-8DE5-A745D6B3DE4F/Documents/10002.mp3'

  download = (data) => {
    RNFetchBlob
    .config({
        // DCIMDir is in external storage
        path : `${RNFetchBlob.fs.dirs.DocumentDir}/${data.id}.mp3`
    })
    .fetch('GET', data.url)
    .progress({ count: 10 }, (received, total) => {
      console.log(`progress: `, Math.floor(received/total*100), '%')
    })
    .then((res) => {
      console.log('res:',res)
      console.log('res info:',res.info())
      console.log('res.path():', res.path())
      // RNFetchBlob.fs.scanFile([ { path : res.path(), mime : 'audio/mpeg' } ])
    })
    .catch((err) => {
      console.log('err', err)
    })
  }

  size = () => {
    RNFetchBlob.fs.readFile(this.path1, 'base64')
    .then((data) => {
      let decodedData = base64.decode(data);
      let bytes = decodedData.length;
      if(bytes < 1024) console.log(bytes + " Bytes");
      else if(bytes < 1048576) console.log("KB:"+(bytes / 1024).toFixed(3) + " KB");
      else if(bytes < 1073741824) console.log("MB:"+(bytes / 1048576).toFixed(2) + " MB");
      else console.log((bytes / 1073741824).toFixed(3) + " GB");
    })
  }

  delete = () => {
    RNFetchBlob.fs.unlink(this.path2).then((res) => {
      console.log('delete', res)
    })
  }

  render() {
    const { data } = this.state;
    return (
      <View style={styles.contain}>
        <Button onPress={() => this._onPress()}>SongFetch</Button>
        <Button onPress={() => this.delete()}>delete</Button>
        <Button onPress={() => this.size()}>size</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    marginTop: 20,
  },
});
