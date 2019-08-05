import { createBottomTabNavigator } from 'react-navigation';
import Home from './Home/Home';
import Star from './Star';
import Fire from './Fire';
import User from './User';
import { themesColor } from '../style';
import HomeNavigator from './Home';

const Navigator = createBottomTabNavigator({
  Home: { screen: Home },
  Star: { screen: Star },
  Fire: { screen: Fire },
  User: { screen: User },
}, {
  backBehavior: 'history',
  // order: ['Home', 'Star', 'Fire', 'User'],
  initialRouteName: 'Home',
  lazy: false,
  tabBarOptions: {
    showLabel: false,
    activeTintColor: themesColor.blue,
    activeBackgroundColor: themesColor.white,
    inactiveColor: themesColor.gray,
    inactiveBackgroundColor: themesColor.white,
    style: {
      backgroundColor: themesColor.white,
      borderTopColor: 'transparent',
    },
  },
});

const mainRouteConfigMap = {
  Main: { screen: Navigator },
  HomeNav: { screen: HomeNavigator },
};

export default mainRouteConfigMap;
