const def_poster = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565865793087&di=94fbe3bc7b713c40288c12a6c44b3904&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171001%2Fe3a0f4f4c49649718e8773467cc2cb37.jpeg';

const def_videoUrl1 = 'https://gslb.miaopai.com/stream/HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__.mp4?ssig=bbabfd7684cae53660dc2d4c2103984e&time_stamp=1533631567740&cookie_id=&vend=1&os=3&partner=1&platform=2&cookie_id=&refer=miaopai&scid=HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__';

const def_videoUrl2 = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';

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

const defSongListData = [
  {
    id: 1,
    name: '不朽之罪',
    editor: '双笙/玄觞',
    details: '【双笙/玄觞】 不朽之罪',
    url: 'http://music.163.com/song/media/outer/url?id=461687747.mp3',
    isSQ: false,
    isMV: false,
    isCloud: true,
    isDownload: true,
    isExclusive: false,
    isSelect: false,
    lrc: '[00 : 00.000]作曲: Adamack《No turning back》 [00 : 00.029]作词: 千月兔 [00 : 00.88]不朽之罪 [00 : 02.94]原曲：Adamack《No turning back》 [00 : 03.27]填曲：SK[00 : 04.27]作词：千月兔 [00 : 05.49]演唱：双笙＆玄觞 [00 : 07.79]后期：Mr.鱼 [00 : 08.24] PV：秀一 [00 : 09.33][00 : 10.20]【笙】打乱的骨牌习惯盲目依赖 [00 : 14.83]【笙】以坦然姿态等风来 [00 : 20.00]【笙】鞋跟下青苔爬满拖地裙摆 [00 : 24.42]【笙】神的福音被隔绝窗外 [00 : 28.68][00 : 29.25]【玄】天平支点倾斜自尊将我打败 [00 : 33.90]【玄】不安的窘态在作怪 [00 : 38.76]【玄】我熟知的年代还能区分黑白 [00 : 43.58]【玄】无需卖弄心机耍赖 [00 : 47.75][00 : 48.31]【合】为谁深陷不知往返的迷恋 [00 : 53.02]【合】未曾认清这个世界 [00 : 57.93]【合】我听到权力之争彻夜不歇 [01 : 02.86]【合】街尾血香愈显浓烈 [01 : 06.71][01 : 07.41]【玄】空间接应点于囚笼中调配 [01 : 12.33]【玄】密封的花蕊正枯萎 [01 : 16.94]【玄】听断线傀儡晚安留在句尾 [01 : 22.00]【玄】僵硬的思维筛选错对 [01 : 25.98][01 : 26.60]【笙】天平支点倾斜自尊将我打败 [01 : 31.38]【笙】不安的窘态在作怪 [01 : 36.14]【笙】我熟知的年代还能区分黑白 [01 : 41.02]【笙】无需卖弄心机耍赖 [01 : 44.96][01 : 45.70]【笙】为谁深陷不知往返的迷恋 [01 : 50.50]【笙】未曾认清这个世界 [01 : 55.26]【玄】我听到权力之争彻夜不歇 [02 : 00.14]【玄】街尾血香愈显浓烈 [02 : 04.33][02 : 04.86]【合】甘愿臣服于谁立忠诚之碑 [02 : 09.56]【合】重叠暗夜又一番教诲 [02 : 14.42]【合】结局早已无谓 [02 : 17.84]【合】明与灭滞留病态的美 [02 : 26.91][02 : 34.07]【玄】为谁深陷不知往返的迷恋 [02 : 38.50]【笙】为谁认清这个世界 [02 : 43.29]【玄】我听到权力之争彻夜不歇 [02 : 48.21]【笙】街尾血香愈显浓烈 [02 : 52.25][02 : 52.83]【笙】打乱的骨牌习惯盲目依赖 [02 : 54.65]（【玄】为谁深陷不知往返的迷恋） [02 : 57.53]【笙】以坦然姿态等风来 [03 : 00.48]（【玄】未曾认清这个世界） [03 : 02.30]【笙】让断线傀儡晚安留在句尾 [03 : 05.32]（【玄】我听到权力之争彻夜不歇） [03 : 07.17]【笙】僵硬的思维筛选错对 [03 : 10.38]（【玄】街尾血香愈显浓烈)[03 : 16.14][03 : 18.69] - The End–',
  },
  {
    id: 2,
    name: '红昭愿',
    editor: '音阙诗听',
    details: '【音阙诗听】 红昭愿',
    url: 'http://music.163.com/song/media/outer/url?id=452986458.mp3',
    isSQ: true,
    isMV: true,
    isCloud: true,
    isDownload: false,
    isExclusive: false,
    isSelect: false,
    lrc: '[00 : 00.000]作曲: 殇小谨 [00 : 01.000]作词: 荒唐客 (偏生梓归)[00 : 19.09]手中雕刻生花 [00 : 21.10]刀锋千转蜿蜒成画 [00 : 23.20]盛名功德塔 [00 : 24.78]是桥畔某处人家 [00 : 27.33]春风绕过发梢红纱 [00 : 29.34]刺绣赠他 [00 : 31.22]眉目刚烈拟作妆嫁 [00 : 35.30]轰烈流沙枕上白发 [00 : 37.36]杯中酒比划 [00 : 39.52]年少风雅鲜衣怒马 [00 : 41.62]也不过一刹那 [00 : 43.60]难免疏漏儿时檐下 [00 : 45.69]莫测变化 [00 : 47.73]隔却山海 [00 : 49.87]转身从容煎茶 [01 : 08.53]一生长 [01 : 09.23]重寄一段过往 [01 : 11.19]将希冀都流放 [01 : 13.41]可曾添些荒唐 [01 : 14.79]才记得你的模样 [01 : 16.88]一身霜 [01 : 18.78]谁提笔只两行 [01 : 20.58]换一隅你安康 [01 : 21.61]便销得这沧桑 [01 : 23.13]你还在我的心上 [01 : 42.50]镜子中的她：手中雕刻生花 [01 : 44.31]现实中的她：刀锋千转蜿蜒成画 [01 : 46.78]镜子中的她：盛名功德塔 [01 : 49.12]现实中的她：是桥畔某处人家 [01 : 50.88]春风绕过发梢红纱 [01 : 53.03]刺绣赠他 [01 : 54.61]眉目刚烈拟作妆嫁 [01 : 58.74]轰烈流沙枕上白发 [02 : 00.82]杯中酒比划 [02 : 02.97]年少风雅鲜衣怒马 [02 : 04.94]也不过一刹那 [02 : 07.04]难免疏漏儿时檐下 [02 : 09.02]莫测变化 [02 : 11.14]隔却山海 [02 : 12.77]转身从容煎茶 [02 : 15.32]一生长 [02 : 16.38]重寄一段过往 [02 : 18.02]将希冀都流放 [02 : 20.07]可曾添些荒唐 [02 : 21.42]才记得你的模样 [02 : 23.54]一身霜 [02 : 24.23]谁提笔只两行 [02 : 26.30]换一隅你安康 [02 : 28.54]便销得这沧桑 [02 : 29.93]你还在我的心上 [02 : 31.83]一生长 [02 : 32.60]重寄一段过往 [02 : 34.64]将希冀都流放 [02 : 36.72]可曾添些荒唐 [02 : 38.12]才记得你的模样 [02 : 40.09]一身霜 [02 : 40.78]谁提笔只两行 [02 : 42.94]换一隅你安康 [02 : 44.96]便销得这沧桑 [02 : 46.52]你还在我的心上 [02 : 50.07][02 : 51.07]编曲：朱鸽 [02 : 51.37]混音：殇小谨 [02 : 51.88]和声编写：殇小谨 [02 : 52.03]和声：殇小谨 [02 : 52.59]美工：睢亦 [02 : 52.89]混音室：Hot Music Studio[02 : 53.01]监制：殇小谨李俊羽'
  },
  {
    id: 3,
    name: '一眼万年',
    editor: '林俊杰',
    details: '林俊杰 - 她说 概念自选集',
    url: 'http://music.163.com/song/media/outer/url?id=108254.mp3',
    isSQ: true,
    isMV: false,
    isCloud: true,
    isDownload: false,
    isExclusive: false,
    isSelect: false,
    lrc: '[00 : 00.050]作曲：林俊杰 [00 : 00.250]作词：姚若龙 [00 : 00.350]编曲：陈炯顺 [00 : 01.350]制作人：陈炯顺 [00 : 02.350]配唱制作：Dr.Moon[00 : 03.350] Music Arrangement & Keyboards：陈炯顺 [00 : 04.350]古筝：徐晶晶 [00 : 05.350] Flute：纪康阳 [00 : 06.350] All guitars：Jamie Wilson[00 : 07.350] Background vocal arrangement：林俊杰,Dr.Moon[00 : 08.350] Background Vocals：林俊杰 [00 : 09.350] Recorded at The Embassy(Beijing),The Scape(Singapore)[00 : 10.350] Recorded by Dr.Moon,Zennon Goh[00 : 11.350] Mixed at Blue Moon Studio(LA)[00 : 12.350] Mixed by Joe Vannelli & Joe Primeau with Billy Koh[00 : 13.350] OP: Great Music Publishing Ltd. / Touch Music Publishing Pte Ltd.,Compass[00 : 14.350] SP: 索雅音乐版权代理 (北京)有限公司 / 北京大石版权音乐有限公司 [00 : 15.350] ISRC TW - B67 - 10 - 05205[00 : 16.950]泪有点咸有点甜 [00 : 20.900]你的胸膛吻着我的侧脸 [00 : 24.800]回头看踏过的雪 [00 : 28.800]慢慢融化成草原 [00 : 31.669]而我就像你 [00 : 33.779]没有一秒曾後悔 [00 : 38.979][00 : 40.869]爱那麽绵那麽黏 [00 : 44.690]管命运设定要谁离别 [00 : 48.589]海岸线越让人流连 [00 : 53.200]总是美的越蜿蜒 [00 : 55.579]我们太倔强 [00 : 57.709]连天都不忍再反对 [01 : 03.269][01 : 04.059]深情一眼挚爱万年 [01 : 08.549]几度轮回恋恋不灭 [01 : 12.399]把岁月铺成红毯 [01 : 15.069]见证我们的极限 [01 : 20.079]心疼一句珍藏万年 [01 : 24.999]誓言就该比永远更远 [01 : 28.429]要不是沧海桑田 [01 : 31.088]真爱怎麽会浮现 [01 : 36.269][01 : 51.259][01 : 53.419]泪有点咸有点甜 [01 : 57.039]你的胸膛吻着我的侧脸 [02 : 01.449]回头看踏过的雪 [02 : 05.029]慢慢融化成草原 [02 : 09.400]而我就像你 [02 : 10.820]没有一秒曾後悔 [02 : 15.590][02 : 17.860]爱那麽绵那麽黏 [02 : 21.250]管命运设定要谁离别 [02 : 25.750]海岸线越让人流连 [02 : 29.330]总是美的越蜿蜒 [02 : 32.760]我们太倔强 [02 : 34.790]连天都不忍再反对 [02 : 40.880]深情一眼挚爱万年 [02 : 45.200]几度轮回恋恋不灭 [02 : 49.170]把岁月铺成红毯 [02 : 51.780]见证我们的极限 [02 : 56.840]心疼一句珍藏万年 [03 : 01.080]誓言就该比永远更远 [03 : 05.110]要不是沧海桑田 [03 : 07.810]真爱怎麽会浮现 [03 : 12.000][03 : 14.180]深情一眼挚爱万年 [03 : 17.200]几度轮回恋恋不灭 [03 : 21.510]把岁月铺成红毯 [03 : 24.300]见证我们的极限 [03 : 29.170]心疼一句珍藏万年 [03 : 33.500]誓言就该比永远更远 [03 : 37.490]要不是沧海桑田 [03 : 40.130]真爱怎麽会浮现 [03 : 44.160][03 : 45.820]待渡过斜风冷雨 [03 : 48.180]春暖在眼前 [03 : 53.840][04 : 05.500]'
  },
  {
    id: 4,
    name: '我曾 (女生版）',
    editor: '灿烂C.L',
    details: '灿烂C.L 我曾 (女生版）',
    url: 'http://music.163.com/song/media/outer/url?id=1357477356.mp3',
    isSQ: false,
    isMV: true,
    isCloud: true,
    isDownload: true,
    isExclusive: true,
    isSelect: false,
    lrc: '[00 : 00.000]作曲: 隔壁老樊 [00 : 00.306]作词: 隔壁老樊 [00 : 00.919]我曾被无数的冷风吹透我胸口 [00 : 09.917]我曾被遥远的梦逼着我仰望星空 [00 : 16.666]我曾被无数的嘲讽让我放弃我的音乐梦 [00 : 24.666]我曾被无数的黄土淹没我的澎湃汹涌 [01 : 06.665]我曾想要我的歌声无尽沉沦的感动 [01 : 14.621]我曾把他们当成我风雨过后那一道彩虹 [01 : 22.864]我曾把堕落的原因都丢给时间 [01 : 30.860]我曾把机会就扔在我眼前 [01 : 39.360]我曾把完整的镜子打碎夜晚的枕头都是眼泪 [01 : 47.610]我多想让过去重来再给我一次机会 [01 : 56.110]我想说过去的时间我谁都不为 [02 : 04.344]除了空谈也就是事事非非 [02 : 53.844]我曾想要我的歌声无尽沉沦的感动 [03 : 01.843]我曾把他们当成我风雨过后那一道彩虹 [03 : 10.093]我曾把堕落的原因都丢给时间 [03 : 18.843]我曾把机会就扔在我眼前 [03 : 27.094]我曾把完整的镜子打碎夜晚的枕头都是眼泪 [03 : 35.343]我多想让过去重来再给我一次机会 [03 : 43.593]我想说过去的时间我谁都不为 [03 : 52.093]除了空谈也就是事事非非 [03 : 59.842]我曾把完整的镜子打碎夜晚的枕头都是眼泪 [04 : 08.343]我多想让过去重来再给我一次机会 [04 : 16.845]我想说过去的时间我谁都不为 [04 : 33.592]除了空谈也就是事事非非'
  },
  {
    id: 5,
    name: '背对背的拥抱',
    editor: '林俊杰',
    details: '林俊杰 - 100天',
    url: 'http://music.163.com/song/media/outer/url?id=108418.mp3',
    isSQ: true,
    isMV: false,
    isCloud: true,
    isDownload: false,
    isExclusive: false,
    isSelect: false,
    lrc: '[00 : 00.000]作曲: 林俊杰 [00 : 01.000]作词: 林怡凤 [00 : 14.56]话总说不清楚该怎么明了 [00 : 22.11]一字一句像圈套 [00 : 29.29]旧帐总翻不完谁无理取闹 [00 : 36.39]你的双手甩开刚好的微妙 [00 : 41.97]然后战火再燃烧 [00 : 45.93][00 : 48.54]我们背对背拥抱 [00 : 52.24]滥用沉默在咆哮 [00 : 55.90]爱情来不及变老 [00 : 58.91]葬送在烽火的玩笑 [01 : 02.33][01 : 03.32]我们背对背拥抱 [01 : 06.91]真话兜着圈子乱乱绕 [01 : 10.98]只是想让我知道 [01 : 14.58]只是想让你知道爱的警告 [01 : 21.93][01 : 23.31]话总说不清楚该怎么明了 [01 : 30.45]一字一句像圈套 [01 : 37.69]旧帐总翻不完谁无理取闹 [01 : 44.87]你的双手甩开刚好的微妙 [01 : 50.52]然后战火再燃烧 [01 : 54.07][01 : 55.09]我们背对背拥抱 [01 : 58.73]滥用沉默在咆哮 [02 : 02.40]爱情来不及变老 [02 : 05.39]葬送在烽火的玩笑 [02 : 08.74][02 : 10.50]我们背对背拥抱 [02 : 13.51]真话兜着圈子乱乱绕 [02 : 17.29]只是想让我知道 [02 : 21.06]只是想让你知道爱的警告 [02 : 27.60][02 : 28.87]我不要一直到形同陌路变成自找 [02 : 36.28]既然可以拥抱就不要轻易放掉 [02 : 43.63][02 : 44.73]我们背对背拥抱 [02 : 48.48]滥用沉默在咆哮 [02 : 52.12]爱情来不及变老 [02 : 55.21]葬送在烽火的玩笑 [02 : 58.55][02 : 59.40]我们背对背拥抱 [03 : 03.24]真话兜着圈子乱乱绕 [03 : 07.32]只是想让我知道 [03 : 10.72]只是想让你知道这警告 [03 : 18.39]只是想让我知道 [03 : 21.90]只是想让你知道爱的警告 [03 : 31.47]'
},
  {
    id: 6,
    name: '原来',
    editor: '林俊杰',
    details: '林俊杰 - 曹操',
    url: 'http://music.163.com/song/media/outer/url?id=108806.mp3',
    isSQ: true,
    isMV: true,
    isCloud: false,
    isDownload: false,
    isExclusive: false,
    isSelect: false,
    lrc: '[by: 檬珞][00 : 00.000]作曲: 林俊杰 [00 : 01.000]作词: 张思尔 / 林秋离 [00 : 14.130][00 : 16.250]街灯绊住我眼前下一步 [00 : 24.110]拉长的影子嘲弄的回顾 [00 : 30.780]电话亭仍留着你的话 [00 : 34.490]一句话掉一滴泪 [00 : 38.540]今晚的我会是如何入睡 [00 : 44.540][00 : 46.530]原来最疼痛的表情 [00 : 48.570]竟是没有情绪 [00 : 50.460]原来最残忍的画面 [00 : 52.670]可以甜言蜜语 [00 : 54.350]我不懂得如何更爱你 [00 : 58.180]影子讽刺地 [00 : 59.610]跟着我难分难离 [01 : 02.040]原来最孤单的是 [01 : 03.830]我还是那么想你 [01 : 05.910]原来最悲哀的是 [01 : 07.590]我不能面对自己 [01 : 09.820]你收的干净 [01 : 13.490]我也会不留一点痕迹 [01 : 20.460][01 : 33.810]说故事也要像是真的 [01 : 41.580]可是别触动那些回忆 [01 : 48.080]今夜你说了最后一句 [01 : 51.940]一句话掉一滴泪 [01 : 56.000]看来今晚的我很难入睡 [02 : 02.060][02 : 03.920]原来最疼痛的表情 [02 : 05.880]竟是没有情绪 [02 : 07.810]原来最残忍的画面 [02 : 09.720]可以甜言蜜语 [02 : 11.680]我不懂得如何更爱你 [02 : 15.560]影子讽刺地 [02 : 16.980]跟着我难分难离 [02 : 19.410]原来最孤单的是 [02 : 21.160]我还是那么想你 [02 : 23.350]原来最悲哀的是 [02 : 25.050]我不能面对自己 [02 : 27.210]你收的干净 [02 : 30.960]我也会不留一点痕迹 [02 : 38.690][02 : 46.670]原来最疼痛的表情 [02 : 48.460]竟是没有情绪 [02 : 50.410]原来最残忍的画面 [02 : 52.270]可以甜言蜜语 [02 : 54.310]我不懂得如何更爱你 [02 : 58.100]影子讽刺地 [02 : 59.500]跟我难分难离 [03 : 01.960]原来最孤单的是 [03 : 03.670]我还是那么想你 [03 : 05.910]原来最悲哀的是 [03 : 07.790]我不能面对自己 [03 : 09.800]你收的干净 [03 : 13.540]我也会不留一点痕迹 [03 : 21.240]'
  },
  {
    id: 7,
    name: '绿色',
    editor: '陈雪凝',
    details: '陈雪凝 - 绿色',
    url: 'http://music.163.com/song/media/outer/url?id=1345848098.mp3',
    isSQ: true,
    isMV: false,
    isCloud: false,
    isDownload: true,
    isExclusive: true,
    isSelect: false,
    lrc: '[00 : 00.000]作曲: 陈雪凝 [00 : 00.000]作词: 陈雪凝 [00 : 00.00]编曲：Dadz[00 : 00.880]若不是你突然闯进我生活 [00 : 04.370]我怎会把死守的寂寞放任了 [00 : 25.850]说不痛苦那是假的 [00 : 29.320]毕竟我的心也是肉做的 [00 : 33.700]你离开时我心里的彩虹 [00 : 37.600]就变成灰色 [00 : 41.570]说不心酸那是假的 [00 : 45.020]如果我真的没那么爱过 [00 : 48.940]爱着一个没有灵魂的人 [00 : 52.430]世界都是黑色 [00 : 56.670]若不是你突然闯进我生活 [01 : 00.520]我怎会把死守的寂寞放任了 [01 : 04.459]爱我的话你都说 [01 : 06.459]爱我的事你不做 [01 : 08.469]我却把甜言蜜语当做你爱我的躯壳 [01 : 12.890]你的悲伤难过我不参破 [01 : 16.310]我也会把曾经的且过当施舍 [01 : 20.250]不去计较你太多 [01 : 22.250]从此你在我心里 [01 : 23.890]只剩绿色 [01 : 44.480]说很快活那是假的 [01 : 47.989]你的名字依然那么深刻 [01 : 51.940]每个字都刺穿我的心脏 [01 : 55.739]那鲜明的痛是红色 [01 : 59.569]若不是你突然闯进我生活 [02 : 03.510]我怎会把死守的寂寞放任了 [02 : 07.400]爱我的话你都说 [02 : 09.439]爱我的事你不做 [02 : 11.400]我却把甜言蜜语当做你爱我的躯壳 [02 : 15.770]你的悲伤难过我不参破 [02 : 19.199]我也会把曾经的且过当施舍 [02 : 23.210]不去计较你太多 [02 : 25.129]从此你在我心里 [02 : 26.810]只剩绿色 [02 : 31.830]呼～ [03 : 33.979]若不是你突然闯进我生活 [03 : 37.879]我怎会把死守的寂寞放任了 [03 : 41.789]爱我的话你都说 [03 : 43.830]爱我的事你不做 [03 : 45.800]我却把甜言蜜语当做你爱我的躯壳 [03 : 50.330]若不是你突然闯进我生活 [03 : 53.660]我怎会把死守的寂寞放任了 [03 : 57.569]爱我的话你都说 [03 : 59.580]爱我的事你不做 [04 : 01.599]我却把甜言蜜语当做你爱我的躯壳 [04 : 05.990]你的悲伤难过我不参破 [04 : 09.430]我也会把曾经的且过当施舍 [04 : 13.349]若不是你突然闯进我生活 [04 : 17.319]我怎会把死守的寂寞放任了 [04 : 21.199]爱我的话你都说 [04 : 23.230]爱我的事你不做 [04 : 25.250]我却把甜言蜜语当做你爱我的躯壳 [04 : 31.290]和声：李美灵芝 [04 : 32.810]混音：一曲不空 [04 : 34.040]发行：3SEVEN叁七'
  },
  {
    id: 8,
    name: '出山',
    editor: '花粥/王胜男',
    details: '花粥/王胜男 - 粥请客（四）',
    url: 'http://music.163.com/song/media/outer/url?id=1313354324.mp3',
    isSQ: true,
    isMV: true,
    isCloud: false,
    isDownload: true,
    isExclusive: true,
    isSelect: false,
    lrc: '[by: GoodTM][00 : 00.000]作曲: 花粥 [00 : 01.000]作词: 花粥 [00 : 10.43][00 : 11.12]在夜半三更过天桥从来不敢回头看 [00 : 15.86]白日里是车水马龙此时脚下是忘川 [00 : 21.30]我独自走过半山腰山间野狗来作伴 [00 : 25.19]层林尽染百舸流秋风吹过鬼门关 [00 : 29.81]一瞬三年五载品粗茶食淡饭 [00 : 34.49]六界八荒四海无人与我来叫板 [00 : 39.19]人间荒唐古怪竹林外有书斋 [00 : 43.78]匿于此地畅快偏来者不善善者不来 [00 : 50.85]是我装模作样在瞎掰 [00 : 55.18]还是他们本就心怀鬼胎 [00 : 57.82]有人不知悔改迷雾中混淆黑白 [01 : 02.46]在情怀里市侩旁人不敢来拆穿 [01 : 07.17]看似时来运转实则在顶风作案 [01 : 11.73]待曲终又人散这一出还有谁在围观 [01 : 16.79]在凡尘修炼二十载听闻水能滴石穿 [01 : 21.07]帝王豪杰风云变幻敌不过桑田沧海 [01 : 25.85]我不关心谁的江山只眷恋两小无猜 [01 : 30.36]兴风作浪不稀罕只身固守峨眉山 [01 : 35.14]一瞬三年五载品粗茶食淡饭 [01 : 39.73]六界八荒四海无人与我来叫板 [01 : 44.33]人间荒唐古怪竹林外有书斋 [01 : 49.11]匿于此地畅快偏来者不善善者不来 [01 : 56.00]是我装模作样在瞎猜 [02 : 00.39]还是他们本就心怀鬼胎 [02 : 03.15]有人不知悔改迷雾中混淆黑白 [02 : 07.73]在情怀里市侩旁人不敢来拆穿 [02 : 12.39]看似时来运转实则在顶风作案 [02 : 17.06]待曲终又人散这一出还有谁在围观 [02 : 21.82]静悄悄配唠唠叨叨 [02 : 24.00]随便瞧瞧我凑凑热闹 [02 : 26.34]客串也别太潦草 [02 : 28.70]吃的生蚝要蘸个酱料 [02 : 31.00]悄悄你唠唠叨叨 [02 : 33.30]随便瞧瞧你凑的热闹 [02 : 35.68]听到你做个记号 [02 : 37.84]请装进书包别四处招摇 [02 : 40.29]有人迷途知返 [02 : 45.08]便是苦尽甘来 [02 : 50.00]一瞬三年五载 [02 : 54.15]这曲终又人散 [03 : 33.63][03 : 33.95]合作音乐人：王胜男 [03 : 34.13]音乐制作：BachBeats[03 : 34.31]录音师：种旭 [03 : 34.48]混音／母带处理：钻石狗音乐工作室（北京） [03 : 34.82]专辑封面设计：姜小海 [03 : 35.25]'
  },{
    id: 9,
    name: '盗将行',
    editor: '花粥/马雨阳',
    details: '花粥/马雨阳 - 粥请客（二）',
    url: 'http://music.163.com/song/media/outer/url?id=574566207.mp3',
    isSQ: true,
    isMV: true,
    isCloud: false,
    isDownload: false,
    isExclusive: true,
    isSelect: false,
    lrc: '[by: 癫癫_][ti: 盗将行][ar: 花粥 / 马雨阳][al: 粥请客（二）][00 : 00.000]作曲: 花粥 [00 : 01.000]作词: 姬霄 [00 : 08.825]编曲 / 混音：马雨阳 [00 : 18.217]劫过九重城关 [00 : 21.184]我座下马正酣 [00 : 23.656]看那轻飘飘的衣摆 [00 : 26.975]趁擦肩把裙掀 [00 : 29.877]踏遍三江六岸 [00 : 33.210]借刀光做船帆 [00 : 35.945]任露水浸透了短衫 [00 : 39.393]大盗睥睨四野 [00 : 43.735]枕风宿雪多年 [00 : 47.194]我与虎谋早餐 [00 : 49.688]拎着钓叟的鱼弦 [00 : 53.357]问卧龙几两钱 [00 : 55.874]蜀中大雨连绵 [00 : 59.291]关外横尸遍野 [01 : 02.138]你的笑像一条恶犬 [01 : 05.303]撞乱了我心弦 [01 : 23.009]谈花饮月赋闲 [01 : 25.771]这春宵艳阳天 [01 : 28.275]待到梦醒时分睁眼 [01 : 31.770]铁甲寒意凛冽 [01 : 34.304]夙愿只隔一箭 [01 : 37.704]故乡近似天边 [01 : 40.608]不知何人浅唱弄弦 [01 : 44.009]我彷徨不可前 [01 : 51.313]枕风宿雪多年 [01 : 54.645]我与虎谋早餐 [01 : 57.337]拎着钓叟的鱼弦 [02 : 00.841]问卧龙几两钱 [02 : 03.517]蜀中大雨连绵 [02 : 07.049]关外横尸遍野 [02 : 09.771]你的笑像一条恶犬 [02 : 13.137]撞乱我心弦 [02 : 15.916]烽烟万里如衔 [02 : 19.290]掷群雄下酒宴 [02 : 22.002]谢绝策勋十二转 [02 : 25.539]想为你窃玉簪 [02 : 28.204]入巷间吃汤面 [02 : 31.690]笑看窗边飞雪 [02 : 34.340]取腰间明珠弹山雀 [02 : 37.721]立枇杷于庭前 [02 : 45.748]入巷间吃汤面 [02 : 49.694]笑看窗边飞雪 [02 : 53.209]取腰间明珠弹山雀 [02 : 57.041]立枇杷于庭前'
  },{
    id: 10,
    name: '追光者（电视剧《夏至未至》插曲）',
    editor: '岑宁儿',
    details: '岑宁儿 - 夏至未至 影视原声带',
    url: 'http://music.163.com/song/media/outer/url?id=483671599.mp3',
    isSQ: true,
    isMV: true,
    isCloud: false,
    isDownload: false,
    isExclusive: false,
    isSelect: false,
    lrc: '[00 : 00.000]作曲: 马敬 [00 : 01.000]作词: 唐恬 [00 : 09.320]编曲: 黎偌天 [00 : 24.650]如果说你是海上的烟火 [00 : 29.640]我是浪花的泡沫 [00 : 33.200]某一刻你的光照亮了我 [00 : 38.080]如果说你是遥远的星河 [00 : 42.960]耀眼得让人想哭 [00 : 48.450]我是追逐着你的眼眸 [00 : 51.600]总在孤单时候眺望夜空 [01 : 00.880]我可以跟在你身后 [01 : 04.130]像影子追着光梦游 [01 : 07.530]我可以等在这路口 [01 : 10.870]不管你会不会经过 [01 : 14.300]每当我为你抬起头 [01 : 17.600]连眼泪都觉得自由 [01 : 20.680]有的爱像阳光倾落边拥有边失去着 [01 : 41.300]如果说你是夏夜的萤火 [01 : 46.220]孩子们为你唱歌 [01 : 49.930]那么我是想要画你的手 [01 : 54.640]你看我多么渺小一个我 [01 : 59.510]因为你有梦可做 [02 : 05.120]也许你不会为我停留 [02 : 08.360]那就让我站在你的背后 [02 : 14.290]我可以跟在你身后 [02 : 17.460]像影子追着光梦游 [02 : 20.770]我可以等在这路口 [02 : 24.110]不管你会不会经过 [02 : 27.490]每当我为你抬起头 [02 : 30.840]连眼泪都觉得自由 [02 : 34.520]有的爱像大雨滂沱却依然相信彩虹 [03 : 07.590]我可以跟在你身后 [03 : 10.870]像影子追着光梦游 [03 : 14.440]我可以等在这路口 [03 : 17.580]不管你会不会经过 [03 : 20.890]每当我为你抬起头 [03 : 24.130]连眼泪都觉得自由 [03 : 27.760]有的爱像大雨滂沱却依然相信彩虹 [03 : 37.010][03 : 37.110]制作人: 黎偌天 [03 : 37.420]吉他: 劳国贤 [03 : 37.700]弦乐: 国际首席爱乐乐团 [03 : 38.050] Bass: 大宇 [03 : 38.460]监制: 宋鹏飞 [03 : 38.800]音乐出品发行公司: 听见时代传媒'
  },{
    id: 11,
    name: '光年之外（电影《太空旅客》中文主题曲）',
    editor: 'G.E.M.邓紫棋',
    details: 'G.E.M.邓紫棋 - 光年之外',
    url: 'http://music.163.com/song/media/outer/url?id=449818741.mp3',
    isSQ: true,
    isMV: true,
    isCloud: true,
    isDownload: false,
    isExclusive: false,
    isSelect: false,
    lrc: '[00 : 00.000]作曲: G.E.M.邓紫棋 [00 : 01.000]作词: G.E.M.邓紫棋 [00 : 06.010]编曲：Lupo Groinig[00 : 06.690]监制：Lupo Groinig[00 : 11.500]感受停在我发端的指尖 [00 : 16.600]如何瞬间冻结时间 [00 : 22.990]记住望着我坚定的双眼 [00 : 27.270]也许已经没有明天 [00 : 33.920]面对浩瀚的星海 [00 : 36.270]我们微小得像尘埃 [00 : 38.870]漂浮在一片无奈 [00 : 43.600]缘份让我们相遇乱世以外 [00 : 49.360]命运却要我们危难中相爱 [00 : 54.430]也许未来遥远在光年之外 [01 : 00.310]我愿守候未知里为你等待 [01 : 05.360]我没想到为了你我能疯狂到 [01 : 10.140]山崩海啸没有你根本不想逃 [01 : 15.610]我的大脑为了你已经疯狂到 [01 : 20.620]脉搏心跳没有你根本不重要 [01 : 28.710]一双围在我胸口的臂弯 [01 : 32.880]足够抵挡天旋地转 [01 : 38.730]一种执迷不放手的倔强 [01 : 43.630]足以点燃所有希望 [01 : 49.610]宇宙磅礡而冷漠 [01 : 53.060]我们的爱微小却闪烁 [01 : 55.190]颠簸却如此忘我 [02 : 01.140]缘份让我们相遇乱世以外 [02 : 06.100]命运却要我们危难中相爱 [02 : 11.360]也许未来遥远在光年之外 [02 : 16.460]我愿守候未知里为你等待 [02 : 21.530]我没想到为了你我能疯狂到 [02 : 26.170]山崩海啸没有你根本不想逃 [02 : 32.070]我的大脑为了你已经疯狂到 [02 : 37.480]脉搏心跳没有你根本不重要 [02 : 43.850]也许航道以外是醒不来的梦 [02 : 55.810]乱世以外是纯粹的相拥 [03 : 05.010]我没想到为了你我能疯狂到 [03 : 10.050]山崩海啸没有你根本不想逃 [03 : 15.630]我的大脑为了你已经疯狂到 [03 : 21.450]脉搏心跳没有你根本不重要 [03 : 27.060]相遇乱世以外危难中相爱 [03 : 37.960]相遇乱世以外危难中相爱 [03 : 48.500]我没想到'
  },{
    id: 12,
    name: '修炼爱情',
    editor: '林俊杰',
    details: '林俊杰 - 因你而在',
    url: 'http://music.163.com/song/media/outer/url?id=25727803.mp3',
    isSQ: true,
    isMV: true,
    isCloud: false,
    isDownload: false,
    isExclusive: false,
    isSelect: false,
    lrc: '[00 : 00.000]作曲: 林俊杰 [00 : 00.100]作词: 易家扬 [00 : 00.300]编曲: 吴庆隆 [00 : 01.300]制作人：林俊杰 [00 : 02.300]配唱制作：许环良 [00 : 03.300]制作协力：Gary Leo / 周信廷 [00 : 04.300]编曲 & Keyboards：吴庆隆 [00 : 05.300]吉他：Jamie Wilson / Grecco Buratto[00 : 06.300]鼓：Brendan Buckley[00 : 07.300]低音吉他：Eric Holden[00 : 08.300]第一小提琴：孔朝辉、顾文丽、魏喆、陈大伟、孔□隆 [00 : 09.300]第二小提琴：隋晶晶、尹淑占、孔宪隆 [00 : 10.300]中提琴：水兵、关旗 [00 : 11.300]大提琴：王言、赵羽儿 [00 : 12.300]和声编写：林俊杰 [00 : 13.300]和声：林俊杰 [00 : 13.500]录音室：The Fire（SG） / Yellow Box（SG） / Studio In The Hill（SG） / Boss Studio（SG） / Impactstudio（Taipei） / Layer Cake Studio（LA） [00 : 13.700]录音师：许环良、Gary Leo、Philip Wong、陈忠宏、Brendan Buckley[00 : 13.900]混音室：白金录音室（Taipei） [00 : 14.100]混音师：林正忠 [00 : 14.300] OP：飞行石有限公司 [00 : 14.500] SP：Warner Chappell Music Taiwan Ltd. [00 : 14.700] OP：JFJ Productions Corp. [00 : 14.900] SP：Universal Music Publishing Ltd Taiwan. [00 : 15.300] ISRC TWA531398004[00 : 16.300][00 : 16.972]凭什么要失望 [00 : 20.365][00 : 24.043]藏眼泪到心脏 [00 : 27.436][00 : 28.830]往事不会说谎别跟它为难 [00 : 34.689][00 : 36.057]我们两人之间不需要这样 [00 : 41.340][00 : 43.191]我想 [00 : 44.950][00 : 46.215]修炼爱情的心酸 [00 : 49.173][00 : 49.821]学会放好以前的渴望 [00 : 53.373][00 : 53.833]我们那些信仰要忘记多难 [00 : 59.583][01 : 00.477]远距离的欣赏近距离的迷惘 [01 : 04.046]谁说太阳会找到月亮 [01 : 07.548][01 : 08.078]别人有的爱我们不可能模仿 [01 : 13.673][01 : 14.608]修炼爱情的悲欢 [01 : 17.686][01 : 18.275]我们这些努力不简单 [01 : 22.229]快乐炼成泪水是一种勇敢 [01 : 28.076][01 : 28.912]几年前的幻想几年后的原谅 [01 : 32.539]为一张脸去养一身伤 [01 : 36.490]别讲想念我我会受不了这样 [01 : 41.956][01 : 45.793]记忆它真嚣张 [01 : 49.037][01 : 52.936]路灯把痛点亮 [01 : 56.347][01 : 57.799]情人一起看过多少次月亮 [02 : 03.332][02 : 04.931]它在天空看过多少次遗忘 [02 : 11.599]多少心慌 [02 : 14.307][02 : 15.053]修炼爱情的心酸 [02 : 18.130][02 : 18.704]学会放好以前的渴望 [02 : 22.244][02 : 22.745]我们那些信仰要忘记多难 [02 : 28.537][02 : 29.275]远距离的欣赏近距离的迷惘 [02 : 32.908]谁说太阳会找到月亮 [02 : 36.880]别人有的爱我们不可能模仿 [02 : 42.876][02 : 43.604]修炼爱情的悲欢 [02 : 46.711][02 : 47.155]我们这些努力不简单 [02 : 51.083]快乐炼成泪水是一种勇敢 [02 : 56.986][02 : 57.709]几年前的幻想几年后的原谅 [03 : 01.374]为一张脸去养一身伤 [03 : 05.342]别讲想念我我会受不了这样 [03 : 11.789][03 : 23.573]笑着说爱让人疯狂 [03 : 27.142]哭着说爱让人紧张 [03 : 30.364][03 : 30.775]忘不了那个人就投降 [03 : 37.566][03 : 38.603]修炼爱情的悲欢 [03 : 41.603][03 : 42.225]我们这些努力不简单 [03 : 46.221]快乐炼成泪水是一种勇敢 [03 : 52.849]几年前的幻想几年后的原谅 [03 : 56.424]为一张脸去养一身伤 [04 : 00.414]别讲想念我我会受不了这样 [04 : 06.293][04 : 07.068]几年前的幻想几年后的原谅 [04 : 10.701]为一张脸去养一身伤 [04 : 14.647]别讲想念我 [04 : 16.770]我会受不了这样 [04 : 24.467]'
  },{
    id: 13,
    name: '彩虹',
    editor: '周杰伦',
    details: '周杰伦 - 我很忙',
    url: 'http://dl.stream.qqmusic.qq.com/C100004bRWFg3fej9y.m4a?fromtag=38',
    isSQ: true,
    isMV: true,
    isCloud: true,
    isDownload: false,
    isExclusive: false,
    isSelect: false,
    lrc: '[ti: 彩虹][ar: ][al: 263967][by: ][offset: 0][00 : 00.00]彩虹 (《命运呼叫转移》电影主题曲) - 周杰伦 (Jay Chou)[00 : 03.33]词：周杰伦 [00 : 06.66]曲：周杰伦 [00 : 09.99]编曲：林迈可 [00 : 13.32]哪里有彩虹告诉我 [00 : 18.18][00 : 19.01]能不能把我的愿望还给我 [00 : 24.68][00 : 25.76]为什么天这么安静 [00 : 31.06][00 : 31.94]所有的云都跑到我这里 [00 : 37.06][00 : 38.95]有没有口罩一个给我 [00 : 43.99][00 : 44.69]释怀说了太多就成真不了 [00 : 51.19][00 : 51.69]也许时间是一种解药 [00 : 57.45]也是我现在正服下的毒药 [01 : 04.01]看不见你的笑我怎么睡得着 [01 : 09.87][01 : 10.39]你的声音这么近我却抱不到 [01 : 16.00][01 : 16.82]没有地球太阳还是会绕 [01 : 23.38]没有理由我也能自己走 [01 : 29.95]你要离开我知道很简单 [01 : 35.75][01 : 36.32]你说依赖是我们的阻碍 [01 : 43.01]就算放开但能不能别没收我的爱 [01 : 50.01]当作我最后才明白 [01 : 55.12][01 : 56.76]有没有口罩一个给我 [02 : 01.87][02 : 02.39]释怀说了太多就成真不了 [02 : 08.64][02 : 09.53]也许时间是一种解药 [02 : 15.28]也是我现在正服下的毒药 [02 : 21.84]看不见你的笑我怎么睡得着 [02 : 27.45][02 : 28.28]你的声音这么近我却抱不到 [02 : 33.64][02 : 34.90]没有地球太阳还是会绕 [02 : 40.51][02 : 41.03]没有理由我也能自己走 [02 : 47.78]你要离开我知道很简单 [02 : 53.33][02 : 54.22]你说依赖是我们的阻碍 [02 : 59.64][03 : 00.90]就算放开但能不能别没收我的爱 [03 : 08.03]当作我最后才明白 [03 : 13.14][03 : 14.53]看不见你的笑 [03 : 16.28]要我怎么睡得着 [03 : 18.22]你的声音这么近我却抱不到 [03 : 21.27]没有地球太阳还是会绕会绕 [03 : 23.84]没有理由我也能自己走掉 [03 : 27.84]释怀说了太多就成真不了 [03 : 30.90]也许时间是一种解药解药 [03 : 34.47]也是我现在正服下的毒药 [03 : 38.64][03 : 39.72]你要离开我知道很简单 [03 : 45.07][03 : 46.09]你说依赖是我们的阻碍 [03 : 51.89][03 : 52.65]就算放开但能不能别没收我的爱 [03 : 59.14][04 : 03.27]当作我最后才明白'
  },{
    id: 14,
    name: '星晴',
    editor: '周杰伦',
    details: '周杰伦 - Jay同名专辑',
    url: 'http://dl.stream.qqmusic.qq.com/C100001Zi7Ly4ZtVQk.m4a?fromtag=38',
    isSQ: true,
    isMV: true,
    isCloud: true,
    isDownload: false,
    isExclusive: false,
    isSelect: false,
    lrc: '[ti: 星晴][ar: 周杰伦][al: Jay][by: ][offset: 0][00 : 00.00]星晴 - 周杰伦 (Jay Chou)[00 : 02.84]词：周杰伦 [00 : 05.69]曲：周杰伦 [00 : 08.54]编曲：洪敬尧 [00 : 11.39]一步两步三步四步望着天手牵手 [00 : 15.97][00 : 16.65]一颗两颗三颗四颗连成线看星星 [00 : 21.48][00 : 22.04]一步两步三步四步望着天手牵手 [00 : 26.74][00 : 27.41]一颗两颗三颗四颗连成线看星 [00 : 31.81][00 : 33.55]乘着风游荡在蓝天边 [00 : 37.82][00 : 39.23]一片云掉落在我面前 [00 : 43.49][00 : 44.40]捏成你的形状 [00 : 46.30][00 : 47.03]随风跟着我 [00 : 48.65][00 : 49.19]一口一口吃掉忧愁 [00 : 52.22][00 : 55.29]载着你仿佛载着阳光 [00 : 59.52][01 : 00.58]不管到哪里都是晴天 [01 : 05.00][01 : 05.97]蝴蝶自在飞 [01 : 07.60][01 : 08.64]花也布满天 [01 : 10.61]一朵一朵因你而香 [01 : 13.84][01 : 15.05]试图让夕阳飞翔 [01 : 19.21][01 : 20.02]带领你我环绕大自然 [01 : 27.30][01 : 28.58]迎着风 [01 : 30.42][01 : 31.34]开始共度每一天 [01 : 35.94][01 : 36.62]手牵手 [01 : 37.63]一步两步三步四步望着天 [01 : 42.00]看星星一颗两颗三颗四颗连成线 [01 : 46.72][01 : 47.34]背对背 [01 : 49.25]默默许下心愿 [01 : 51.11][01 : 52.16]看远方的星 [01 : 54.44]是否听的见 [01 : 57.12][01 : 58.26]手牵手 [01 : 59.18]一步两步三步四步望着天 [02 : 03.02][02 : 03.62]看星星一颗两颗三颗四颗连成线 [02 : 08.98]背对背 [02 : 10.65]默默许下心愿 [02 : 12.55][02 : 13.77]看远方的星 [02 : 15.69][02 : 16.21]如果听的见 [02 : 18.57][02 : 19.15]它一定实现 [02 : 22.03][02 : 43.21]载着你仿佛载着阳光 [02 : 47.45][02 : 48.60]不管到哪里都是晴天 [02 : 53.26][02 : 53.94]蝴蝶自在飞 [02 : 55.78][02 : 56.56]花也布满天 [02 : 58.50]一朵一朵因你而香 [03 : 01.75][03 : 03.01]试图让夕阳飞翔 [03 : 07.02][03 : 08.07]带领你我环绕大自然 [03 : 15.27][03 : 16.53]迎着风 [03 : 18.49][03 : 19.22]开始共度每一天 [03 : 24.58]手牵手一步两步三步四步望着天 [03 : 29.89]看星星一颗两颗三颗四颗连成线 [03 : 34.81][03 : 35.34]背对背 [03 : 37.13]默默许下心愿 [03 : 38.99][03 : 40.09]看远方的星 [03 : 41.79][03 : 42.38]是否听的见 [03 : 45.05][03 : 46.18]手牵手一步两步三步四步望着天 [03 : 51.55]看星星一颗两颗三颗四颗连成线 [03 : 56.24][03 : 56.88]背对背 [03 : 58.73]默默许下心愿 [04 : 00.52][04 : 01.69]看远方的星 [04 : 03.56][04 : 04.15]如果听的见 [04 : 06.26][04 : 07.09]它一定实现'
  },{
    id: 15,
    name: '青花瓷',
    editor: '周杰伦',
    details: '周杰伦 - 我很忙',
    url: 'http://dl.stream.qqmusic.qq.com/C100002qU5aY3Qu24y.m4a?fromtag=38',
    isSQ: true,
    isMV: false,
    isCloud: true,
    isDownload: false,
    isExclusive: false,
    isSelect: false,
    lrc: '[ti: 青花瓷][ar: 周杰伦][al: 我很忙][by: ][offset: 0][00 : 00.00]青花瓷 - 周杰伦 (Jay Chou)[00 : 05.49]词：方文山 [00 : 10.99]曲：周杰伦 [00 : 16.48]编曲：钟兴民 [00 : 21.98]素胚勾勒出青花笔锋浓转淡 [00 : 26.29]瓶身描绘的牡丹一如你初妆 [00 : 30.72]冉冉檀香透过窗心事我了然 [00 : 35.20]宣纸上走笔至此搁一半 [00 : 39.69]釉色渲染仕女图韵味被私藏 [00 : 44.00]而你嫣然的一笑如含苞待放 [00 : 48.48]你的美一缕飘散 [00 : 50.95]去到我去不了的地方 [00 : 55.75][00 : 57.50]天青色等烟雨而我在等你 [01 : 01.86]炊烟袅袅升起隔江千万里 [01 : 05.79][01 : 06.36]在瓶底书汉隶仿前朝的飘逸 [01 : 09.99][01 : 10.75]就当我为遇见你伏笔 [01 : 15.19]天青色等烟雨而我在等你 [01 : 19.58]月色被打捞起晕开了结局 [01 : 24.05]如传世的青花瓷自顾自美丽 [01 : 28.01]你眼带笑意 [01 : 31.22][01 : 50.82]色白花青的锦鲤跃然于碗底 [01 : 55.20]临摹宋体落款时却惦记着你 [01 : 59.65]你隐藏在窑烧里千年的秘密 [02 : 04.09]极细腻犹如绣花针落地 [02 : 08.61]帘外芭蕉惹骤雨门环惹铜绿 [02 : 12.94]而我路过那江南小镇惹了你 [02 : 17.31]在泼墨山水画里 [02 : 19.80]你从墨色深处被隐去 [02 : 24.17][02 : 26.45]天青色等烟雨而我在等你 [02 : 30.76]炊烟袅袅升起隔江千万里 [02 : 35.15]在瓶底书汉隶仿前朝的飘逸 [02 : 38.98][02 : 39.71]就当我为遇见你伏笔 [02 : 44.10]天青色等烟雨而我在等你 [02 : 48.50]月色被打捞起晕开了结局 [02 : 52.96]如传世的青花瓷自顾自美丽 [02 : 56.85]你眼带笑意 [03 : 00.36][03 : 01.95]天青色等烟雨而我在等你 [03 : 06.27]炊烟袅袅升起隔江千万里 [03 : 10.79]在瓶底书汉隶仿前朝的飘逸 [03 : 15.23]就当我为遇见你伏笔 [03 : 19.65]天青色等烟雨而我在等你 [03 : 24.06]月色被打捞起晕开了结局 [03 : 28.50]如传世的青花瓷自顾自美丽 [03 : 32.38]你眼带笑意'
  },{
    id: 16,
    name: '发如雪',
    editor: '周杰伦',
    details: '周杰伦 - 十一月的肖邦',
    url: 'http://dl.stream.qqmusic.qq.com/C1000027oMO61wWi55.m4a?fromtag=38',
    isSQ: true,
    isMV: true,
    isCloud: true,
    isDownload: false,
    isExclusive: false,
    isSelect: false,
    lrc: '[ti: 发如雪][ar: 周杰伦][al: 十一月的萧邦][by: ][offset: 0][00 : 00.00]发如雪 (Snowy hair) - 周杰伦 (Jay Chou)[00 : 07.35]词：方文山 [00 : 14.70]曲：周杰伦 [00 : 22.05]狼牙月伊人憔悴 [00 : 26.17]我举杯饮尽了风雪 [00 : 31.36][00 : 32.07]是谁打翻前世柜惹尘埃是非 [00 : 38.57]缘字诀几番轮回 [00 : 42.73]你锁眉哭红颜唤不回 [00 : 47.79][00 : 48.65]纵然青史已经成灰我爱不灭 [00 : 55.51][00 : 56.17]繁华如三千东流水 [00 : 59.66][01 : 00.27]我只取一瓢爱了解 [01 : 03.86][01 : 04.38]只恋你化身的蝶 [01 : 10.06]你发如雪凄美了离别 [01 : 14.64]我焚香感动了谁 [01 : 19.39]邀明月让回忆皎洁 [01 : 23.54]爱在月光下完美 [01 : 26.60]你发如雪纷飞了眼泪 [01 : 31.19]我等待苍老了谁 [01 : 35.91]红尘醉微醺的岁月 [01 : 40.32]我用无悔刻永世爱你的碑 [01 : 44.68]你发如雪凄美了离别 [01 : 47.13]我焚香感动了谁 [01 : 48.90]邀明月让回忆皎洁 [01 : 51.14]爱在月光下完美 [01 : 53.04]你发如雪纷飞了眼泪 [01 : 55.31]我等待苍老了谁 [01 : 57.15]红尘醉微醺的岁月 [01 : 59.70][02 : 01.34]狼牙月伊人憔悴 [02 : 05.39]我举杯饮尽了风雪 [02 : 10.60][02 : 11.37]是谁打翻前世柜惹尘埃是非 [02 : 17.84]缘字诀几番轮回 [02 : 22.00]你锁眉哭红颜唤不回 [02 : 27.10][02 : 27.89]纵然青史已经成灰我爱不灭 [02 : 34.87][02 : 35.42]繁华如三千东流水 [02 : 39.02][02 : 39.55]我只取一瓢爱了解 [02 : 43.07][02 : 43.68]只恋你化身的蝶 [02 : 49.36]你发如雪凄美了离别 [02 : 53.96]我焚香感动了谁 [02 : 58.70]邀明月让回忆皎洁 [03 : 02.77]爱在月光下完美 [03 : 05.94]你发如雪纷飞了眼泪 [03 : 10.49]我等待苍老了谁 [03 : 15.26]红尘醉微醺的岁月 [03 : 19.64]我用无悔刻永世爱你的碑 [03 : 23.96]你发如雪凄美了离别 [03 : 26.34]我焚香感动了谁 [03 : 28.36]邀明月让回忆皎洁 [03 : 30.44]爱在月光下完美 [03 : 32.34]你发如雪纷飞了眼泪 [03 : 34.60]我等待苍老了谁 [03 : 36.68]红尘醉微醺的岁月 [03 : 38.93]你发如雪凄美了离别 [03 : 43.63]我焚香感动了谁 [03 : 48.26]邀明月让回忆皎洁 [03 : 52.47]爱在月光下完美 [03 : 55.59]你发如雪纷飞了眼泪 [04 : 00.16]我等待苍老了谁 [04 : 04.51]红尘醉微醺的岁月 [04 : 09.33]我用无悔刻永世爱你的碑 [04 : 16.36]啦儿啦儿啦 [04 : 18.27]啦儿啦啦儿啦啦儿啦儿啊 [04 : 22.42]铜镜映无邪扎马尾 [04 : 26.12]你若撒野今生我把酒奉陪 [04 : 30.25][04 : 30.78]啦儿啦啦儿啦啦儿啦儿啦 [04 : 34.24][04 : 34.89]啦儿啦啦儿啦啦儿啦儿啊 [04 : 38.42][04 : 39.03]铜镜映无邪扎马尾 [04 : 42.67]你若撒野今生我把酒奉陪'
  },
]

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
