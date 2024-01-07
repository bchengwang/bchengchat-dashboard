<template>
  <div class="RegistrationPage">
    <div class="RegistrationPage-card">
        <form action="#">
            <div class="form-head">
                <router-link to="/">
                    <img src="../assets/10001.svg" alt="LOGO">
                </router-link>
            </div>
            <h4>Sign Up !</h4>
            <div class="form-group"><input type="text" placeholder="账号" v-model="userName"></div>
            <div class="form-group"><input type="email" placeholder="邮箱" v-model="email"></div>
            <div class="form-group"><input type="password" placeholder="密码" v-model="password"></div>
            <div class="form-group"><input type="password" placeholder="确定密码" v-model="confirmPassword"></div>
            <div class="form-row">
                <div class="col"><el-checkbox></el-checkbox>记住我</div>
                <div class="col"><router-link to="/Forgotpsw" style="margin-left: 282px;padding-left: 0px;">忘记密码</router-link></div>
            </div>
            <a class="btn-login" @click="register">注册</a>
        </form>
        <p class="bottom-text">已经有账户了吗? <router-link to="/">前往登录</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
name:"RegistrationPage",
data() {
    return {
        userName: '',
        email:'',
        password:'',
        confirmPassword:'',
    };
},
methods: {
    register(){
        if(this.password !== this.confirmPassword){
            this.$message.error('两次密码不一致,请检查后重新输入！');
            return;
        }
        const userData = JSON.parse(localStorage.getItem('userData'));
        const user = {
            id:userData.length+1,
            zhanghao:this.userName,
            mima:this.password,
            name:'',
            Location:'',
            Status:'',
            Email:this.email,
            imageUrl:require('../assets/10001.svg'),
            groupChatNotification:[],
            friendRequestList:[],
            userMessageList:[],
        }
        userData.push(user);
        localStorage.setItem('userData',JSON.stringify(userData));
        this.$notify({
            title: '注册成功',
            message: '您的账号已注册成功',
            type: 'success'
        });
        this.$router.replace('/')
    },
},
}
</script>

<style>
.RegistrationPage{
    width: 462.5px;
    position: relative;
    top: 236px;
    margin: 0 auto;
}
.RegistrationPage-card{
    padding: 30px;
    background-color: white;
    border-radius: 3px;
    width: 404.5px;
    height: 462.188px;
}
.RegistrationPage-card form h4{
    margin-top: 24px;
    margin-bottom: 24px;
    color: #19a299;
    text-align: center;
    font-size: 20px;
}
</style>