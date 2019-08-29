import VideoScreen from './VideoScreen';
import SongListScreen from './SongListScreen';
import MusicVideoScreen from './MusicVideoScreen';
import DailyRecommendScreen from './DailyRecommendScreen';

const settingsRouteConfigMap = {
  VideoScreen: { screen: VideoScreen },
  SongListScreen: { screen: SongListScreen },
  MusicVideoScreen: { screen: MusicVideoScreen },
  DailyRecommendScreen: { screen: DailyRecommendScreen },
}

export default settingsRouteConfigMap;
