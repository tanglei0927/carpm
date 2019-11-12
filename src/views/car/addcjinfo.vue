<template>
<div>
    <Title num="2" />

     <div class="xzboxs">
            <h3>填写车架信息</h3>
            <div class="infobox">
                <p>
                    <label for="">您最近使用的车架号:
                        <select name="" id="" @change="lis()" v-model="cjNum">
                            <option value="">请选择</option>
                            <option  v-for="(item,index) in cjlist" :value="item.value">{{item.name}}</option>
                        </select>
                    </label>               
                </p>
                  <label for="">请填写车架号:
                        <input type="text" v-model="cjNum" placeholder="请填写车架号">
                    </label>
                <div style="padding:20px 0;border-bottom:1px solid #dddce1;margin-bottom:40px;">您当前选择的车架号是: <span style="color:red;">{{cjNum}}</span> </div>
               
               <div style="text-align:center;">
                <el-button @click="goBakc()">上一步，填写车辆信息</el-button>
                <el-button type="primary" @click="gochejiaInfo()">下一步，填写钥匙信息</el-button>      
                </div>           
            </div>
        </div>
</div>
</template>
<script>
import Title from '@/components/head.vue'
export default {
    components:{
        Title
    },
    data(){
        return{
            cjlist:[],
            cjNum:''
        }
    },
    methods:{
        goBakc(){
            this.$router.push({name:"addcarfl"})
        },
        gochejiaInfo(){
            this.$axios.post(this.$url+"accountCar/testRe",{type:1,text:this.cjNum}).then(res=>{
                console.log(res)
                if(res.code==100){
                    sessionStorage.cjNum=this.cjNum
                    setTimeout(()=>{
                        this.$router.push({name:"addyaos"})
                    },500)
                }else{
                     this.$message({
                        message: res.msg,
                        type: 'warning'
                    });
                }
            })



            
        }
    },
created(){
    if(sessionStorage.cjNum){
        this.cjNum=sessionStorage.cjNum
    }
}
}
</script>
<style lang="less" scoped>
 .infobox{
        text-align: left;
        padding: 20px 150px;
        p{
            select{
                width: 200px;
                height: 30px;
                color: #dddce1;
                border-color: #dddce1;
            }
        }
        input{
            border:1px solid #dddce1;
            line-height: 30px;
            margin-top: 20px;
            margin-left: 48px;
            width: 200px;
        }
 }
</style>