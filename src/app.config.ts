export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/abc/abc',
  ],
  tabBar: {
    color: "#000",
    selectedColor: "#6190E8",
    backgroundColor: "#fff",
    borderStyle: "black",
    list: [{
      pagePath: "pages/index/index",
      text: "首页"
    },{
      pagePath: "pages/abc/abc",
      text: "abc"
    }]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
