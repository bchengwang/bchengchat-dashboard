<template>
    <div class="image-message">
        <div class="userStyle">
            <img :src="headImg" class="headImg">
            <h5 @click="optFor(name)" class="name-H5">{{ name }}</h5>
        </div>
        <div class="chat-message-text" @contextmenu.prevent="onContextmenu">
            <el-image
            style="width: 500px;"
            :src="imgUrl"
            :preview-src-list="srcList"
            @click="ceshi"
            :class="{imageMessageStyle1:ControlImgSize}"
            >
            </el-image>
        </div>
        <div class="chat-message-time"><span><i class="el-icon-check">{{ time }}</i></span></div>
    </div>
</template>

<script>
export default {
name:"imgMessage",
props:["imgUrl","time",'headImg','name'],
data(){
    return {
        srcList:[],
        ControlImgSize:false,
        referenceImageObject:{
            referenceName:"",
            referenceImgUrl:"",
            referenceType:"Image",
        },
    }
},
mounted() {
    setTimeout(()=>{
        this.estimateImageSize();
    },200)
},
methods:{
    estimateImageSize(){
        this.$nextTick(()=>{
        console.log(document.querySelector('.el-image__inner').offsetHeight,"视频高度为");
        if(document.querySelector('.el-image__inner').offsetHeight>300){
            this.ControlImgSize=true;
        }else{
            this.ControlImgSize=false;
        }
        })
    },
    onRunCode(m) {
        this.x.$emit('sendReferenceMessage',m)
},
    ceshi(){
        this.srcList.push(this.imgUrl)
    },
        // 鼠标右键事件
onContextmenu(event) {
    this.contextMenuData = [
    {
        label: '引用',
        onClick: () => {
            this.referenceImageObject.referenceName = this.$props.name;
            this.referenceImageObject.referenceImgUrl = this.$props.imgUrl;
            this.onRunCode(this.referenceImageObject);
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
optFor(value){
        this.x.$emit('user-name', value);
    }
},
}
</script>

<style>
.imageMessageStyle1{
    width: 200px !important;
}
.chat-img-message-right .userStyle{
    position: relative;
    top: 25px;
    right: -70px;
}
.chat-img-message-right h5 {
    cursor: pointer;
    position: relative;
    right: 68px !important;
    top: -29px !important;
    font-size: 15px;
}
</style>