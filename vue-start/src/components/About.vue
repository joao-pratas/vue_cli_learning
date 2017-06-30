<template>
  <div class="about">
    <h1>About Me</h1>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      testElement: '[Your message here]'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1, h2 {
  font-weight: normal;
  text-align: left;
}

h2, h3 {
  color: #42b983;
}

.about {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  text-align: center;
}

a {
  color: #42b983;
}

</style>