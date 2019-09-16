
import RNFetchBlob from 'react-native-fetch-blob';
import base64 from 'react-native-base64';
import { reduxStore } from './utils';
import { UpdateDownload } from '../actions/setting';

const fileDir = RNFetchBlob.fs.dirs.DocumentDir;

const downloadFile = async (data) => {
  const path = `${RNFetchBlob.fs.dirs.DocumentDir}/${data.id}.mp3`;
  const { dispatch, getState } = reduxStore;
  const downloadData = getState.local.download.data;
  const isExit = downloadData.find(ele => ele.id === data.id)
  if(isExit) {
    console.log('歌曲已存在')
    return;
  }
  RNFetchBlob
  .config({
      // DCIMDir is in external storage
      path : path,
  })
  .fetch('GET', data.url)
  .progress({ count: 10 }, (received, total) => {
    console.log(`progress: `, Math.floor(received/total*100), '%')
  })
  .then(async (res) => {
    console.log('res:',res)
    console.log('res info:',res.info())
    console.log('res.path():', res.path())
    const size = await getSize(path)
    console.log('size:',size)
    const opt = {
      id: data.id,
      path: `/${data.id}.mp3`,
      size,
    }
    downloadData.push(opt)
    dispatch(UpdateDownload({ data: downloadData }));
  })
  .catch((err) => {
    console.log('err', err)
  })
}

const getSize = async (path) => {
  return new Promise(async (resolve, reject) => {
    RNFetchBlob.fs.readFile(path, 'base64')
    .then(async (data) => {
      let decodedData = base64.decode(data);
      let bytes = decodedData.length;
      if(bytes < 1024) {
        const b = `${bytes}Bytes`;
        console.log(b)
        resolve(b)
      }
      else if(bytes < 1048576) {
        const b = `${(bytes / 1024).toFixed(3)}KB`;
        console.log(b)
        resolve(b)
      }
      else if(bytes < 1073741824) {
        const b = `${(bytes / 1048576).toFixed(2)}MB`;
        console.log(b)
        resolve(b)
      }
      else {
        const b = `${(bytes / 1073741824).toFixed(3)}GB`;
        console.log(b)
        resolve(b)
      };
    })
    .catch((err) => {
      console.log('err', err)
      resolve('error')
    })
  })
}

const deleteFile = async (path) => {
  RNFetchBlob.fs.unlink(path).then((res) => {
    console.log('delete success')
  })
}

export {
  downloadFile,
  getSize,
  deleteFile,
  fileDir,
}
