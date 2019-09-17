import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const endpoint = 'http://localhost:3000/employee';
const endpointDel = 'http://localhost:3000/employee/del';
const endpointAdd = 'http://localhost:3000/employee/add';
const endpointLogin = 'http://localhost:3000/employee/login';

export const store = new Vuex.Store({
  state:{
    data:[]
  },
  mutations:{
    setData(state,data){
      state.data=data;
    }
  },
  actions:{
    async getData({commit}){
      const {data} = await axios({
        method:'get',
        url: endpoint
      })
      commit('setData', data.map(data=>data))
    },
    async delData({dispatch},id){
      await axios({
        method:'post',
        url: endpointDel,
        data:{
          id
        }
      })
      dispatch('getData');
    },
    async addData({dispatch},{first_name,age,position,salary,phone}){
      await axios({
        method:'post',
        url: endpointAdd,
        data:{
          first_name,
          age,
          position,
          salary,
          phone
        }
      })
      dispatch('getData');
    },
    async loginData({_},{user,password}){
      await axios({
        method:'post',
        url: endpointLogin,
        data:{
          user,
          password
        }
      })
    }
  }
})