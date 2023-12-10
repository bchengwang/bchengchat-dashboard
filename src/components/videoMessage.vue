<template>
    <div class="video-message">
        <div class="userStyle">
            <img :src="headImg" class="headImg">
            <h5 @click="optFor(name)" class="name-H5">{{ name }}</h5>
        </div>
        <i class="el-icon-caret-top"></i>
        <div class="chat-message-text" @contextmenu.prevent="onContextmenu">
            <video width="400" controls="controls" :src="videoUrl">
            </video>
        </div>
        <div class="chat-message-time"><span><i class="el-icon-check">{{ time }}</i></span></div>
      </div>
</template>

<script>
export default {
name:"videoMessage",
data() {
    return {
        referenceVideoObject:{
            referenceName:"",
            referenceMessage:"",
            referenceVideoUrl:"",
            referenceType:"Video",
        },
    };
},
props:["videoUrl","time",'headImg','name'],
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
            this.referenceVideoObject.referenceName = this.$props.name;
            this.referenceVideoObject.referenceVideoUrl = this.$props.videoUrl;
            this.onRunCode(this.referenceVideoObject);
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
.chat-video-message-right .userStyle{
    position: relative;
    top: 25px;
    right: -70px;
}
.chat-video-message-right h5 {
    cursor: pointer;
    position: relative;
    right: 68px !important;
    top: -29px !important;
    font-size: 15px;
}
</style>