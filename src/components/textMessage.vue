<template>
    <div class="text-message">
        <div class="userStyle">
            <img :src="headImg" class="headImg">
            <h5 @click="optFor(name)" class="name-H5">{{ name }}</h5>
        </div>
        <i class="el-icon-caret-top"></i>
    <div class="chat-message-text" @contextmenu.prevent="onContextmenu">
        <span>{{ message }}</span>
    </div>
    <div class="chat-message-time"><span>{{time}}<i class="el-icon-check"></i></span></div>
    </div>
</template>

<script>
export default {
name:"textMessage",
data() {
    return {
        referenceTextObject:{
            referenceName:"",
            referenceMessage:"",
            referenceType:"Text",
        },
    };
},
props:['message','time','headImg','name'],
methods:{
optFor(value){
        this.x.$emit('user-name', value);
},
onRunCode(m) {
        this.x.$emit('sendReferenceMessage',m)
},
onContextmenu(event) {
    this.contextMenuData = [
    {
        label: '引用',
        onClick: () => {
            this.referenceTextObject.referenceName = this.$props.name;
            this.referenceTextObject.referenceMessage = this.$props.message;
            this.onRunCode(this.referenceTextObject);
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
.chat-message-right .userStyle{
    position: relative;
    top: 25px;
    right: -70px;
}
.chat-message-left .userStyle{
    position: relative;
    top: 25px;
    right: 60px;
}
.chat-text-message-right .userStyle{
    position: relative;
    top: 25px;
    right: -70px;
}
.chat-text-message-right h5 {
    cursor: pointer;
    position: relative;
    right: 68px !important;
    top: -29px !important;
    font-size: 15px;
}
.chat-message-text{
    z-index: 1000;
}
</style>