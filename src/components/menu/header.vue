<template>
        <ul>
            <li @click="$router.push({name:'car'})">
                <i>
                    <img src="@/assets/sy_10.png" alt="">
                </i>
            </li>
            <li>
                <i>
                    <img src="@/assets/sy_08.png" alt="">
                </i>
            </li>
            <li>
                <i>
                    <img src="@/assets/sy_09.png" alt="">
                </i>
            </li>
             <li>
                <i>
                    <img src="@/assets/sy_11.png" alt="">
                </i>
            </li>
             <li @click="gohome()">
                <i>
                    <img src="@/assets/sy_12.png" alt="">
                </i>
            </li>
        </ul>
</template>
<script>
export default {
    methods:{
        gohome(){
            sessionStorage.clear()
            this.$router.push({name:'login'})
        }
    }
}
</script>
<style lang="less" scoped>

    ul{
        float: right;
        li{
            float: left;
            margin: 0 20px;
            img{
                width: 18px;
                // height: 18px;
            }
        }
    }
</style>