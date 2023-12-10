<template>
<div class="firstChat" @click="ceshi1">
    <div class="firstChat-body">
        <div class="chat-day"><span>Today</span></div>
        <ul class="firstChat-body-content">
            <li :class="item.messageClass" v-for="(item,index) in userMessageList.messageList" :key="index">
                <textMessage
                :message="item.message"
                :time="item.time"
                :headImg="item.headImg"
                :name="item.name"
                v-show="item.messageType === 'text'">
                </textMessage>
                <audioMessage
                :audioUrl="item.audioUrl"
                :time="item.time"
                :headImg="item.headImg"
                :name="item.name"
                v-show="item.messageType === 'audio'">
                </audioMessage>
                <imgMessage
                v-show="item.messageType === 'img'"
                :imgUrl="item.imgUrl"
                :time="item.time"
                :headImg="item.headImg"
                :name="item.name">
                </imgMessage>
                <videoMessage
                v-show="item.messageType === 'video'"
                :videoUrl="item.videoUrl"
                :time="item.time"
                :headImg="item.headImg"
                :name="item.name">
                </videoMessage>
                <referenceMessage
                v-show="item.messageType === 'reference'"
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
    };
},
props:["userMessageList","Src"],
mounted(){
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
        this.userMessageList.messageList.push({
            name:"我",
            headImg:require('../assets/1.svg'),
            messageClass:data.messageClass,
            message:data.message,
            time:data.time,
            messageType:"text"})
    })
    this.x.$on('sendAudioMessage',(user)=>{
        this.userMessageList.messageList.push({
            name:"我",
            headImg:require('../assets/1.svg'),
            messageClass:user.messageClass,
            message:user.message,
            time:user.time,
            audioUrl:user.audioUrl,
            messageType:"audio"})
    })
    this.x.$on('sendImageMessage',(user)=>{
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
    ceshi1(){
        console.log(this.userMessageList.messageList,"数组的值为");
    }
}
}
</script>

<style> 
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
    background-color: #19a299;
    color: #ffffff;
    padding: 5px 10px;
    display: inline-block;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 350;
    text-align: left;
}
.chat-video-message-right .el-icon-caret-top{
    transform: rotate(180deg);
}
.chat-video-message-right .el-icon-caret-top{
    position: absolute;
    right: -18px;
    bottom: 237px;
    font-size: 35px;
    color: #19a299;
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
    background-color: #19a299;
    color: #ffffff;
    padding: 5px 10px;
    display: inline-block;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 350;
    text-align: left;
}
.chat-img-message-right .el-icon-caret-top{
    transform: rotate(180deg);
}
.chat-img-message-right .el-icon-caret-top{
    position: absolute;
    right: -17px;
    bottom: 27px;
    font-size: 35px;
    color: #19a299;
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
    height: 160px;
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
    top: -38px !important;
    right: -338px !important;
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
    height: 672px;
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