<template>
<div class="right-chat">
    <div class="chat-body">
      <div class="abc">
      <div class="chat-head" :class="{headSmall: controlChatBoxWidth}" v-show="isShow1">
      <div class="chat-head-img">
        <div class="dot"></div>
        <img :src="List.imageUrl">
      </div>
      <div class="user-text"><h5>{{List.name}}</h5><p class="text-p">在线</p></div>
      <div class="right-btn">
        <div><a href="#" @click="centerDialogVisible = true"><i class="el-icon-phone-outline"></i></a></div>
        <el-dialog
            :append-to-body="true"
            title="Incoming Voice Call"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <img src="../assets/3.svg" class="img-style">
            <h5>Jessica Meir</h5>
            <p>Texas, USA</p>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="centerDialogVisible = false">
                <i class="el-icon-check"></i>
                Accept
              </el-button>
              <el-button @click="centerDialogVisible = false">
                <i class="el-icon-close"></i>
                Reject
              </el-button>
            </span>
          </el-dialog>
        <div><a href="#" @click="centerDialogVisible2 = true"><i class="el-icon-video-camera"></i></a></div>
        <el-dialog
        :append-to-body="true"
        title=""
        :visible.sync="centerDialogVisible2"
        width="30%"
        center>
        <img src="../assets/3.svg" class="img-style">
        <h5>Jessica Meir</h5>
        <p>Texas, USA</p>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="centerDialogVisible2 = false">
            <i class="el-icon-check"></i>
            Accept
          </el-button>
          <el-button @click="centerDialogVisible2 = false">
            <i class="el-icon-close"></i>
            Reject
          </el-button>
        </span>
      </el-dialog>
        <div class="last-i"><a href="#">
          <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="btnClick">View User Info</el-dropdown-item>
            <el-dropdown-item>Search</el-dropdown-item>
            <el-dropdown-item>Archive</el-dropdown-item>
            <el-dropdown-item>Mute</el-dropdown-item>
            <el-dropdown-item>Export Chat</el-dropdown-item>
            <el-dropdown-item>Clear Message</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </a></div>
    </div>
    </div>
    </div>
      <div class="chat-content" :class="{headSmall: controlChatBoxWidth}">
        <transition name="hello">
          <first-chat :userMessageList="List" :Src="audioSrc"></first-chat>
        </transition>
      </div>
      <div class="chat-bottom" :class="{small: controlChatBoxWidth}" :style="styleObject">
        <div>
          <div class="Chat-input-box">
            <div class="microphone-style">
              <a href="#">
                <i class="el-icon-microphone" @click="inputShowClick"></i>
              </a>
            </div>
            <div class="record" v-show="!inputShow">
              <button @click="startRecorder()">
                <span v-show="textShow">点击开始录制</span>
                <span v-show="!textShow">录制中...</span>
              </button></div>
            <input type="text" placeholder="Type a message..." v-model="inputContent" v-show="inputShow">
          <div class="send-style">
            <div class="paperclip-style">
              <a href="#">
                <el-upload action="#" :on-change="handleChange" :file-list="fileList" :auto-upload="false">
                  <i class="el-icon-paperclip"></i>
                </el-upload>
              </a>
            </div>
            <div><a @click="estimateSend()"><i class="el-icon-s-promotion"></i></a></div>
          </div>
          </div>
        </div>
        <div class="referenceMessageStyle">
            <div><span>{{ referenceMessageObject.referenceName }}:</span></div>
            <div>
              <span v-show="referenceMessageObject.referenceType==='Text'">{{ referenceMessageObject.referenceMessage }}</span>
              <img :src="referenceMessageObject.referenceImgUrl" v-show="referenceMessageObject.referenceType==='Image'">
              <audio controls :src="referenceMessageObject.referenceAudioUrl" v-show="referenceMessageObject.referenceType==='Audio'"></audio>
              <video :src="referenceMessageObject.referenceVideoUrl" controls="controls" v-show="referenceMessageObject.referenceType==='Video'"></video>
            </div>
            <div class="deleteButtonStyle" @click="deleteReferenceMessage"><span>X</span></div>
        </div>
      </div>
    </div>
    <div class="chat-user-info" :class="{show: isShow}">
      <div class="chat-user-info-head">
        <div class="head-row">
          <div class="head-col"><h5>User Info</h5></div>
          <div class="head-col-1"><a href="#" @click="btnClick"><i class="el-icon-close"></i></a></div>
        </div>
      </div>
      <div class="chat-user-info-body">
        <div class="user-bar">
          <img src="../assets/10008.svg" alt="用户头像">
          <h5>Emily Cook</h5>
          <p>New York, USA</p>
        </div>
        <div class="user-detail">
          <p class="user-detail-header">About</p>
          <div class="user-About">
            <h6><i class="iconfont">&#xeca1;</i>&nbsp;&nbsp;Feeling good today.</h6>
            <h6><i class="el-icon-message"></i>&nbsp;&nbsp;demo@example.com</h6>
            <h6><i class="el-icon-phone-outline"></i>&nbsp;&nbsp;+1 9876543210</h6>
          </div>
          <p class="user-detail-header">Social Profile</p>
          <div class="user-Social-Profile">
            <div><i class="iconfont">&#xe725;</i></div>
            <div><i class="iconfont">&#xe646;</i></div>
            <div><i class="iconfont">&#xe664;</i></div>
          </div>
          <p class="user-detail-header">Media
            <div class="toggle-button">
            <i class="el-icon-arrow-left" @click="handleDivClickRight"></i>
            <i class="el-icon-arrow-right" @click="handleDivClickLeft"></i>
          </div>
        </p>
          <div class="user-Media">
            <div class="user-Media-img-box">
              <div class="user-Media-img-box-1" :style="{ transform: 'translate3d(' + translate + 'px, 0px, 0px)' }">
                <img src="../assets/10001.png">
                <img src="../assets/10002.png">
                <img src="../assets/10003.png">
                <img src="../assets/PDF.svg">
                <img src="../assets/10004.png">
                <img src="../assets/PDF.svg">
                <img src="../assets/10005.svg">
                <img src="../assets/10006.svg">
                <img src="../assets/PDF.svg">
                <img src="../assets/10003.png">
                <img src="../assets/PDF.svg">
                <img src="../assets/10004.png">
                <img src="../assets/PDF.svg">
                <img src="../assets/10001.png">
                <img src="../assets/10002.png">
                <img src="../assets/PDF.svg">
                <img src="../assets/10005.svg">
                <img src="../assets/10006.svg">
              </div>
            </div>
          </div>
          <p class="user-detail-header">Settings</p>
          <div class="user-Settings">
          <div class="user-Settings-1">
            <div><h6>Mute Notifications</h6></div>
            <div><el-switch
              v-model="elSwitchCheckedFirst"
              active-color="#19a299">
            </el-switch></div>
          </div>
          <div class="user-Settings-1">
            <div><h6>Block Contact</h6></div>
            <div><el-switch
              v-model="elSwitchCheckedSecond"
              active-color="#19a299">
            </el-switch></div>
          </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import firstChat from '../components/firstChat.vue';
import Recorder from 'js-audio-recorder'
let recorder = new Recorder();
export default {
  components: { firstChat },
  name: "RightChat",
  data() {
    return {
      fileList:[],
      uploadFiles:"",
      inputShow:true,
      clicks:1,
      textShow:true,
      recorder:null,
      isShow:true,
      isShow1:false,
      styleObject:{
        height:"38px",
      },
      controlChatBoxWidth:false,
      centerDialogVisible: false,
      centerDialogVisible2:false,
      dialogVisible: false,
      elSwitchCheckedFirst:true,
      elSwitchCheckedSecond:false,
      translate: 0,
      inputContent:"",
      audioObject:{},
      audioSrc:'',
      List:[],
      itemMessage:{
        messageClass:'chat-text-message-right',
        message:'',
        time:"04:20,",
      },
      itemAudioMessage:{
        messageClass:'chat-audio-message-right',
        message:'',
        time:"04:20,",
        audioUrl:'',
      },
      itemImageMessage:{
        messageClass:'chat-img-message-right',
        message:'',
        time:"04:20,",
        imgUrl:'',
      },
      itemVideoMessage:{
        messageClass:'chat-video-message-right',
        message:'',
        time:"04:20,",
        videoUrl:'',
      },
      referenceMessageObject:{
        referenceName:"",
        referenceMessage:'',
        referenceImgUrl:'',
        referenceAudioUrl:'',
        referenceVideoUrl:'',
        messageType:"reference",
        message:'',
        time:"04:20,",
        messageClass:'chat-reference-message-right',
      },
    };
  },
  mounted(){
    setInterval(()=>{
        this.translate -= 58
        if(this.translate === -754){
          this.translate = 0;
        }
      },3000)
      this.x.$on('sendMessageItem',(userInfos)=>{
        this.List = userInfos;
        this.isShow1 = true;
      })
      this.x.$on('user-name',(userName)=>{
        this.inputContent = '@'+userName
      })
      this.x.$on('sendReferenceMessage',(m)=>{
        this.referenceMessageObject.referenceName = m.referenceName
        this.referenceMessageObject.referenceMessage = m.referenceMessage
        this.referenceMessageObject.referenceType = m.referenceType
        this.referenceMessageObject.referenceImgUrl = m.referenceImgUrl
        this.referenceMessageObject.referenceAudioUrl = m.referenceAudioUrl
        this.referenceMessageObject.referenceVideoUrl = m.referenceVideoUrl
        this.styleObject.height = "120px";
      })
  },
  methods: {
    estimateSend(){
      if(this.styleObject.height == "120px"){
        this.styleObject.height = "38px";
        this.sendReferenceMessage()
        this.inputContent=''
      }else{
        this.sendMessageItem()
      }
    },
    deleteReferenceMessage(){
      this.styleObject.height = "38px";
    },
    handleChange(file, fileLists) { //文件数量改变
			console.log(file,'1');
      console.log(file.raw.type);
			// 本地服务器路径
			console.log(URL.createObjectURL(file.raw),"3");
      this.uploadFiles = URL.createObjectURL(file.raw)
      if(file.raw.type.indexOf("image") != -1){
        this.itemImageMessage.imgUrl = this.uploadFiles
        this.itemImageMessage.time = new Date().toLocaleTimeString()
        this.x.$emit('sendImageMessage',this.itemImageMessage)
      }else if(file.raw.type.indexOf("video") != -1){
        this.itemVideoMessage.videoUrl = this.uploadFiles
        this.itemVideoMessage.time = new Date().toLocaleTimeString()
        this.x.$emit('sendVideoMessage',this.itemVideoMessage)
      }
	},
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    sendMessageItem(){
      this.itemMessage.message = this.inputContent;
      if(this.inputContent != ""){
        this.itemMessage.time = new Date().toLocaleTimeString()
        this.x.$emit('sendMessage',this.itemMessage)
      }else{
        this.$notify({
          title: '警告',
          message: '发送内容不能为空，请重新输入！！！',
          type: 'warning'
        });
      }
      this.inputContent = ''
    },
    sendReferenceMessage(){
      this.referenceMessageObject.time = new Date().toLocaleTimeString()
      this.referenceMessageObject.message = this.inputContent
      this.x.$emit('sendReferenceMessageObject',this.referenceMessageObject)
    },
    btnClick(){
      this.isShow = !this.isShow;
      this.controlChatBoxWidth = !this.controlChatBoxWidth;
    },
    handleDivClickLeft () {
      if (this.translate <= -754) {
    return this.translate = 0;
  }
  this.translate -= 58;
    },
    handleDivClickRight () {
      if (this.translate === 0) {
    return;
  }
  this.translate += 58;
    },
    startRecorder(){
      if(this.clicks === 1){
        recorder.start()
        this.clicks = 2
        this.textShow = !this.textShow;
      }else if(this.clicks === 2){
        this.clicks = 1
        this.textShow =!this.textShow;
        this.stopRecorder()
        this.sendAudio()
      }
    },
    stopRecorder(){
      recorder.stop()
    },
    sendAudio(){
      this.dialogVisible = false;
      const formData = new FormData()
      const blob = recorder.getWAVBlob()// 获取wav格式音频数据
      // 此处获取到blob对象后需要设置fileName满足当前项目上传需求，其它项目可直接传把blob作为file塞入formData
      const newBolb = new Blob([blob], { type: 'audio/wav' })
      const fileOfBlob = new File([newBolb], new Date().getTime() + '.wav')
      formData.append('file', fileOfBlob)
      const url = window.URL.createObjectURL(fileOfBlob)
      this.audioSrc = url;
      this.itemAudioMessage.time = new Date().toLocaleTimeString()
      this.itemAudioMessage.audioUrl = this.audioSrc
      this.x.$emit('sendAudioMessage',this.itemAudioMessage)
    },
    inputShowClick(){
      this.inputShow =!this.inputShow
    }
  },
};
</script>

<style scoped>
.referenceMessageStyle video{
  width: 120px;
}
.referenceMessageStyle img{
  width: 120px;
}
.deleteButtonStyle span:hover{
  color: #8A98AC;
}
.deleteButtonStyle:hover{
  background-color: #bdbdbd;
}
.deleteButtonStyle span{

  font-size: 15px;
  line-height: 20px;
  position: relative;
  top: -7px;
  left: 5px;
}
.deleteButtonStyle{
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  margin-left: 10px;
}
.referenceMessageStyle div{
  background-color: #d2d2d2;
}
.referenceMessageStyle{
  display: flex;
  font-size: 22px;
  margin-left: 31px;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 14px;
}
::v-deep .el-upload-list{
  display: none;
}
.record button span{
  font-size: 20px;
  color: #333;
}
.record button:active{
  background-color: #d2d2d2
}
.record button{
  width: 100%;
  height: 38px;
  background-color: rgb(247, 235, 235);
  border: none;
  transition: all 0.2s;
  border-radius: 5px;
}
.record{
  width: 100%;
  height: 38px;
}
.BaseRecorder-play button , .BaseRecorder-record button{
  width: 120px;
  height: 50px;
  cursor: pointer;
}
::v-deep .el-dialog__header {
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  text-align: center;
}
.abc{
  height: 72px;
  background-color: white;
  width: 1597px;
}
.hello-leave,.hello-enter-to {
  opacity: 1;
}

.hello-leave-active,.hello-enter-active {
  transition: all 0.3s;
}
.hello-leave-to,.hello-enter {
  opacity: 0;
}
.el-icon-close , .el-icon-check{
  font-size: 16px !important;
}
.headSmall{
  right: 320px !important;
}
.small{
  right: 320px !important;
}
.show{
  display: none;
}
.right-chat {
  width: 1418.190px;
  height: 912.727px;
  border-left: 1px solid rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: row
}
.chat-body{
  flex: 1;
  height: 100%;
}
.chat-user-info{
  width: 320px;
  height: 100%;
  background-color: #ffff;
  position: fixed;
  right: 1px;
}
.chat-head{
  padding: 15px;
  height: 41.193px;
  background-color: #ffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  display: flex;
  position: fixed;
    left: 321px;
    right: 1px;
}
.chat-head-img img{
  width: 40px;
  position: relative;
  top: -16px;
  margin-right: 10px;
}
.dot{
  position: relative;
  left: 10px;
  margin-left: -12px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  background-color: #19a299;
  top: -2px;
}
.chat-head-img{
  width: 40px;
  height: 40px;
}
.user-text{
  margin-left: 10px;
  width: 468px;
}
.user-text h5{
  font-size: 15px;
  margin-bottom: 5px;
  color: #263A5B;
}
.text-p{
  color: #8A98AC;
  font-size: 14px;
}
.chat-head-right-btn{
  display: flex;
}
.chat-bottom{
  background-color: #ffffff;
  padding: 15px 30px;
  height: 38px;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 320px;
}
.chat-content{
  height: 772px;
  position: fixed;
  top: 73px;
  left: 320px;
  right: 1px;
}
.right-btn{
  display: flex;
  margin-left: auto;
  align-items: center;
}
.last-i{
  transform: rotate(90deg);
  text-align: center;
}
.right-btn div a i{
  width: 20px;
  height: 20px;
  color: #4c595f;
}
.right-btn div a i:hover{
  color: #19a299;
}
.right-btn div{
  width: 20px;
  height: 20px;
  margin-right: 18px;
}
::v-deep [class*=" el-icon-"], [class^=el-icon-] {
  font-family: element-icons!important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 23px;
}
.el-dropdown-menu__item:hover{
  background-color: #F1F3F4;
  color: #168C84;
}
.microphone-style{
  width: 20px;
  height: 38px;
}
.microphone-style a{
  width: 20px;
  height: 33px;
  display: block;
  margin-top: 5px;
  color: #4c595f;
}
.microphone-style a:hover{
  color: #19a299;
}
.Chat-input-box input{
  color: #8A98AC;
  background-color: transparent;
  font-size: 16px;
  border: none;
  outline: none;
  padding: 6px 12px;
  height: 38px;
  width: 100%;
}
.Chat-input-box{
  display: flex;
  align-items: center;
}
.send-style{
  margin-left: auto;
  display: flex;
}
.paperclip-style{
  margin-right: 16px;
}
.send-style div a{
  color: #4c595f;
}
.send-style div a:hover{
  color: #19a299;
}
::v-deep .el-dialog__header {
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}
::v-deep .el-dialog__headerbtn {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  background: 0 0;
  border: none;
  outline: 0;
  cursor: pointer;
  font-size: 16px;
  display: none;
}
::v-deep .el-dialog__title {
  color: #4c595f;
}
::v-deep .el-dialog--center .el-dialog__body {
  padding-top: 30px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  text-align: center;
}
.img-style{
  width: 100px;
  height: 100px;
}
::v-deep .el-dialog--center .el-dialog__body h5{
  margin-top: 30px;
  font-size: 18px;
  color: #4c595f;
  margin-bottom: 8px;
}
::v-deep .el-dialog--center .el-dialog__body p{
  font-size: 14px;
  margin-bottom: 20px;
}
::v-deep .el-button--primary {
  color: #FFF;
  background-color: #3fd38b;
  border-color: #3fd38b;
  font-size: 16px;
  text-transform: uppercase;
  padding: 6px 12px;
  height: 37px;
}
::v-deep .el-button--default{
  font-size: 16px;
  text-transform: uppercase;
  padding: 6px 12px;
  height: 37px;
  color: #FFF;
  background-color: #f27273;
  border-color: #f27273;
}
.dialog-footer button:nth-child(1):hover{
  background-color: #3abf7f;
}
.dialog-footer button:nth-child(2):hover{
  background-color: #da6868;
}
::v-deep .el-dialog--center {
  text-align: center;
  margin-top: 30vh !important;
  width: 500px !important;
  border-radius: 5px;
}
.chat-user-info-head{
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  border-left: 1px solid rgba(0, 0, 0, 0.03);
}
.head-row{
  display: flex;
  align-items: center;
}
.head-col{
  padding-right: 15px;
}
.head-col h5{
  font-size: 15px;
  color: #263A5B;
  line-height: 40px;
}
.head-col-1{
  margin-left: auto;
}
.head-col-1 a i{
  font-size: 20px !important;
  color: #4c595f;
  font-weight: 600;
}
.head-col-1 a i:hover{
  color: #19a299;
}
.user-bar{
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
}
.user-bar img{
  width: 100px;
  height: 100px;
}
.user-bar h5{
  margin-top: 30px;
  margin-bottom: 8px;
  font-size: 16px;
  color: #263A5B;
}
.user-bar p{
  font-size: 14px;
  color:#8A98AC
}
.user-detail-header{
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  font-size: 14px;
  color: #8A98AC;
}
.user-About{
  padding: 15px;
  margin-bottom: 5px;
}
.user-About h6 i{
  font-size: 14px !important;
  font-weight: 100;
}
.user-About h6{
  font-size: 14px;
  color: #263a5b;
}
.user-About h6:nth-child(1){
  margin-bottom: 8px;
}
.user-About h6:nth-child(2){
  margin-top: 16px;
  margin-bottom: 16px;
}
.user-Social-Profile{
  padding: 15px;
  margin-bottom: 5px;
  display: flex;
}
.user-Social-Profile div{
  margin-right: 10px;
}
.user-Social-Profile div i{
  font-size: 20px !important;
  cursor: pointer;
}
.user-Social-Profile div:nth-child(1) i{
  color: #3C5B9A;
}
.user-Social-Profile div:nth-child(2) i{
  color: #1EA2F1;
}
.user-Social-Profile div:nth-child(3) i{
  color: #D2418F;
}
.toggle-button{
  float: right;
  width: 40px;
  position: relative;
  top: -37px;
  left: -6px;
}
.el-icon-arrow-left{
  font-size: 16px !important;
  cursor: pointer;
}
.el-icon-arrow-right{
  font-size: 16px !important;
  cursor: pointer;
}
.user-Settings{
  padding: 15px;
  margin-bottom: 5px;
}
.user-Settings-1{
  padding-bottom: 16px;
  display: flex;
  align-items: center;
}
.user-Settings-1 div:nth-child(1) h6{
  font-size: 14px;
  color:#263A5B;
}
.user-Settings-1 div:nth-child(2){
  margin-left: auto;
}
::v-deep .el-switch.is-checked .el-switch__core::after {
  top: 5%;
  left: 112%;
  margin-left: -1.063rem;
  background-color: #fff;
  width: 12px;
height: 12px;
}
::v-deep .el-switch__core:after {
top: 7%;
left: 5%;
background-color: #d2d2d2;
width: 12px;
height: 12px;
}
::v-deep .el-switch__core {
  width: 28px !important;
  height: 16px !important;
  border-radius: 60px;
  background: #ffffff;
  border: 1px solid #8A98AC;
}
.user-Media{
  padding:15px;
  margin-bottom: 5px;
}
.user-Media-img-box{
  width: 290px;
  overflow: hidden;
}
.user-Media-img-box-1{
  width: 1100px;
  transition: 0.5s linear;
}
.user-Media-img-box-1 img{
  margin-right: 8px;
}
</style>