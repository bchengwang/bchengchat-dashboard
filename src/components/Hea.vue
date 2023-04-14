<template>
  <div class="adv">
    <el-container>
        <el-header>Header</el-header>
        <el-main>
        <div class="bg"></div>
        </el-main>
        <el-footer class="footer-box">Footer</el-footer>
      </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer-box{
    bottom: 0px;
}
.bg{
    background-image: url(../assets/b6526cf0-3b5f-4d53-b368-bfa785daaeb1.jpg);
    background-size: cover;
    width: 100%;
    height: 800px;
    background-attachment: fixed;
}
*{
    margin: 0px;
    padding: 0px;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    position: fixed;
    width: 1197.6px;
    height: 72px;
    right: 0px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    width: 1197.6px;
    float: right;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>