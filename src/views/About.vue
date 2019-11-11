<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  mounted(){
    this.$axios.post(this.$url+"/accoountServiceuser/nameLogin").then(res=>{
      console.log(res)
    })

    // console.log(this.$url)
  }
}
</script>
