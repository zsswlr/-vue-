<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="one">one</router-link>
    <router-link to="two">two</router-link>
    <router-link to="three">three</router-link>
    <router-link to="four">four</router-link>
    <router-link to="five">five</router-link>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  }

  a {
    color: #42b983;
  }
</style>
