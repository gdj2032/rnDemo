import { createTabNavigator } from 'react-navigation';
import VideoScreen from './VideoScreen';
import SongListScreen from './SongListScreen';


const SettingsPage = createTabNavigator({
  VideoScreen: { screen: VideoScreen },
  SongListScreen: { screen: SongListScreen },
}, {
  backBehavior: 'none',
  lazy: true,
  tabBarOptions: {
    tabBarVisible: false,
  },
});

const settingsRouteConfigMap = {
  Settings: { screen: SettingsPage },
};

export default settingsRouteConfigMap;
