<template>
  <div>
    I am {{name}}  <button v-on:click="changeName">change</button>
    </div>
</template>

<script>

export default{
  name: 'wilson',
  data: function(){
    return {
      name: 'wilson'
    }
  },
  methods: {
    changeName:function(){
      this.name = 'xiaoshengwu';
    }
  }
}

</script>
