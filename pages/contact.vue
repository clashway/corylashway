<template>
  <section class="container">
    <app-header class="header"></app-header>
    <app-nav class="nav"></app-nav>
    <app-contact class="main-content"></app-contact>
    <app-footer class="footer"></app-footer>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Nav from '~/components/Nav.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-nav': Nav,
    'app-contact': Contact,
    'app-footer': Footer
  }
}
</script>

<style>

</style>
