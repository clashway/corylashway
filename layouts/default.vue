<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #fafafa;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: underline;
}
a.active {
  text-decoration: underline;
}
a.exact-active {
  text-decoration: underline;
}
.container {
  display: grid;
  grid-template-columns: 1fr 300px 1fr;
  grid-template-rows: 650px 60px 450px 30px;
  grid-template-areas:
    ". header ."
    ". nav ."
    ". main-content ."
    ". footer ."
    ". . .";
  grid-gap: 20px;
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
  color: white~;
  grid-area: footer;
}
@media screen and (min-width: 415px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 80% 1fr;
    grid-template-rows: 100% 60px 450px 30px;
    grid-template-areas:
      ". header ."
      ". nav ."
      ". main-content ."
      ". footer ."
      ". . .";
    grid-gap: 20px;
    min-height: 100vh;
  }
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
