<template>
  <div class="friendNotification">
    <ul class="friendNotification-list">
      <li class="friendNotification-item" v-for="(item,index) in friendNotificationList" :key="index">
        <div class="friendNotification-item-content">
          <div class="friendNotification-item-img">
            <img :src="item.imageUrl" alt="头像">
          </div>
          <div class="friendNotification-item-text">
            <span class="name">{{ item.name }}</span>
            <span class="request">{{ item.message }}</span>
            <span class="time">{{ item.time }}</span>
            <p class="message">留言：{{ item.verificationInformation }}</p>
          </div>
          <div class="friendNotification-item-btn" v-show="item.show1">
            <div v-show="item.isShow">
              <button class="btn" @click="consentEvent(item,index)">同意</button>
              <button class="btn" @click="rejectionEvent(item,index)">拒绝</button>
            </div>
            <div v-show="item.isShow2">已同意</div>
            <div v-show="item.isShow3">已拒绝</div>
          </div>
          <div class="friendNotification-item-btn" v-show="!item.show1">
            <div>
              <h3 v-show="item.show2">等待验证</h3>
              <h3 v-show="item.show3">已通过</h3>
              <h3 v-show="item.show4">对方已拒绝</h3>
          </div>
        </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
name:"friendNotification",
data() {
  return {
    friendNotificationList:[],
  };
},
mounted() {
  this.$nextTick(()=>{
    //从localStorage获取到当前登录的用户
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    //从localStorage获取到所有用户信息
    const userData = JSON.parse(localStorage.getItem("userData"));
    //将所有用户信息中的当前登录用户信息过滤出来并赋值给user
    const user = userData.filter((u)=>{
      return u.id === activeUser.id
    })
    //将当前登录的用户信息赋值给data中的friendNotificationList数组方便保存时使用
    this.friendNotificationList = user[0].friendRequestList
  })
},
methods: {
  //同意好友申请事件接收到当前点击的好友申请消息和索引
  consentEvent(item,index){
    //以下两行代码是为了实现点击同意按钮时按钮变成已同意的效果
    this.friendNotificationList[index].isShow = false;//控制按钮区域的显示隐藏
    this.friendNotificationList[index].isShow2 = true;//控制已同意已拒绝文本区域的显示隐藏
    //读取localStorage中的用户信息并赋值给userData
    const userData = JSON.parse(localStorage.getItem("userData"));
    //将userData中符合当前点击的好友申请消息的用户信息赋值给user
    const user = userData.filter((i)=>{
      return i.zhanghao === item.zhanghao
    })
    //读取到当前登录的用户信息
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    //获取点击事件的时间
    const time = new Date().toLocaleTimeString()
    //将当前点击的好友申请消息的用户信息中的好友申请消息列表中的消息的索引赋值给userIndex
    const userIndex = user[0].friendRequestList.findIndex((f)=>{
      return f.zhanghao === activeUser.zhanghao
    })
    //将当前点击的好友申请信息的状态从等待验证改成已同意
    user[0].friendRequestList[userIndex].show2 = false;
    user[0].friendRequestList[userIndex].show3 = true;
    //向发送好友申请的用户的好友列表添加当前登录用户表示已同意申请
    user[0].userMessageList.push({
      name:activeUser.name,
      time:time,
      imageUrl:activeUser.imageUrl,
      InfoType:'Chat',
      messageList:[],
    },)
    //将所有用户信息中当前同意好友申请消息的用户信息的索引赋值给listIndex
    const listIndex = userData.findIndex((f)=>{
            return f.id === user[0].id
    })
    //将当前同意的好友申请的用户替换进所有用户信息中
    userData.splice(listIndex,1,user[0])
    //把所有用户信息中当前登录的用户过滤出来赋值给user1
    const user1 = userData.filter((f)=>{
      return f.id === activeUser.id
    })
    //往当前登录的用户的好友列表中添加当前同意的好友申请的用户
    user1[0].userMessageList.push({
      name:item.name,
      time:time,
      imageUrl:item.imageUrl,
      InfoType:'Chat',
      key:user1[0].userMessageList.length+1,
      zhanghao:item.zhanghao,
      messageList:[],
    },)
    //过滤当前登录用户的好友申请消息列表中符合当前同意好友申请的用户的索引
    const index1 = user1[0].friendRequestList.findIndex((a)=>{
      return a.zhanghao === item.zhanghao
    })
    //以下两行代码是为了实现点击同意按钮时按钮变成已同意的效果
    user1[0].friendRequestList[index1].isShow = false;
    user1[0].friendRequestList[index1].isShow2 = true;
    const listIndex1 = userData.findIndex((f)=>{
            return f.id === user1[0].id
    })
    userData.splice(listIndex1,1,user1[0])
    localStorage.setItem("userData",JSON.stringify(userData))
  },
  rejectionEvent(item,index){
    const userData = JSON.parse(localStorage.getItem("userData"));
    this.friendNotificationList[index].isShow = false;
    this.friendNotificationList[index].isShow3 = true;
    //将userData中符合当前点击的好友申请消息的用户信息赋值给user
    const user = userData.filter((i)=>{
      return i.zhanghao === item.zhanghao
    })
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    const userIndex = user[0].friendRequestList.findIndex((f)=>{
      return f.zhanghao === activeUser.zhanghao
    })
    //将当前点击的好友申请信息的状态从等待验证改成已同意
    user[0].friendRequestList[userIndex].show2 = false;
    user[0].friendRequestList[userIndex].show3 = false;
    user[0].friendRequestList[userIndex].show4 = true;
        //将所有用户信息中当前同意好友申请消息的用户信息的索引赋值给listIndex
        const listIndex = userData.findIndex((f)=>{
            return f.id === user[0].id
    })
    //将当前同意的好友申请的用户替换进所有用户信息中
    userData.splice(listIndex,1,user[0])
    localStorage.setItem("userData",JSON.stringify(userData))
  },
},
}
</script>

<style>
.friendNotification-item-btn{
  margin-left: 127px;
  margin-top: 22px;
}
.friendNotification-item-text{
  margin-left: 15px;
  margin-top: 5px;
}
.btn{
  width: 65px;
  height: 26px;
  font-size: 17px;
  font-weight: bold;
}
.message{
  color: #dddada;
  font-size: 16px;
}
.time{
  color: #dddada;
  margin-left: 5px;
}
.request{
  color: #fff;
  margin-left: 10px;
}
.name{
  color: #263A5b;
  font-size: 20px;
  font-weight: bold;
}
.friendNotification-item-img img{
  width: 65px;
  border-radius: 100%;
}
.friendNotification-item-content{
  padding: 16px;
  display: flex;
}
.friendNotification{
  width: 600px;
  margin-left: 500px;
  margin-right: 500px;
}
.friendNotification-list{
  list-style: none;
  margin-top: 0px;
}
.friendNotification-item{
  width: 100%;
  height: 100px;
  background-color: rgb(150, 150, 150);
  margin-top: 25px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
}
.friendNotification-item:hover{
  background-color: rgb(181, 181, 181);
}
</style>