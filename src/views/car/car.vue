<template>
    <div>
        <div class="title">
            <p>后台首页</p>
            <el-button type="primary" icon="el-icon-refresh-left">刷新</el-button>
        </div>
        <div class="serch">
             <div class="cl">
                <el-radio-group v-model="carStr" @change="search()">
                <el-radio-button :label="'全部车辆('+qunbu+')'"></el-radio-button>
                <el-radio-button :label="'已上架('+qunbu+')'"></el-radio-button>
                <el-radio-button :label="'已失效('+qunbu+')'"></el-radio-button>
                </el-radio-group>
            </div>
            <div class="screen">
                <div class="cl head">
                    <h3>筛选查询</h3>
                    <p>
                    <el-button type="primary" icon="el-icon-search">查询结果</el-button>
                    <el-button type="primary" icon="el-icon-plus" @click="addCar()">添加车辆</el-button>
                    </p>
                </div>
                <div class="cl inputbox">
                    <div>
                        <label for="">输入搜索: <input type="text" placeholder="车架号/钥匙号/车主名称/电话"></label>
                        <label for="">车型分类: 
                            <select>
                                <option value="">请选择商品分类</option>
                                <option value="1">1</option>
                                <option value="2">1</option>
                            </select>
                        </label>
                         <label for="">车架号: 
                            <select v-model="jiah">
                                <option value="">请选择车架号</option>
                                <option value="1">1</option>
                                <option value="2">1</option>
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
                         <select v-model="jiah">
                            <option value="">排序方式</option>
                            <option value="1">1</option>
                            <option value="2">1</option>
                        </select>
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
                        type="selection"
                        width="55">
                    </el-table-column>
                        <el-table-column
                        prop="date"
                        label="车架号"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="车辆照片"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="address"
                        label="车主信息">
                        </el-table-column>
                        <el-table-column
                        prop="address"
                        label="钥匙号">
                        </el-table-column>
                         <el-table-column
                        prop="address"
                        label="标签">
                        </el-table-column>
                         <el-table-column
                        prop="address"
                        label="车型">
                        </el-table-column>
                         <el-table-column
                        prop="address"
                        label="操作">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                    <!--          <el-button type="text" size="small" @click="updateBanner(scope.row)">编辑</el-button>-->
                            </template>
                        </el-table-column>
                    </el-table>

                    <!-- 分页 -->
                    <div class="block">
                        <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
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
            qunbu:1000,
            carStr:'',
            carNum:'',
            jiah:''
        }
    },
    methods:{
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
        }
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
                color:#dddce1;
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
</style>