<template>
  <div class="main-wrapper" id="body">
    <div class="btn-container">
      <button @click="enlarge()">Large Text Size</button>
      <button @click="enlarge2()">Extra Large Text Size</button>
      <button @click="reset()">Reset Text</button>
    </div>
    <p>
      Demonstration of changing the text size in an application via a button for those with visual impairments to view said text on a larger scale.
    </p>
    
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      
    };
  },
  computed: {
    
  },
  mounted() {

  },
  methods: {
    enlarge() {
      console.log("enlarge")
      var b = document.getElementById("body")
      b.classList.remove('enlarged2')
      b.classList.add('enlarged');
    },
    enlarge2() {
      console.log("enlarge")
      var b = document.getElementById("body")
      b.classList.add('enlarged2');
    },
    reset() {
      console.log("reset")
      var b = document.getElementById("body")
      b.classList.remove('enlarged2')
      b.classList.remove('enlarged')
      // b.classList.add('reduced');
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-wrapper {
    font-size: 1.5em;
  }
  .enlarged {
    font-size: 2em !important;
  }
  .enlarged2 {
    font-size: 2.5em !important;
  }
  .reduced {
    font-size: 2em;
  }
  .btn-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 4em;
  }

  .btn-container button {
    height: 1.2em;
    background-color: blue;
    color: white;
    margin: .1em;
  }

</style>