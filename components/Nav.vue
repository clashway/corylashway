<template>
  <div class="nav-inner">
    <span class="home"><a href="/">Bio</a></span>
    <ul class="nav-links">
      <li><a href="/portfolio">Portfolio</a></li>
      <li><a href="/contact">Contact</a></li>
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
  background: yellow;
  width: 70px;
  height: 100%;
}
.nav-links {
  display:flex;
  flex-direction: row;
  margin-top: 23px;
  padding-left: 10px;
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
