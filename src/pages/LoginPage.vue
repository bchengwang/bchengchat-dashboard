<template>
  <div class="app-2">
    <div class="login">
      <div class="card">
        <form action="#">
          <div class="form-head">
            <router-link to="/">
              <img src="../assets/10001.svg" alt="LOGO" v-show="hide">
              <img :src="imgUrl" alt="头像" v-show="!hide">
            </router-link>
          </div>
          <h4>Log in !</h4>
          <div class="form-group">
            <input type="text" placeholder="账号" v-model="Username" @keyup.enter="changeFocus(Username)"/>
          </div>
          <div class="form-group">
            <input type="text" placeholder="密码" v-model="Password" ref="password" @keyup.enter="loginCheck()"/>
          </div>
          <div class="form-row">
            <div class="col"><el-checkbox :checked="checked" @change="handleCheck"></el-checkbox>已阅读并同意用户协议</div>
            <div class="col">
              <router-link to="/Forgotpsw">忘记密码?</router-link>
            </div>
          </div>
          <div class="btn-login" @click="loginCheck()">登录</div>
        </form>
        <p class="bottom-text">
          没有账号？
          <router-link to="/RegistrationPage">注册账号</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      Username: "",
      Password: "",
      hide:true,
      checked:false,
      imgUrl:'',
      userList: [
        {
          id: 1,
          zhanghao: "admin1",
          mima: "password1",
          name:'张一',
          Location:'北京',
          Status:'在线',
          Email:'demo1@example.com',
          imageUrl:require('../assets/123.png'),
          groupChatNotification:[],
          friendRequestList:[],
          userMessageList:[
      {name:"张1",
      time:"02:30",
      imageUrl:require('../assets/2.svg'),
      to:'/firstChat',
      InfoType:'Chat',
      done:false,
      key:1,
      messageList:[
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      ],},
      {name:"张2",
      time:"02:30",
      imageUrl:require('../assets/2.svg'),
      to:'/firstChat',
      InfoType:'Chat',
      done:false,
      key:2,
      messageList:[
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      ],},
      {name:"相亲相爱一家人",
      time:"02:30",
      imageUrl:require('../assets/1.svg'),
      to:'/firstChat',
      InfoType:'groupChat',
      key:3,
      messageList:[
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/1.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/3.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张3',headImg:require('../assets/10008.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/1.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/3.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张3',headImg:require('../assets/10008.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/1.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/3.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张3',headImg:require('../assets/10008.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/1.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/3.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张3',headImg:require('../assets/10008.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      ],},
          ],
        },
        {
          id: 2,
          zhanghao: "admin2",
          mima: "password2",
          name:'张二',
          Location:'上海',
          Status:'在线',
          Email:'demo2@example.com',
          imageUrl:require('../assets/456.png'),
          groupChatNotification:[],
          friendRequestList:[],
          userMessageList:[
      {name:"章鱼哥",
      time:"02:30",
      imageUrl:require('../assets/2.svg'),
      to:'/firstChat',
      InfoType:'Chat',
      done:false,
      key:1,
      messageList:[
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      ],},
      {name:"派大星",
      time:"02:30",
      imageUrl:require('../assets/2.svg'),
      to:'/firstChat',
      InfoType:'Chat',
      done:false,
      key:2,
      messageList:[
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      ],},
      {name:"比奇堡一家人",
      time:"02:30",
      imageUrl:require('../assets/1.svg'),
      to:'/firstChat',
      key:3,
      InfoType:'groupChat',
      messageList:[
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/1.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/3.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张3',headImg:require('../assets/10008.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/1.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/3.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张3',headImg:require('../assets/10008.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/1.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/3.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张3',headImg:require('../assets/10008.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/1.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/3.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张3',headImg:require('../assets/10008.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      ],},
          ],
        },
        {
          id: 3,
          zhanghao: "admin3",
          mima: "password3",
          name:'张三',
          Location:'天津',
          Status:'在线',
          Email:'demo3@example.com',
          imageUrl:require('../assets/789.png'),
          groupChatNotification:[],
          friendRequestList:[],
          userMessageList:[
      {name:"喜羊羊",
      time:"02:30",
      imageUrl:require('../assets/2.svg'),
      to:'/firstChat',
      InfoType:'Chat',
      done:false,
      key:1,
      messageList:[
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'在吗？',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'在',time:"04:20,",audioUrl:'',messageType:'text',},
      ],},
      {name:"懒羊羊",
      time:"02:30",
      imageUrl:require('../assets/2.svg'),
      to:'/firstChat',
      InfoType:'Chat',
      done:false,
      key:2,
      messageList:[
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/1.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/2.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      ],},
      {name:"羊村一家人",
      time:"02:30",
      imageUrl:require('../assets/1.svg'),
      to:'/firstChat',
      InfoType:'groupChat',
      key:3,
      messageList:[
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/1.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/3.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张3',headImg:require('../assets/10008.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/1.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/3.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张3',headImg:require('../assets/10008.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/1.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/3.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张3',headImg:require('../assets/10008.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张1',headImg:require('../assets/1.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张2',headImg:require('../assets/3.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'我',headImg:require('../assets/2.svg'),messageClass:'chat-message-right',message:'你好',time:"04:20,",audioUrl:'',messageType:'text',},
      {name:'张3',headImg:require('../assets/10008.svg'),messageClass:'chat-message-left',message:'好',time:"04:20,",audioUrl:'',messageType:'text',},
      ],},
          ],
        },
      ],
    };
    },
    mounted() {
      if(localStorage.getItem('userData') === null){
          localStorage.setItem('userData', JSON.stringify(this.userList));
        }else{
          console.log("浏览器已保存过userData");
          // localStorage.setItem('userData', JSON.stringify(this.userList));
        }
    },
    methods: {
    handleCheck(){
      this.checked = !this.checked;
      this.$refs.password.focus()
    },
    loginCheck() {
        // const user = this.userList.filter((item) => {
        // return this.Username === item.zhanghao;
        // });
        const userPassword = JSON.parse(localStorage.getItem('userData'));
        const user = userPassword.filter((item) => {
        return this.Username === item.zhanghao;
        });
        if(user.length <= 0){
        this.$message.error('用户不存在!!!');
        }
        if(user[0].mima === this.Password){
          if(this.checked === true){
          this.$message.success('登录成功');
          this.$router.replace('/HomePage')
          }else{
            this.$notify.info({
          title: '注意',
          message: '请阅读并勾选用户协议'
        });
          }
        }else if(this.Password === ''){
        this.$message.error('密码不能为空!!!');
        }else{
        this.$message.error('密码错误!!!');
        }
        this.$nextTick(() => {
          localStorage.setItem('activeUser',JSON.stringify(user[0]))
        })
        console.log(user);
    },
    changeFocus(username){
      if(username != ''){
        this.$refs.password.focus()
      }else{
        this.$notify.info({
          title: '注意',
          message: '账号不能为空！！！'
        });
      }
    },
    },
    watch:{
      Username:{
        handler(newVal){
          if(newVal === ''){
            this.hide = true;
          }
        const userData = JSON.parse(localStorage.getItem('userData'));
        userData.forEach((item) => {
          if(item.zhanghao === this.Username){
            this.imgUrl = item.imageUrl
            this.hide = false
          }
        });
        }
      }
    }
}
</script>

<style>
.login {
  width: 462.5px;
  position: relative;
  top: 260px;
  margin: 0 auto;
}
.card {
  padding: 30px;
  background-color: white;
  border-radius: 3px;
  width: 402.5px;
  height: 360.188px;
}
.form-head {
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  text-align: center;
}
.form-head a img {
  width: 50px;
  height: 50px;
}
.card form h4 {
  margin-top: 24px;
  margin-bottom: 24px;
  color: #19a299;
  text-align: center;
  font-size: 20px;
}
.form-group {
  margin-bottom: 16px;
}
.form-group input {
  border: none;
  outline: none;
  background-color: rgba(129, 167, 205, 0.1);
  color: #8a98ac;
  border-radius: 3px;
  padding: 6px 12px;
  width: 378.5px;
  height: 23px;
  font-size: 14px;
  font-weight: 400;
}
.form-row {
  display: flex;
  margin-bottom: 16px;
}
.col a {
  padding-left: 145px;
  text-decoration: none;
  color: #19a299;
  font-size: 14px;
}
.col a:hover {
  color: #138179;
}
.col label {
  margin-right: 10px;
}
.col {
  color: #8a98ac;
}
.el-checkbox__inner {
  width: 16px;
  height: 16px;
  display: inline-block;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 1;
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #19a299;
  border: 2px solid #56e5db;
}
.btn-login {
  width: 376.5px;
  height: 27px;
  padding: 6px 12px;
  background-color: #3fd38b;
  border: 1px solid #3fd38b;
  display: block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  color: white;
  cursor: pointer;
}
.bottom-text {
  margin-top: 16px;
  color: #8a98ac;
  font-size: 14px;
  text-align: center;
}
.bottom-text a {
  text-decoration: none;
  color: #19a299;
}
.bottom-text a:hover {
  color: #138179;
}
</style>