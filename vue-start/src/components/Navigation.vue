<template>
	<nav class="topBar">
      <img src="static/logo.png" />
      <ul id="menu" v-bind:class="{opaToggle: isActive}">
        <li v-for="item in items"><router-link to="{item.url}">{item.name}</router-link></li>
        
      </ul>
      <img id="toggleMenu" v-on:click="hide" src="static/menu.svg"/>
    </nav>
</template>


<script type="text/javascript" >
export default {
  name: 'Navigation',
  data () {
    return {
      isActive: false,
      items: [
        {url: '/', name: 'Home'},
        {url: '/foo', name: 'About'},
        {url: '/product', name: 'Product'},
        {url: '/docs', name: 'Docs'},
        {url: '/contact', name: 'Contact'}
      ]
    }
  },
  methods: {
    hide: function() {
      this.isActive = !this.isActive;
    }
  }
}

</script>

<style scoped lang="scss">
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
    padding-right: 45px;
    margin-top: 50px;
    list-style-type: none;
    li {
      vertical-align: middle;
      display: inline-block;
      margin: 0 10px;
    }
  }
  a {
    color: #42b983;
  }
  a img {
    display: none;
    max-height: 50px;
    top: 20px;
    position: absolute;
    right: 3%;
  }
  #toggleMenu {
    display: none;
    position: fixed;
    right: 1%;
    top: 10px;
    height: 40px !important;
  }
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
    #toggleMenu {
      display: block;
    }
  }
}

</style>