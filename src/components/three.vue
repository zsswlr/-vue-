<template>
  <div>
    three
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    const Four = () => import('../components/four')
    const Five = () => import('../components/five')
     this.$router.addRoutes([
       {
         path: '/four',
         name: 'Four',
         component: Four
       },
       {
         path: '/five',
         name: 'Five',
         component: Five
       }
     ])
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
