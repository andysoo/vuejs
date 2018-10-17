<template>
  <div>
    test
  </div>
</template>
<script>
/* eslint no-eval:off */
// import axios from "axios";
import jsonp from "jsonp";
export default {
  created() {
    // axios
    //   .get("http://music.henshui.com/api/musicList.js?!234")
    //   .then(res => {
    //     console.log(res.data);
    //     this.musicList = eval(res.data); //不建议使用eval（）会报错
    //   })
    //   .catch(rej => {
    //     console.log(rej);
    //   });
    // fetch("http://music.henshui.com/api/musicList.js?!234")
    //   .then(res => res.text())
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(rej => {
    //     console.log(rej);
    //   });
    jsonp(
      "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2018-10-17&topid=4&type=top&song_begin=0&song_num=30&g_tk=5381&jsonpCallback=MusicJsonCallbacktoplist&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0",
      { name: "MusicJsonCallbacktoplist", timeout: 1000 },
      (err, data) => {
        console.log(err);
        console.log(data);
      }
    );
  },
  data() {
    return {
      musicList: []
    };
  }
};
</script>
