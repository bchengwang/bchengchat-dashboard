<template>
  <div class="left-chat">
    <div class="Bottom-menu">
      <el-tabs :tab-position="tabPosition" style="height: 200px;">
        <el-tab-pane label="">
          <div slot="label"
          class="el-title-i-style"
          :class="{ColorActive: isActiveColor === 1}"
          @click="changeClassColor(1)"
          >
            <i class="el-icon-chat-round" @click="changeNumber(1)" title="聊天窗口"></i>
          </div>
          <transition name="fade">
          <div class="friend-list" v-show="show === 1">
            <div class="friend-list-content">
              <div class="first-friend-list">
                <div class="List-herder">
                  <div class="row">
                    <div class="col-1">
                      <img src="../assets/10001.svg" alt="logo" />
                      <div><h5>聊天窗口</h5></div>
                    </div>
                    <div class="col-2">
                      <el-tooltip class="item" effect="dark" content="Logout" placement="right">
                          <router-link to="/"><i class="iconfont">&#xe66b;</i></router-link>
                      </el-tooltip>
                    </div>
                  </div>
                </div>
                <div class="search-box">
                  <form>
                    <div class="search-content">
                      <input type="text" class="search-input-style" placeholder="Search" v-model="searchWord">
                      <div class="search-btn-box">
                        <button class="search-btn-style">
                          <i class="iconfont">&#xe65f;</i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="list">
                  <ul class="list-style-ul">
                    <li class="list-li-style"
                    :class="{active: isActive === index}"
                    @click="changeClass(index,userInfos)"
                    v-for="(userInfos,index) in filPerons"
                    :key="index"
                    @contextmenu.prevent="onContextmenuList(userInfos.key)"
                    >
                      <div class="list-li-content">
                        <div class="message-alert"></div>
                        <img :src="userInfos.imageUrl" alt="头像">
                        <div>
                          <h5 class="list-li-h5-style">
                            {{ userInfos.name }}
                            <span>{{ userInfos.time }}</span>
                          </h5>
                          <p class="list-li-p-style">Waiting for module 1 to finish...</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </transition>
        </el-tab-pane>
        <el-tab-pane label="">
          <div slot="label" class="el-title-i-style" :class="{ColorActive: isActiveColor === 2}" @click="changeClassColor(2)">
            <i class="el-icon-edit" @click="changeNumber(2)" title="联系人"></i>
          </div>
          <transition name="fade">
          <div class="friend-list" v-show="show === 2">
            <div class="friend-list-content">
              <div class="first-friend-list">
                <div class="List-herder">
                  <div class="row">
                    <div class="col-1">
                      <img src="../assets/10001.svg" alt="logo" />
                      <div><h5>联系人</h5></div>
                    </div>
                    <div class="col-2">
                      <el-button type="text" @click="centerDialogVisible = true">
                        <a href="#" class="user-a-i"><i class="iconfont">&#xf0226;</i></a>
                      </el-button>
                      <el-dialog
                        append-to-body
                        title="Create Group"
                        :visible.sync="centerDialogVisible"
                        width="500px"
                        center>
                        <div class="dialog-input-box">
                          <input type="text" placeholder="群聊名称" v-model="groupChatName">
                        </div>
                        <div class="dialog-textarea-box">
                          <textarea rows="3" placeholder="群聊介绍" v-model="GroupChatIntroduction"></textarea>
                        </div>
                        <p class="p-text-style">Add Users</p>
                        <div class="icon-box">  
                          <el-tooltip
                          class="item"
                          effect="dark"
                          :content="i.name"
                          placement="top"
                          v-for="(i,index) in userInfo"
                          :key="index" v-if="i.InfoType === 'Chat'">
                            <a href="#"><img :src="i.imageUrl" alt="1"></a>
                          </el-tooltip>
                        </div>
                        <div class="dialog-content-search-box">
                          <input type="text" placeholder="Search">
                          <div class="dialog-content-search-btn-box">
                            <button>
                              <i class="el-icon-search"></i>
                            </button>
                          </div>
                        </div>
                        <div class="dialog-content-list-box">
                          <ul class="dialog-content-list-ul-box">
                            <li v-for="(item,index) in userInfo" :key="index" v-show="item.InfoType === 'Chat'">
                              <img :src="item.imageUrl">
                              <div class="dialog-content-list-ul-li-text-box">
                                <h5><span>{{item.name}}</span></h5>
                                <p>Hey there. I am on Chalty.</p>
                              </div>
                              <div class="checkbox-box">
                                <el-checkbox :checked='item.done' @change="handleCheck(index)"></el-checkbox>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <span slot="footer" class="dialog-footer">
                          <el-button type="primary" @click="createGroupChat">
                            <i class="el-icon-plus"></i>
                            创建群聊
                          </el-button>
                        </span>
                      </el-dialog>
                    </div>
                  </div>
                </div>
                <div class="search-box">
                    <div class="search-content">
                      <input type="text" class="search-input-style" placeholder="Search" v-model="searchValue">
                      <div class="search-btn-box">
                        <button class="search-btn-style" @click="search">
                          <i class="iconfont" >&#xe65f;</i>
                        </button>
                      </div>
                    </div>
                </div>
                <div class="list">
                  <div :class="{hidden: isHidden}" class="ListStyle-1">
                    <div class="inform-ListStyle-1">
                      <div class="inform-ListStyle-1-title-1" @click="friendInform()">好友通知<i class="el-icon-arrow-right"></i></div>
                      <div class="inform-ListStyle-1-title-1" @click="groupInform()">群通知<i class="el-icon-arrow-right"></i></div>
                      <el-collapse v-model="activeNames">
                        <el-collapse-item title="群聊列表" name="1">
                          <ul class="list-style-ul">
                            <li class="list-li-style"
                            :class="{active: isActive === index}"
                            @click="changeClass(index)"
                            v-for="(contacts,index) in userInfo"
                            :key="index" v-show="contacts.InfoType === 'groupChat'">
                              <a href="#">
                              <div class="list-li-content">
                                <div class="message-alert"></div>
                                <img :src="contacts.imageUrl" alt="头像">
                                <div>
                                  <h5 class="list-li-h5-style">
                                    {{ contacts.name }}
                                    <span>{{ contacts.time }}</span>
                                  </h5>
                                  <p class="list-li-p-style">Waiting for module 1 to finish...</p>
                                </div>
                              </div>
                              </a>
                            </li>
                          </ul>
                        </el-collapse-item>
                        <el-collapse-item title="好友列表" name="2">
                          <ul class="list-style-ul">
                            <li class="list-li-style"
                            :class="{active: isActive === index}"
                            @click="changeClass(index)"
                            v-for="(contacts,index) in userInfo"
                            :key="index" v-show="contacts.InfoType === 'Chat'">
                              <a href="#">
                              <div class="list-li-content">
                                <div class="message-alert"></div>
                                <img :src="contacts.imageUrl" alt="头像">
                                <div>
                                  <h5 class="list-li-h5-style">
                                    {{ contacts.name }}
                                    <span>{{ contacts.time }}</span>
                                  </h5>
                                  <p class="list-li-p-style">Waiting for module 1 to finish...</p>
                                </div>
                              </div>
                              </a>
                            </li>
                          </ul>
                        </el-collapse-item>
                      </el-collapse>
                    </div>
                  </div>
                  <ul class="list-style-ul" :class="{hidden: !isHidden}">
                    <li class="list-li-style"
                    :class="{active: isActive === index}"
                    @click="changeClass(index)"
                    v-for="(contacts,index) in filPerons2"
                    :key="index"
                    @contextmenu.prevent="onContextmenuList1"
                    >
                      <a href="#">
                      <div class="list-li-content">
                        <div class="message-alert"></div>
                        <img :src="contacts.imageUrl" alt="头像">
                        <div>
                          <h5 class="list-li-h5-style">
                            {{ contacts.name }}
                          </h5>
                          <p class="list-li-p-style">Waiting for module 1 to finish...</p>
                        </div>
                      </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </transition>
        </el-tab-pane>
        <el-tab-pane label="">
          <div slot="label" class="el-title-i-style" :class="{ColorActive: isActiveColor === 3}" @click="changeClassColor(3)">
            <i class="el-icon-user" @click="changeNumber(3)" title="个人信息"></i>
          </div>
          <transition name="fade">
            <div class="friend-list" v-show="show === 3">
              <div class="friend-list-content">
                <div class="first-friend-list">
                  <div class="List-herder">
                    <div class="row">
                      <div class="col-1">
                        <img src="../assets/10001.svg" alt="logo" />
                        <div><h5>个人信息</h5></div>
                      </div>
                    </div>
                  </div>
                  <div class="personal-data-box">
                    <div class="personal-data-content-box">
                      <div class="header-headPortrait-box">
                        <el-upload
                          class="avatar-uploader"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="handleAvatarSuccess"
                          :before-upload="beforeAvatarUpload">
                          <img v-if="imageUrl" :src="imageUrl" class="avatar">
                          <i class="el-icon-camera"></i>
                        </el-upload>
                        <h5>{{ userDataObject.name }}</h5>
                        <p>{{ userDataObject.Location }}</p>
                      </div>
                      <div class="personalInformation-box">
                        <ul>
                          <li>
                            <i class="el-icon-user"></i>
                            <div>
                              <p>Username</p>
                              <div>
                                <input type="text" :value="userDataObject.name" ref="Username">
                                <div>
                                  <button>Update</button>
                              </div>
                            </div>
                            </div>
                          </li>
                          <li>
                            <i class="iconfont">&#xe61d;</i>
                            <div>
                              <p>Location</p>
                              <div>
                                <input type="text" :value="userDataObject.Location" ref="Location">
                                <div>
                                  <button>Update</button>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <i class="el-icon-chat-square"></i>
                            <div>
                              <p>Status</p>
                              <div>
                                <input type="text" :value="userDataObject.Status" ref="Status">
                                <div>
                                  <button>Update</button>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <i class="el-icon-message"></i>
                            <div>
                              <p>Email ID</p>
                              <div>
                                <input type="text" :value="userDataObject.Email" ref="Email">
                                <div>
                                  <button>Update</button>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <i class="el-icon-lock"></i>
                            <div>
                              <p>Password</p>
                              <div>
                                <input type="Password" :value="userDataObject.mima" ref="mima">
                                <div>
                                  <button>Update</button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="save-button-style"><button @click="saveUserData()">保存个人身份信息</button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </el-tab-pane>
        <el-tab-pane label="">
          <div slot="label" class="el-title-i-style" :class="{ColorActive: isActiveColor === 4}" @click="changeClassColor(4)">
            <i class="el-icon-setting" @click="changeNumber(4)" title="设置"></i>
          </div>
          <transition name="fade">
            <div class="friend-list" v-show="show === 4">
              <div class="friend-list-content">
                <div class="first-friend-list">
                  <div class="List-herder">
                    <div class="row">
                      <div class="col-1">
                        <img src="../assets/10001.svg" alt="logo" />
                        <div><h5>设置</h5></div>
                      </div>
                      <div class="col-2">
                        <el-dropdown trigger="click">
                          <span class="el-dropdown-link">
                            <a href="#"><i class="el-icon-more el-icon-more-style-1"></i></a>
                          </span>
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>Reset to Defaults</el-dropdown-item>
                            <el-dropdown-item>Backup</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </div>
                    </div>
                  </div>
                  <div class="personal-data-box">
                    <div class="personal-data-content-box">
                      <p class="Setting-Header">General Settings</p>
                      <div class="Setting-box">
                      <div class="Setting-item-box">
                        <div class="item-box"><h6>Notification Sounds</h6></div>
                        <div class="item-checked-box"><el-checkbox :checked="true"></el-checkbox></div>
                      </div>
                      <div class="Setting-item-box">
                        <div class="item-box"><h6>New Message Alerts</h6></div>
                        <div class="item-checked-box"><el-checkbox :checked="false"></el-checkbox></div>
                      </div>
                      <div class="Setting-item-box">
                        <div class="item-box"><h6>Show Mini Messages in<br>Sidebar</h6></div>
                        <div class="last-item-checked-box"><el-checkbox :checked="false"></el-checkbox></div>
                      </div>
                    </div>
                    <p class="Setting-Header">Privacy Settings</p>
                    <div class="Setting-box">
                    <div class="Setting-item-box">
                      <div class="item-box"><h6>Read Receipts</h6></div>
                      <div class="item-checked-box">
                        <el-switch v-model="firstElSwitchChecked" active-color="#19a299"></el-switch>
                      </div>
                    </div>
                    <div class="Setting-item-box">
                      <div class="item-box"><h6>Show Profile Picture</h6></div>
                      <div class="item-checked-box">
                        <el-switch v-model="secondElSwitchChecked" active-color="#19a299"></el-switch>
                      </div>
                    </div>
                    <div class="Setting-item-box">
                      <div class="item-box"><h6>Allow Messages from<br>Strangers</h6></div>
                      <div class="last-item-checked-box">
                        <el-switch v-model="thirdlyElSwitchChecked" active-color="#19a299"></el-switch>
                      </div>
                    </div>
                  </div>
                  <p class="Setting-Header">Design Settings</p>
                  <div class="Setting-bottom-box">
                    <div class="checked-box-1">
                      <el-checkbox :checked="true"></el-checkbox>
                    </div>
                    <div class="checked-box-2">
                      <el-checkbox></el-checkbox>
                    </div>
                    <div class="checked-box-3">
                      <el-checkbox></el-checkbox>
                    </div>
                    <div class="checked-box-4">
                      <el-checkbox></el-checkbox>
                    </div>
                    <div class="checked-box-5">
                      <el-checkbox></el-checkbox>
                    </div>
                    <div class="checked-box-6">
                      <el-checkbox></el-checkbox>
                    </div>
                    <div class="checked-box-7">
                      <el-checkbox></el-checkbox>
                    </div>
                    <div class="checked-box-8">
                      <el-checkbox></el-checkbox>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

  <script>

export default {
  name: "LeftChat",
  data() {
  return {
    groupChatName:"",
    GroupChatIntroduction:"",
    activeNames: ['0'],
    searchValue:"",
    isHidden:false,
    zhanghao:'',
    activeUser:{},
    userDataArrayIndex:0,
    newUserDataObject:{
      id:0,
      zhanghao: "admin",
      mima: "",
      name:'',
      Location:'',
      Status:'',
      Email:'',
    },
    userDataObject:{},
    searchWord:'',
    isActive: '',
    tabPosition: 'bottom',
    isActiveColor:1,
    centerDialogVisible: false,
    show: 1,
    imageUrl: require('@/assets/3.svg'),
    firstElSwitchChecked:true,
    secondElSwitchChecked:false,
    thirdlyElSwitchChecked:false,
    userInfo:[],
    filPerons2:[],
    verificationInformation:"",
  }
},
watch:{
  searchValue:{
    handler(newValue){
      if (newValue === "") {
        this.isHidden = false
      }
    }
  }
},
computed:{
    filPerons(){
      return this.userInfo.filter((f)=>{
        return f.name.indexOf(this.searchWord) !== -1
      })
    }
  },
methods: {
  createGroupChat(){
    if(this.groupChatName != ""){
      //创建groupChatName接收用户输入的群聊名称
    const groupChatName = this.groupChatName;
    //创建GroupChatIntroduction接收用户输入的群聊介绍
    const GroupChatIntroduction = this.GroupChatIntroduction;
    //把用户选择的好友过滤出来赋值给GroupChatMember
    const GroupChatMember = this.userInfo.filter((f)=>{
      return f.done === true;
    })
    //获取当前时间
    const time = new Date().toLocaleTimeString()
    //创建群聊对象
    const groupChatObj = {
      name:groupChatName,//群聊名称
      GroupChatIntroduction:GroupChatIntroduction,//群聊介绍
      GroupChatMember:GroupChatMember,//群聊中的用户
      imageUrl:require('../assets/10001.svg'),//群聊头像
      time:time,//群聊创建时间
      InfoType:'groupChat',//类型
      key:this.userInfo.length+1,//唯一标识
      messageList:[],//群聊消息列表
    }
    //将群聊对象添加到用户的群聊列表中
    this.userInfo.push(groupChatObj);
    //获取当前登录的用户信息
    const activeUser = JSON.parse(localStorage.getItem('activeUser'))
    //将当前登录用户的好友列表替换掉获取到的当前登录信息
    activeUser.userMessageList = this.userInfo;
    //获取所有用户信息赋值给userData
    const userData = JSON.parse(localStorage.getItem('userData'))
    GroupChatMember.forEach((f)=>{
      const uIndex = userData.findIndex((i)=>{
        return i.zhanghao === f.zhanghao
      })
      userData[uIndex].userMessageList.push(groupChatObj)
      console.log(userData,'group');
      console.log(uIndex,"zhanghao");
    })
    //获取当前登录用户在所有用户中的索引并赋值给index
    const index = userData.findIndex((i)=>{
      return i.zhanghao === activeUser.zhanghao
    })
    //将当前登录用户信息替换掉所有用户信息中的当前登录用户信息
    userData.splice(index,1,activeUser);
    //将当前所有用户信息替换掉本地存储中的所有用户信息
    localStorage.setItem('userData',JSON.stringify(userData));
    //关闭对话框
    this.centerDialogVisible = false;
    }else{
      this.$notify.error({
          title: '错误',
          message: '群聊名称不能为空，请重新输入！'
        });
      }
  },
  handleCheck(index){
    this.userInfo[index].done = !this.userInfo[index].done
  },
  groupInform(){
    if(this.activeUser.groupChatNotification.length === 0){
      this.x.$emit("isNull", "群聊");
      // this.x.$emit("groupHidden","群聊");
    }else{
      this.x.$emit("groupHidden","群聊");
    }
  },
  friendInform(){
    if(this.activeUser.friendRequestList.length === 0){
      this.x.$emit("isNull", "好友");
    }else{
      this.x.$emit("controlHidden","好友");
    }
  },
  search(){
    const userData = JSON.parse(localStorage.getItem('userData'))
    const filPerons = userData.filter((f)=>{
      return f.zhanghao === this.searchValue
    })
    this.filPerons2 = filPerons
    console.log(this.filPerons2,"filPerons2");
    this.isHidden = true
  },
  //保存用户信息事件
  saveUserData(){
    //以下六行代码是为了保存用户输入的个人信息，其中第六行是为了给每个用户信息对象设置一个唯一标识
    this.newUserDataObject.name = this.$refs.Username.value//用户输入的名字
    this.newUserDataObject.Location = this.$refs.Location.value//用户输入的地址
    this.newUserDataObject.Status = this.$refs.Status.value//用户输入的状态
    this.newUserDataObject.Email = this.$refs.Email.value//用户输入的邮箱
    this.newUserDataObject.mima = this.$refs.mima.value//用户输入的密码
    this.newUserDataObject.zhanghao = this.activeUser.zhanghao//账号
    this.newUserDataObject.id = this.userDataArrayIndex + 1//设置的唯一标识ID
    //创建一个user数组用来接收localStorage中存的用户信息
    const user = JSON.parse(localStorage.getItem('userData'));
    //将用户输入的个人信息对象通过splice方法替换进入user数组中
    user.splice(this.userDataArrayIndex,1,this.newUserDataObject)
    //把替换好的user数组重新存储到localStorage中
    localStorage.setItem('userData', JSON.stringify(user))
    //弹出保存成功的提示
  this.$notify({
    title: '保存个人信息成功',
    message: '请重新登录账号，查看最新个人信息。',
    type: 'success'
  });
  this.$router.replace('/')
  },
  // 鼠标右键事件
  onContextmenuList(key) {
    this.contextMenuData2 = [
    {
        label: '删除',
        onClick: () => {
          this.deleteMessage(key);
        }
    },
];
    this.$contextmenu({
        items: this.contextMenuData2,
        event, // 鼠标事件信息
        customClass: 'custom-class', // 自定义菜单 class
        zIndex: 3, // 菜单样式 z-index
        minWidth: 230 // 主菜单最小宽度
    });
    return false;
  },
  onContextmenuList1() {
    this.contextMenuData3 = [
    {
        label: '发送好友申请',
        onClick: () => {
          this.sendFriendRequest();
        }
    },
];
    this.$contextmenu({
        items: this.contextMenuData3,
        event, // 鼠标事件信息
        customClass: 'custom-class', // 自定义菜单 class
        zIndex: 3, // 菜单样式 z-index
        minWidth: 230 // 主菜单最小宽度
    });
    return false;
  },
  sendFriendRequest(){
    const user = this.filPerons2[0]
    this.$prompt('请填写验证消息', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '好友申请发送成功，请等待对方同意'
          });
          const time = new Date().toLocaleTimeString()
          user.friendRequestList.push({
          name:this.activeUser.name,
          imageUrl:this.activeUser.imageUrl,
          zhanghao:this.activeUser.zhanghao,
          verificationInformation:value,
          messageType:"applicationMessage",
          message:"请求添加为好友",
          isShow:true,
          isShow2:false,
          isShow3:false,
          show1:true,
          time:time,})
          user.friendRequestList.verificationInformation = this.verification
          const friendRequestList = this.friendRequestList
          const userData = JSON.parse(localStorage.getItem("userData"))
          const index = userData.findIndex((f)=>{
            return f.zhanghao === user.zhanghao
          })
          userData.splice(index,1,user)
          const activeUser = this.activeUser
          activeUser.friendRequestList.push({
            name:user.name,
            imageUrl:user.imageUrl,
            zhanghao:user.zhanghao,
            verificationInformation:value,
            messageType:"validationMessage",
            message:"正在验证你的申请",
            show1:false,
            show2:true,
            show3:false,
            show4:false,
            time:time,
          })
          const index2 = userData.findIndex((u)=>{
            return u.zhanghao === activeUser.zhanghao
          })
          userData.splice(index2,1,activeUser)
          localStorage.setItem("userData",JSON.stringify(userData))
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
  },
  deleteMessage(id){
    this.$confirm('是否删除这条消息?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.userInfo = this.userInfo.filter((u)=>{
          return u.key!== id
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
  },
  changeClass(i,userInfos) {
    this.isActive = i;
    this.x.$emit('sendMessageItem',userInfos);
    this.x.$emit("controlHidden1", true);
  },
  changeClassColor(v) {
    this.isActiveColor = v;
  },
  changeNumber(n){
    this.show = n;
    switch (n) {
      case 1:
        this.x.$emit("controlHidden1", true);
      break;
      case 2:
        this.x.$emit("controlHidden2", true);
      break;
    }
  },
  handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
  },
  beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
  },
},
mounted() {
  this.$nextTick(() => {
     //读取浏览器存储的当前登录用户信息
     const user = JSON.parse(localStorage.getItem('activeUser'))
    if(user.friendRequestList.length != 0) {
      this.$notify({
          title: '验证消息',
          message: '您有一条新的申请，请点击联系人，前去处理',
          position: 'bottom-right'
        });
    }
    console.log(user,"当前登录用户信息");
    //把当前登录的用户信息赋值给activeUser方便保存用户信息时使用
    this.activeUser = user
    //读取浏览器本地存储的用户信息并赋值给userData方便JSON.parse方法读取
    const userData = localStorage.getItem('userData')
    //创建一个数组把过滤后的用户信息赋值给userDataList
    const userDataList = JSON.parse(userData).filter((item)=>{
      //判断所有用户信息和当前登录的用户信息进行对比并返回
      return user.id === item.id
    })
    //创建一个index值用来接收当前登录的账号数组中的索引值，方便保存用户后修改的信息时判断替换哪一条
    const index = JSON.parse(userData).findIndex((item)=>{
      //判断条件：当前登录的用户名字和所有用户信息名字进行对比并返回索引值
      return user.id === item.id
    })
    //将得出的索引值赋值给userDataArrayIndex以便保存用户信息时使用
    this.userDataArrayIndex = index;
    //把过滤后的用户信息赋值给this.userDataObject方便模板中使用
    this.userDataObject = userDataList[0]
    console.log(userDataList[0],"userData");
    //把过滤后的用户历史消息数组对象赋值给this.userInfo方便模板中使用
    this.userInfo = this.userDataObject.userMessageList
    //将当前登录的用户信息通过全局事件总线发送给FirstChat组件
    this.x.$emit("sendUsers",user,this.userDataArrayIndex)
  })
},
}
</script>
<style scoped>
.ListStyle-1[data-v-02c954af] {
  height: 748px;
  overflow-y: scroll;
}
.ListStyle-1::-webkit-scrollbar{
  display:none
  }
::v-deep .el-collapse-item__header:hover{
  background-color: #F1F3F4;
}
::v-deep .el-collapse-item__header{
  border-bottom: none;
  height: 26px;
  padding: 15px;
  font-size: 20px;
  color: #263A5B;
  font-weight: bold;
  cursor: pointer;
}
.el-collapse {
  border:none;
}
.inform-ListStyle-1-title-1:hover{
  background-color: #F1F3F4;
}
.inform-ListStyle-1-title-1 i{
  float: right;
  margin-top: 3px;
  margin-right: 7px;
}
.inform-ListStyle-1-title-1{
  font-size: 20px;
  font-weight: bold;
  color: #263a5b;
  padding: 15px;
  cursor: pointer;
}
.ListStyle-1{
  height:748px
}
.hidden{
  display: none;
}
.save-button-style button:hover{
  background-color: #737373;
  transition: all 0.2s ;
}
.save-button-style button{
  width: 120px;
  height: 35px;
  background-color: #999;
  border: none;
  border-radius:5px;
  float: right;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
  color: #fff;
}
.save-button-style{

}
.list-li-style:hover a div div H5 H5{
  display: inline;
}
.abc-h5{
  font-size: 14px;
  color: red;
  font-weight: 300;
  position: relative;
  right: -106px;
  line-height: 15px;
  display: inline;
  display: none;
}
.Setting-bottom-box >>> .el-checkbox__inner::after{
  display: none;
}
::v-deep .el-switch.is-checked .el-switch__core::after {
  top: 5%;
  left: 112%;
  margin-left: -1.063rem;
  background-color: #fff;
  width: 12px;
height: 12px;
}
::v-deep .el-switch__core:after {
top: 7%;
left: 5%;
background-color: #d2d2d2;
width: 12px;
height: 12px;
}
::v-deep .el-switch__core {
  width: 28px !important;
  height: 16px !important;
  border-radius: 60px;
  background: #ffffff;
  border: 1px solid #8A98AC;
}
.iconfont{
  font-size: 20px;
  color: #8A98AC;
}
::v-deep .el-upload i:hover{
  color: #168C84;
}
::v-deep .el-upload i{
  position: absolute;
  top: 71px;
  left: 78px;
  color: #8A98AC;
}
::v-deep .el-upload {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  outline: 0;
  position: relative;
}
.avatar-uploader img{
  width: 100px;
}
.avatar-uploader {
  width: 100px;
  height: 100px;
  padding: 0px 110px;
}
.fade-leave,.fade-enter-to {
  opacity: 1;
}

.fade-leave-active,.fade-enter-active {
  transition: all 1.5s; 
}
.fade-leave-to,.fade-enter {
  opacity: 0;
}
.left-chat {
  width: 320px;
  height: 100vh;
  background-color: white;
}
.friend-list {
  height: 850px;
}
.friend-list-content {
  box-sizing: border-box;
  height: 850px;
}
.first-friend-list {
  box-sizing: border-box;
  height: 850px;
}
.List-herder {
  width: 290px;
  height: 40px;
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  background-color: rgb(255, 255, 255);
}
.row {
  width: 290px;
  height: 40px;
  position: relative;
}
.col-1 {
  width: 210px;
  height: 40px;
  padding-right: 15px;
}
.col-1 div{
width: 162px;
height: 27.188px;
position: absolute;
    top: 0px;
    left: 47px;
}
.col-1 div h5{
    margin-top: 5px;
    font-size: 16px;
    font-weight: 600;
    color: #263a5b;
}
.col-2{
position: absolute;
top: 10px;
right: 0;
}
.col-2 a{
  text-decoration: none;
}
.col-2 a i:hover{
  color: #19a299;
}
.col-2 a i{
  font-size: 20px;
  color: #4C595F;
  font-weight: bold;
}
.search-box{
  padding: 15px;
  height: 38px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}
.search-content{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}
.search-input-style{
  background-color: #F2F6FA;
  color: #8A98AC;
  border: none;
  font-size: 16px;
  border-radius: 3px 0 0 3px;
  width: 218px;
  height: 26px;
  padding: 6px 12px 6px 20px;
  outline: none;
}
.search-btn-style{
  background-color: #F2F6FA;
  color: #8A98AC;
  height: 26px;
  border: none;
  font-size: 18px;
  border-radius: 0 3px 3px 0;
  padding: 5px 15px 3px 5px;
  height: 38px;
  cursor: pointer;
}
.list{
  width: auto;
  height: 710px;
  overflow: hidden;
  background-color: #ffffff;
}
.list-style-ul{
  overflow-y: auto;
  height: auto;
}
.list-style-ul::-webkit-scrollbar{
  display: none;
}
.list-li-style{
  padding: 15px;
  height: 41.188px;
  cursor: pointer;
}
.list-li-style a{
  text-decoration: none;
  position: relative;
  top: 0px;
}
.list-li-content{
  display: flex;
  align-items: flex-start;
  margin-top: -20px;
}
.list-li-content img{
  width: 40px;
  height: 40px;
  margin-right:10px;
}
.list-li-p-style{
  font-size: 14px;
  color: #8A98AC;
}
.list-li-h5-style{
  font-size: 15px;
  color: #263a5b;
  margin-bottom: 5px;
  position: relative;
}
.list-li-style:hover{
  background-color: #F1F3F4;
  border-right: 2px solid #19a299;
}
.active{
  background-color: #F1F3F4;
  border-right: 2px solid #19a299;
}
.el-tabs--bottom .el-tabs__header.is-bottom {
  margin-bottom: 0;
  margin-top: 10px;
  width: 290px;
  height: 68px;
  background-color: #ffffff;
  padding: 0 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.03);
  top: 54px;
}
[class*=" el-icon-"], [class^=el-icon-] {
  font-family: element-icons!important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
}
 ::v-deep .el-tabs--bottom .el-tabs__header.is-bottom {
  margin-bottom: 0;
  margin-top: 0px;
  height: 68px;
  width: 290px;
  padding: 0 15px;
  bottom: -65px;
  background-color: white;
  position: fixed;
  bottom: 0px;
}
::v-deep .el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2), .el-tabs--bottom .el-tabs__item.is-top:nth-child(2), .el-tabs--top .el-tabs__item.is-bottom:nth-child(2), .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  padding-left: 0;
  width: 72.5px;
  height: 68px;
}
::v-deep .el-tabs__item {
  padding: 0px;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  position: relative;
  width: 72.5px;
  height: 68px;
}
.el-title-i-style{
  width: 72.5px;
  height: 68px;
  text-align: center;
  cursor: pointer;
}
.el-title-i-style i{
  line-height: 68px;
  cursor: pointer;
  width: 72.5px;
}
::v-deep .el-tabs__active-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: #19a299;
  z-index: 1;
  transition: transform .3s cubic-bezier(.645,.045,.355,1);
  list-style: none;
}
.ColorActive{
  color: #19a299;
}
::v-deep .el-button--text {
  border-color: transparent;
  color: #409EFF;
  background: 0 0;
  padding-left: 0;
  padding-right: 0;
  position: absolute;
  right: 1px;
  top: -11px;
}
::v-deep .el-dialog__title {
  line-height: 24px;
  font-size: 18px;
  font-size: 18px;
  color: #4c595F;
}
::v-deep .el-button--primary {
  color: #FFF;
  border-color: #19a299;
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 600;
  width: 142.122px;
  width: 173.122px;
  height: 38.88px;
  background-color: #19a299;
}
::v-deep .el-button--primary:focus, .el-button--primary:hover {
  background-color: #168C84;
  color: #FFF;
}
::v-deep .el-button--primary:focus{
  border: 4px solid #40E1D7;
}
::v-deep .el-dialog {
  position: relative;
  margin: 0 auto 50px;
  background: #FFF;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,.3);
  box-sizing: border-box;
  width: 50%;
  width: 500px;
  top: -84px;
}
::v-deep .el-dialog__footer {
  padding: 16px;
  box-sizing: border-box;
}
::v-deep .el-dialog__header {
  padding: 20px 20px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}
::v-deep .el-dialog--center .el-dialog__body {
  text-align: initial;
  padding: 16px;
}
.dialog-textarea-box , .dialog-input-box{
  margin-bottom: 16px;
}
.dialog-input-box input{
  border: none;
  background-color: rgba(129, 167, 205, 0.1);
  color: #8A98AC;
  padding: 6px 12px;
  outline: none;
  width: 442.193px;
  height: 23px;
}
.dialog-textarea-box textarea{
  background-color: rgba(129, 167, 205, 0.1);
  border: none;
  color: #8A98AC;
  padding: 6px 12px;
  outline: none;
  width: 442.193px;
  height: 62.929px;
  resize: vertical;
}
.p-text-style{
  display: block;
  padding: 15px;
  width: 436.193px;
  height: 18.196px;
  color: #8A98AC;
  font-size: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}
.icon-box{
  padding: 15px;
  width: 436.193px;
  height: 35px;
  position: relative;
}
.icon-box a img{
  width: 35px;
  height: 35px;
  background-color: #FFF;
  border: 2px solid #fff;
  border-radius: 50%;
  transition: all 0.3s;
}
.icon-box a:hover{
  z-index: 5000;
}
.icon-box a img:hover{
  transform:scale(1.1)
}
.icon-box a{
  width: 35px;
  height: 35px;
  position: absolute;
}
.icon-box a:nth-child(2){
  position: absolute;
  left: 39px;
}
.icon-box a:nth-child(3){
  position: absolute;
  left: 63px;
}
.icon-box a:nth-child(4){
  position: absolute;
  left: 88px;
}
.dialog-content-search-box{
  width: 466.193px;
  height: 35px;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
}
.dialog-content-search-box input{
  padding: 6px 12px;
  width: 400.389px;
  height: 23px;
  border: none;
  outline: none;
  background-color: rgba(129, 167, 205, 0.1);
  color: #8A98AC;
}
.dialog-content-search-btn-box{
  width: 41.804px;
  height: 35px;
}
.dialog-content-search-btn-box button{
  padding: 4px 12px;
  background-color: rgba(129, 167, 205, 0.1);
  color: #8A98AC;
  border: none;
  height: 35px;
  cursor: pointer;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  border: 1px solid transparent;
  border-radius: 3px;
}
.dialog-content-search-btn-box button:focus{
  border: 4px solid #B5D7FB;
}
.dialog-content-list-box{
  width: 468.193px;
  height: 350px;
  overflow-y: scroll;
}
.dialog-content-list-box::-webkit-scrollbar{
  display: none;
}
.dialog-content-list-ul-box li{
  list-style: none;
  padding: 15px 0px;
  width: 464.375px;
  height: 41.193px;
  border-left: 1px solid rgba(0, 0, 0, 0);
  display: flex;
}
.dialog-content-list-ul-box li img{
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
::v-deep .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #19a299;
  border: 2px solid #40E1D7;
  width: 16px;
  height: 16px;
}
::v-deep .el-checkbox__inner:hover {
  border-color:#DCDFE6;
}
::v-deep .el-checkbox__inner {
  display: inline-block;
  position: relative;
  border: 1px solid #8A98AC;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #FFF;
  z-index: 1;
  transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
  width: 16px;
  height: 16px;
}
.dialog-content-list-ul-li-text-box h5{
  margin-bottom: 5px;
  font-size: 15px;
  color: #263a5b;
}
.dialog-content-list-ul-li-text-box p{
  font-size: 14px;
  color: #8A98AC;
}
.dialog-content-list-ul-li-text-box{
  width: 373.736px;
  height: 41.193px;
}
.checkbox-box{
  padding-left: 24px;
  line-height: 40px;
}
.personal-data-box{
  width: 320px;
  height: 710px;
}
.personal-data-content-box{
  width: 320px;
  height: 610px;
  padding-bottom: 100px;
}
.header-headPortrait-box{
  padding: 30px 0px;
  width: 320px;
  height: 168.210px;
}
.personalInformation-box{
  width: 320px;
  height: 370.526px;
}
.header-headPortrait-box h5{
  font-size: 16px;
  color: #263a5b;
  margin-bottom: 8px;
  margin-top: 22px;
  text-align: center;
}
.header-headPortrait-box p{
  color: #8A98AC;
  font-size: 14px;
  text-align: center;
}
.personalInformation-box ul li{
  padding: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.03);
  height: 43.2px;
  display: flex;
}
.personalInformation-box ul li i{
  color: #8A98AC;
  line-height: 40px;
  margin-right: 15px;
}
.personalInformation-box ul li div div{
  display: flex;
}
.personalInformation-box ul li div p{
  font-size: 14px;
  color: #8A98AC;
  margin-bottom: 5px;
}
.personalInformation-box ul li div div input{
  border: none;
  outline: none;
  font-size: 15px;
  color: #4c595f;
  font-weight: 600;
}
.personalInformation-box ul li div div div button{
  background: none;
  border: none;
  font-size: 11px;
  color: #8A98AC;
  cursor: pointer;
  margin-left: 22px;
}
.personalInformation-box ul li div div div button:hover{
  color: #168C84;
}
.el-icon-more-style-1{
  transform: rotate(90deg);
}
.el-dropdown-menu__item:hover{
  background-color: #F1F3F4;
  color: #168C84;
}
.Setting-Header{
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  font-size: 14px;
  color: #8A98AC;
}
.Setting-box{
  padding: 15px;
}
.Setting-item-box{
  padding-bottom: 16px;
  display: flex;
  position: relative;
}
.item-box h6{
  color: #263a5b;
  font-size: 14px;
}
.item-checked-box{
  position: absolute;
  right: 6px;
}
.last-item-checked-box{
  position: absolute;
  right: 6px;
  top: 6px;
}
.Setting-bottom-box{
  padding: 15px 15px 20px 20px;
  display: flex;
}
.Setting-bottom-box label{
  margin-right: 12px;
}
.checked-box-1 >>> .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner[data-v-02c954af] {
  background-color: #19a299;
  border: none;
  width: 18px;
  height: 18px;
}
.checked-box-1 >>> .el-checkbox__inner:hover {
border: 2px solid #168C84;
}
.checked-box-1 >>> .el-checkbox__inner {
  display: inline-block;
  position: relative;
  border: 2px solid #168C84;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #FFF;
  z-index: 1;
  transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
  width: 18px;
  height: 18px;
}
.checked-box-2 >>> .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner[data-v-02c954af] {
  background-color: #8294CA;
  border: none;
  width: 18px;
  height: 18px;
}
.checked-box-2 >>> .el-checkbox__inner:hover {
border: 2px solid #8294CA;
}
.checked-box-2 >>> .el-checkbox__inner {
  border: 2px solid #8294CA;
  width: 18px;
  height: 18px;
}
.checked-box-3 >>> .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner[data-v-02c954af] {
  background-color: #54D898;
  border: none;
  width: 18px;
  height: 18px;
}
.checked-box-3 >>> .el-checkbox__inner:hover {
border: 2px solid #54D898;
}
.checked-box-3 >>> .el-checkbox__inner {
  border: 2px solid #54D898;
  width: 18px;
  height: 18px;
}
.checked-box-4 >>> .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner[data-v-02c954af] {
  background-color: #F27273;
  border: none;
  width: 18px;
  height: 18px;
}
.checked-box-4 >>> .el-checkbox__inner:hover {
border: 2px solid #F27273;
}
.checked-box-4 >>> .el-checkbox__inner {
  border: 2px solid #F27273;
  width: 18px;
  height: 18px;
}
.checked-box-5 >>> .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner[data-v-02c954af] {
  background-color: #F0C740;
  border: none;
  width: 18px;
  height: 18px;
}
.checked-box-5 >>> .el-checkbox__inner:hover {
border: 2px solid #F0C740;
}
.checked-box-5 >>> .el-checkbox__inner {
  border: 2px solid #F0C740;
  width: 18px;
  height: 18px;
}
.checked-box-6 >>> .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner[data-v-02c954af] {
  background-color: #67C1DF;
  border: none;
  width: 18px;
  height: 18px;
}
.checked-box-6 >>> .el-checkbox__inner:hover {
border: 2px solid #67C1DF;
}
.checked-box-6 >>> .el-checkbox__inner {
  border: 2px solid #67C1DF;
  width: 18px;
  height: 18px;
}
.checked-box-7 >>> .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner[data-v-02c954af] {
  background-color: #F1F3F4;
  border: none;
  width: 18px;
  height: 18px;
}
.checked-box-7 >>> .el-checkbox__inner:hover {
border: 2px solid #F1F3F4;
}
.checked-box-7 >>> .el-checkbox__inner {
  border: 2px solid #F1F3F4;
  width: 18px;
  height: 18px;
}
.checked-box-8 >>> .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner[data-v-02c954af] {
  background-color: #4C595F;
  border: none;
  width: 18px;
  height: 18px;
}
.checked-box-8 >>> .el-checkbox__inner:hover {
border: 2px solid #4C595F;
}
.checked-box-8 >>> .el-checkbox__inner {
  border: 2px solid #4C595F;
  width: 18px;
  height: 18px;
}
.list-li-h5-style span{
  font-size: 11px;
  color: #8A98AC;
  float: right;
  font-weight: 100;
  position: absolute;
  right: 1px;
}
</style>