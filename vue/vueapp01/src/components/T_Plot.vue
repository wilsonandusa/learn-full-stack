<template>
  <div>
    I am {{apple}}  <button v-on:click="changeName">change</button>
    </div>
</template>

<script>

export default{
  name: 'wilson',
  data: function(){
      return{
        apple: "a",
        name: 'wilson'}

  },
  methods: {
    changeName:function(){
      this.apple = 'xiaoshengwu';
    }
  }
}

</script>
