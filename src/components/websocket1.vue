<template>
  <div class="hello">
{{msg}}
<button  @click='showHide'>点击</button>

<transition name="fade">
<p v-show="show">哈哈</p>
</transition>
  </div>
</template>

<script>
export default {
  name: "websocket1",
  data() {
    return {
      websock: null,
      msg: "",
      show:true
    };
  },

  created() {
    //页面刚进入时开启长连接
    this.initWebSocket();
  },
  destroyed: function() {
    //页面销毁时关闭长连接
    this.websocketclose();
  },

  methods: {
showHide(){
this.show=!this.show
},
    initWebSocket() {
      //初始化weosocket
      const wsuri = "ws://localhost:3000"; //ws地址

      this.$websocket = new WebSocket(wsuri);

      this.$websocket.onopen = this.websocketonopen;

      this.$websocket.onerror = this.websocketonerror;

      this.$websocket.onmessage = this.websocketonmessage;

      this.$websocket.onclose = this.websocketclose;
    },

    websocketonopen() {
      console.log("WebSocket连接成功");
    },

    websocketonerror(e) {
      //错误
      console.log("WebSocket连接发生错误");
    },

    websocketonmessage(e) {
      //数据接收
      console.log(e);
      this.msg = e.data;
    },

    websocketsend(agentData) {
      //数据发送
      this.$websocket.send(agentData);
    },

    websocketclose(e) {
      //关闭
      console.log("connection closed (" + e.code + ")");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>




