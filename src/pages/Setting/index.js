import VideoScreen from './VideoScreen';
import SongListScreen from './SongListScreen';
import MusicVideoScreen from './MusicVideoScreen';
import LocalMusicScreen from './LocalMusicScreen';
import CurrentPlayScreen from './CurrentPlayScreen';
import MyRadioScreen from './MyRadioScreen';
import MyCollectionScreen from './MyCollectionScreen';

const settingsRouteConfigMap = {
  VideoScreen: { screen: VideoScreen },
  SongListScreen: { screen: SongListScreen },
  MusicVideoScreen: { screen: MusicVideoScreen },
  LocalMusicScreen: { screen: LocalMusicScreen },
  CurrentPlayScreen: { screen: CurrentPlayScreen },
  MyRadioScreen: { screen: MyRadioScreen },
  MyCollectionScreen: { screen: MyCollectionScreen },
}

export default settingsRouteConfigMap;
