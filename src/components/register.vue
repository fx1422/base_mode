<template>
  <div class="content">
    <div class="box">
      <div class="title">注册页</div>
      <div class="item">
        <div class="tt">手机号</div>
        <input type="text" placeholder="请输入手机号" v-model="tel">
        <div class="code">获取验证码</div>
      </div>
      <div class="item">
        <div class="tt">密码</div>
        <input type="password" placeholder="请输入密码" v-model="pwd">
      </div>
      <div class="item">
        <div class="tt">验证码</div>
        <input type="tel" placeholder="请输入短信验证码" v-model="code">
      </div>
      <div class="item">
        <div class="tt">昵称</div>
        <input type="text" placeholder="请设置您的昵称" v-model="nickname">
      </div>
      <div class="item">
        <button class="goRegister" @click="goRegister()">登录</button>
      </div>
    </div>
  </div>
</template>


<script>
  import {checkForm} from 'common/js/checkFrom'
  import api from 'api/api'

  export default {
    data() {
      return {
        tel: '',
        pwd: '',
        code: '',
        nickname: ''
      }
    },
    methods: {
      goRegister() {
        if (!checkForm.tel(this.tel)) {
          alert('请输入正确的手机号')
        } else if (!checkForm.pwd(this.pwd)) {
          alert('请输入正确的密码')
        } else if (!checkForm.code(this.code)) {
          alert('请输入正确的验证码')
        } else if (!checkForm.nickname(this.nickname)) {
          alert('请输入正确的昵称')
        } else {
          const params = {
            tel: this.tel,
            pwd: this.pwd,
            code: this.code,
            nickname: this.nickname
          }
          api.Register(params).then(res => {
            console.log(res)
          })
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/css/index/index"
  .content {
    height 100vh
    background-color black
    .box {
      height 70vh
      border-top-left-radius 10px
      border-top-right-radius 10px
      width 90vw
      background-color #ffffff
      margin auto
      position absolute
      bottom 0
      left 0
      right 0
      top 0
      .title {
        font-size 1rem
        text-align center
        height 2.5rem
        line-height 2.5rem
        font-weight bold
      }
      .item {
        height 2rem
        display flex
        margin-top 1rem
        justify-content flex-start
        align-items center
        position relative
        border-bottom 1px solid #e6e6e6
        padding-bottom 1rem
        .tt {
          font-size 0.76rem
          box-sizing border-box
          padding 0 0.4rem
          width 4rem
          text-align right
        }
        .code {
          font-size 0.5rem
          position absolute
          right 1rem
          padding 0 0.4rem
          box-sizing border-box
          background-color red
          border-radius 2px
          color white
          height 1.2rem
          line-height 1.2rem

        }
        .code:active {
          background-color #650000
          color #c1c1c1
        }
        input {
          border 1px solid #dddddd
          height 80%
          width 12rem
          border-radius 6px
          font-size 0.7rem
          text-indent 1rem
          color blue
        }
        .goRegister {
          width 80vw
          height 2rem
          margin auto
          border none
          background-color red
          color #ffffff
          font-size 0.8rem
          border-radius 2px
        }
        .goRegister:active {
          background-color #900000
          color #c7c7c7
        }
      }
    }
  }
</style>
