import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from '@ant-design/react-native';
import Home from './Home';
import Video from './Video';
import Fire from './Fire';
import User from './User';
import Test from './Test';
import { themesColor } from '../style';
import settingsRouteConfigMap from './Setting'

const Navigator = createBottomTabNavigator({
  Home: { screen: Home },
  Video: { screen: Video },
  Fire: { screen: Fire },
  User: { screen: User },
  Test: { screen: Test },
}, {
  backBehavior: 'history',
  order: ['Home', 'Video', 'Fire', 'User', 'Test'],
  initialRouteName: 'Home',
  lazy: false,
  tabBarOptions: {
    showLabel: false,
    activeTintColor: themesColor.red,
    activeBackgroundColor: themesColor.white,
    inactiveColor: themesColor.gray,
    inactiveBackgroundColor: themesColor.white,
    style: {
      backgroundColor: themesColor.white,
      borderTopColor: 'transparent',
    },
  },
});

// Navigator.navigationOptions = ({ navigation }) => {
//   const { routeName } = navigation.state.routes[navigation.state.index];
//   const headerTitle = routeName;
//   headerStyle = {
//     backgroundColor: themesColor.white,
//   };
//   headerTintColor = themesColor.black;
//   headerTitleStyle = {
//     fontWeight: 'bold',
//   };
//   return {
//     headerTitle,
//     headerStyle,
//     headerTintColor,
//     headerTitleStyle,
//   };
// };

const mainRouteConfigMap = {
  Main: { screen: Navigator },
  ...settingsRouteConfigMap
};

export default mainRouteConfigMap;
