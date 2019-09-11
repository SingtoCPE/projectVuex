<template>
  <div>
    <add-data/>
    <button @click="getData">Get Data</button>
    <table>
      <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>AGE</th>
      <th>POSITION</th>
      <th>SALARY</th>
      <th>PHONE</th>
      </tr>
      <tr v-for="item in data" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.first_name}}</td>
        <td>{{item.age}}</td>
        <td>{{item.position}}</td>
        <td>{{item.salary}}</td>
        <td>{{item.phone}}</td>
        <td><del-data :id="item.id" /></td>
      </tr>
    </table>
  </div>
</template>

<script>
import delData from "./components/delData.vue";
import addData from "./components/addData.vue";
import { store } from "./store/store";
import { mapState } from "vuex";

export default {
  name: "app",
  store,
  components: {
    delData,
    addData
  },
  computed: mapState({
    data: state => state.data
  }),
  methods: {
    getData() {
      this.$store.dispatch("getData");
    }
  }
};
</script>

<style>

</style>
