<template>
    <div class="mid-box">
      <transition name="fade">
      <div class="list-box-L" v-show="flag1">
      <div class="Hea-box">
        <div class="Hea-box-1">
          <img src="../assets/10001.svg">
          <span>Chat</span>
        </div>
        <el-tooltip class="item" effect="dark" content="Logout" placement="right">
            <i class="iconfont"><a href="./DengLu.vue" class="a-1">&#xe66b;</a></i>
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
          <li class="li-box" v-for="litem,index in list" :key="index" :class="{'activeCss':activeVar==index}" @click="activeFun(litem,index)">
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
    </div>
  </transition>
  <transition name="fade">
    <div class="list-box-L" v-show="flag2">
      <div class="Hea-box">
        <div class="Hea-box-1">
          <img src="../assets/10001.svg">
          <span>New Chat</span>
        </div>
            <i class="iconfont"><a href="./DengLu.vue" class="a-1">&#xf0226;</a></i>
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
          <li class="li-box" v-for="litem,index in list2" :key="index" :class="{'activeCss':activeVar==index}" @click="activeFun(litem,index)">
          <div class="img-1-box"><img :src="litem.imgUrl"></div>
          <div class="R-text-box-t">
            <h5>
              {{ litem.name }}
            </h5>
            <p>{{ litem.jl }}</p>
          </div>
          </li>
        </ul>
      </div>
    </div>
    </transition>
    <transition name="fade">
    <div class="list-box-L" v-show="flag3">
      <div class="Hea-box">
        <div class="Hea-box-1">
          <img src="../assets/10001.svg">
          <span>My Profile</span>
        </div>
        <el-tooltip class="item" effect="dark" content="Logout" placement="right">
            <i class="iconfont"><a href="./DengLu.vue" class="a-1">&#xe66b;</a></i>
        </el-tooltip>
      </div>
      <div class="list-box-fa">
        <div class="Gl-box-fa">
          <div class="s-box">
            <div class="a-image-box"><img src="../assets/123.svg"></div>
            <el-upload
  action="#"
  list-type="picture-card"
  :auto-upload="false">
    <i slot="default" class="el-icon-camera"></i>
    <div slot="file" slot-scope="{file}">
      <img
        class="el-upload-list__item-thumbnail"
        :src="file.url" alt=""
      >
      <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </div>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
            <h5>Will Patinson</h5>
            <p>Florida, USA</p>
          </div>
          <div class="xi-box">
            <ul class="n-x-box">
              <li class="li-item-box">
                <i class="iconfont">&#xebac;</i>
                <div class="text-R-box-1">
                  <p>Username</p>
                  <div class="ipt-box-L">
                    <input type="text" value="Will Patinson">
                    <div class="btn-box-L-a"><button>Update</button></div>
                  </div>
                </div>
              </li>
              <li class="li-item-box">
                <i class="iconfont">&#xe61d;</i>
                <div class="text-R-box-1">
                  <p>Location</p>
                  <div class="ipt-box-L">
                    <input type="text" value="Florida, USA">
                    <div class="btn-box-L-a"><button>Update</button></div>
                  </div>
                </div>
              </li>
              <li class="li-item-box">
                <i class="iconfont">&#xe603;</i>
                <div class="text-R-box-1">
                  <p>Status</p>
                  <div class="ipt-box-L">
                    <input type="text" value="I am on Gappa.">
                    <div class="btn-box-L-a"><button>Update</button></div>
                  </div>
                </div>
              </li>
              <li class="li-item-box">
                <i class="iconfont">&#xe621;</i>
                <div class="text-R-box-1">
                  <p>Email ID</p>
                  <div class="ipt-box-L">
                    <input type="text" value="demo@example.com">
                    <div class="btn-box-L-a"><button>Update</button></div>
                  </div>
                </div>
              </li>
              <li class="f-item-box">
                <div class="first-box-z">
                <i class="iconfont">&#xe669;</i>
                <div class="text-R-box-1">
                  <p>Password</p>
                  <div class="ipt-box-L">
                    <input type="password" value="Will Patinson">
                    <div class="btn-box-L-a"><button>Update</button></div>
                  </div>
                </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </transition>
    <transition name="fade">
    <div class="list-box-L" v-show="flag4">
      <div class="Hea-box">
        <div class="Hea-box-1">
          <img src="../assets/10001.svg">
          <span>Setting</span>
        </div>
        <el-tooltip class="item" effect="dark" content="Logout" placement="right">
            <i class="iconfont"><a href="./DengLu.vue" class="a-1">&#xe66b;</a></i>
        </el-tooltip>
      </div>
      <div class="list-box-fa">
        <p class="p-text-box-1">General Settings</p>
        <div class="hdr-box-1">
          <div class="list-item-box-1">
            <div class="item-box-h"><h6>Notification Sounds</h6></div>
            <div class="ckx-box-1"><el-checkbox v-model="checked"></el-checkbox></div>
          </div>
          <div class="list-item-box-1">
            <div class="item-box-h"><h6>New Message Alerts</h6></div>
            <div class="ckx-box-1"><el-checkbox v-model="checked2"></el-checkbox></div>
          </div>
          <div class="list-item-box-1">
            <div class="item-box-h"><h6>Show Mini Messages in Sidebar</h6></div>
            <div class="ckx-box-1"><el-checkbox v-model="checked3"></el-checkbox></div>
          </div>
        </div>
        <p class="p-text-box-2">Privacy Settings</p>
        <div class="hdr-box-1">
          <div class="list-item-box-1">
            <div class="item-box-h"><h6>Read Receipts</h6></div>
            <div class="ckx-box-1">
              <el-switch v-model="value" active-color="#19a299" inactive-color="#8A98AC">
            </el-switch>
          </div>
          </div>
          <div class="list-item-box-1">
            <div class="item-box-h"><h6>Show Profile Picture</h6></div>
            <div class="ckx-box-1">
              <el-switch v-model="value2" active-color="#19a299" inactive-color="#8A98AC">
              </el-switch>
            </div>
          </div>
          <div class="list-item-box-1">
            <div class="item-box-h"><h6>Allow Messages from Strangers</h6></div>
            <div class="ckx-box-1">
              <el-switch v-model="value3" active-color="#19a299" inactive-color="#8A98AC">
              </el-switch>
            </div>
          </div>
        </div>
        <p class="p-text-box-2">Design Settings</p>
        <div class="btm-box-3">
          <div class="eckx-item-box-1">
          <el-checkbox v-model="checked4" class="el-ckx-item-1"></el-checkbox>
          <el-checkbox v-model="checked5"></el-checkbox>
          <el-checkbox v-model="checked6"></el-checkbox>
          <el-checkbox v-model="checked7"></el-checkbox>
          <el-checkbox v-model="checked8"></el-checkbox>
          <el-checkbox v-model="checked9"></el-checkbox>
          <el-checkbox v-model="checked1"></el-checkbox>
          <el-checkbox v-model="checked0"></el-checkbox>
        </div>
        </div>
      </div>
    </div>
    </transition>
      <div class="bot-box">
        <ul>
          <li>
            <a href="">
              <i></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="right-mid-box1">
        <div class="n-right-mid-box1">
          <ul class="lt-ul-box-1">
            <li class="hea-mid-text-1">
              <div class="mid-text-a">
                <span>Today</span>
              </div>
            </li>
            <li class="message-right-1">
              <div class="message-right-box1">
              <div class="triangle"></div>
              <div class="right-text-1">Hello! please, let me know the status about project after school.</div>
              <span class="right-time-1">4:18 pm<i class="iconfont">&#xeaf1;</i></span>
            </div>
            </li>
            <li class="message-left-1">
              <div class="triangle-1"></div>
              <div class="left-text-1">I have completed 4 stages 5 stages remaining.</div>
              <span class="left-time-1">4:20 pm<i class="iconfont">&#xeaf1;</i></span>
            </li>
            <li class="message-right-1">
              <div class="message-right-box1">
              <div class="triangle-2"></div>
              <div class="right-text-2">Let me share video for detailed information</div>
              <span class="right-time-1">4:18 pm<i class="iconfont">&#xeaf1;</i></span>
              </div>
            </li>
            <li class="message-right-2">
              <div class="triangle-3"></div>
              <div class="message-video-box2">
                <img src="../assets/微信截图_20230419160943.png">
                <p>Demo.mp4</p>
                <span class="right-time-2">4:18 pm<i class="iconfont">&#xeaf1;</i></span>
              </div>
            </li>
            <li class="message-left-2">
              <div class="triangle-1"></div>
              <div class="left-text-2">Thanks for the video.</div>
            </li>
            <li class="message-left-3">
              <div class="triangle-4"></div>
              <div class="left-text-3">
                I am sharing images of project work done so far.
                <br>
                Please, have a look at images and let me know if changes required.
              </div>
              <span class="left-time-1">4:20 pm<i class="iconfont">&#xeaf1;</i></span>
            </li>
            <li class="message-right-1">
              <div class="message-right-box1">
              <div class="triangle-5"></div>
              <div class="right-text-3">Could you share photos, please?</div>
              <span class="right-time-1">4:18 pm<i class="iconfont">&#xeaf1;</i></span>
              </div>
            </li>
            <li class="message-left-4">
              <div class="triangle-6"></div>
              <div class="left-text-4">
                <ul class="img-item-box-a">
                  <li><img src="../assets/8.png"></li>
                  <li><img src="../assets/9.png"></li>
                  <li class="last-box"><p>+07</p></li>
                </ul>
                <span>Photos of product</span>
              </div>
              <span class="left-time-1">4:20 pm<i class="iconfont">&#xeaf1;</i></span>
            </li>
            <li class="message-left-3">
              <div class="triangle-4"></div>
              <div class="left-text-3">
                I am sharing images of project work done so far.
                <br>
                Please, have a look at images and let me know if changes required.
              </div>
              <span class="left-time-1">4:20 pm<i class="iconfont">&#xeaf1;</i></span>
            </li>
            <li class="message-left-3">
              <div class="triangle-4"></div>
              <div class="left-text-3">
                I am sharing images of project work done so far.
                <br>
                Please, have a look at images and let me know if changes required.
              </div>
              <span class="left-time-1">4:20 pm<i class="iconfont">&#xeaf1;</i></span>
            </li>
            <li class="message-left-3">
              <div class="triangle-4"></div>
              <div class="left-text-3">
                I am sharing images of project work done so far.
                <br>
                Please, have a look at images and let me know if changes required.
              </div>
              <span class="left-time-1">4:20 pm<i class="iconfont">&#xeaf1;</i></span>
            </li>
            <li class="message-left-3">
              <div class="triangle-4"></div>
              <div class="left-text-3">
                I am sharing images of project work done so far.
                <br>
                Please, have a look at images and let me know if changes required.
              </div>
              <span class="left-time-1">4:20 pm<i class="iconfont">&#xeaf1;</i></span>
            </li>
            <li class="message-left-3">
              <div class="triangle-4"></div>
              <div class="left-text-3">
                I am sharing images of project work done so far.
                <br>
                Please, have a look at images and let me know if changes required.
              </div>
              <span class="left-time-1">4:20 pm<i class="iconfont">&#xeaf1;</i></span>
            </li>
            <li class="message-left-3">
              <div class="triangle-4"></div>
              <div class="left-text-3">
                I am sharing images of project work done so far.
                <br>
                Please, have a look at images and let me know if changes required.
              </div>
              <span class="left-time-1">4:20 pm<i class="iconfont">&#xeaf1;</i></span>
            </li>
            <li class="message-left-3">
              <div class="triangle-4"></div>
              <div class="left-text-3">
                I am sharing images of project work done so far.
                <br>
                Please, have a look at images and let me know if changes required.
              </div>
              <span class="left-time-1">4:20 pm<i class="iconfont">&#xeaf1;</i></span>
            </li>
            <li class="message-left-3">
              <div class="triangle-4"></div>
              <div class="left-text-3">
                I am sharing images of project work done so far.
                <br>
                Please, have a look at images and let me know if changes required.
              </div>
              <span class="left-time-1">4:20 pm<i class="iconfont">&#xeaf1;</i></span>
            </li>
            <li class="message-left-3">
              <div class="triangle-4"></div>
              <div class="left-text-3">
                I am sharing images of project work done so far.
                <br>
                Please, have a look at images and let me know if changes required.
              </div>
              <span class="left-time-1">4:20 pm<i class="iconfont">&#xeaf1;</i></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-mid-box2">
        <div>
          <div class="bot-box">
            <div class="bot-box-1"><button @click="xy1"><i class="iconfont">&#xe603;</i></button></div>
            <div class="bot-box-1"><button @click="xy2"><i class="iconfont">&#xe601;</i></button></div>
            <div class="bot-box-1"><button @click="xy3"><i class="iconfont">&#xebac;</i></button></div>
            <div class="bot-box-1"><button @click="xy4"><i class="iconfont">&#xe8b7;</i></button></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import 'animate.css';
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
        ],
        list2:[
          {imgUrl:require('../assets/2.svg'),name:"Roger Day",jl:"Let's go hiking."},
          {imgUrl:require('../assets/2.svg'),name:"Roger Day",jl:"Let's go hiking."},
          {imgUrl:require('../assets/2.svg'),name:"Roger Day",jl:"Let's go hiking."},
          {imgUrl:require('../assets/2.svg'),name:"Roger Day",jl:"Let's go hiking."},
          {imgUrl:require('../assets/2.svg'),name:"Roger Day",jl:"Let's go hiking."},
          {imgUrl:require('../assets/2.svg'),name:"Roger Day",jl:"Let's go hiking."},
          {imgUrl:require('../assets/2.svg'),name:"Roger Day",jl:"Let's go hiking."},
          {imgUrl:require('../assets/2.svg'),name:"Roger Day",jl:"Let's go hiking."},
          {imgUrl:require('../assets/2.svg'),name:"Roger Day",jl:"Let's go hiking."},
          {imgUrl:require('../assets/2.svg'),name:"Roger Day",jl:"Let's go hiking."},
          {imgUrl:require('../assets/2.svg'),name:"Roger Day",jl:"Let's go hiking."},
          {imgUrl:require('../assets/2.svg'),name:"Roger Day",jl:"Let's go hiking."},
          {imgUrl:require('../assets/2.svg'),name:"Roger Day",jl:"Let's go hiking."},
          {imgUrl:require('../assets/2.svg'),name:"Roger Day",jl:"Let's go hiking."},
        ],
        flag1:true,
        flag2:false,
        flag3:false,
        flag4:false,
        dialogImageUrl: '../assets/3.svg',
        dialogVisible: false,
        disabled: true,
        checked: true,
        checked2: true,
        checked3: true,
        value: true,
        value2: true,
        value3: true,
        checked0:true,
        checked1:true,
        checked9:true,
        checked4:true,
        checked5:true,
        checked6:true,
        checked7:true,
        checked8:true,
        activeVar:0,
      };
    },
    methods: {
      xy1(){
        this.flag1 = true;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
      },
      xy2(){
        this.flag1 = false;
        this.flag2 = true;
        this.flag3 = false;
        this.flag4 = false;
      },
      xy3(){
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = true;
        this.flag4 = false;
      },
      xy4(){
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = true;
      },
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      },
      activeFun(item,index){
        // item 为被选中的元素体
        this.activeVar=index
  }
    }
    }

</script>

<style>
.left-text-4 span{
  position: absolute;
  top: 66px;
}
.last-box{
  width: 50px;
  height: 50px;
  background-color: #F1F3F4;
  text-align: center;
  line-height: 51px;
}
.img-item-box-a li{
  float: left;
  margin-right: 7px;
}
.img-item-box-a{
  list-style: none;
  width: 173.275px;
  height: 51.650px;
  position: absolute;
  top: 12px;
  right: 10px;
}
.triangle-6{
  width: 0;
  height: 0;
  border-left: 11px solid transparent;
  border-top: 11px solid transparent;
  border-bottom: 11px solid #ffffff;
  border-right: 11px solid transparent;
  position: absolute;
  top: 72px;
  left: -11px;
}
.left-text-4{
  width: 173.275px;
  height: 82.650px;
  background-color: #ffffff;
  padding: 5px 10px;
  border-radius: 3px;
  font-size:14px;
  color: #4c595f;
  position: relative;
}
.message-left-4{
  width: 1137.6px;
  height: 117.15px;
  margin-bottom: 15px;
  position: relative;
}
.triangle-5{
  width: 0;
  height: 0;
  border-left: 11px solid transparent;
  border-top: 11px solid transparent;
  border-bottom: 11px solid #19a299;
  border-right: 11px solid transparent;
  position: relative;
  left: 231px;
  top: 31px;
}
.right-text-3{
  width: 220.712px;
  float: right;
  height: 21px;
  color: #ffffff;
  background-color: #19a299;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 3px;
}
.triangle-4{
  width: 0;
  height: 0;
  border-left: 11px solid transparent;
  border-top: 11px solid transparent;
  border-bottom: 11px solid #ffffff;
  border-right: 11px solid transparent;
  position: absolute;
  top: 31px;
  left: -11px;
}
.left-text-3{
  width: 448.788px;
  height: 42px;
  background-color: #ffffff;
  padding: 5px 10px;
  border-radius: 3px;
  font-size:14px;
  color: #4c595f;
}
.message-left-3{
  width: 1137.6px;
  height: 76.5px;
  margin-bottom: 15px;
  position: relative;
}
.left-text-2{
  width: 140.95px;
  height: 21px;
  background-color: #ffffff;
  padding: 5px 10px;
  border-radius: 3px;
  font-size:14px;
  color: #4c595f;
}
.message-left-2{
  width: 1137.6px;
  height: 31px;
  margin-bottom: 15px;
  position: relative;
}
.triangle-3 {
  width: 0;
  height: 0;
  border-left: 11px solid transparent;
  border-top: 11px solid transparent;
  border-bottom: 11px solid #19a299;
  border-right: 11px solid transparent;
  position: relative;
  left: 1127px;
  top: 126px;
}
.right-time-2{
  font-size: 13px;
  color: #8A98AC;
  position: absolute;
  right: 1px;
  top: 155px;
}
.message-video-box2 p{
  font-size: 14px;
  color: #ffffff;
}
.message-video-box2 img{
  width: 210px;
  height: 105px;
}
.message-video-box2{
  width: 210px;
  height: 136px;
  background-color: #19a299;
  padding: 5px 10px;
  border-radius: 3px;
  float: right;
  position: absolute;
  right: 1px;
  top: 1px;
}
.message-right-2{
  width: 1137.6px;
  height: 170.5px;
  margin-bottom: 15px;
  position: relative;
}
.triangle-2 {
  width: 0;
  height: 0;
  border-left: 11px solid transparent;
  border-top: 11px solid transparent;
  border-bottom: 11px solid #19a299;
  border-right: 11px solid transparent;
  position: relative;
  left: 301px;
  top: 31px;
}
.message-right-box1{
  position: absolute;
  top: -21px;
  right: 1px;
}
.right-text-2{
  width: 291.413px;
  float: right;
  height: 21px;
  color: #ffffff;
  background-color: #19a299;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 3px;
}
.left-time-1{
  font-size: 13px;
  color: #8A98AC;
}
.left-text-1{
  width: 310.062px;
  height: 21px;
  background-color: #ffffff;
  padding: 5px 10px;
  border-radius: 3px;
  font-size:14px;
  color: #4c595f;
}
.message-left-1{
  width: 1137.6px;
  height: 55.5px;
  margin-bottom: 15px;
  position: relative;
}
.triangle-1{
  width: 0;
  height: 0;
  border-left: 11px solid transparent;
  border-top: 11px solid transparent;
  border-bottom: 11px solid #ffffff;
  border-right: 11px solid transparent;
  position: absolute;
  top: 11px;
  left: -11px;
}
.triangle {
  width: 0;
  height: 0;
  border-left: 11px solid transparent;
  border-top: 11px solid transparent;
  border-bottom: 11px solid #19a299;
  border-right: 11px solid transparent;
  position: relative;
  left: 437px;
  top: 31px;
}
.right-time-1{
  font-size: 13px;
  color: #8A98AC;
  position: absolute;
  right: 1px;
  top: 60px;
}
.right-text-1{
  width: 427.413px;
  float: right;
  height: 21px;
  color: #ffffff;
  background-color: #19a299;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 3px;
}
.mid-text-a{
  width: 699.2px;
  height: 21px;
  margin-bottom: 16px;
  margin-left: 180px;
}
.message-right-1{
  width: 1137.6px;
  height: 55.5px;
  margin-bottom: 15px;
  position: relative;
}
.mid-text-a span{
  background-color: rgba(129, 167, 205, 0.1);
  border-radius: 4px;
}
.hea-mid-text-1{
  font-size: 12px;
  color: #8294ca;
  text-align: center;
}
.lt-ul-box-1{
  position: relative;
  list-style: none;
}
.n-right-mid-box1::-webkit-scrollbar{
  width: 7px;
  background: #ffffff00;
}
.n-right-mid-box1{
  width: 1137.6px;
  height: 670px;
  padding: 30px 30px 100px;
  overflow-y: scroll;
}
.right-mid-box1{
  width: 1214.6px;
  height: 800px;
  position: relative;
  top: 73px;
  left: 321px;
}
.activeCss{
  background-color: #F1F3F4 !important;
  border-right: 2px solid #19a299;
  }
.fade-enter-active, .fade-leave-active {
  /* opacity 透明度 */
  transition: opacity 1s
}
  /* .fade-leave-active, 2.1.8 版本以下 */
  .fade-enter, .fade-leave-to  {
      opacity: 0
  }
.el-ckx-item-1{
  background-color: red;
}
.btm-box-3{
  position: relative;
}
.eckx-item-box-1{
  width: 260px;
  height: 25px;
  position: absolute;
  top: 20px;
  left: -18px;
}
.el-switch__core {
  width: 30px !important;
  height: 16px;
}
.el-switch__core::after {
  width: 14px;
  height: 14px;
  margin-top: -1px;
}
.el-switch.is-checked .el-switch__core::after{
  margin-left: -15px;
}
.el-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  right: -10px;
}
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
  background-color: #19a299;
  border: #19a299;
}
.el-checkbox__inner::after{
  left: 5px;
}
.el-checkbox__inner{
  width: 16px;
  height: 16px;
}
.el-checkbox-button__inner, .el-checkbox__input{
  position: absolute;
  top: -12px;
  right: -49px;
  width: 16px;
  height: 16px;
}
.ckx-box-1 span{
  float: right;
}
.list-item-box-1{
  position: relative;
}
.ckx-box-1{
  width: 50px;
  height: 24px;
  padding-left: 15px;
  padding-right: 15px;
  position: absolute;
  top: 0px;
  left: 210px;
}
.item-box-h h6{
  width:210px;
  height:16.8px;
  font-size: 14px;
  color: #263A5B;
}
.item-box-h{
  width: 240px;
  height: 16.8px;
  padding-right:15px;
  padding-bottom: 16px;
}
.p-text-box-2{
  padding: 15px;
  background-color: #ffffff;
  font-size: 14px;
  color: #8A98AC;
  margin-bottom: 1px;
}
.btm-box-3{
  background-color: #ffffff;
  width: 320px;
  height: 183px;
}
.mde-box-2{
  background-color: #ffffff;
  width: 290px;
  height: 129.6px;
  padding:15px;
}
.hdr-box-1{
  background-color: #ffffff;
  width: 290px;
  height: 129.6px;
  padding:15px;
}
.p-text-box-1{
  padding: 15px;
  background-color: #ffffff;
  font-size: 14px;
  color: #8A98AC;
}
.btn-box-L-a button:hover{
  color: #19a299;
}
.btn-box-L-a button{
  font-size: 11px;
  color: #8A98AC;
  background-color:#ffffff00;
  border: none;
  width: 41.125px;
  height: 23.4px;
  cursor: pointer;
}
.btn-box-L-a{
  width: 42.725px;
  height: 25px;
  position: absolute;
  top: 18px;
  right: 1px;
}
.ipt-box-L input{
  width: 213.275px;
  height: 25px;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 600;
  color: #4c595f;
}
.ipt-box-L{
  width: 255px;
  height: 25px;
}
.text-R-box-1 p{
  font-size: 14px;
  color: #8A98AC;
}
.text-R-box-1{
  width: 255px;
  height: 43.2px;
  position: absolute;
  top: 16px;
  right: 18px;
}
.li-item-box i,.f-item-box i{
  width: 20px;
  height: 26px;
  font-size: 20px;
  display: block;
  color: #8A98AC;
  font-weight: bold;
  position: absolute;
  top: 26px;
  left: 12px;
}
.f-item-box{
  width: 320px;
  height: 126px;
  background-color: #ffffff;
  margin-top: 1px;
  position: relative;
}
.li-item-box{
  width: 290px;
  height: 43.2px;
  background-color: #ffffff;
  margin-top: 1px;
  padding: 15px;
  position: relative;
}
.n-x-box{
  width: 320px;
  height: 370px;
}
.xi-box{
  width: 320px;
  height: 370px;
}
.list-box-fa{
  position: fixed;
  top: 71px;
  width: 326px;
  height: 710px;
  overflow-y: scroll;
  background-color: #ffffff00;
}
.s-box p{
  text-align: center;
  font-size: 14px;
  color: #8A98AC;
  margin-top: 5px;
}
.s-box h5{
  text-align: center;
  color: #263A5B;
}
[class*=" el-icon-"], [class^=el-icon-]{
  position: absolute;
  top: 42px;
  left: 40px;
}
.el-upload-list--picture-card .el-upload-list__item-thumbnail{
  width: 100px;
  height: 100px;
}
.a-image-box img{
  width: 100px;
  height: 100px;
}
.a-image-box{
  text-align: center;
}
.el-upload--picture-card i:hover{
  color: #19a299;
}
.el-upload--picture-card i{
  color: #8A98AC;
  font-size: 20px;
  position: absolute;
  top: 100px;
  left: 189px;
}
.el-upload--picture-card{
  background-color: #ffffff00;
  border: none;
  width: 20px;
  height: 20px;
}
.el-upload-list--picture-card .el-upload-list__item{
  background-color: #ffffff00;
  border: none;
  position: absolute;
  top: 31px;
  left: 110px;
  width: 100px;
  height: 100px;
  border-radius: 100%
}
.el-upload-list__item{
  border-radius: 100%;
  background-color: #ffffff00;
  border: none;
}
.el-upload-list__item-thumbnail{
  border-radius: 100%;
}
.s-box{
  width: 320px;
  height: 168.167px;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #ffffff;
}
.Gl-box-fa{
  width: 320px;
  height: 710px;
  background-color: #ffffff00;
}
.Gl-box{
  width: 320px;
  height: 610px;
  background-color: #ffffff;
}
.bot-box-1 button{
  background-color: #ffffff00;
  border: none;
  cursor: pointer;
}
.a-1:hover{
  color: #19a299;
}
.a-1{
  text-decoration: none;
	outline: none;
	color: #000;
}
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
  position: relative;
  cursor: pointer;
}
.list-box::-webkit-scrollbar{
  width: 7px;
  background: #ffffff00;
}
.list-box-fa::-webkit-scrollbar{
  width: 7px;
  background: #ffffff00;
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
  width: 326px;
  height: 583px;
  overflow-y: scroll;
  background-color: #ffffff00;
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
