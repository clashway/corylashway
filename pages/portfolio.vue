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
.container {
  display: grid;
  grid-template-columns: 10px 300px 50px;
  grid-template-rows: 10px 1fr 550px 60px 30px;
  grid-template-areas:
    ". . ."
    ". header ."
    ". main-content ."
    ". footer ."
    ". . .";
  grid-gap: 30px;
  min-height: 100vh;
}
.header {
  background: #fff;
  grid-area: header;
}
.nav {
  background: #fff;
  grid-area: nav;
}
.main-content {
  padding-left: 10px;
  background: #fff;
  grid-area: main-content;
}
.footer {
  background: #1e1e1e;
  text-align: center;
  line-height: 55px;
  color: white;
  grid-area: footer;
}
@media screen and (min-width: 800px) {
  .container {
    display: grid;
    grid-template-columns: 10px 300px 1fr 50px;
    grid-template-rows: 10px 60px 500px 60px 30px;
    grid-template-areas:
      ". . . ."
      ". header nav ."
      ". header main-content ."
      ". header footer ."
      ". . . .";
    grid-gap: 30px;
    min-height: 100vh;
  }
}
</style>
