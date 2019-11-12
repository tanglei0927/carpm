<template>
<el-row>
  <el-col >
      <h5 style="height:60px;"></h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <div class="userinfo">
          <h6>
            <img :src="imgurl" alt="">
          </h6>
          <h4>admin</h4>
          <p>管理员</p>
      </div>
     <ul>
      <router-link :to="{name:'car'}">
       <li :class="checked=='car'?'checked':''" @click="changeClass('car')">
         <i class="icons">
           <img src="@/assets/sy_02.png" alt="" v-if="checked=='car'">
           <img src="@/assets/sy_05.png" alt="" v-else>
         </i>
         车辆管理
         </li>
      </router-link>
      <router-link :to="{name:'user'}">
       <li :class="checked=='user'?'checked':''" @click="changeClass('user')">
           <i class="icons">
             <img src="@/assets/sy_04.png" alt="" v-if="checked=='user'">
             <img src="@/assets/sy_03.png" alt="" v-else>
           </i>
         账户设置
      </li>
      </router-link>
     </ul>
    </el-menu>
  </el-col>
</el-row>
</template>
<script>
  export default {
    data(){
      return{
        imgurl:require('@/assets/bjtit.png'),
        checked:'',
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      changeClass(link){
        // console.log(link)
        this.checked=link
      }
      
    },
    created(){
      var href=location.href
      console.log(href)
      if(href.indexOf('user')!==-1){
        // 当前为账户设置
        this.checked='user'
      }else{
        this.checked='car'
      }
    }
}
</script>
<style lang="less" scoped>
h5{
  line-height: 60px;
  background: #3b70d6;
  color: #fff;
  font-size: 24px;
  background: url("../../assets/sy_01.png");
  background-size: 100% 100%;
}
.userinfo{
  height: 258px;
  overflow: hidden;
  text-align: center;
  color: #fff;
  background:url("../../assets/sy_07.png");
  h6{
    height: 106px;
    width: 106px;
    border-radius:50%; 
    background: #fff;
    margin: auto;
    margin-top: 50px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
    }
  }
  h4{
    line-height: 40px;
    font-weight: normal;
    font-size: 20px;
  }
}
ul{
  li{
    padding-left: 30px;
    text-align: left;
    line-height: 50px;
    color: #97969b;
    background: #343f51;
    font-size: 16px;
    border-left: 5px solid #343f51;
    i{
      display: inline-block;
      height: 18px;
      width: 18px;
      // border: 1px solid #fff;
      img{
        width: 18px;
        height: 18px;
      }
    }
  }
}
.checked{
  color: #fff;
  box-sizing: border-box;
  border-left: 5px solid #3c70d5;
  background: #293241;
}
</style>