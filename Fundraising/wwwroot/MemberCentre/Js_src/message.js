Vue.use(VueLoading);
const app = new Vue({
  el: "#app",
  data: {
    userid: "",
    chatrooms: [],
    search: "",
    chattinglasttime: "",
    chatting: "",
    chattingname: "",
    chattingPhoto: "",
    msg: { chatroom: "", content: "" },
    messages: [],
    connection: null,
  },
  components: {
    Loading: VueLoading,
  },
  mounted() {
    // 初始化
    axios.get("/api/login/getuserid").then((res) => {
      this.userid = res.data;
      // 連線
      this.connection = new signalR.HubConnectionBuilder()
        .withUrl("/chatHub")
        .build();
      this.connection
        .start()
        .then(() => {
          this.connection.invoke("Connect", res.data);
          //接收訊息
          this.connection.on(
            "ReceiveMessage",
            (from, to, chatroom, content, time) => {
              if (this.chatting == from) {
                this.messages.push({
                  chatroomId: chatroom,
                  sender: from,
                  receiver: to,
                  content: content,
                  sentTime: time,
                });
                // 移至底部
                setTimeout(() => this.gobottom(), 0);
              } else {
                axios.get("/api/chatrooms/chats/" + res.data).then((res) => {
                  this.chatrooms = res.data;
                });
              }
            }
          );
        })
        .catch((err) => console.error(err.toString()));
      // 拿取對話清單
      axios.get("/api/chatrooms/chats/" + res.data).then((res) => {
        this.chatrooms = res.data;
        if (sessionStorage.getItem("chatuserId")) {
          console.log("ok");
        }
        setTimeout(() => loader.hide(), 400);
      });
    });

    let loader = this.$loading.show({
      loader: "dots",
    });
  },
  methods: {
    gobottom() {
      document.getElementById("chat-his").scrollTop =
        document.getElementById("chat-his").scrollHeight;
    },
    // 發送訊息
    sendToUser() {
      //時間格式化
      let now = new Date();
      let year = now.getFullYear();
      let month = String(now.getMonth() + 1).padStart(2, "0");
      let day = String(now.getDate()).padStart(2, "0");
      let hour = now.getHours();
      let min = now.getMinutes();
      let currentime = year + "-" + month + "-" + day + " " + hour + ":" + min;

      if (this.msg.content != "") {
        this.connection
          .invoke(
            "SendMessageToUser",
            this.userid,
            this.chatting,
            this.msg.chatroom,
            this.msg.content,
            currentime
          )
          .then(() => {
            // 寫進資料庫
            axios
              .post("/api/Messages", {
                SenderID: this.userid,
                ReceiverID: this.chatting,
                ChatroomID: this.msg.chatroom,
                MessageContent: this.msg.content,
              })
              .then((res) => {
                console.log(res.data);
              });
            // 對話新增(畫面)
            this.messages.push({
              chatroomId: this.msg.chatroom,
              sender: this.userid,
              receiver: this.chatting,
              content: this.msg.content,
              sentTime: currentime,
            });
            // 移至底部
            setTimeout(() => this.gobottom(), 0);
            // 清空input
            this.msg.content = "";
          });
      }
    },
    // tab class切換
    nowchatting(e) {
      if (document.querySelector(".chatting") != null) {
        document.querySelector(".chatting").classList.remove("chatting");
      }
      e.currentTarget.classList.add("chatting");
    },
    // 目前對話對象
    getMsg(e) {
      document.querySelector(".chat-header").style.visibility = "visible ";
      document.querySelector(".chat-input").style.visibility = "visible ";
      this.messages = [];
      this.chatting = e.userId;
      this.chattingname = e.userName;
      this.chattingPhoto = e.userPhoto;
      this.chattinglasttime = e.lastTime;
      this.msg.chatroom = e.chatroomId;
      axios.get("/api/messages/detail/" + e.chatroomId).then((res) => {
        this.messages = res.data;
        setTimeout(() => this.gobottom(), 0);
      });
    },
  },
  computed: {
    searchList() {
      if (this.search) {
        return this.chatrooms.filter((item) => {
          return item.userName.indexOf(this.search) !== -1;
        });
      } else {
        return this.chatrooms;
      }
    },
  },
});
