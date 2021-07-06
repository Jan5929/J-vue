<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <span style="padding: 0 10px">|</span>
      <router-link to="/about">About</router-link>
    </div>
    <p @click="$store.dispatch('add')">acync:{{ $store.state.counter }}</p>
    <p @click="$store.commit('add')">{{ $store.state.counter }}</p>
    <p>{{ $store.getters.doubleCounter }}</p>
    <p>{{ $store.getters.doubleDounter }}</p>
    <!-- 路由出口 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
