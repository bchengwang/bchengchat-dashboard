<template>
  <div class="app-2">
    <div class="login">
        <div class="card">
            <form action="#">
                <div class="form-head">
                    <router-link to="/">
                        <img src="../assets/10001.svg" alt="LOGO">
                    </router-link>
                </div>
                <h4>Log in !</h4>
                <div class="form-group"><input type="text" placeholder="Username"></div>
                <div class="form-group"><input type="text" placeholder="Password"></div>
                <div class="form-row">
                    <div class="col"><el-checkbox></el-checkbox>Remember Me</div>
                    <div class="col"><router-link to="/Forgotpsw">Forgot Password?</router-link></div>
                </div>
                <router-link to="/" class="btn-login">Log in</router-link>
            </form>
            <p class="bottom-text">Don't have a account? <router-link to="/RegistrationPage">Sign up</router-link></p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name:"LoginPage"
}
</script>

<style>
.login{
    width: 462.5px;
    position: relative;
    top: 260px;
    margin: 0 auto;
}
.card{
    padding: 30px;
    background-color: white;
    border-radius: 3px;
    width: 402.5px;
    height: 360.188px;
}
.form-head{
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    text-align: center;
}
.form-head a img{
    width: 50px;
    height: 50px;
}
.card form h4{
    margin-top: 24px;
    margin-bottom: 24px;
    color: #19a299;
    text-align: center;
    font-size: 20px;
}
.form-group{
    margin-bottom: 16px;
}
.form-group input{
    border: none;
    outline: none;
    background-color: rgba(129, 167, 205, 0.1);
    color:#8A98Ac;
    border-radius: 3px;
    padding: 6px 12px;
    width: 378.5px;
    height: 23px;
    font-size: 14px;
    font-weight: 400;
}
.form-row{
    display: flex;
    margin-bottom: 16px;
}
.col a{
    padding-left: 145px;
    text-decoration: none;
    color: #19a299;
    font-size: 14px;
}
.col a:hover{
    color: #138179;
}
.col label{
    margin-right: 10px;
}
.col{
    color: #8A98Ac;
}
.el-checkbox__inner {
    width: 16px;
    height: 16px;
    display: inline-block;
    position: relative;
    border: 1px solid #DCDFE6;
    border-radius: 2px;
    box-sizing: border-box;
    background-color: #FFF;
    z-index: 1;
    transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
}
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #19a299;
    border:2px solid #56E5DB;
}
.btn-login{
    width: 376.5px;
    height: 27px;
    padding: 6px 12px;
    background-color: #3fd38b;
    border:1px solid #3fd38b;
    display: block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    color: white;
}
.bottom-text{
    margin-top: 16px;
    color: #8A98Ac;
    font-size: 14px;
    text-align: center;
}
.bottom-text a{
    text-decoration: none;
    color: #19a299;
}
.bottom-text a:hover{
    color: #138179;
}
</style>