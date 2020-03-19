<template>
  <div id="app">
    <meta name="viewport" content="width=device-width">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin:0;
  padding: 0;
  height: 100%;
  width: 100%;
}
/* disable webview default copy when long press */
* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input {
  -webkit-user-select: auto;
}
/* disable webview default copy when long press */

</style>
