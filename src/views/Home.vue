<template>
  <div class="home">
    <el-container>
        <el-aside width="200px">
          <Menu />
        </el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
        </el-container>
    </el-container>
      
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/menu/menu.vue'


export default {
  name: 'home',
  components: {
    Menu
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
  background: #000000;
  color: #fff;
}
  
 
</style>
