<template>
  <button @click="delData(id)">Del</button>
</template>
<script>
export default {
  name:'delData',
  props:{
    id:{
      type:Number,
      default: null
    }
  },
  methods:{
    delData(id){
      this.$store.dispatch('delData',id)
    }
  }
}
</script>