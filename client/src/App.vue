<template>
  <div id="app">
    <login-data/>
    <add-data />
    <button @click="getData">Get Data</button>
    <table>
      <tr>
        <th>ID</th>
        <th>NAME</th>
      </tr>
      <tr v-for="item in data" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>
          <del-data :id="item.id" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { store } from "./store/store";
import { mapState } from "vuex";
import delData from "./components/delData";
import addData from "./components/addData";
import loginData from "./components/loginData";

export default {
  name: "app",
  store,
  components: {
    delData,
    addData,
    loginData
  },
  computed: mapState({
    data: state => state.data
  }),
  methods: {
    getData() {
      this.$store.dispatch("getData");
    },
  }
};
</script>

<style>
</style>
