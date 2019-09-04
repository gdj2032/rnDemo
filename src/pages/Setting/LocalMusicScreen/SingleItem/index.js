import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import SongTab from './SongTab';
import SingerTab from './SingerTab';
import AlbumTab from './AlbumTab';
import { themesColor, fonts } from '../../../../style';

const Navigator = createMaterialTopTabNavigator({
  SongTab: { screen: SongTab },
  SingerTab: { screen: SingerTab },
  AlbumTab: { screen: AlbumTab },
}, {
  backBehavior: 'none',
  order: ['SongTab', 'SingerTab', 'AlbumTab'],
  initialRouteName: 'SongTab',
  lazy: true,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: themesColor.red,
    inactiveTintColor: themesColor.black,
    style: {
      backgroundColor: themesColor.white,
      borderTopColor: 'transparent',
    },
    indicatorStyle: {
      backgroundColor: themesColor.white,
    },
    labelStyle: {
      fontSize: fonts.xxx,
    },
    pressOpacity: 1.0,
  },
});

const routes = {
  Main: { screen: Navigator },
};

const SingleItem = createStackNavigator(routes, {
  headerMode: 'none',
  cardStyle: { shadowColor: 'transparent' }
});

export default SingleItem;
