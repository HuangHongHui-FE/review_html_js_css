const axios = require("axios");
//
//推荐歌单
// axios.get("https://api.music.imsyy.top/personalized").then((res) => {
//   console.log(res.data);
// });

//轮播图
// axios.get("https://api.music.imsyy.top/banner").then((res) => {
//   console.log(res.data);
// });

// axios
//   .get("https://api.music.imsyy.top/playlist/detail?id=2704872117")
//   .then((res) => {
//     console.log(res.data.playlist.tracks);
//   });

// axios.get("https://api.music.imsyy.top/toplist/detail").then((res) => {
//   console.log(res.data.list);
// });

//歌单列表(歌单id7064083718)
// axios
//   .get("http://localhost:4000/top/playlist?limit=50&order=hot")
//   .then((res) => {
//     console.log(res.data);
//   });

// 歌单列表;
axios
  .get("http://localhost:4000/lyric?id=1915297033")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

//歌词请求api
// axios({
//   method: "POST",
//   url: "https://music.163.com/api/song/lyric",
//   //   headers: {
//   //     "User-Agent":
//   //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0",
//   //     "Content-Type": "application/x-www-form-urlencoded",
//   //     Referer: "https://music.163.com",
//   //     Cookie: "os=pc",
//   //   },
//   data: "id=34613425&lv=-1&kv=-1&tv=-1",
// })
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
