<template>
  <div class="hello">
  Foo
  <p>My name is Joao Pratas and I'm 23 years old.</p>
    <p>Essentially I'm a Web Developer with a passion for music</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
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