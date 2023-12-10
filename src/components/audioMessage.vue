<template>
  <div class="audio-message">
    <div class="userStyle">
        <img :src="headImg" class="headImg">
        <h5 @click="optFor(name)" class="name-H5">{{ name }}</h5>
    </div>
    <i class="el-icon-caret-top"></i>
    <div class="chat-message-text" @contextmenu.prevent="onContextmenu">
        <audio controls :src="audioUrl"></audio>
    </div>
    <div class="chat-message-time"><span>{{time}}<i class="el-icon-check"></i></span></div>
  </div>
</template>

<script>
export default {
name: 'audioMessage',
props:['audioUrl','time','headImg','name'],
data() {
    return {
        referenceAudioObject:{
            referenceName:"",
            referenceMessage:"",
            referenceAudioUrl:"",
            referenceType:"Audio",
        },
    };
},
methods:{
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