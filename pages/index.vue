<template>
  <section class="container">
    <app-header class="header"></app-header>
    <app-nav class="nav"></app-nav>
    <app-aboutme class="main-content"></app-aboutme>
    <app-footer class="footer"></app-footer>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Nav from '~/components/Nav.vue'
import AboutMe from '~/components/AboutMe.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-nav': Nav,
    'app-aboutme': AboutMe,
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
  /* margin-top: 20px; */
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
  align-self: end;
  text-align: center;
  color: white;
  grid-area: footer;
}
@media screen and (min-width: 415px) {
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
