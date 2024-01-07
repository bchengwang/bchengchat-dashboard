<template>
<div class="firstChat" @click="ceshi2">
    <div class="firstChat-body" ref="firstChat">
        <div class="chat-day"><span>Today</span></div>
        <ul class="firstChat-body-content" ref="firstChatContent">
            <li :class="item.messageClass" v-for="(item,index) in userDataObject.messageList" :key="index">
                <textMessage
                :message="item.message"
                :time="item.time"
                :headImg="item.headImg"
                :name="item.name"
                v-if="item.messageType === 'text'">
                </textMessage>
                <audioMessage
                :audioUrl="item.audioUrl"
                :time="item.time"
                :headImg="item.headImg"
                :name="item.name"
                :audioDuration="item.audioDuration"
                v-if="item.messageType === 'audio'">
                </audioMessage>
                <imgMessage
                v-if="item.messageType === 'img'"
                :imgUrl="item.imgUrl"
                :time="item.time"
                :headImg="item.headImg"
                :name="item.name">
                </imgMessage>
                <videoMessage
                v-if="item.messageType === 'video'"
                :videoUrl="item.videoUrl"
                :time="item.time"
                :headImg="item.headImg"
                ref="video"
                :name="item.name">
                </videoMessage>
                <referenceMessage
                v-if="item.messageType === 'reference'"
                :time="item.time"
                :headImg="item.headImg"
                :name="item.name"
                :message="item.message"
                :referenceName="item.referenceName"
                :referenceImgUrl="item.referenceImgUrl"
                :referenceAudioUrl="item.referenceAudioUrl"
                :referenceVideoUrl="item.referenceVideoUrl"
                :referenceMessage="item.referenceMessage">
            </referenceMessage>
            </li>
        </ul>
</div>
</div>
</template>

<script>
import textMessage from './textMessage.vue';
import imgMessage from './imgMessage.vue';
import audioMessage from './audioMessage.vue';
import videoMessage from './videoMessage.vue';
import referenceMessage from './referenceMessage.vue';
export default {
name:"firstChat",
components: {
    textMessage,
    imgMessage,
    audioMessage,
    videoMessage,
    referenceMessage
},
data() {
    return {
        audioShowHide:true,
        userObj:{},
        userDataObject:{},
        userIndex:0,
        userDataListIndex:0,
        messageList:[],
    };
},
props:["userMessageList","Src"],
watch:{
    userMessageList:{
        handler(newValue,oldValue){
            //
            const userList = this.userObj.userMessageList
            const userDataObj = userList.filter((i)=>{
            return newValue.name === i.name;
        })
            this.userDataObject = userDataObj[0];
            this.messageList = newValue.messageList
        const index = userList.findIndex((item)=>{
            //判断条件：当前登录的用户名字和所有用户信息名字进行对比并返回索引值
            return newValue.name === item.name
        })
            this.userIndex = index
        }
    },
    messageList:{
        handler(newValue,oldValue){
            this.userDataObject.messageList = newValue;
            this.userObj.userMessageList.splice(this.userIndex,1,this.userDataObject)
            const userData = JSON.parse(localStorage.getItem("userData"))
            userData.splice(this.userDataListIndex,1,this.userObj)
            localStorage.setItem("userData", JSON.stringify(userData))
        }
    }
},
mounted(){
    //接收到当前登录用户的信息和在localStorage数组中的索引
    this.x.$on("sendUsers",(user,userIndex)=>{
        //从localStorage中获取用户信息并赋值给userData
        const userData = JSON.parse(localStorage.getItem("userData"));
        //根据当前登录用户过滤出用户信息并返回赋值给users
        const users = userData.filter((item)=>{
            //过滤条件
            return user.id === item.id;
        })
        //将过滤出的用户信息赋值给userObj转换成对象
        const userObj = users[0]
        //将过滤的用户信息赋值给data中的userObj
        this.userObj = userObj
        //将发送过来的索引值赋值给data中的userDataListIndex
        this.userDataListIndex = userIndex
    })
    this.x.$on('sendReferenceMessageObject',(info)=>{
        this.userMessageList.messageList.push({
            name:"我",
            headImg:require('../assets/1.svg'),
            message:info.message,
            time:info.time,
            messageClass:info.messageClass,
            messageType:info.messageType,
            referenceName:info.referenceName,
            referenceMessage:info.referenceMessage,
            referenceImgUrl:info.referenceImgUrl,
            referenceAudioUrl:info.referenceAudioUrl,
            referenceVideoUrl:info.referenceVideoUrl,
        })
    })
    this.x.$on('sendMessage',(data)=>{
        this.RollingEvent()
        this.userMessageList.messageList.push({
            name:"我",
            headImg:require('../assets/1.svg'),
            messageClass:data.messageClass,
            message:data.message,
            time:data.time,
            messageType:"text"})
    })
    this.x.$on('sendAudioMessage',(user)=>{
        this.RollingEvent()
        this.userMessageList.messageList.push({
            name:"我",
            headImg:require('../assets/1.svg'),
            messageClass:user.messageClass,
            message:user.message,
            time:user.time,
            audioUrl:user.audioUrl,
            audioDuration:user.audioDuration,
            messageType:"audio"})
    })
    this.x.$on('sendImageMessage',(user)=>{
        this.RollingEvent()
        this.userMessageList.messageList.push({
            name:"我",
            headImg:require('../assets/1.svg'),
            messageClass:user.messageClass,
            message:user.message,
            time:user.time,
            imgUrl:user.imgUrl,
            messageType:"img"})
    })
    this.x.$on('sendVideoMessage',(user)=>{
        this.RollingEvent()
        this.userMessageList.messageList.push({
            name:"我",
            headImg:require('../assets/1.svg'),
            messageClass:user.messageClass,
            message:user.message,
            time:user.time,
            videoUrl:user.videoUrl,
            messageType:"video"})
    })
},
methods:{
    ceshi2(){
        console.log(this.userMessageList);
    },
    RollingEvent(){
        this.$nextTick(() => {
        let firstChat = this.$refs.firstChat;
        firstChat.scrollTo({ top: firstChat .scrollHeight, behavior: 'smooth' });
        });
    }
}
}
</script>

<style>
.el-image img{
    border-radius: 10px;
}
.chat-reference-message-right .userStyle{
    position: relative;
    right: -70px;
    top: 25px;
}
.chat-reference-message-right h5{
    cursor: pointer;
    position: relative;
    right: 68px;
    top: -29px;
    font-size:15px;
}
.chat-reference-message-right .reference-message{
    position: relative;
    right: 57px;
    top: -37px;
}
.chat-reference-message-right .el-icon-caret-top{
    position: absolute;
    right: -17px;
    bottom: 70px;
    font-size: 35px;
    color: #19a299;
}
.chat-reference-message-right .chat-message-text{
    background-color: #19a299;
    color: #ffffff;
    padding: 5px 10px;
    display: inline-block;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 350;
    text-align: left;
    position: relative;
}
.chat-reference-message-right .el-icon-caret-top{
    transform: rotate(180deg);
}
.chat-reference-message-right{
    margin-bottom: 70px;
    text-align:right;
    position: relative;
    list-style: none;
    height: 125px;
}
.name-H5{
    display: inline-block;
}
.video-message{
    position: relative;
    right: 50px;
    top: -30px;
}
.chat-video-message-right .chat-message-text{
    color: #ffffff;
    padding: 5px 10px;
    display: inline-block;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 350;
    text-align: left;
}
.chat-video-message-right .image-message{
    position: relative;
    right: 57px;
    top: -37px;
}
.chat-video-message-right h5{
    cursor: pointer;
    position: relative;
    right: 50px;
    top:-40px;
    font-size:15px;
}
.chat-video-message-right{
    margin-bottom: 15px;
    text-align:right;
    position: relative;
    list-style: none;
    height: 400px;
}
.chat-img-message-right .chat-message-text{
    color: #ffffff;
    padding: 5px 10px;
    display: inline-block;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 350;
    text-align: left;
}
.chat-img-message-right .image-message{
    position: relative;
    right: 57px;
    top: -37px;
    margin-top: 78px;
}
.chat-img-message-right h5{
    cursor: pointer;
    position: relative;
    right: 50px;
    top:-40px;
    font-size:15px;
}
.chat-img-message-right{
    margin-bottom: 15px;
    text-align:right;
    position: relative;
    list-style: none;
    height: 440px;
}
.chat-audio-message-right .chat-message-text{
    background-color: #19a299;
    color: #ffffff;
    padding: 5px 10px;
    display: inline-block;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 350;
    text-align: left;
    position: relative;
}
.chat-audio-message-right .el-icon-caret-top{
    transform: rotate(180deg);
}
.chat-audio-message-right .el-icon-caret-top{
    position: absolute;
    right: -17px;
    bottom: 27px;
    font-size: 35px;
    color: #19a299;
}
.chat-audio-message-right .audio-message{
    position: relative;
    right: 57px;
    top: -37px;
}
.chat-audio-message-right h5{
    cursor: pointer;
    position: relative;
    right: 50px;
    top:-40px;
    font-size:15px;
}
.chat-audio-message-right{
    margin-bottom: 15px;
    text-align:right;
    position: relative;
    list-style: none;
    height: 125px;
}
.chat-text-message-right h5{
    cursor: pointer;
    position: relative;
    right: 50px;
    top:-40px;
    font-size:15px;
}
.chat-text-message-right .text-message{
    position: relative;
    right: 57px;
    top: -37px;
}
.chat-text-message-right .el-icon-caret-top{
    position: absolute;
    right: -17px;
    bottom: 27px;
    font-size: 35px;
    color: #19a299;
}
.chat-text-message-right .chat-message-text{
    background-color: #19a299;
    color: #ffffff;
    padding: 5px 10px;
    display: inline-block;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 350;
    text-align: left;
    position: relative;
}
.chat-text-message-right .el-icon-caret-top{
    transform: rotate(180deg);
}
.chat-text-message-right{
    margin-bottom: 70px;
    text-align:right;
    position: relative;
    list-style: none;
    height: 50px;
}
.image-message .el-icon-caret-top{
    position: relative !important;
    top: -266px!important;
    left: 538px !important;
}
.image-message{
    position: relative;
    right: 50px;
    top: -30px;
}
.imageStyle{
    width: 500px;
}
.audio-message .el-icon-caret-top{
    position: relative !important;
    top: -59px !important;
    right: -138px !important;
}
.chat-message-right .audio-message{
    position: relative;
    right:63px;
    top: -31px;
}
.chat-message-left h5{
    cursor: pointer;
    position: relative;
    left: 5px;
    top:-30px;
    font-size:15px;
}
.chat-message-right h5{
    cursor: pointer;
    position: relative;
    right: 68px;
    top:-29px;
    font-size:15px;
}
.chat-message-right .el-icon-caret-top{
    transform: rotate(180deg);
}
.chat-message-left .text-message{
    position: relative;
    left: 60px;
    top: -27px;
}
.chat-message-right .text-message{
    position: relative;
    right: 60px;
    top: -27px;
}
.headImg{
    width: 40px;
}
.firstChat-body-content li {
    list-style: none;
}
.firstChat{
    height: 655px;
}
.firstChat-body{
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 100px;
    height: 107%;
    overflow-y: scroll;
}
.firstChat-body-content{
    height: auto;
}
.chat-day{
    text-align: center;
    margin-bottom: 16px;
    list-style: none;
}
.chat-day span{
    background-color: rgba(129, 167, 205, 0.1);
    color: #8294ca;
    font-size: 10.5px;
}
.chat-message-right{
    margin-bottom: 15px;
    text-align:right;
    position: relative;
    list-style: none;
    height: 50px;
}
.chat-message-left{
    margin-bottom: 15px;
    text-align: left;
    list-style: none;
    position: relative;
    height: 50px;
}
.chat-message-right .chat-message-text{
    background-color: #19a299;
    color: #ffffff;
    padding: 5px 10px;
    display: inline-block;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 350;
    text-align: left;
    position: relative;
}
.chat-message-time{
    font-size: 13px;
    color: #8A98Ac;
    margin-top: 5px;
}
.chat-message-time i{
    margin-left: 8px;
}
.chat-message-left .chat-message-text{
    background-color: #ffffff;
    padding: 5px 10px;
    display: inline-block;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 350;
    position: relative;
    color: #4c595f;
}
.chat-message-left .el-icon-caret-top{
    position: absolute;
    left: -18px;
    color: #ffffff;
    bottom: 27px;
    font-size: 35px;
    transform: rotate(180deg);
}
.chat-message-right .el-icon-caret-top{
    position: absolute;
    right: -17px;
    bottom: 27px;
    font-size: 35px;
    color: #19a299;
}
.img-1{
    width: 210px;
    height: 105px;
}
.img-1103{
    width: 50px;
}
.chat-message-left div span img{
    margin-right: 8px;
}
.img-PDF{
    margin-right: 8px;
}
.PDF-box{
    display: flex;
}
.PDF-box h5{
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
}
.PDF-box p{
    font-size: 14px;
}
</style>