<template>
  <div class="hello">
    <nav class="topBar">
      <img src="static/logo.png" />
      <ul id="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Prdouct</a></li>
        <li><a href="#">Docs</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <a href="#" id="toggleMenu"><img src="static/menu.svg"></a>
    </nav>
  <h2>{{ testElement }}</h2>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
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
body {
  margin: 0;
  padding-right: 0;
}
#menu {
  margin-top: 50px;
}
.opaToggle {
  display: block !important;
}
.topBar{
  position: fixed;
  width: 100% !important;
  height: auto;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.95);
  img {
    height: 90px;
    padding: 15px;
    float: left;
  }
  ul {
    float: right;
    padding-right: 15px;
    margin-top: 50px;
    li {
      vertical-align: middle;
    }
  }
  a img {
    display: none;
    max-height: 50px;
    top: 20px;
    position: absolute;
    right: 3%;
  }
}

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

.hello {
  margin-top: 180px;
}

@media only screen and (max-width: 690px) {
  #menu {
    display: none;
    margin-top: -20px;
    ul {
      width: 100%;
      li {
        width: 100% !important;
        display: block !important;
        a {
          text-align: center !important;
        }
      }
    }  
  }
  .topBar {
    a img {
      display: block;
    }
    li {
    display: block;
    text-align: center;
    width: 100vw;
    margin: 10px 0;
      a {
        text-align: center;
        margin-left: 50px;
      }
    }
    img {
      height: 60px;
      padding: 10px;
    }
    a img {
      height: 30px;
      top: 15px;
    }
  }
}
</style>
