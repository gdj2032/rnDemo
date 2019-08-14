const defSongList = {
  title: "我创建的歌单",
  list: [
    {
      id: 1,
      title: "我喜欢的音乐",
      isLove: true,
      love: "心动模式",
      all: 434,
      download: 218,
      isSing: false,
    },
    {
      id: 1565740902007,
      title: "最近听的",
      isLove: false,
      love: "非心动模式",
      all: 100,
      download: 30,
      isSing: true,
    },
    {
      id: 1565750902007,
      title: "周杰伦",
      isLove: false,
      love: "非心动模式",
      all: 200,
      download: 0,
      isSing: false,
    },
    {
      id: 1565760902007,
      title: "林俊杰",
      isLove: false,
      love: "非心动模式",
      all: 227,
      download: 0,
      isSing: false,
    }
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

export { defSongList, defFireScroll, defFireNav };
