import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vehicle:[],
    cxflList:[
      {
          value:1,
          name:'WEY VV5',
          list:[
              {
                  value:1,
                  name:'2019款2.0T两驱豪华型 国6'
              },
               {
                  value:2,
                  name:'2019款2.0T两驱豪华型 国6'
              }
          ]
      },{
          value:2,
          name:'WEY VV6',
          list:[
              {
                  value:1,
                  name:'2019款2.0T两驱豪华型 国611'
              },
               {
                  value:2,
                  name:'2019款2.0T两驱豪华型 国622'
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
