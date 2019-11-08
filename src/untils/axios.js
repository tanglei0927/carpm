import axios from "axios";

import router from "../router"


let token="";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token;   // 请求头  token 空 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头

// import {Indicator,Toast} from "vant"
// axios 拦截器 
//  添加一个请求拦截器  request 
axios.interceptors.request.use(function (config) {
    //获取存储的token，判断是否有存储的token   每次做请求的时候带过header 去后台对比判断token===》checklogin
    let userInfo = window.sessionStorage.userinfo;
    // console.log("token:")
    // console.log(window.localStorage.userinfo)
    if(userInfo){
        // userInfo = JSON.parse(userInfo);
        token = userInfo;
    }
    config.headers.common['User-Token'] = token;
    
    // Toast.loading({
    //   mask: true,
    //   message: '加载中...'
    // });
    return config;
  }, function (error) {
    // Do something with request error
    // Toast({message:"未知错误-req",duration:500})
    return Promise.reject(error);
});


// 添加一个响应拦截器 response 
axios.interceptors.response.use(function (response) {
    console.log(response);

    // Indicator.close();
    // if(!!response.data.msg){
    //   Toast({message:response.data.msg,duration:500});
    // }   
    if(response.data.code =="300"){
        // 未登录，请重新登录 
        this.$message({
          message: '未登录，请重新登录',
          type: 'error'
        });
        
      setTimeout(()=>{
        router.push({name:'login'});
      },2000)
       
    }

    if (response.data.code==500) {
      this.$message({
        message: response.data.msg,
        type: 'warning'
      });
    }else if (response.data.code==400 )   {
      this.$message({
        message: '登录过期，请重新登录',
        type: 'warning'
      });
      setTimeout(function () {
        router.replace({
          path: '/login'     // 到登录页重新获取token
        })
      },2000)
    }


    return response;
  }, function (error) {
    // Toast({message:"未知错误-res",duration:500})
    this.$message({
      message: '网络异常，请重新登录',
      type: 'error'
    });
    setTimeout(()=>{
      router.push({name:'login'});
    },3000)
    return Promise.reject(error.response);
  })




export default axios;