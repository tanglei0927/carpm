<template>
<div>
    <Title num="3" />
    <div class="xzboxs">
            <h3>填写车架信息</h3>
            <div class="infobox">
             
                  <label for="">请填写车钥匙信息:
                        <input type="text" v-model="yaoshi" placeholder="请填写车架号">
                    </label>
                <div style="padding:20px 0;border-bottom:1px solid #dddce1;margin-bottom:40px;">您当前选择的车钥匙是: <span style="color:red;">{{yaoshi}}</span> </div>
               
               <div style="text-align:center;">
                <el-button @click="goBakc()">上一步，填写车架信息</el-button>
                <el-button type="primary" @click="gochejiaInfo()">下一步，填写车主信息</el-button>      
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
            yaoshi:''
        }
    },
    methods:{
        goBakc(){
            this.$router.push({name:"addcjinfo"})
        },
        gochejiaInfo(){
           
            this.$axios.post(this.$url+"accountCar/testRe",{type:2,text:this.yaoshi}).then(res=>{
                console.log(res)
                if(res.code==300){ 
                    // sessionStorage.yaoshiInfo=this.yaoshi
                    // setTimeout(()=>{
                    //      this.$router.push({name:"addcz"})
                    // },500)
                }
            })
        }
    },
    created(){
        if(sessionStorage.yaoshiInfo){
            this.yaoshi=sessionStorage.yaoshiInfo
        }
    }
}
</script>
<style lang="less" scoped>
.infobox{
        text-align: left;
        padding: 20px 150px;
        // p{
        //     select{
        //         width: 200px;
        //         height: 30px;
        //         color: #dddce1;
        //         border-color: #dddce1;
        //     }
        // }
        input{
            border:1px solid #dddce1;
            line-height: 30px;
            margin-top: 20px;
            margin-left: 48px;
            width: 200px;
        }
 }
</style>