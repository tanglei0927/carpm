<template>
     <div>
        <div class="title">
                <p>修改信息</p>
        </div>
        <div class="box">
            <div class="userInfo">
                <div>                            
                    <el-form :model="formdata"  label-width="80px">
                        <div class="infobox">
                             <el-form-item label="车系ID">
                                <el-input v-model="formdata.fsetId"></el-input>
                            </el-form-item>
                            <el-form-item label="车系">
                                <el-input v-model="formdata.setName"></el-input>
                            </el-form-item>
                            <el-form-item label="车型ID">
                                <el-input v-model="formdata.fmodelId"></el-input>
                            </el-form-item>
                            <el-form-item label="车型">
                                <el-input v-model="formdata.modelName"></el-input>
                            </el-form-item>
                            <el-form-item label="车架">
                                <el-input v-model="formdata.frameName"></el-input>
                            </el-form-item>
                           
                        </div>
                        <div class="infobox">
                            
                             <el-form-item label="车钥匙">
                                <el-input v-model="formdata.keyName"></el-input>
                            </el-form-item>
                            <el-form-item label="车主">
                                <el-input v-model="formdata.masterName"></el-input>
                            </el-form-item>
                            <el-form-item label="电话">
                                <el-input v-model="formdata.masterPhone"></el-input>
                            </el-form-item>
                            <el-form-item label="车辆图片">
                                
                            </el-form-item>
                        </div>
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
    data(){return{
        formdata:{
            id:'',
            fsetId:'',
            setName:'',
            fmodelId:'',
            modelName:'',
            frameName:'',
            keyName:'',
            masterName:'',
            masterPhone:'',
            carImageCode:'',
        }

    }},
    methods:{
        tijiao(){
             var data={}
             data.id=sessionStorage.id
            data.fsetId=sessionStorage.CxValue //车系id
            data.setName=sessionStorage.CxName //车系
            data.fmodelId= sessionStorage.xHValue  //车型id
            data.modelName=sessionStorage.xHName//车型
            data.frameName=sessionStorage.cjNum//车架
            data.keyName=sessionStorage.seyaoshiInfo//钥匙
            data.masterName=this.username//车主
            data.masterPhone=this.phone//电话
            data.carImageCode=this.carImageCode//图片
        }
    }
}
</script>
<style lang="less" scoped>
.box{
    background: #fff;
    height: 400px;
}
    .userInfo{
        width: 600px;
        margin: auto;
        padding-top:20px ;
    }
    .infobox{
        float: left;
        width: 50%;
    }
</style>
