import { reduxStore } from './utils';

const gotoMusicVideoScreen = (local) => {
  const { navigation } = reduxStore;
  const { singing, allMusic } = local;
  const { singingData, currentSong } = singing;
  const allMusicData = allMusic.data;
  let slData = [];
  singingData.list.forEach(ele => {
    const a = allMusicData.filter(e => e.id === ele);
    slData.push(a[0]);
  });
  console.log(currentSong, slData)
  navigation.navigate('MusicVideoScreen', {data: currentSong, slData: slData})
}

export {
  gotoMusicVideoScreen,
}