<template>
  <div class="content">
    <div class="box">
      <label>
        <span>用户名:</span> <input type="text" name="username">
      </label>
      <label>
        <span>密码:</span><input type="password" name="pwd">
      </label>
      <button class="submit" @click="login()">登录</button>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/css/index/index"
  .content {

    .box {
      font-size 0.7rem
      display flex
      flex-direction column
      width 80vw
      height 60vh
      background-color antiquewhite
      margin auto
      align-items center
      span{
        width 2rem
        text-align center
      }
      input {
        height 1rem
        width 6rem
        border 1px solid black
      }
    }

  }


</style>
