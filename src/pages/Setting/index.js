import { createBottomTabNavigator } from 'react-navigation';
import VideoScreen from './VideoScreen';
import SongListScreen from './SongListScreen';


const SettingsPage = createBottomTabNavigator({
  VideoScreen: { screen: VideoScreen },
  SongListScreen: { screen: SongListScreen },
}, {
  backBehavior: 'none',
  lazy: true,
  tabBarOptions: {
    showLabel: false,
    tabBarVisible: false,
  },
});

const settingsRouteConfigMap = {
  Settings: { screen: SettingsPage },
};

export default settingsRouteConfigMap;
