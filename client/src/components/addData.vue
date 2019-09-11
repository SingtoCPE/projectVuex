<template>
<body>
  <input v-model="data.first_name" placeholder="Name..." type="text" />
  <input v-model="data.age" placeholder="Age..." type="number" />
  <select v-model="data.position">
    <option value="Woking">Woking</option>
    <option value="Woking2">Woking2</option>
    <option value="Woking3">Woking3</option>
  </select>
  <input v-model="data.salary" placeholder="salary..." type="number" />
  <input v-model="data.phone" placeholder="phone..." type="text" />
  <button @click="addData">ADD</button>
</body>
</template>
<script>
export default {
  name:'addData',
  data(){
    return{
      data:{
      first_name:"",
      age:"",
      position:"",
      salary:"",
      phone:""
      }
    }
  },
  methods:{
    addData(){
      this.$store.dispatch('addData',{
        first_name: this.data.first_name,
        age: this.data.age,
        position: this.data.position,
        salary: this.data.salary,
        phone: this.data.phone
      })
    }
  }
}
</script>