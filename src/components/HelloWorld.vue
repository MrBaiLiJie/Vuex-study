<template>
  <div class="test">
    <!-- {{ this.$store.state.count }} -->
    <!-- {{ count }} -->
    <!-- {{ this.$store.getters.getTodoById(2) }} -->
    {{ this.$store.getters.getCount() }}
    <button @click="changeName()">修改count</button>
  </div>
</template>

<script type="text/ecmascript-6">
// import store from '../store/index.js'
import { mapState } from "vuex";
import { mapActions } from 'vuex';
export default {
  name: "HelloWorld",
  data() {
    return {
      // count:store.state.count
    };
  },
  // computed: {
  //   count () {
  //     console.log("count-computed",this.$store.state.count)   //20201029
  //     // return this.$store.state.count
  //   }
  // },
  computed: {
    // ...mapState(["count"]),
    doneTodosCount() {
      return this.$store.getters.doneTodosCount;
    },
  },
  mounted() {
    // console.log("count-mounted", this.$store.state.count); //20201029
    // console.log(this.$store.getters.doneTodosCount)    // 2
    //console.log(this.$store.getters.getTodoById(2))  // { id: 2, text: '文本2', done: false }
    console.log(this.$store.getters.getPeople()); // { age:20,name:'MrBai',sex:'男'}
  },
  methods: {
     ...mapActions([
      // 'changeActionsName', // 将 `this.changeActionsName()` 映射为 `this.$store.dispatch('changeActionsName')`

      // `mapActions` 也支持载荷：
      'changeActionsName' // 将 `this.changeActionsName(amount)` 映射为 `this.$store.dispatch('changeActionsName', amount)`
    ]),
    changeName() {
      // this.$store.commit({
      //   type: "changeName",
      //   value: 10,
      // });
      //  this.$store.dispatch("changeActionsName",18);
      this.changeActionsName(18)
      //   以载荷形式分发
      //  this.$store.dispatch("changeActionsName",
      //   {
      //      amount: 18
      //    });

      // 以对象形式分发
      // this.$store.dispatch({
      //   type: "changeActionsName",
      //   amount: 18,
      // });
    },
  },
};
</script>

<style>
</style>

