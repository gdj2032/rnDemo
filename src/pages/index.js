import { createBottomTabNavigator } from 'react-navigation';
import Home from './Home';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';

const Navigator = createBottomTabNavigator({
  Home: { screen: Home },
  Part1: { screen: Part1 },
  Part2: { screen: Part2 },
  Part3: { screen: Part3 },
}, {
  backBehavior: 'none',
  order: ['Home', 'Part1', 'Part2', 'Part3'],
  initialRouteName: 'Home',
  lazy: false,
  // tabBarOptions: {
  //   showLabel: false,
  //   activeTintColor: themes.color.normalTextColor,
  //   activeBackgroundColor: '#FFF',
  //   inactiveColor: themes.color.gray,
  //   inactiveBackgroundColor: '#FFF',
  //   style: {
  //     backgroundColor: '#FFF',
  //     borderTopColor: 'transparent',
  //   },
  // },
});

const mainRouteConfigMap = {
  Main: { screen: Navigator },
};

export default mainRouteConfigMap;
