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
                        <el-form-item label="车系">
                        <el-select v-model="formdata.fsetId" placeholder="请选择车系" @change="chexiChange()">
                        <el-option v-for="(item,index) in cxflList" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                             <!-- <el-form-item label="车系ID">
                                <el-input v-model="formdata.fsetId"></el-input>
                            </el-form-item>
                            <el-form-item label="车系">
                                <el-input v-model="formdata.setName"></el-input>
                            </el-form-item> -->
                            <el-form-item label="车型">
                                <el-select v-model="formdata.fmodelId" placeholder="请选择车系" @change="xhChange()">
                                <el-option v-for="(item,index) in xHList" :label="item.name" :value="item.value"></el-option>
                                </el-select>
                            </el-form-item>
                            <!-- <el-form-item label="车型ID">
                                <el-input v-model="formdata.fmodelId"></el-input>
                            </el-form-item>
                            <el-form-item label="车型">
                                <el-input v-model="formdata.modelName"></el-input>
                            </el-form-item> -->
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
                           
                        </div>
                        <div style="float:left;width:100%">                            
                         <el-form-item label="车辆图片">
                                 <el-upload
                                    :action="$url+'file/uploadFile'"
                                    :limit="5"
                                    list-type="picture-card"
                                    :file-list="fileList"
                                    :name="'fileName'"
                                    :on-remove="handleRemove"
                                    :on-success="handlePictureCardPreviewBanner">
                                    <i class="el-icon-plus"></i>
                                </el-upload>
                            </el-form-item>
                        </div> 
                    </el-form>   
                                
                </div>
                <div class="button">
                    <el-button type="primary" @click="tijiao()">完成，提交信息</el-button>
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
        },
        fileList: [{}],
        url:'',
        newArrayBanner:[],
        cxflList:[],
        xHList:[]
    }},
    methods:{
        xhChange(){
            //车型更改
            var xh=this.formdata.fmodelId
            var list=[]
            list=this.xHList
            list.forEach((item,index)=>{
                console.log(item)
                if(item.value==xh){
                    // console.log("修改")
                    this.formdata.modelName=item.name
                }
            })
        },
        chexiChange(){//车系更改
            // console.log(this.formdata.fsetId)
            var fsetId=this.formdata.fsetId
            var list=[]
            list=this.cxflList
            list.forEach((item,index)=>{
                console.log(item)
                if(item.value==fsetId){
                    // console.log("修改")
                    this.formdata.setName=item.name
                    this.xHList=item.list
                    this.formdata.fmodelId=''
                    this.formdata.modelName=''
                }
            })
            // console.log(this.formdata.setName)
        },
        tijiao(){
             this.$axios.post(this.$url+"accountCar/updateCar",this.formdata).then(res=>{
                if(res.code==100){
                    console.log(res)
                    this.$message({
                        message:'修改成功',
                        type: 'success'
                    });
                    setTimeout(()=>{
                         this.$router.push({name:'car'})
                    },2000)
                }
             })

        },
        handleRemove(file, fileList) {
        console.log( fileList);
          let info="";
          if(file.url){
            info=file.url.split("readFile/")[1];
          }
          console.log(info)
          info=info? info:file.response.info
          let index=this.newArrayBanner.indexOf(info)
          // console.log(index)
          this.newArrayBanner.splice(index,1)
      },
         handlePictureCardPreviewBanner(res, file){
        // this.newArrayBanner.push(file.response.info)
            console.log("添加")
            console.log(this.newArrayBanner.length)
                if(this.newArrayBanner.length>=1){
               
                 this.$message({
                        message:'封面图只能为一张，默认为您保留最后一张',
                        type: 'warning'
                    });
               
                this.formdata.carImageCode=""
                this.newArrayBanner.length=0
                
                }
                this.newArrayBanner.push(file.response.info)
                this.formdata.carImageCode = this.newArrayBanner.join()
            
                console.log("aaaaaaaaaa")
                console.log( this.formdata.carImageCode);     


    }
    },
    mounted(){
        var data=JSON.parse(sessionStorage.updateCarInfo)
        // console.log("修改")
        console.log(sessionStorage.updateCarInfo)
        this.formdata.id=data.id
        this.formdata.fsetId=data.fsetId
        this.formdata.setName=data.setName
        this.formdata.fmodelId=data.fmodelId
        this.formdata.modelName=data.modelName
        this.formdata.frameName=data.frameName
        this.formdata.keyName=data.keyName
        this.formdata.masterName=data.masterName
        this.formdata.masterPhone=data.masterPhone
        this.formdata.carImageCode=data.carImageCode
         let newArrayList = []
         console.log(this.formdata)
        newArrayList.push(this.formdata.updateTime)
        var objImg = []
        let objList ={}
        if (this.formdata.updateTime !==""){
            objList.url =this.url + 'file/readFile/' + this.formdata.carImageCode
            objImg[0]=objList
            console.log("图片地址")
            console.log(this.formdata.carImageCode)
        // this.newBanner[0]=item
        }
        this.newArrayBanner.push(this.formdata.carImageCode)

        this.fileList  =objImg

        var list=[]
        list=this.cxflList
        list.forEach((item,index)=>{
            console.log("列标配")
            if(item.value==this.formdata.fsetId){
                console.log("list")
                console.log(item.list)
                this.xHList=item.list
            }
        })
        
    },
    created(){
        this.url=this.$url
        this.cxflList=this.$store.state.cxflList
        
    }
}
</script>
<style lang="less" scoped>
.box{
    background: #fff;
    height: 600px;
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
