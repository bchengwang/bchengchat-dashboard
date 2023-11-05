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
            <div class="form-group"><input type="text" placeholder="Username"></div>
            <div class="form-group"><input type="email" placeholder="Email"></div>
            <div class="form-group"><input type="password" placeholder="Password"></div>
            <div class="form-group"><input type="password" placeholder="Re-Type Password"></div>
            <div class="form-row">
                <div class="col"><el-checkbox></el-checkbox>Remember Me</div>
                <div class="col"><router-link to="/Forgotpsw">Forgot Password?</router-link></div>
            </div>
            <router-link to="/" class="btn-login">Register</router-link>
        </form>
        <p class="bottom-text">Already have an account? <router-link to="/LoginPage">Log in</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
name:"RegistrationPage"
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