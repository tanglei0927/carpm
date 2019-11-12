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
                         <!-- <el-form-item label="用户头像"> -->
                                <!-- <img :src="imgurl" alt=""> -->
                                 <!-- <el-upload
                                    :action="$url+'/file/uploadFile'"
                                    :limit="5"
                                    list-type="picture-card"
                                    :file-list="fileList"
                                    :name="'fileName'"
                                    :on-remove="handleRemove"
                                    :on-success="handlePictureCardPreviewBanner">
                                    <i class="el-icon-plus"></i>
                                </el-upload> -->
                            <!-- </el-form-item> -->
                            <el-form-item label="用户名">
                                <el-input v-model="username" disabled="true"></el-input>
                            </el-form-item>
                            <!-- <el-form-item label="Email">
                                <el-input v-model="Email"></el-input>
                            </el-form-item> -->
                            <!-- <el-form-item label="旧密码">
                                <el-input v-model="pwd" type="password" placeholder="请填写旧密码"></el-input>
                            </el-form-item> -->
                            <el-form-item label="新密码">
                                <el-input v-model="newpwd" type="password" placeholder="请填写新密码"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码">
                                <el-input v-model="newpwd2" type="password" placeholder="请确认密码"></el-input>
                            </el-form-item>
                    </el-form>                
                </div>
                <div class="button">
                    <el-button type="primary" @click="changepwd()">确认修改</el-button>
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
            newpwd2:'',
            id:null
        }
    },
    created(){
        var userInfo=JSON.parse(sessionStorage.userInfo)
        this.username=userInfo.name
        this.id=userInfo.id    
        this.newpwd=''    
    },
    methods:{
        changepwd(){
            if(this.newpwd!=''&&this.newpwd2!=''){
                if(this.newpwd==this.newpwd2){
                    this.$axios.post(this.$url+"accountLogin/password",{
                        password:this.newpwd2
                    }).then(res=>{
                        if(res.code==100){
                             this.$message({
                                message: '密码修改成功',
                                type: 'success'
                            });
                            setTimeout(()=>{
                                this.$router.push({name:'car'})
                            },1000)
                        }else{
                             this.$message({
                                message: res.msg,
                                type: 'warning'
                            });
                        }
                    })
                }else{
                    this.$message({
                        message: '两次密码不一致',
                        type: 'warning'
                    });
                }
            }
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
        // height: 400px;
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