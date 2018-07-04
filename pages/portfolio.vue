<template>
  <section class="container">
    <app-header class="header"></app-header>
    <app-nav class="nav"></app-nav>
    <app-portfolio class="main-content"></app-portfolio>
    <app-footer class="footer"></app-footer>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Nav from '~/components/Nav.vue'
import Portfolio from '~/components/Portfolio.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-nav': Nav,
    'app-portfolio': Portfolio,
    'app-footer': Footer
  }
}
</script>

<style>

</style>
