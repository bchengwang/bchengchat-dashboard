<template>
<div class="L-box">
  <div class="hea-box-x">
    <div class="L-box">
      <div class="Tx-box">
        <div class="dian"></div>
        <img src="../assets/10008.svg">
      </div>
      <div class="hea-text-box">
        <h5>Emily Cook</h5>
        <p>Online</p>
      </div>
    </div>
    <div class="R-box">
      <div class="R-box-e">
        <el-button type="text" @click="centerDialogVisible = true"><i class="iconfont">&#xe88b;</i></el-button>
        <el-button type="text" @click="centerDialogVisible = true"><i class="iconfont">&#xe634;</i></el-button>
      <el-dialog
      :append-to-body="true"
    title="Incoming Voice Call"
    :visible.sync="centerDialogVisible"
    width="33%"
    center>
    <div class="td-img"><img src="../assets/123.svg">
    <h5>Jessica Meir</h5>
    <p>Texas, USA</p>
  </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="centerDialogVisible = false" class="btn-2">Accept</el-button>
      <el-button @click="centerDialogVisible = false" class="btn-1">Reject</el-button>
    </span>
  </el-dialog>
  <el-row class="block-col-2">
    <el-col :span="12">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link"><i class="iconfont">&#xe8c4;</i>
        </span>
        <el-dropdown-menu slot="dropdown" class="List-box-a">
            <el-dropdown-item class="Item-a" @click="isShow = false">View User Info</el-dropdown-item>
          <el-dropdown-item class="Item-a">Search</el-dropdown-item>
          <el-dropdown-item class="Item-a">Archive</el-dropdown-item>
          <el-dropdown-item class="Item-a">Mute</el-dropdown-item>
          <el-dropdown-item class="Item-a">Export Chat</el-dropdown-item>
          <el-dropdown-item class="Item-a">Clear Message</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
      </div>
    </div>
  </div>
  <div class="B-box">
  <div class="y-box">
    <i class="iconfont">&#xe7d0;</i>
  </div>
  <div class="i-box"><input type="text" value="Type a message"></div>
  <div class="b-R-box">
    <i class="iconfont">&#xea36;</i>
    <i class="iconfont">&#xe62a;</i>
  </div>
</div>
</div>
</template>

<script>
export default {
  name:"Right",
  data() {
      return {
        centerDialogVisible: false,
        isShow:"true"
      };
    },
}
</script>

<style>
.Item-a:hover{
  color: #19A299 !important;
  background-color: #F1F3F4 !important;
}
.List-box-a{
  top: 55px !important;
  left: 1333px !important;
  width: 160px;
  height: 222px;
}
.el-dropdown-link i{
  position: absolute;
  top: -46px;
  right: -120px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.btn-1:hover{
  border: 3px solid #f27272c4;
  background-color: #F27273;
  color: #ffffff;
}
.btn-2:hover{
  border: 3px solid #57d898c4;
  background-color: #57D898;
  color: #ffffff;
}
.btn-2{
  width: 108.28px;
  height: 37.6px;
  background-color: #57D898;
  border: #57D898;
  color: #ffffff;
  font-size: 16px;
}
.btn-1{
  width: 108.28px;
  height: 37.6px;
  background-color: #F27273;
  border: #F27273;
  color: #ffffff;
  font-size: 16px;
}
.el-dialog__body{
  padding-bottom: 0;
}
.td-img p{
  color: #8A98AC;
  font-size: 15px;
}
.td-img h5{
  margin-top: 30px;
  margin-bottom: 8px;
}
.td-img{
  text-align: center;
  font-size: 20px;
}
.td-img img{
  text-align: center;
  width: 100px;
  height: 100px;
}
.b-R-box i:hover{
  color: #19A299;
}
.b-R-box i{
  font-size: 20px;
  margin-right: 15px;
  line-height: 38px;
  cursor: pointer;
}
.b-R-box{
  width: 56px;
  height: 38px;
  position: absolute;
  right: 23px;
  top: 13px;
}
.i-box input{
  width: 1039.4px;
  height: 26px;
  border: none;
  outline: none;
  padding: 6px 12px;
  position: absolute;
  top: 15px;
  left: 64px;
  color: #8A98AC;
  font-size: 20px;
}
.y-box i:hover{
  color: #19a299;
}
.y-box i{
  font-size: 24px;
  line-height: 38px;
  cursor: pointer;
}
.y-box{
  width: 24px;
  height: 38px;
}
.B-box{
  width: 1138.4px;
  height: 38px;
  background-color: #ffffff;
  position: fixed;
  bottom: 1px;
  left: 321px;
  padding: 15px 30px;
}
.R-box-e i:hover{
  color: #19a299;
}
.R-box-e i{
  font-size: 25px;
  margin-left: 7px;
  cursor:pointer;
  color: #4C595F;
  line-height: 10px;
}
.R-box-e{
  width: 112.28px;
  height: 30px;
  float: right;
  margin-right: 35px;
}
.R-box{
  width: 598.8px;
  height: 30px;
  position: absolute;
  right: 1px;
  top: 20px;
}
.hea-text-box p{
  color: #8A98AC;
}
.hea-text-box{
  width: 518.8px;
  height: 41.2px;
  position: absolute;
  top: 16px;
  left: 61px;
}
.Tx-box img{
  width: 40;
  height: 40px;
}
.Tx-box{
  width: 40px;
  height: 40px;
  position: relative;
}
.dian{
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background-color: #19A299;
  position: absolute;
  top: 1px;
  left: 1px;
}
.hea-box-x{
  width: 1167.8px;
  height: 41.2px;
  padding: 15px;
  background-color: #ffffff;
  position: fixed;
  top: 1px;
  left: 321px;
}
</style>