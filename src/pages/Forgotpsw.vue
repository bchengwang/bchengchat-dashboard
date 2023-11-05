<template>
  <div class="Forgotpsw">
    <div class="Forgotpsw-card">
        <form action="#">
            <div class="form-head">
                <router-link to="/">
                    <img src="../assets/10001.svg" alt="LOGO">
                </router-link>
            </div>
            <h4>Forgot Password ?</h4>
            <p>Enter the email address below to receive reset password instructions.</p>
            <div class="form-group"><input type="email" placeholder="Email ID" required="required"></div>
            <button type="submit">Send Email</button>
        </form>
        <p class="bottom-text">Remember Password?
            <router-link to="/LoginPage">Log in</router-link>
        </p>
    </div>
  </div>
</template>

<script>
export default {
name:"Forgotpsw"
}
</script>

<style>
.Forgotpsw{
    width: 462.5px;
    position: relative;
    top: 304px;
    margin: 0 auto;
    background-color: white;
}
.Forgotpsw-card{
    padding: 30px;
    width: 402.5px;
    height: 329.562px;
}
.Forgotpsw-card form h4{
    margin-top: 24px;
    margin-bottom: 24px;
    color: #19a299;
    text-align: center;
    font-size: 20px;
}
.Forgotpsw-card form p{
    text-align: center;
    margin-bottom: 24px;
    color: #8A98AC;
    font-size: 14px;
}
.Forgotpsw-card form button{
    width: 403.5px;
    height: 37px;
    padding: 6px 12px;
    background-color: #54d898;
    border: none;
    color: white;
    font-size: 18px;
    border-radius: 3px;
    cursor: pointer;
}
.Forgotpsw-card form button:hover{
    background-color: #4fc78d;
}
</style>