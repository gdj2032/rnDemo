import { createStackNavigator } from 'react-navigation';
import Part1 from './HomeNav/Part1';
import Part2 from './HomeNav/Part2';
import { themesColor } from '../../style';

const HomeNavigator = createStackNavigator({
  Part1: { screen: Part1 },
  Part2: { screen: Part2 },
}, {
  backBehavior: 'history',
  initialRouteName: 'Part1',
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

export default HomeNavigator;
