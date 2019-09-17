<template>
  <div class="delData">
    <button @click="delData(id)">DEL</button>
  </div>
</template>

<script>
export default {
  name: 'delData',
  props:{
    id:{
      type:Number,
      default: null
    }
  },
  methods:{
    delData(id){
      this.$store.dispatch('delData',id);
    }
  }
}
</script>

</style>
