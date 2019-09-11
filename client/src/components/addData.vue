<template>
<body>
  <form>
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
    </p>
    <ul>
      <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
    </ul>
    <input v-model="data.first_name" placeholder="Name..." type="text" />
    <input v-model="data.age" placeholder="Age..." type="number" />
    <select v-model="data.position">
      <option value="Woking">Woking</option>
      <option value="Woking2">Woking2</option>
      <option value="Woking3">Woking3</option>
    </select>
    <input v-model="data.salary" placeholder="salary..." type="number" />
    <input v-model="data.phone" placeholder="phone..." type="text" />
    <button type="submit" @click.prevent="submitForm">ADD</button>
  </form>
</body>
</template>
<script>
export default {
  name: "addData",
  data() {
    return {
      errors: [],
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
    submitForm() {
      if (
        this.data.first_name &&
        this.data.age &&
        this.data.position &&
        this.data.salary &&
        this.data.phone
      ) {
        this.addData();
      }
      this.errors=[];
      const nameRex = /^([A-Z]\w+)$/g;
      const nameResult = nameRex.test(this.data.first_name);

      const ageRex = /^(0?[1-9]|[1-9][0-9])$/g;
      const ageResult = ageRex.test(this.data.age);

      const salaryRex = /(^[1-9]+)/g
      const salaryResult = salaryRex.test(this.data.salary);

      const phoneRex = /(^0\d+)$/g;
      const phoneResult = phoneRex.test(this.data.phone)

      if(!this.data.first_name || !nameResult){
        this.errors.push('Name is not match...');
      }
      if(!this.data.age || !ageResult ){
        this.errors.push('Age not match...');
      }
      if(!this.data.position){
        this.errors.push('Posotion not match...');
      }
      if(!salaryResult || !this.data.salary){
        this.errors.push('Salary not match...');
      }
      if(!phoneResult || !this.data.phone){
        this.errors.push('Phone not match...');
      }
    }
  }
};
</script>