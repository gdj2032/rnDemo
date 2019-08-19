import { createNavigationContainer } from 'react-navigation';
import FullScreen from './FullScreen';

const SettingsPage = createNavigationContainer({
  FullScreen: { screen: FullScreen },
});

const settingsRouteConfigMap = {
  Settings: { screen: SettingsPage },
};

export default settingsRouteConfigMap;
