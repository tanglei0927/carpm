<template>
    <div>
        <div class="title">
            <p>后台首页<span>> 车辆添加</span></p>
        </div>
        <div class="navbox cl">
            <router-view />
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.title{
    p{
        color: #999;
    }
    span{
        color: #000;
    }
}
.navbox{
    overflow: hidden;
}
</style>