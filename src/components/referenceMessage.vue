<template>
    <div class="reference-message">
        <div class="userStyle">
            <img :src="headImg" class="headImg">
            <h5 @click="optFor(name)" class="name-H5">{{ name }}</h5>
        </div>
        <i class="el-icon-caret-top"></i>
    <div class="chat-message-text" @contextmenu.prevent="onContextmenu">
        <span>{{ message }}</span>
    </div>
    <div class="referenceMessageStyle">
        <div><span>{{ referenceName }}:</span></div>
        <div>
            <span>{{ referenceMessage }}</span>
            <img :src="referenceImgUrl" v-show="referenceImgUrl" class="referenceImageStyle">
            <audio :src="referenceAudioUrl" v-show="referenceAudioUrl" controls="controls"></audio>
            <video :src="referenceVideoUrl" v-show="referenceVideoUrl" controls="controls" class="referenceVideoStyle"></video>
        </div>
    </div>
    <div class="chat-message-time"><span>{{time}}<i class="el-icon-check"></i></span></div>
    </div>
</template>

<script>
export default {
name:'referenceMessage',
props:[
    'message',
    'time',
    'headImg',
    'name',
    'referenceName',
    'referenceMessage',
    'referenceImgUrl',
    'referenceAudioUrl',
    'referenceVideoUrl',
],
}
</script>

<style>
.referenceVideoStyle{
    width: 110px;
}
.referenceMessageStyle{
    display: flex;
    justify-content: flex-end;
    font-size: 25px;
    margin-top: 10px;
}
.referenceMessageStyle div{
    background-color: gainsboro;
}
.referenceImageStyle{
    width: 110px;
}
.reference-message{
    height: 138px;
}
</style>