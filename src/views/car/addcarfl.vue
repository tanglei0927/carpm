<template>
    <div>
        <div>         
         <Title num="1" />           
        </div>
        <div class="xzboxs">
            <h3>选择车辆分类</h3>
            <div class="infobox">
                <p>
                    <label for="">您最近使用的车辆型号:
                        <select name="" id="" @change="lis()">
                            <option value="">请选择</option>
                            <option  v-for="(item,index) in cxflList" :value="item.value">{{item.name}}</option>
                        </select>
                    </label>
                </p>
                <div class="cl">
                    <ul>
                        <li>选择车系</li>
                        <li v-for="(item,index) in cxflList" :class="cxiNum==item.value?'checked':''" @click="xzchex(item)">{{item.name}}</li> 
                    </ul>
                    <ul>
                        <li>选择车型</li>
                        <li v-for="(item,index) in cxnumList" :class="cxNum==item.value?'checked':''" @click="xinNumchange(item)">{{item.name}}</li>
                    </ul>
                </div>
                <div style="padding:20px 0;border-bottom:1px solid #dddce1;">您当前选择的车辆信息是: <span style="color:red;">{{cxStr}} > {{cxingStr}}</span> </div>
                <el-button type="primary" @click="gochejiaInfo()">下一步，填写车架信息</el-button>
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
            cxiNum:1,//车系
            cxNum:1,//车型
            cxStr:"",//车系
            cxingStr:"",//车型
            cxnumList:[],
            cxflList:[
                
            ]
        }
    },
    methods:{
        lis(){
            console.log('252522')
        },
        xzchex(item){
            console.log(item)
            this.cxiNum=item.value
            this.cxnumList=item.list
            this.cxStr=item.name;
            this.cxNum=1
              this.cxingStr=item.list[0].name
        },
        xinNumchange(item){
            this.cxNum=item.value
            this.cxingStr=item.name
        },
        gochejiaInfo(){
            sessionStorage.CxValue=this.cxiNum //车系value值
            sessionStorage.CxName=this.cxStr //车系name
            sessionStorage.xHValue=this.cxNum //车型value值
            sessionStorage.xHName=this.cxingStr //车型name
            setTimeout(()=>{
                this.$router.push({name:"addcjinfo"})
            },500)
        }
    },
    created(){
        this.cxflList=this.$store.state.cxflList
        if(sessionStorage.CxValue){  
            var index=(sessionStorage.CxValue)-1
           this.cxiNum=sessionStorage.CxValue
           this.cxNum=sessionStorage.xHValue
           this.cxStr=sessionStorage.CxName
           this.cxingStr=sessionStorage.xHName
           this.cxnumList=this.cxflList[index].list
        }else{
             this.cxnumList=this.cxflList[0].list
             this.cxStr=this.cxflList[0].name
             this.cxingStr=this.cxflList[0].list[0].name
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
        ul{
            width: 260px;
            float: left;
            margin:0 20px; 
            margin-top: 30px;
            li:nth-child(1){
              background:#ecebf1;   
              line-height: 50px;
              border: 0;
            }
            li{
                padding:0 20px;
                line-height: 40px;
                border:1px solid #dddce1;
            }
            .checked{
                background: url("../../assets/cltj_05.png") center center no-repeat;
                background-size:100% 100%;
                color: #fff; 
            }
        }
    }
    .el-button{
        display: block;
        margin: auto;
        margin-top: 20px;
    }
</style>