<template>
    <div class="video-message">
        <div class="userStyle">
            <img :src="headImg" class="headImg">
            <h5 @click="optFor(name)" class="name-H5">{{ name }}</h5>
        </div>
        <div class="chat-message-text" @contextmenu.prevent="onContextmenu">
            <video controls="controls"
            :src="videoUrl"
            id="videoMessage"
            class="videoMessageStyle"
            :class="{videoMessageStyle1: ControlSize}"
            ref="video">
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
        ControlSize:false,
        referenceVideoObject:{
            referenceName:"",
            referenceMessage:"",
            referenceVideoUrl:"",
            referenceType:"Video",
        },
    };
},
mounted() {
    setTimeout(()=>{
        this.estimateSize();
    },200)
},
props:["videoUrl","time",'headImg','name'],
methods:{
    estimateSize(){
        this.$nextTick(()=>{
        console.log(this.$refs.video.offsetHeight,"视频高度为");
        if(this.$refs.video.offsetHeight>300){
            this.ControlSize=true;
        }else{
            this.ControlSize=false;
        }
        })
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
},
}
</script>

<style>
.videoMessageStyle1{
    width: 200px !important;
}
.videoMessageStyle{
    border-radius: 10px;
    width: 500px;
}
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