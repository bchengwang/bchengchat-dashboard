<template>
<div class="firstChat">
    <div class="firstChat-body" @click="List">
        <div class="chat-day"><span>Today</span></div>
        <ul class="firstChat-body-content">
            <li :class="item.messageClass" v-for="(item,index) in this.$route.query.name" :key="index">
                <i class="el-icon-caret-top"></i>
                <div class="chat-message-text">
                    <span>{{ item.message }}</span>
                </div>
                <div class="chat-message-time"><span>{{item.time}}<i class="el-icon-check"></i></span></div>
            </li>
        </ul>
    </div>
</div>
</template>
 
<script>
export default {
name:"firstChat",
data() {
    return {
        time: '',
    };
},
mounted(){
    this.x.$on('hello',(data)=>{
        this.time = new Date().toLocaleTimeString()
        this.$route.query.name.push({messageClass:'chat-message-right',message:data.message,time:this.time})
        this.$forceUpdate()
    })
},
methods:{
    List(){
        console.log(this.$route.query.name);
        console.log(this.$route);
    }
},
}
</script>

<style>
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
    height: 100%;
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
}
.chat-message-left{
    margin-bottom: 15px;
    text-align: left;
    list-style: none;
    position: relative;
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
    left: -17px;
    color: #ffffff;
    bottom: 11px;
    font-size: 35px;
}
.chat-message-right .el-icon-caret-top{
    position: absolute;
    right: -18px;
    bottom: 11px;
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