<template>
   <div>
        <div class="title">
                <p>账户设置</p>
        </div>
        <div class="box">
            <h3>填写账户信息</h3>
            <div class="userInfo">
                <div>                            
                    <el-form ref="form"  label-width="80px">
                            <el-form-item label="用户名">
                                <el-input v-model="username"></el-input>
                            </el-form-item>
                            <el-form-item label="Email">
                                <el-input v-model="Email"></el-input>
                            </el-form-item>
                            <el-form-item label="旧密码">
                                <el-input v-model="pwd" type="password" placeholder="请填写旧密码"></el-input>
                            </el-form-item>
                            <el-form-item label="新密码">
                                <el-input v-model="newpwd" type="password" placeholder="请填写新密码"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码">
                                <el-input v-model="newpwd2" type="password" placeholder="请确认密码"></el-input>
                            </el-form-item>
                    </el-form>                
                </div>
                <div class="button">
                    <el-button type="primary">完成，提交信息</el-button>
                </div>
            </div>
        </div>
   </div>
</template>
<script>
export default {
    data(){
        return{
            username:'',
            Email:'',
            pwd:'',
            newpwd:'',
            newpwd2:''
        }
    }
}
</script>
<style lang="less" scoped>
.box{
    text-align: left;
     box-shadow: -2px 2px 8px -6px ;  
    h3{
        padding: 0 20px;
        background: #ecebf1;
        font-size: 14px;
        line-height: 58px;
    }
    .userInfo{
        background: #fff;
        padding-top: 40px;
    }
    .userInfo>div{
       
        width: 438px;
        margin: auto;
        height: 400px;
       .el-input{
            width: 300px;
        }
    }
    em{
        color: red;
    }
}
.button{
    width: 1000px;
    border-top: 1px solid #dddef1;
    text-align: center;
    padding: 20px 200px;
}
</style>