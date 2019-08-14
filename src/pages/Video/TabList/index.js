import { createNavigator, createAppContainer } from 'react-navigation';
import Recommend from './Recommend';
import LiveBroadcast from './LiveBroadcast';
import Faded from './Faded';
import OnSite from './OnSite';
import CoverSong from './CoverSong';
import MVItem from './MVItem';
import Square from './Square';
import Dance from './Dance';

export const tabListTitle = [
  { title: '推荐' },
  { title: '直播' },
  { title: 'Faded' },
  { title: '现场' },
  { title: '翻唱' },
  { title: 'MV' },
  { title: '广场' },
  { title: '舞蹈' },
];

export const navTitle = {
  [tabListTitle[0].title]: Recommend,
  [tabListTitle[1].title]: LiveBroadcast,
  [tabListTitle[2].title]: Faded,
  [tabListTitle[3].title]: OnSite,
  [tabListTitle[4].title]: CoverSong,
  [tabListTitle[5].title]: MVItem,
  [tabListTitle[6].title]: Square,
  [tabListTitle[7].title]: Dance,
}

// export const TabList = createNavigator({
//   Recommend: Recommend,
//   LiveBroadcast: LiveBroadcast,
//   Faded: Faded,
//   OnSite: OnSite,
//   CoverSong: CoverSong,
//   MVItem: MVItem,
//   Square: Square,
//   Dance: Dance,
// });

