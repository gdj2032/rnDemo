
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
      list: [
        {
          id: 1,
          name: '失眠飞行',
          editor: '接个吻，开一枪,沈以诚,薛明媛',
          details: '接个吻，开一枪,沈以诚,薛明媛 - 失眠飞行',
          url: 'http://music.163.com/song/media/outer/url?id=1365898499.mp3',
          isSQ: true,
          isMV: false,
          isCloud: true,
          isDownload: false,
          isExclusive: false,
          isSelect: false,cache: null,
          lrc: '[ti:失眠飞行][ar:接个吻，开一枪,沈以诚,薛明媛][al:失眠飞行][by:][offset:0][00:01.31]失眠飞行 - 接个吻，开一枪,沈以诚,薛明媛[00:03.54]想要和你低空飞行[00:05.97]和你到处收集氧气[00:08.38]假如迷雾你看不清[00:10.89]不如坠入我的心里[00:14.03]想带你从吵闹到安宁[00:16.43]想带你从多云到转晴[00:18.69]想要为你整理衬衣[00:21.05]为你到处收集诗句[00:24.46]又过了每晚给你[00:25.47]热牛奶的时间[00:26.91]床头还写着我们[00:27.94]没看完的影片[00:29.47]离开后的时间里[00:30.50]你是否还失眠[00:31.97]从不熬夜的我[00:32.85]也明显黑了眼圈[00:34.49]你送的玩偶依然陪在身边[00:39.32]记忆出现浮现从[00:40.44]开始到终点 又重演[00:43.68]我想和你[00:44.89]一起闯进森林潜入海底[00:48.32]我想和你[00:49.89]一起看日出到日落天气[00:53.47]我想和你穿过格林威治[00:56.55]和时间飞行[00:58.52]我想见你[01:00.12]穿过教堂和人海拥抱你[01:03.59]我想和你[01:13.71]我想和你[01:24.16]想要和你低空飞行[01:26.65]和你到处收集氧气[01:29.18]假如迷雾你看不清[01:31.71]不如坠入我的心里[01:34.77]想带你从吵闹到安宁[01:37.21]想带你从多云到转晴[01:39.39]想要为你整理衬衣[01:41.79]为你到处收集诗句[01:45.27]又过了每晚给你[01:46.28]热牛奶的时间[01:47.74]床头还写着我们[01:48.74]没看完的影片[01:50.18]离开后的时间里[01:51.27]你是否还失眠[01:52.76]从不熬夜的我也[01:53.83]明显黑了眼圈[01:55.28]你送的玩偶[01:56.66]依然陪在身边[02:00.32]记忆出现浮现[02:01.33]从开始到终点 又重演[02:04.45]我想和你[02:05.71]一起闯进森林潜入海底[02:09.18]我想和你[02:10.76]一起看日出到日落天气[02:14.26]我想和你穿过格林威治[02:17.41]和时间飞行[02:19.35]我想见你[02:20.90]穿过教堂和人海拥抱你[02:24.44]我想和你[02:34.81]我想和你[02:44.59]我想和你[02:46.70]再路过那家咖啡店[02:48.99]熟悉又陌生的地点[02:51.26]驻足希望你的身影会出现[02:56.75]还没说出口的抱歉[02:59.05]曾和你约定的诺言[03:01.36]抬头闭眼让泪流进心里面[03:05.08]我想和你[03:06.40]一起闯进森林潜入海底[03:09.83]我想和你[03:11.36]一起看日出到日落天气[03:14.80]我想和你穿过格林威治[03:18.02]和时间飞行[03:19.92]我想见你[03:21.46]穿过教堂和人海拥抱你'
        },
        {
          id: 2,
          name: '我曾 (女生版）',
          editor: '灿烂C.L',
          details: '灿烂C.L 我曾 (女生版）',
          url: 'http://music.163.com/song/media/outer/url?id=1357477356.mp3',
          isSQ: false,
          isMV: true,
          isCloud: true,
          isDownload: true,
          isExclusive: true,
          isSelect: false,cache: null,
          lrc: '[00 : 00.000]作曲: 隔壁老樊 [00 : 00.306]作词: 隔壁老樊 [00 : 00.919]我曾被无数的冷风吹透我胸口 [00 : 09.917]我曾被遥远的梦逼着我仰望星空 [00 : 16.666]我曾被无数的嘲讽让我放弃我的音乐梦 [00 : 24.666]我曾被无数的黄土淹没我的澎湃汹涌 [01 : 06.665]我曾想要我的歌声无尽沉沦的感动 [01 : 14.621]我曾把他们当成我风雨过后那一道彩虹 [01 : 22.864]我曾把堕落的原因都丢给时间 [01 : 30.860]我曾把机会就扔在我眼前 [01 : 39.360]我曾把完整的镜子打碎夜晚的枕头都是眼泪 [01 : 47.610]我多想让过去重来再给我一次机会 [01 : 56.110]我想说过去的时间我谁都不为 [02 : 04.344]除了空谈也就是事事非非 [02 : 53.844]我曾想要我的歌声无尽沉沦的感动 [03 : 01.843]我曾把他们当成我风雨过后那一道彩虹 [03 : 10.093]我曾把堕落的原因都丢给时间 [03 : 18.843]我曾把机会就扔在我眼前 [03 : 27.094]我曾把完整的镜子打碎夜晚的枕头都是眼泪 [03 : 35.343]我多想让过去重来再给我一次机会 [03 : 43.593]我想说过去的时间我谁都不为 [03 : 52.093]除了空谈也就是事事非非 [03 : 59.842]我曾把完整的镜子打碎夜晚的枕头都是眼泪 [04 : 08.343]我多想让过去重来再给我一次机会 [04 : 16.845]我想说过去的时间我谁都不为 [04 : 33.592]除了空谈也就是事事非非'
        },
      ]
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

const defSongListData = [];

export {
  defSongList,
  defFireScroll,
  defFireNav,
  defVideoList,
  def_poster,
  def_videoUrl1,
  def_videoUrl2,
  defSongListData,
};
