<template>
  <div id="app">
  <navigation></navigation>
    <router-view></router-view>
  <footer></footer>
  </div>
</template>

<script>
import navigation from '@/components/Navigation';
export default {
  name: 'app',
  components: {
    navigation
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
  margin-top: 150px;
}
</style>
