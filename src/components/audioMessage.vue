<template>
  <div class="audio-message">
    <div class="userStyle">
        <img :src="headImg" class="headImg">
        <h5 @click="optFor(name)" class="name-H5">{{ name }}</h5>
    </div>
    <i class="el-icon-caret-top"></i>
    <div class="chat-message-text" @contextmenu.prevent="onContextmenu">
        <audio :src="audioUrl" ref="audio"></audio>
        <div class="audio-style-1" @click="voicePlaying()">
                <div class="wifi-symbol" id="anim" ref="anim">
                    <div class="wifi-circle first"></div>
                    <div class="wifi-circle second"></div>
                    <div class="wifi-circle third"></div>
                </div>
            <span>{{ audioDuration }}"</span>
        </div>
    </div>
    <div class="chat-message-time"><span>{{time}}<i class="el-icon-check"></i></span></div>
  </div>
</template>

<script>
import { nextTick } from 'vue';
export default {
name: 'audioMessage',
props:['audioUrl','time','headImg','name',"audioDuration"],
data() {
    return {
        url:'',
        duration:'',
        referenceAudioObject:{
            referenceName:"",
            referenceMessage:"",
            referenceAudioUrl:"",
            referenceType:"Audio",
        },
    };
},
methods:{
    voicePlaying(){
        const anim = document.getElementById('anim');
        const animate = anim.getAnimations({subtree: true})[0];
        const animate2 = anim.getAnimations({subtree: true})[1];
        animate.play();
        animate2.play();
            setTimeout(() => {
                animate.pause();
                animate2.pause();
            }, this.audioDuration * 1000);
        let audio = this.$refs.audio;
        audio.play()
    },
optFor(value){
        this.x.$emit('user-name', value);
},
onRunCode(m) {
        this.x.$emit('sendReferenceMessage',m)
},
        // 鼠标右键事件
onContextmenu(event) {
    this.contextMenuData = [
    {
        label: '引用',
        onClick: () => {
            this.referenceAudioObject.referenceName = this.$props.name;
            this.referenceAudioObject.referenceAudioUrl = this.$props.audioUrl;
            this.onRunCode(this.referenceAudioObject);
        }
    },
];
    this.$contextmenu({
        items: this.contextMenuData,
        event, // 鼠标事件信息
        customClass: 'custom-class', // 自定义菜单 class
        zIndex: 3, // 菜单样式 z-index
        minWidth: 230 // 主菜单最小宽度
    });
    return false;
},
}
}
</script>

<style>
.audio-message .chat-message-time{
    position: relative;
    top: -36px;
}
.box {
    box-sizing: border-box;
    position: relative;
}
.wifi-symbol {
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    position:relative;    /*必须，否则苹果overflow失效*/
    overflow: hidden;
    transform: rotate(135deg);
    top: -7px;
    left: 13px;
}
.wifi-circle {
    border: 5px solid #ffffff;
    border-radius: 50%;
    position: absolute;
}
.first {
    width: 5px;
    height: 5px;
    background: #cccccc;
    top: 45px;
    left: 45px;
}
.second {
    width: 25px;
    height: 25px;
    top: 35px;
    left: 35px;
    animation: anim 1s infinite 0.2s;
    animation-play-state:paused;
}
.third {
    width: 40px;
    height: 40px;
    top: 25px;
    left: 25px;
    animation: anim 1s infinite 0.4s;
    animation-play-state:paused;
}
@keyframes anim {
    0% {
        opacity: 0; /*初始状态 透明度为0*/
    }
    100% {
        opacity: 1; /*结尾状态 透明度为1*/
    }
}
.audio-style-1 span{
    position: relative;
    top: -47px;
    left: 65px;
    font-size: 24px;
}
.audio-style-1{
    width: 100px;
    height: 38px;
    cursor: pointer;
}
.chat-audio-message-right .userStyle{
    position: relative;
    top: 25px;
    right: -70px;
}
.chat-audio-message-right h5 {
    cursor: pointer;
    position: relative;
    right: 68px !important;
    top: -29px !important;
    font-size: 15px;
}
</style>