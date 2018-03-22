<template>
  <div class="login_back">
    <div class="login_box">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="ruleForm2.age"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')" ref="btn">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import * as types from '@/store/types'
  import '@/assets/javascript/gt.js'
  export default {
    name: 'login',
    data () {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'))
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'))
            } else {
              callback()
            }
          }
        }, 1000)
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
        data: {
          gt: '6216680937717fdab947ed9e71a3aaa1',
          challenge: '68041f79f54b2be01e7d4bd2facfdaca',
          new_captcha: true,
          success: 1
        },
        captchaObj: {}
      }
    },
    mounted () {
      const that = this
      this.jyyzInit()
      this.GET_GT()
        .then((res) => {
          console.log('res', res)
          window.initGeetest({
            gt: res.data.gt,
            challenge: res.data.challenge,
            offline: !res.data.success, // 表示用户后台检测极验服务器是否宕机
            new_captcha: res.data.new_captcha, // 用于宕机时表示是新验证码的宕机
            timeout: '5000',
            product: 'bind', // 产品形式，包括：float，popup
            width: '300px'
          }, that.gtHandler)
        })
    },
    methods: {
      gtHandler (captchaObj) {
        captchaObj.onReady(function () {
          window.$('#wait').hide()
        }).onSuccess(function () {
          var result = captchaObj.getValidate()
          console.log(result)
          if (!result) {
            return alert('请完成验证')
          }
        })
        this.captchaObj = captchaObj
      },
      jyyzInit () {
        // const that = this
        // const handler = function (captchaObj) {
        //   captchaObj.onReady(function () {
        //     console.log(11111)
        //     window.$('#wait').hide()
        //   }).onSuccess(function () {
        //     const result = captchaObj.getValidate()
        //     if (!result) {
        //       return alert('请完成验证')
        //     }
        //   })
        //   window.$(that.$refs.btn).click(function () {
        //     captchaObj.verify()
        //   })
        // }
      },
      submitForm (formName) {
        this.captchaObj.verify()
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('submit!')
        //   } else {
        //     console.log('error submit!!')
        //     return false
        //   }
        // })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      ...mapActions([types.GET_GT])
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  #app {
    margin: 0;
    padding: 0;
  }
  .login_back {
    height: 560px;
    background: #eee;
    .login_box {
      float: right;
      margin-right: 50px;
      background: #fff;
      padding: 20px;
      margin-top: 30px;
      width: 300px;
    }
  }
</style>
