<template>
<div class="myFooter">
  <p>Copyright &copy; Joao Pratas, 2017</p>
	<nav>
      <ul id="menu" v-bind:class="{opaToggle: isActive}">
        <li v-for="item in items"><router-link :to="item.url"> {{item.name}} </router-link></li>
      </ul>
    </nav>
</div>
</template>


<script type="text/javascript" >
export default {
  name: 'AppFooter',
  data () {
    return {
      isActive: false,
      items: [
        {url: '/', name: 'Home'},
        {url: '/about', name: 'About'},
        {url: '/product', name: 'Product'},
        {url: '/docs', name: 'Docs'},
        {url: '/contact', name: 'Contact'}
      ],
      copyright: 'Copyright &copy; Joao Pratas, 2017'
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
p {
  color: #fff;
  text-align: center;
  display: block;
}
#menu {
  margin-top: 20px;
  width: 94%;
  margin: 0 auto;
}
.myFooter{
  position: absolute;
  width: 100% !important;
  height: 90px;
  bottom: 0;
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

@media only screen and (max-width: 790px) {
  #menu {
    display: none;
    margin-top: -1px;
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
  .myFooter {
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
        margin-left: 120px;
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