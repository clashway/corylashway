<template>
  <section class="container">
    <!-- <ul>
      <li v-for="blog in blogs" :key="blog.id">
        {{ blog.id }}
      </li>
    </ul> -->
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
// import blogs from '~/apollo/queries/blogs'

export default {
  components: {
    'app-header': Header,
    'app-nav': Nav,
    'app-aboutme': AboutMe,
    'app-footer': Footer
  },
  // apollo: {
  //   blogs: {
  //     query: blogs,
  //     prefetch: true
  //   }
  // },
}
</script>

<style>

</style>
