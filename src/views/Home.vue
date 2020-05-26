<template>
  <div>
    <div v-for="category in categories" :label="category.name" :key="category" class="category">
      <div 
      v-for="subcategory in categories.subcategories" :key="subcategory" class="subcategory">
        {{subcategory.name}}
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: 'Brewed Coffee',
          subcategories: [
            {name: 'all'},
            {name: 'food'},
            {name: 'food'},
            {name: 'food'},
          ]
        },
        {
          name: 'Espresso',
          subcategories: [
            {name: 'all'},
            {name: 'Espresso'},
            {name: 'Macchiato'},
            {name: 'Con panna'},
            {name: 'Cafe latte'},
            {name: 'Cappuccino'},
          ]
        },
        {
          name: 'Teas & Sweet Drinks',
          subcategories: [
            {name: 'all'},
            {name: 'Hot tea'},
            {name: 'Iced tea'},
            {name: 'Chai'},
            {name: 'Hot Chocolate'},
            {name: 'Lemonade'},
          ]
        },
        {
          name: 'Iced Specialty Drinks',
          subcategories: [
            {name: 'all'},
            {name: 'Caramel'},
            {name: 'Coffee jelly'},
            {name: 'Cookies & cream'},
            {name: 'Hazelnut mocha'},
            {name: 'Ca'},

          ]
        },
        {
          name: 'Hot Specialty Drinks',
          subcategories: [
            {name: 'all'},
            {name: 'food'},
            {name: 'food'},
            {name: 'food'},
            {name: 'food'},

          ]
        },
      ]
    };
  },
  mounted() {
    console.log("home ran")
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>