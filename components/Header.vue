<template>
  <div class="header-inner">
    <h1 class="name">Cory Lashway</h1>
    <p class="job-title">Developer</p>
    <figure class="picture">
      <img src="~/assets/cory.jpg" alt="">
    </figure>
    <ul class="summary-bullets">
      <li>Name: <span class="answer">Cory Lashway</span></li>
      <li>Birthday: <span class="answer">06 March 1985</span></li>
      <li>Job: <span class="answer">VP, Engineering</span></li>
      <li>Email: <span class="answer"><a  href="mailto:cory.lashway@gmail.com?subject=Inquiry">cory.lashway@gmail.com</a></span></li>
      <li>GitHub: <span class="answer"><a href="https://github.com/clashway">clashway</a></span></li>
      <li>LinkedIn: <span class="answer"><a href="https://www.linkedin.com/in/corylashway">corylashway</a></span></li>
    </ul>
    <div class="resume-button">
      <button type="button" name="download-resume">download resume</button>
    </div>
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
.header-inner {
  /* background-image: url('~/assets/cory.jpg');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: 0 32px; */
}
.picture {
  padding: 0;
  margin: 0;
  margin-top: -10px;
}
.picture img {
  width: 100%;
}
h1.name {
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-size: 17px;
  font-weight: bold;
  line-height: 18px;
  padding-left: 20px;
}
.job-title {
  margin-top: -10px;
  color: #777777;
  padding-left: 20px;
}
.summary-bullets {
  padding-top: 20px;
  margin-left: -10px;
}
.summary-bullets li {
  list-style: none;
  padding-bottom: 10px;
}
.summary-bullets li::before {
  font-size: 20px;
  content: "4";
  font-family:"Webdings";
  color: #1e1e1e;
}
.answer {
  color: #777777;
}
.answer a {
  color: #777777;
}
.resume-button {
  padding-top: 10px;
  padding-left: 60px;
}
.resume-button button {
  text-decoration:none;
	color:#333333;
	font-size:12px;
	font-weight:bold;
	padding:0 15px;
	line-height:32px;
	height: auto;
	display:inline-block;
	text-align:center;
	background-color:#DDDDDD;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;
}
</style>
