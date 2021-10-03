<template>
<div class = "login_container">
  <div class="login_box">
    <!-- 头像区域 -->
    <div class="avatar_box">
      <img src="../assets/logo.png" alt="">
    </div>
    <!-- 登录表单区域 -->
    <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
      <!-- 用户名 -->
       <el-form-item prop="username">
          <el-input  v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
       </el-form-item>
       <!-- 密码 -->
       <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-unlock" type="password"></el-input>
       </el-form-item>
       <!-- 按钮区域 -->
       <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
       </el-form-item>
    </el-form>

  </div>
</div>
  
</template>

<script>
export default {
  data(){
    //这是登录表单的数据绑定对象
    return {
      loginForm:{
        username:'张三',
        password:'124'
      },
      //表单的验证规则对象
      loginFormRules:{
        //验证用户名是否合法  校验规则在element中的表单中找到并使用
        username:[
          {required:true,message:'请输入用户名',trigger:'blur'},
          {min:3,max:10,message:'长度应在3到10之间',trigger:'blur'}
        ],
        //验证密码规则对象
        password:[
          {required:true,message:'请输入登录密码',trigger:'blur'},
          {min:6,max:15,message:'长度应在6到15之间',trigger:'blur'}
        ]
      }
    }
  },
  methods:{
    //点击重置按钮，重置登陆表单  在组件库中查看对应的方法
    resetLoginForm(){
      this.$refs.loginFormRef.resetFields()
    },
    login(){
      //表单的预验证，接收的valid可以知道验证通过，还是失败
      // this.$refs.loginFormRef.validate((valid)=>{
      //   if(!valid) return this.$message.error('登录失败')
      window.sessionStorage.setItem('token','hang') //自己创建的，正确的做法是在登录的时候，服务器后台会返回一个token的值
      this.$router.push('/home')  //直接进行跳转
        //后台文档找不到，所以漏了数据验证的功能
        //将登录成功之后的token，成功保存到客户端的sessionstorage中
        //项目中出了登录之外的其它api接口，必须在登录之后才能访问
        //token只应当在当前网站打开期间生效，所以将token保存在sessionstorage中
        //通过编程式导航跳转到后台主页，路由地址是/home
    }
  }


}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height:100%;
}
.login_box {
  position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  width:450px;
  height:300px;
  background-color: #fff;
  border-radius: 3px;

  .avatar_box {
    position:absolute;
    left:50%;
    transform: translate(-50%,-50%);
    height:130px;
    width:130px;
    border:1px solid #eee;
    border-radius: 50%;
    padding:10px;
    box-shadow: 0 0 10px #ddd;
    
    img {
      width:100%;
      height:100%;
      border-radius: 50%;
      background-color:#eee;
    }
  }

}
.login_form {
  position: absolute;
  bottom:0px;
  width:100%;
  padding:0 20px;
  box-sizing: border-box;
}
.btns {
  display:flex;
  justify-content: flex-end;
}

</style>