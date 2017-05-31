<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Hello></Hello>
    <greeting></greeting>
    <T_Plot></T_Plot>
  </div>
</template>

<script>
import Hello from './components/Hello'
import T_Plot from './components/T_Plot'
export default {
 name: 'app',
  components: {
    Hello,
    T_Plot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
