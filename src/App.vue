<template>
  <div>
    <div>Counter: {{ counter }}</div>
    <div>Counter is {{ even ? 'even' : 'odd' }}</div>
  </div>
</template>

<script>
export default {
  data: function (){
    return {
      counter: localStorage.getItem("counter")
    }
  },
  computed: {
    even() {
      return this.counter % 2 == 0;
    }
  },
  created () {
    localStorage.setItem("counter", 1)
    setInterval(() => {
      const counter = localStorage.getItem("counter");
      localStorage.setItem("counter", +counter + 1);
    }, 1000);
  }
};
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
