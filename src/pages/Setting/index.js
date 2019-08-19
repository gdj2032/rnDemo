import { createTabNavigator } from 'react-navigation';
import FullScreen from './FullScreen';

const SettingsPage = createTabNavigator({
  FullScreen: { screen: FullScreen },
}, {
  backBehavior: 'none',
  lazy: false,
  tabBarOptions: {
    tabBarVisible: false,
  }
});

const settingsRouteConfigMap = {
  Settings: { screen: SettingsPage },
};

export default settingsRouteConfigMap;
