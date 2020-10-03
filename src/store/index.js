import Vue from 'vue'
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutation-types'
import permission from './modules/permission'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    modules:{
        permission
    },
    state: {
        //存放的键值对就是所要管理的状态
        name: 'helloVueX',
        age: '18 岁'
    },
    mutations: {
        [SOME_MUTATION](state, value) {
            state.name = value;
            console.log('call mutations setName', state, value);
        },
        setName(state, value) {
            state.name = value;
            console.log('call mutations setName', state, value);
        }
    },
    actions: {
        incrementAsync({ commit }, value) {
            setTimeout(() => {
                commit('SOME_MUTATION', value)
            }, 1000)
        }
    },
    getters: {
        nameInfo(state) {
            return "姓名:" + state.name
        },
        fullInfo(state, getters) {
            return getters.nameInfo + '年龄:' + state.age
        }
    }
})

export default store