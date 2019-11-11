<template>
    <div class="navbox2 cl">
        <div>
            <div class="lc cl">
             <img src="../assets/cltj_01.png" alt="">
               <p>选择车辆分类</p> 
            </div>
             <img src="../assets/cltj_03.png" alt="">
        </div>
        <div>
            <div class="lc cl">
             <img src="../assets/cltj_01.png" v-if="bj2" alt="">
             <img src="../assets/cltj_02.png" v-else alt="">
               <p v-if="bj2">填写车架信息</p> 
               <p style="color:#ccc;" v-else>填写车架信息</p>
            </div>
             <img src="../assets/cltj_03.png"  v-if="bj2" alt="">
             <img src="../assets/cltj_04.png" v-else alt="">
        </div>
        <div>
           <div class="lc cl">
             <img src="../assets/cltj_01.png" v-if="bj3" alt="">
             <img src="../assets/cltj_02.png" v-else alt="">
               <p v-if="bj3">填写钥匙信息</p> 
               <p style="color:#ccc;" v-else>填写钥匙信息</p>
            </div>
             <img src="../assets/cltj_03.png"  v-if="bj3" alt="">
             <img src="../assets/cltj_04.png" v-else alt="">
        </div>
        <div>
            <div class="lc cl">
             <img src="../assets/cltj_01.png" v-if="bj4" alt="">
             <img src="../assets/cltj_02.png" v-else alt="">             
               <p v-if="bj4">填写车架信息</p> 
               <p style="color:#ccc;" v-else>填写车主信息</p>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            bj1:true,
            bj2:false,
            bj3:false,
            bj4:false
        }
    },
    props:["num"],
    created(){
        console.log(this.num)
        switch(this.num){
            case '4':
                this.bj4=true;
            case '3':
                this.bj3=true;
            case '2':
                this.bj2=true;
            case '1':
                this.bj1=true;
                break
        }
    }
}
</script>
<style lang="less" scoped>
    .navbox2{
        height:150px; 
        line-height: 150px;
        // overflow: hidden;
        div{
            float: left
        }
    }
    .navbox>div{
        float: left;
        .lc{
            width: 95px;
            height: 95px;
            border-radius: 50%;
            margin: 25px 60px;
            // overflow: hidden;
            position: relative;
            img{
                position: absolute;
                top:0;
                left: 0;
            }
            p{
                line-height: 20px;
                width: 80%;
                position: absolute;
                top:25px;
                left: 0;
                right: 0;
                margin: auto;
                color: #fff;
            }
        }
    }
</style>