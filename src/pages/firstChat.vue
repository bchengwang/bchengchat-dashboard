<template>
<div class="firstChat">
    <div class="firstChat-body">
        <div class="firstChat-body-content">
            <div class="chat-day"><span>Today</span></div>
            <div class="chat-message-right">
                <i class="el-icon-caret-top"></i>
                <div class="chat-message-text">
                    <span>Hello! please, let me know the status about project after school.</span>
                </div>
                <div class="chat-message-time"><span>4:18 pm<i class="el-icon-check"></i></span></div>
            </div>
            <div class="chat-message-left">
                <div class="chat-message-text">
                    <span>I have completed 4 stages 5 stages remaining.<i class="el-icon-caret-top"></i></span>
                </div>
                <div class="chat-message-time"><span>4:20 pm<i class="el-icon-check"></i></span></div>
            </div>
            <div class="chat-message-right">
                <i class="el-icon-caret-top"></i>
                <div class="chat-message-text">
                    <span>Let me share video for detailed information</span>
                </div>
                <div class="chat-message-time"><span>4:22 pm<i class="el-icon-check"></i></span></div>
            </div>
            <div class="chat-message-right">
                <i class="el-icon-caret-top"></i>
                <div class="chat-message-text">
                    <span><img src="../assets/微信截图_20230419160943.png" class="img-1"><br>Demo.Mp4</span>
                </div>
                <div class="chat-message-time"><span><i class="el-icon-check"></i></span></div>
            </div>
            <div class="chat-message-left">
                <div class="chat-message-text">
                    <span>Thanks for the video.<i class="el-icon-caret-top"></i></span>
                </div>
            </div>
            <div class="chat-message-left">
                <div class="chat-message-text">
                    <span>I am sharing images of project work done so far. <br>Please, have a look at images and let me know if changes required.<i class="el-icon-caret-top"></i></span>
                </div>
                <div class="chat-message-time"><span>4:30 pm<i class="el-icon-check"></i></span></div>
            </div>
            <div class="chat-message-right">
                <i class="el-icon-caret-top"></i>
                <div class="chat-message-text">
                    <span>Could you share photos, please?</span>
                </div>
                <div class="chat-message-time"><span>4:33 pm<i class="el-icon-check"></i></span></div>
            </div>
            <div class="chat-message-left">
                <div class="chat-message-text">
                    <span><img src="../assets/8.png"><img src="../assets/9.png"><img src="../assets/1143.png" class="img-1103"><br>Photos of product<i class="el-icon-caret-top"></i></span>
                </div>
                <div class="chat-message-time"><span>4:32 pm<i class="el-icon-check"></i></span></div>
            </div>
            <div class="chat-message-right">
                <i class="el-icon-caret-top"></i>
                <div class="chat-message-text">
                    <span>I request you to schedule demo at 3 pm after 2 days for the better progress. <br>After that we are discussion of final confirmation this project.</span>
                </div>
                <div class="chat-message-time"><span>4:33 pm<i class="el-icon-check"></i></span></div>
            </div>
            <div class="chat-message-left">
                <div class="chat-message-text">
                    <span><audio controls src="../assets/兰亭序-周杰伦.mp3"></audio><i class="el-icon-caret-top"></i></span>
                </div>
                <div class="chat-message-time"><span>4:38 pm<i class="el-icon-check"></i></span></div>
            </div>
            <div class="chat-message-right">
                <i class="el-icon-caret-top"></i>
                <div class="chat-message-text">
                    <div class="PDF-box"><img src="../assets/PDF.svg" alt="PDF" class="img-PDF"><div class="document-pdf">
                        <h5>Document.pdf</h5>
                        <p>50KB</p>
                    </div></div>
                </div>
                <div class="chat-message-time"><span>4:40 pm<i class="el-icon-check"></i></span></div>
            </div>
            <div class="chat-message-right">
                <i class="el-icon-caret-top"></i>
                <div class="chat-message-text">
                    <span>Please, refer this doc file for documentation.</span>
                </div>
                <div class="chat-message-time"><span>4:41 pm<i class="el-icon-check"></i></span></div>
            </div>
            <div class="chat-message-left">
                <div class="chat-message-text">
                    <span>Sure, I will prepare for the same.<i class="el-icon-caret-top"></i></span>
                </div>
                <div class="chat-message-time"><span>4:43 pm<i class="el-icon-check"></i></span></div>
            </div>
            <div class="chat-message-right">
                <i class="el-icon-caret-top"></i>
                <div class="chat-message-text">
                    <span>Great. Thanks</span>
                </div>
                <div class="chat-message-time"><span>4:45 pm<i class="el-icon-time"></i></span></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
name:"firstChat"
}
</script>

<style>
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
}
.chat-message-left{
    margin-bottom: 15px;
    text-align: left;
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
.chat-message-left .chat-message-text span i{
    position: absolute;
    left: -17px;
    color: #ffffff;
    bottom: -12px;
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