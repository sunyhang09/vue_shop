<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  methods:{
    logout(){
      //销毁登录时获取的token值，下次登录再次获取一个新的token值
      window.sessionStorage.removeItem('token')
      this.$router.push('/login')
    }
  }

}
</script>

<style>

</style>