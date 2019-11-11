<template>
  <div class="home">
    <el-container>
      <el-aside width="240px">
        <Menu />
      </el-aside>       
        <el-container>
            <el-header>
              <Header />
            </el-header>             
          <el-main>
            <router-view />
          </el-main>
        </el-container>
    </el-container>
      
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/menu/menu.vue'
import Header from '@/components/menu/header.vue'

export default {
  name: 'home',
  components: {
    Menu,
    Header
  },
  mounted(){
    // console.log(this.$url)
    // this.$message({
    //       message: '恭喜你，这是一条成功消息',
    //       type: 'success'
    //     });
  }
}
</script>
<style lang="less" scoped>
.el-header{
  line-height: 60px;
  background: #fff;
}
.home{
  height: 100%;
}
  .el-container{
    height: 100%;
    width: 100%;
  }
  .el-aside{
    // background: #ccc;    
    background: #343f51;
  }
 .el-main{
   background: #f1f0f6;
 }
</style>
