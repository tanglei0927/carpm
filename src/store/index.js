import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vehicle:[],
    cxflList:[
      {
          value:1,
          name:'VV5',
          list:[
              {
                  value:1,
                  name:'潮先锋'
              },
               {
                  value:2,
                  name:'颜先锋'
              },{
                value:3,
                name:'智先锋'
            },{
                value:4,
                name:'擎先锋'
            }
          ]
      }, {
        value:2,
        name:'VV6',
        list:[
            {
                value:1,
                name:'智悦+'
            },
             {
                value:2,
                name:'智护+'
            },{
              value:3,
              name:'智享+'
          },{
              value:4,
              name:'Collie智行+'
          },{
            value:5,
            name:'智驭+'
        }
        ]
    }, {
        value:3,
        name:'VV7',
        list:[
            {
                value:1,
                name:'豪华型'
            },
             {
                value:2,
                name:'超豪型'
            },{
              value:3,
              name:'旗舰型'
          }
        ]
    } ,{
        value:4,
        name:'VV7 GT',
        list:[
            {
                value:1,
                name:'超豪型'
            },{
              value:2,
              name:'旗舰型'
          }
        ]
    }, {
        value:5,
        name:'P8',
        list:[
            {
                value:1,
                name:'尊贵型'
            },
             {
                value:2,
                name:'尊享型'
            },{
              value:3,
              name:'旗舰型'
          }
        ]
    }
  ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
