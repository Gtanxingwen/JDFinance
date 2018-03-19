<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Money/>
        <Product/>
        <Insure/>
        <Richcar/>
        <Footor/>
        <Navbar/>
    </div>
</template>

<script>
  import Heador from '../public/header.vue'
  import Slider from './hslider.vue'
  import Money from './money.vue'
  import Product from './product.vue'
  import Insure from './insure.vue'
  import Richcar from './richcar.vue'
  import Footor from '../public/footer.vue'
  import Navbar from '../public/navbar.vue'
  export default {
    components: {
      Heador,
      Slider,
      Money,
      Product,
      Insure,
      Richcar,
      Footor,
      Navbar
    }
  }
</script>
