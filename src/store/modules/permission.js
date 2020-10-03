
const permission = {
    state: {
        //存放的键值对就是所要管理的状态
        namemodule: 'helloVueXModule',
        ageModule: '18 ddd岁',
        ffff: 'fffff'
    },
    mutations: {
        setModuleName(state, value) {
            state.namemodule = value;
            console.log('call mutations setName', state, value);
        }
    },
    actions: {
        incrementModuleAsync({ commit }, value) {
            setTimeout(() => {
                commit('SOME_MUTATION', value)
            }, 1000)
        }
    },
    getters: {
        nameModuleInfo(state) {
            return "姓名:" + state.namemodule
        },
        fullModuleInfo(state, getters) {
            return getters.nameModuleInfo + '年龄:' + state.ageModule
        }
    }
  }
  export default permission