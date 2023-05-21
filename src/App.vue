<template>
  <div id="app">
    <!-- <HelloWorld/> -->
    <my-hello-world></my-hello-world>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyHelloWorld from './components/MyHelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyHelloWorld
  }
}
</script>

<style>
</style>
