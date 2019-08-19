import { createTabNavigator } from 'react-navigation';
import VideoScreen from './VideoScreen';

const SettingsPage = createTabNavigator({
  VideoScreen: { screen: VideoScreen },
}, {
  backBehavior: 'none',
  lazy: true,
  tabBarOptions: {
    tabBarVisible: false,
  }
});

const settingsRouteConfigMap = {
  Settings: { screen: SettingsPage },
};

export default settingsRouteConfigMap;
