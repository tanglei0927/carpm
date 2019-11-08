<template>
   <div class="formbox">
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
    </el-form>
    </div> 
</template>
<script>
export default {
    data(){
        return{
            form:{
              username:''  
            }
        }
    },
}
</script>
<style lang="less" scoped>
    .formbox{
        width: 300px;
        padding: 50px;
    }
</style>