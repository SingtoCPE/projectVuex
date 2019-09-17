<template>
  <div class="loginData">
    <input v-model="data.user" placeholder="User...">
    <input v-model="data.password" placeholder="Password">
    <button @click="loginData">Login</button>
  </div>
</template>

<script>
export default {
  name: 'loginData',
  data(){
    return{
      data:{
      user:'',
      password:''
      }
    }
  },
  methods:{
    loginData(user,password){
      this.$store.dispatch('loginData',{
        user:this.data.user,
        password:this.data.password
      });
    }
  }
}
</script>

</style>
