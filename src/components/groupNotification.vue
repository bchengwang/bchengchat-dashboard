<template>
<div class="groupNotification">
    <ul class="friendNotification-list">
    <li
        class="friendNotification-item"
        v-for="(item, index) in groupNotification"
        :key="index"
    >
        <div class="friendNotification-item-content">
        <div class="friendNotification-item-img">
            <img :src="item.imageUrl" alt="头像" />
        </div>
        <div class="friendNotification-item-text">
            <span class="name">{{ item.name }}</span>
            <span class="request">{{ item.message }}</span>
            <span class="time">{{ item.time }}</span>
            <p class="message">留言：{{ item.verificationInformation }}</p>
        </div>
        <div class="friendNotification-item-btn" v-show="item.show1">
            <div v-show="item.isShow">
            <button class="btn" @click="consentEvent(item, index)">
                同意
            </button>
            <button class="btn" @click="rejectionEvent(item, index)">
                拒绝
            </button>
            </div>
            <div v-show="item.isShow2">已同意</div>
            <div v-show="item.isShow3">已拒绝</div>
        </div>
        <div class="friendNotification-item-btn" v-show="!item.show1">
            <div>
                <h3 v-show="item.show2">等待验证</h3>
                <h3 v-show="item.show3">已通过</h3>
                <h3 v-show="item.show4">对方已拒绝</h3>
            </div>
        </div>
        </div>
    </li>
    </ul>
</div>
</template>

<script>
export default {
    name: "groupNotification",
    data() {
    return {
        groupNotification: [],
    };
},
mounted() {
this.$nextTick(()=>{
    //从localStorage获取到当前登录的用户
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    //从localStorage获取到所有用户信息
    const userData = JSON.parse(localStorage.getItem("userData"));
    //将所有用户信息中的当前登录用户信息过滤出来并赋值给user
    const user = userData.filter((u)=>{
    return u.id === activeUser.id
    })
    //将当前登录的用户信息赋值给data中的friendNotificationList数组方便保存时使用
    this.groupNotification = user[0].groupNotification
})
},
};
</script>

<style>
</style>