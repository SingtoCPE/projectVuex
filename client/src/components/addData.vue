<template>
  <div class="addData">
    <form>
      <p v-if="errors.length">
        <b>Take follow this text(s)</b>
      </p>
      <ul>
        <li v-for="(error,index) in errors" :key="index">{{error}}</li>
      </ul>
      <input v-model="data.first_name" placeholder="Name..." />
      <input v-model="data.age" placeholder="Age..." />
      <select v-model="data.position">
        <option value="Working1">1</option>
        <option value="Working2">2</option>
        <option value="Working3">3</option>
        <option value="Working4">4</option>
      </select>
      <input v-model="data.salary" placeholder="Salary..." />
      <input v-model="data.phone" placeholder="Phone..." />
      <button @click.prevent="validateForm">ADD</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "addData",
  data() {
    return {
      errors:[],
      data: {
        first_name: "",
        age: "",
        position: "",
        salary: "",
        phone: ""
      }
    };
  },
  methods: {
    addData() {
      this.$store.dispatch("addData", {
        first_name: this.data.first_name,
        age: this.data.age,
        position: this.data.position,
        salary: this.data.salary,
        phone: this.data.phone
      });
    },
    validateForm(){
      if(
        this.data.first_name && 
        this.data.age && 
        this.data.position && 
        this.data.salary && 
        this.data.phone 
      ){
        this.addData();
      }
      this.errors=[]
      if(!this.data.first_name){
        this.errors.push('Name is not match...!');
      }
      if(!this.data.age){
        this.errors.push('Age is not match...!');
      }
      if(!this.data.position){
        this.errors.push('Position is not match...!');
      }
      if(!this.data.salary){
        this.errors.push('Salary is not match...!');
      }
      if(!this.data.phone){
        this.errors.push('Phone is not match...!');
      }
    }
  }
};
</script>

