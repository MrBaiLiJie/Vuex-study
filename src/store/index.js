import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

    //这里放全局参数
    todos: [
      { id: 1, text: '文本1', done: true },
      { id: 2, text: '文本2', done: false }
    ],
    count:1,
    people:{
      name:'MrBai',
      sex:'男'
    }

  },

  mutations: {

    //这里是set方法
      changeName(state,num) {
        // Vue.set(state.people,'age',60)
        // 利用对象展开运算符
        // state.people = { ...state.people, age: 123 }
      // 变更name
        state.count += num
    }
  },

  getters: {

    // 这里是get方法  
    // doneTodos: state => {
    //   return state.todos
    // },
    // doneTodosCount: (state, getters) => {
    //   return getters.doneTodos.length
    // }
    getTodoById:(state) => (id) =>{
      return state.todos.find(todo => todo.id === id)
    },
    getCount:(state) =>(count) =>{
      return state.count
    },
    getPeople:(state)=>(people)=>{
      return state.people
    }
  },
  actions: {
    //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，(*它与 store 实例有着相同的方法和属性，但是他们并不是同一个实例)
    //因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters
    changeActionsName (context,playload) {
      setTimeout(() => {
        context.commit('changeName',playload)
      }, 2000)
      
    }

  },

  modules: {

    //这里是我自己理解的是为了给全局变量分组，所以需要写提前声明其他store文件，然后引入这里

  }

})
