<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Weal/>
        <Active/>
        <Service/>
        <Footor/>
        <Navbar/>
    </div>
</template>

<script>
  import Heador from '../public/header.vue'
  import Slider from './wslider.vue'
  import Weal from './weal.vue'
  import Active from './active.vue'
  import Service from './service.vue'
  import Footor from '../public/footer.vue'
  import Navbar from '../public/navbar.vue'
  export default {
    components: {
      Heador,
      Slider,
      Weal,
      Active,
      Service,
      Footor,
      Navbar
    }
  }
</script>