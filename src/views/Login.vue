<template>
<div class="login">

    <div>
          <h3></h3>
            <div class="formbox">
                <h5>用户登录</h5>
                <el-form label-width="80px">
                     <el-input
                        placeholder="请输入用户名"
                        prefix-icon="el-icon-user-solid"
                        v-model="username">
                    </el-input>
                     <el-input
                        placeholder="请输入登录密码"
                        prefix-icon="el-icon-lock"
                        v-model="password" type="password">
                    </el-input>
                    <el-button :type="buttonType" @click="login()" :disabled="disabled" :loading="disabled">{{msg}}</el-button>
                </el-form>
            </div> 
    </div>
  
</div>
</template>
<script>
  import md5 from 'js-md5';
import { stringify } from 'querystring';
export default {
    data(){
        return{
              username:'',
              password:'',
              buttonType:'primary',
              msg:'登录',
              disabled:false
        }
    },
    methods:{
        login(){
            this.disabled=true
            this.buttonType='warning'
            this.msg="登录中"
            var that=this
            console.log(this.$url)
            console.log(this.username)
            // if(this.username!=""&&this.password!=""){
                that.$axios.post(that.$url+"accountLogin/nameLogin",
                {
                    userName:that.username,
                    password:md5(that.password)
                }).then(res=>{
                    console.log("res")
                    console.log(res)
                    if(res.code==100){
                        sessionStorage.userInfo=JSON.stringify(res.info)
                        setTimeout(()=>{
                            this.$router.push({name:'car'})
                        },1000)
                    }
                })
            // }
        }
    }
}
</script>
<style lang="less" scoped>
    .login{
        width: 100%;
        height: 100%;
        background: url("../assets/dl_05.jpg") center center no-repeat;
        background-size: 100% 100%;
        
    }
    .formbox{
        width: 448px;
        height: 390px;
        padding: 50px;
        background: #fff;
        border-radius: 10px;
        padding: 43px;
        box-sizing: border-box;
        // button{
        //     margin: 0;
        //     padding: 0;
        //     border: 0;
        //     background:url("../assets/dl_06.png") center center no-repeat;
        //     background-size:100% 100%; 
        //     width: 100%;
        //     line-height: 60px;
        //     height: 60px;
        //     border-radius:3px; 
        //     color: #fff;
        //     font-size: 16px;
        // }
    }
    h3{
        width: 250px; 
        height: 40px;
        background: url("../assets/logo.png") center center no-repeat;
        margin: auto;
        margin-bottom: 40px;
    }
    .login>div{
        position: absolute;
        top:30%;
        right: 10%;
    }
    h5{
        font-size: 20px;
        font-weight: normal;
        text-align: left;
        line-height: 36px;
        padding-bottom: 22px;
        border-bottom: 1px solid #dddce2;
    }
    .el-form{
        margin-top: 30px;
    }
    .el-button{
        width: 150px;
    }
    .el-input{
        margin-bottom: 30px;
    }
</style>