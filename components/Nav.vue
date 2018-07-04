<template>
  <div class="nav-inner">
    <span class="home">
      <a href="/">
        <fa icon="home" transform="grow-6" />
      </a>
    </span>
    <ul class="nav-links">
      <li><router-link to="/portfolio">Portfolio</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
    <span class="business-inquiry">
      <button type="button" name="inquiry">Hire Me</button>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.nav-inner {
  display: flex;
  flex-direction: row;
}
.home {
  text-align: center;
  line-height: 60px;
  width: 60px;
  height: 100%;
}
.nav-home {
  height: 30px;
  width : 30px;
  padding-top: 15px;
}
.nav-links {
  display:flex;
  flex-direction: row;
  margin-top: 23px;
  padding-left: 0;
}
.nav-links li {
  list-style: none;
  padding-right: 20px;
}
.nav-links a:hover {
  text-decoration: underline;
}
.business-inquiry {
  margin-top: 10px;
  margin-left: auto;
  margin-right: 20px;
}
.business-inquiry button {
  height: 40px;
  width: 70px;
}
</style>
