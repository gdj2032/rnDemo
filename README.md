# rnDemo
react-native


# 修改android app 图标
android/app/src/main/res/mipmap/...

# 修改 ios app 图标
rnDemo/images.xcassets

# 修改 android 启动图
android/app/src/main/res/drawable/...

# PullScrollView
<!-- <PullScrollView
  isScrollView={true}
  style={{backgroundColor: 'white'}}
  onPullRelease={this.onPullRelease.bind(this)}
  isNeedMoreLoading={true}
  moreLoading={this.moreLoading.bind(this)}
>
  {
    this.dataItem()
  }
</PullScrollView>
<PullScrollView
  isScrollView={false}
  showsVerticalScrollIndicator={false}
  keyExtractor={item => item}
  numColumns={1}
  data={data}
  renderItem={({item}, index) => <Text index={index} style={styles.text}>{item.key}</Text>}
  style={{ backgroundColor: 'white' }}
  onPullRelease={this.onPullRelease.bind(this)}
  isNeedMoreLoading={true}
  moreLoading={this.moreLoading.bind(this)}
/>
  // onPullRelease(resolve) {
  //   //刷新完毕，重置下拉刷新，再次更新刷新和加载更多状态
  //   console.log('onPullRelease')
  //   setTimeout(() => {
  //     let data = this.state.data;
  //     data.push({key: 'q'});
  //     this.setState({data})
  //     resolve();
  //   }, 3000);
  // }
-->