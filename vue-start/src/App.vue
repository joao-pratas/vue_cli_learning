<template>
  <div id="app">
  <navigation></navigation>
    <router-view></router-view>
  <appFooter></appFooter>
  </div>
</template>

<script>
import navigation from '@/components/Navigation';
import appFooter from '@/components/AppFooter';

export default {
  name: 'app',
  components: {
    navigation, appFooter
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
}

@import url('https://fonts.googleapis.com/css?family=Nunito:400,400i,600,700|Poppins:700&subset=latin-ext');

#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 150px;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif;
}
</style>
