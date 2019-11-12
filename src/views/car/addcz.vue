<template>
    <div>
        <Title num="4" />
        <div class="xzboxs">
            <h3>填写车主信息</h3>
            <div class="infobox">
             <div class="czbox">
                <div class="demo-input-suffix">
                    <em>*</em> 车主名称：
                    <el-input
                        placeholder="请填写车主名称"
                        v-model="username">
                    </el-input>
                </div>
                 <div class="demo-input-suffix">
                    <em>*</em> 车主电话：
                    <el-input
                        placeholder="请填写车主电话"
                        v-model="phone">
                    </el-input>
                </div>
                 <div class="demo-input-suffix">
                    <em>*</em> 车辆照片：
                     <el-upload
                        :action="$url+'/file/uploadFile'"
                        :limit="5"
                        list-type="picture-card"
                        :name="'fileName'"
                        :on-remove="handleRemove"
                        :on-success="handlePictureCardPreviewBanner">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                </div>
            </div>


                <div style="padding:20px 0;border-bottom:1px solid #dddce1;margin-bottom:40px;">您当前选择的车钥匙是: <span style="color:red;">{{yaoshi}}</span> </div>
               
               <div style="text-align:center;">
                <el-button @click="goBakc()">上一步，填写钥匙信息</el-button>
                <el-button type="primary" @click="tijiao()">完成提交信息</el-button>      
                </div>           
            </div>
    </div>
    </div>
</template>
<script>
import Title from '@/components/head.vue'
export default {
    data(){
        return{
            username:'',
            phone:'',
            carImageCode:''
        }
    },
    components:{
        Title
    },
    methods:{
        handlePictureCardPreviewBanner(res){
            console.log("文件")
            console.log(res)
            this.carImageCode=res.info
        },
           handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      goBakc(){
          this.$router.push({name:"addyaos"})
      },
      tijiao(){
        //   this.$axios.post("accountCar/updateCar")
        console.log("提交")
        var data={}
        data.fsetId=sessionStorage.CxValue //车系id
        data.setName=sessionStorage.CxName //车系
        data.fmodelId= sessionStorage.xHValue  //车型id
        data.modelName=sessionStorage.xHName//车型
        data.frameName=sessionStorage.cjNum//车架
        data.keyName=sessionStorage.yaoshiInfo//钥匙
        data.masterName=this.username
        data.masterPhone=this.phone
        data.carImageCode=this.carImageCode
        if(!(/^1[3456789]\d{9}$/.test(this.phone))){
            this.$message({
                message:'请输入正确的手机号码',
                type: 'warning'
            });
        }else{            
            this.$axios.post(this.$url+"accountCar/updateCar",data).then(res=>{
                console.log(res)
                if(res.code==100){
                    this.$message.success('添加成功')
                    var userInfo=sessionStorage.userInfo
                    sessionStorage.clear()
                    sessionStorage.userInfo=userInfo
                    setTimeout(()=>{
                        this.$router.push({name:'car'})
                    },2000)
                }else{
                        this.$message({
                        message: res.msg,
                        type: 'warning'
                    });
                }
            })
        
        }
      }
    }
}
</script>
<style lang="less" scoped>
em{
    color: red;
}
.infobox{
    padding: 20px 40px;
}
.czbox{
    width: 400px;
    text-align: left;
    margin-top: 20px;
    .el-input{
        width: 300px;
        margin-top: 20px;
    }
}
.upload-demo{
    width: 200px;
    display: inline-block;
    margin-top: 20px;

}
</style>