import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from '@ant-design/react-native';
import Home from './Home';
import Star from './Star';
import Fire from './Fire';
import User from './User';
import { themesColor } from '../style';

const Navigator = createBottomTabNavigator({
  Home: { screen: Home },
  Star: { screen: Star },
  Fire: { screen: Fire },
  User: { screen: User },
}, {
  backBehavior: 'history',
  order: ['Home', 'Star', 'Fire', 'User'],
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
};

export default mainRouteConfigMap;
