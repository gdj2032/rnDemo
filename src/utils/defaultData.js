
const def_poster = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565865793087&di=94fbe3bc7b713c40288c12a6c44b3904&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171001%2Fe3a0f4f4c49649718e8773467cc2cb37.jpeg';

const def_videoUrl1 = 'https://gslb.miaopai.com/stream/HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__.mp4?ssig=bbabfd7684cae53660dc2d4c2103984e&time_stamp=1533631567740&cookie_id=&vend=1&os=3&partner=1&platform=2&cookie_id=&refer=miaopai&scid=HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__';

const def_videoUrl2 = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';

const defSongList = {
  title: "我创建的歌单",
  isShowList: false,
  list: [
    {
      id: 1,
      title: "我喜欢的音乐",
      isLove: true,
      love: "心动模式",
      all: 434,
      download: 218,
      isSing: false,
      list: [1, 2, 5, 10001, 10005, 11001]
    },
    {
      id: 1565740902007,
      title: "最近听的",
      isLove: false,
      love: "非心动模式",
      all: 100,
      download: 30,
      isSing: true,
      list: []
    },
  ]
};

const defFireScroll = [
  {
    id: 1,
    title: "因乐交友"
  },
  {
    id: 2,
    title: "私人FM"
  },
  {
    id: 3,
    title: "最新电音"
  },
  {
    id: 4,
    title: "Sati空间"
  },
  {
    id: 5,
    title: "私藏推荐"
  },
  {
    id: 6,
    title: "亲子频道"
  },
  {
    id: 7,
    title: "古典专区"
  }
];

const defFireNav = [
  {
    id: 1,
    title: '本地音乐',
    number: 220,
    icon: null,
  },{
    id: 2,
    title: '最近播放',
    number: 102,
    icon: null,
  },{
    id: 3,
    title: '我的电台',
    number: 0,
    icon: null,
  },{
    id: 4,
    title: '我的收藏',
    number: 6,
    icon: null,
  },
]

const defVideoList = [
  {
    id: 1565740102107,
    type: 0,
    number: 53151,
    time: 97000,
    title: '大师傅务器而发生的选择不持续成长',
    author: 'gdj',
    like: 481,
    messageNumber: 59,
    au_Img: null,
    title_img: null,
    video: def_videoUrl1,
    poster: def_poster,
  },
  {
    id: 1565740002107,
    type: 2,
    number: 2105,
    time: 60000,
    title: '啊的说法是的发生发的发的发的顺丰萨芬',
    author: '音乐秀',
    like: 211,
    messageNumber: 22,
    au_Img: null,
    title_img: null,
    video: def_videoUrl2,
    poster: def_poster,
  },
  {
    id: 1565730002107,
    type: 1,
    number: 105,
    time: 97000,
    title: '对方是否合适的非官方的身高多少',
    author: '流行音乐',
    like: 33,
    messageNumber: 12,
    au_Img: null,
    title_img: null,
    video: def_videoUrl1,
    poster: def_poster,
  },
]

const defHomeNavBtn = [
  {
    id: 100001,
    title: "每日推荐",
    icon_name: 'calendar',
    isLove: false,
    love: "非心动模式",
    all: 15,
    download: 0,
    isSing: false,
    list: []
  },
  {
    id: 100002,
    title: "歌单",
    icon_name: 'menu',
    isLove: false,
    love: "非心动模式",
    all: 0,
    download: 0,
    isSing: false,
    list: []
  },
  {
    id: 100003,
    title: "排行榜",
    icon_name: 'align-left',
    isLove: false,
    love: "非心动模式",
    all: 0,
    download: 0,
    isSing: false,
    list: []
  },
  {
    id: 100004,
    title: '电台',
    icon_name: 'customer-service',
    isLove: false,
    love: "非心动模式",
    all: 0,
    download: 0,
    isSing: false,
    list: []
  },
  {
    id: 100005,
    title: '直播',
    icon_name: 'play-square',
    isLove: false,
    love: "非心动模式",
    all: 0,
    download: 0,
    isSing: false,
    list: []
  },
]

const defDailyInfo = {
  id: 1001,
  title: "日推",
  isLove: false,
  love: "非心动模式",
  all: 15,
  download: 0,
  isSing: false,
  list: []
};

export {
  defSongList,
  defFireScroll,
  defFireNav,
  defVideoList,
  def_poster,
  def_videoUrl1,
  def_videoUrl2,
  defHomeNavBtn,
  defDailyInfo,
};
