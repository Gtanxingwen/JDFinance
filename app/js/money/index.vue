<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Card/>
        <Money/>
        <Adv/>
        <Finance/>
        <Footor/>
        <Navbar/>
    </div>
</template>

<script>
  import Heador from '../public/header.vue'
  import Slider from './mslider.vue'
  import Card from './mcard.vue'
  import Money from './money.vue'
  import Adv from './adv.vue'
  import Finance from './finance.vue'
  import Footor from '../public/footer.vue'
  import Navbar from '../public/navbar.vue'
  export default {
    components: {
      Heador,
      Slider,
      Card,
      Money,
      Adv,
      Finance,
      Footor,
      Navbar
    }
  }
</script>
