<template>
    <div>
        <div class="title">
            <p>后台首页</p>
            <el-button type="primary" icon="el-icon-refresh-left" @click="shuaxin()">刷新</el-button>
        </div>
        <div class="serch">
             <div class="cl">
                <el-radio-group v-model="carStr" @change="searchs()">
                    <el-radio-button :label="'全部车辆('+qunbu+')'" value=''></el-radio-button>
                    <el-radio-button :label="'已上架('+sjNum+')'" value='1'></el-radio-button>
                    <el-radio-button :label="'已失效('+sxNum+')'" value='-1'></el-radio-button>
                </el-radio-group>
            </div>
            <div class="screen">
                <div class="cl head">
                    <h3>筛选查询</h3>
                    <p>
                    <el-button type="primary" icon="el-icon-search" @click="shaixuan()">查询结果</el-button>
                    <el-button type="primary" icon="el-icon-plus" @click="addCar()">添加车辆</el-button>
                    <el-button type="primary" @click="clearStr()">清空筛选项</el-button>

                    </p>
                </div>
                <div class="cl inputbox">
                    <div>
                        <label for="">输入搜索: <input color="#000" v-model="info" placeholder="车架号/钥匙号/车主名称/电话"></label>
                        <label for="">车系分类: 
                            <select v-model="chexi" @change="changeCxi()">
                                <option value="">请选择车系</option>
                                <option v-for="(item,index) in carXiList" :value="item.value">{{item.name}}</option>
                            </select>
                        </label>
                         <label for="">车型分类: 
                            <select v-model="chexing" @change="changeCxin()">
                                <option value="">请选择车型</option>
                                <option v-for="(item,index) in carXin" :value="item.value">{{item.name}}</option>
                                
                            </select>
                        </label>
                    </div>
                </div>
            </div>
            <div class="tablebox">
                <div class="cl head">
                    <h3>数据列表</h3>
                    <p>
                      <!-- <select v-model="jiah">
                                <option value="">显示条数</option>
                                <option value="1">1</option>
                                <option value="2">1</option>
                        </select> -->
                         <!-- <select v-model="jiah">
                            <option value="">排序方式</option>
                            <option value="1">1</option>
                            <option value="2">1</option>
                        </select> -->
                    </p>
                </div>
                <div class="table">
                    <!-- 数据表 -->
                     <el-table
                        :data="tableData"
                        stripe
                        :header-cell-style="{background:'#f6f5fb'}"
                        style="width: 100%">   
                        <el-table-column
                        prop="id"
                        label="ID"
                        width="80">
                        </el-table-column>                     
                        <el-table-column
                        prop="carImageCode"
                        label="车辆照片"
                        width="180">  
                            <template scope="scope">
                                <img
                                    :src="$url+'file/readFile/'+ scope.row.carImageCode +''" height="80"
                                ></img>
                            </template>                
                        </el-table-column>
                        <el-table-column
                        prop="setName"
                        label="车系"
                        width="150">
                        </el-table-column>
                         <!-- <el-table-column
                        prop="fsetId"
                        label="车系ID"
                        width="80">                        
                        </el-table-column> -->
                         <el-table-column
                        prop="modelName"
                        label="车型"
                        width="180">
                        </el-table-column>
                         <!-- <el-table-column
                        prop="fmodelId"
                        label="车型ID"
                        width="80">
                        </el-table-column> -->
                        <el-table-column
                        prop="frameName"
                        label="车架号"
                        width="100">
                        </el-table-column>
                         <el-table-column
                        prop="keyName"
                        label="钥匙号">
                        </el-table-column>                        
                        <el-table-column
                        prop="masterName"
                        label="车主姓名">
                        </el-table-column>                       
                         <el-table-column
                        prop="masterPhone"
                        label="电话"
                        width="180">
                        </el-table-column>
                         <el-table-column
                        prop="status"
                        label="状态"
                        width="180">
                             <template scope="scope">
                                 <el-select v-model="scope.row.status" placeholder="" @change="changexj(scope.row.status,scope.row.id)">
                                    <el-option label="下架" value="下架"></el-option>
                                    <el-option label="上架" value="上架"></el-option>
                                    <el-option label="失效" value="失效"></el-option>
                                </el-select>
                            </template> 
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        label="创建时间"
                         width="150">
                        </el-table-column>
                         <el-table-column
                        prop="updateTime"
                        label="修改时间"
                         width="150">
                        </el-table-column>
                         <el-table-column
                        prop="address"
                        label="操作"
                        width="150">
                        <template slot-scope="scope">
                            <el-button @click="deleteTk('4',scope.row.id)" type="text" size="small">删除</el-button>
                             <el-button type="text" size="small" @click="updateCar(scope.row)">编辑</el-button>
                            </template>
                        </el-table-column>
                    </el-table>

                    <!-- 分页 -->
                    <div class="block">
                        <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[10, 20, 30, 50]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>
<script>
export default {
    data(){
        return{
            qunbu:null,
            sjNum:null,
            sxNum:null,
            carStr:'',
            carNum:'',
            jiah:'',
            tableData:[],
            pageNum:1,
            pageSize:10,
            total:null,
            info:'',
            status:'',
            currentPage4:'',
            chexi:'',
            chexing:'',
            carXiList:[],
            carXin:[]
        }
    },
    methods:{ 
        deleteTk(type,id) {
        this.$confirm('请确认是否删除', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确认',
          cancelButtonText: '取消'
        })
          .then(() => {
            // 确认
            this.changexj(type,id)
          })
          .catch(action => {
            // 取消
          });
      }, 
        changeCxin(){
            //车型筛选
              console.log(this.chexing)
            this.carXin.forEach((item,index)=>{
                if(item.value==this.chexing){
                    this.info=item.name
                }
            })
        },
        changeCxi(){
            //车系筛选
            console.log(this.chexi)
            this.carXiList.forEach((item,index)=>{
                if(item.value==this.chexi){
                    this.info=item.name
                    this.carXin=item.list
                }
            })
        },
        clearStr(){
            // 清空筛选项
            this.info=''
            this.status=''
            this.chexi=""
            this.chexing=""
        },
        searchs(){//分类
            console.log("shao")
            console.log(this.carStr)
            if(this.carStr.indexOf("全部")!=-1){
                this.status=''
            }
            if(this.carStr.indexOf("上架")!=-1){
                this.status=1
            }
            if(this.carStr.indexOf("失效")!=-1){
                this.status=-1
            }
            this.pageNum=1
            this.init()
        },    
        changexj(val,id){//状态更改,删除
            console.log(val)
            console.log(id)
            var type=null
            if(val=="上架"){
                type=1
            }else if(val=="下架"){
                type=2
            }else if(val=="失效"){
                type=3
            }else{
                type=4
            }
            this.$axios.post(this.$url+'accountCar/changeCar',{
                type:type,
                id:id
            }).then(res=>{
                console.log(res)
               if(res.code==100){
                    this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                    this.init()
                    this.carCount()
                }else{
                     this.$message({
                        message: res.msg,
                        type: 'warning'
                    });
                }
            })
        },
        handleSizeChange(val){
            this.pageSize=val
            this.init()
        },
        handleCurrentChange(val){
            console.log("ddd"+val)
            this.pageNum=val
            this.init()
        },
        search(){
            // console.log(this.jiah)
            var carNum=this.carStr
            if(carNum.indexOf('全部')!==-1){
                this.carNum=0;
            }else  if(carNum.indexOf('上架')!==-1){
                this.carNum=1
            }else  if(carNum.indexOf('失效')!==-1){
                this.carNum=2
            }
            console.log(this.carNum)
        },
        addCar(){
            this.$router.push({name:'addcarfl'})
        },
        init(){
            var that=this
            this.$axios.post(this.$url+'accountCar/selectCar',
            {
                pageNum:this.pageNum,
                pageSize:this.pageSize,
                info:this.info,
                status:this.status
            }
            ).then(res=>{
                console.log(res)
                if(res.code==100){
                   
                    var list=[];
                    list=res.info.rows;
                        // 解析时间
                    list.forEach((item,index)=> {
                       var timeStr=this.timeJx(item.createTime)
                        list[index].createTime=timeStr;
                        if(item.updateTime){
                             list[index].updateTime=this.timeJx(item.updateTime);
                        }
                        //app类型
                        list[index].status=item.status==-1?'失效':(item.status==0?'下架':'上架')
                    })

                    that.tableData=res.info.rows
                    that.total=res.info.total



                }
            })
        },
        shaixuan(){
            this.init()
        },
        shuaxin(){
            this.pageNum=1
            this.pageSize=10
            this.info=''
            this.init()
            this.carCount()
        },
       carCount() {//统计
            this.$axios.post(this.$url+'accountCar/countCar').then(res=>{
                if(res.code==100){
                    this.qunbu=res.info.countAllCar
                    this.sjNum=res.info.countSellCar
                    this.sxNum=res.info.countLossCar
                }
            })
        },
        timeJx(createTime) {//解析时间
            let time = new Date();
            time.setTime(createTime);
            var timeStr="";
            timeStr=time.getFullYear()+"-"+(time.getMonth()+1<10?"0"+(time.getMonth()+1):(time.getMonth()+1))
            timeStr+="-"+(time.getDate()<10?"0"+time.getDate():time.getDate())+" ";
            timeStr+=(time.getHours()<10?"0"+time.getHours():time.getHours())+":";
            timeStr+=(time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes())+":";
            timeStr+=(time.getSeconds()<10?"0"+time.getSeconds():time.getSeconds());
            return timeStr
        },
        //修改
        updateCar(carList){
            console.log(carList)
            sessionStorage.updateCarInfo=JSON.stringify(carList)
            this.$router.push({name:"updatecar"})
        }
    },
    created(){
        this.init()
        console.log("vuex")
        console.log(this.$store.state)
        this.carCount()
        this.carXiList=this.$store.state.cxflList
           
    }
}
</script>
<style lang="less" scoped>
 .el-button--primary{
    background: #3e6fd6;   
}
    .title{
        .el-button--primary{
            float: right;           
        }
        
    }
    .el-radio-group{
        float: left;
    }
    .el-radio-button__inner{
        color: #97969b;
    }
    .serch>div{
        width: 100%;
    }
    .screen{   
        margin:20px 0; 
        box-shadow: -2px 2px 8px -6px ;  
     
        .inputbox{
            padding: 30px 20px;
            background: #fff;
            label{
                float: left;
                font-size: 16px;
                margin-right: 28px;
            }
            input,select{
                line-height: 34px;
                border: #dddce1;
                color:#000;
                text-align: center;
                border:1px solid #dddce1;
                font-size: 14px;
                width: 220px;
            }
            select{
                line-height: 34px;
                display: inline-block;
                width: 150px;
                height: 34px;
            }
        }     
    }
    .head{
        line-height: 60px;
        background: #ecebf1;
        padding: 0 20px;
        border: 1px solid #dcdbe1;
        p{
            float: right;
        } 
    }
    h3{
        float: left;
        font-size: 16px;
        // font-weight: normal;
    }
    .el-input{
        width: 225px;
    }
  .tablebox{
      background: #fff;
       box-shadow: -2px 2px 8px -6px ;  
      select{
          margin: 0 10px;
          font-size: 12px;
          color: #999;
          border: 1px solid #999;
      }
      .table{
          padding: 10px 20px;
          .el-table{
              border: 1px solid #e6e5eb;
              margin-bottom: 20px;
          }
      }
  }
  .inputbox input{
      color: #000;
  }
</style>