<template>
    <div class="mid-box">
      <div class="Hea-box">
        <div class="Hea-box-1">
          <img src="../assets/10001.svg">
          <span>Chat</span>
        </div>
        <el-tooltip class="item" effect="dark" content="Logout" placement="right">
            <i class="iconfont">&#xe66b;</i>
        </el-tooltip>
      </div>
      <div class="in-box">
        <div class="in-box-1">
        <input type="text" value="Search">
        <div class="bt-box">
          <button class="btn-style"><i class="iconfont">&#xe65f;</i></button>
        </div>
      </div>
      </div>
      <div class="list-box">
        <ul class="ul-box">
          <li class="li-box" v-for="litem in list" :key="litem.length">
          <div class="img-1-box"><img :src="litem.imgUrl"></div>
          <div class="R-text-box-t">
            <h5>
              {{ litem.name }}
              <span>{{ litem.time }}</span>
            </h5>
            <p>{{ litem.jl }}</p>
          </div>
          </li>
        </ul>
      </div>
      <div class="bot-box">
        <div class="bot-box-1"><i class="iconfont">&#xe603;</i></div>
        <div class="bot-box-1"><i class="iconfont">&#xe601;</i></div>
        <div class="bot-box-1"><i class="iconfont">&#xebac;</i></div>
        <div class="bot-box-1"><i class="iconfont">&#xe8b7;</i></div>
      </div>
    </div>
</template>

<script>
  export default {
    name:"Left",
    data() {
      return {
        tabPosition: 'left',
        list:[
          {imgUrl:require('../assets/1.svg'),name:"Nebraska Oshivo",time:"Sep 25",jl:"Could you please send PDF?"},
          {imgUrl:require('../assets/1.svg'),name:"Nebraska Oshivo",time:"Sep 25",jl:"Could you please send PDF?"},
          {imgUrl:require('../assets/1.svg'),name:"Nebraska Oshivo",time:"Sep 25",jl:"Could you please send PDF?"},
          {imgUrl:require('../assets/1.svg'),name:"Nebraska Oshivo",time:"Sep 25",jl:"Could you please send PDF?"},
          {imgUrl:require('../assets/1.svg'),name:"Nebraska Oshivo",time:"Sep 25",jl:"Could you please send PDF?"},
          {imgUrl:require('../assets/1.svg'),name:"Nebraska Oshivo",time:"Sep 25",jl:"Could you please send PDF?"},
          {imgUrl:require('../assets/1.svg'),name:"Nebraska Oshivo",time:"Sep 25",jl:"Could you please send PDF?"},
          {imgUrl:require('../assets/1.svg'),name:"Nebraska Oshivo",time:"Sep 25",jl:"Could you please send PDF?"},
          {imgUrl:require('../assets/1.svg'),name:"Nebraska Oshivo",time:"Sep 25",jl:"Could you please send PDF?"},
          {imgUrl:require('../assets/1.svg'),name:"Nebraska Oshivo",time:"Sep 25",jl:"Could you please send PDF?"},
          {imgUrl:require('../assets/1.svg'),name:"Nebraska Oshivo",time:"Sep 25",jl:"Could you please send PDF?"},
          {imgUrl:require('../assets/1.svg'),name:"Nebraska Oshivo",time:"Sep 25",jl:"Could you please send PDF?"},
          {imgUrl:require('../assets/1.svg'),name:"Nebraska Oshivo",time:"Sep 25",jl:"Could you please send PDF?"},
          {imgUrl:require('../assets/1.svg'),name:"Nebraska Oshivo",time:"Sep 25",jl:"Could you please send PDF?"},
        ]
      };
    }
  };
</script>

<style>
.li-box:hover{
  background-color: #F1F3F4;
  border-right:2px solid #19a299;
}
.R-text-box-t span{
  color: #8A98AC;
  font-size: 12px;
  float: right;
  margin-right: 10px;
}
.R-text-box-t h5{
  font-size: 15px;
  color: #263A5B;
}
.R-text-box-t p{
  font-size: 14px;
  color: #8A98AC;
}
.R-text-box-t{
  width: 238.4px;
  height: 41.2px;
  position: absolute;
  top: 24px;
  left: 74px;
}
.img-1-box{
  width: 40px;
  height: 40px;
}
.li-box{
  width: 288.4px;
  height: 41.2px;
  background-color: #ffffff;
  padding: 15px;
  border-right: 2px solid #19a299;
  position: relative;
  cursor: pointer;
}
.list-box::-webkit-scrollbar{
  width: 7px;
  background: #ffffff;
}
.bot-box-1 i{
  font-size: 20px;
}
.bot-box-1{
  width: 72.500px;
  height: 30px;
  padding-top: 18px;
  padding-bottom: 18px;
  text-align: center;
  line-height: 30px;
  float: left;
  cursor:pointer;
}
.bot-box{
  width: 290px;
  height: 67.778px;
  position: fixed;
  background-color: #ffffff;
  top: 724px;
  padding-left: 15px;
  padding-right: 15px;
}
.list-box-1{
  width: 320px;
  height: 583px;
  background: #ffffff;
}
.btn-style i{
  font-size: 24px;
  color: #8A98AC;
}
.btn-style{
  background-color: #ffffff00;
  border: none;
  margin-top: 7px;
  margin-left: 5px;
}
.bt-box{
  width: 39.455px;
  height: 38px;
  background-color: rgba(129, 167, 205, 0.1);
  float: right;
}
.in-box-1 input{
  border: none;
  color: #8A98AC;
  width: 218.545px;
  height: 26px;
  background-color: rgba(129, 167, 205, 0.1);
  padding-left: 20px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-right: 12px;
  outline: none;
  font-size: 20px;
}
.list-box{
  position: fixed;
  top: 140px;
  width: 320px;
  height: 583px;
  overflow-y: scroll;
  background-color: #ffffff;
}
.in-box{
  width: 290px;
  height: 38px;
  padding: 15px;
  position: relative;
  top: 71px;
  background-color: #ffffff;
  position: fixed;
}
.Hea-box i:hover{
  color: #19a299;
}
.Hea-box i{
  position: absolute;
  color: #4c595f;
  font-size: 26px;
  top: 20px;
  right: 15px;
  cursor:pointer;
}
.Hea-box-1 span{
  font-size: 19PX;
  color: #263A5B;
  margin-left: 8px;
  position: absolute;
  top: 5px;
  left: 40px;
}
.Hea-box-1 img{
  width: 40px;
  height: 40px;
}
.Hea-box-1{
  width: 210px;
  height: 40px;
  padding-right: 15px;
  position: relative;
}
.Hea-box{
  width: 290px;
  height: 40px;
  padding: 15px;
  position: relative;
  background-color: #ffffff;
  position: fixed;
}
*{
  margin: 0;
  padding: 0;
}
.mid-box{
  width: 320px;
  height: 849.46px;
}
</style>
