<template>

  <main>
  <div class="background"></div>
  <div class="foreground"></div>
</main>
  </template>
<script>
export default {
  name: "HelloWorld",
  
};
let c = 45;

function draw(){
  document.documentElement.style.setProperty('--direction', c++ + 'deg');
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
  --direction: -45deg; 
}

body {
  margin: 0;
  padding: 0;
}

main {
  position: relative;
}

div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
}

.background {
  background-image: url(https://skift.com/wp-content/uploads/2019/11/oyo-rooms-.jpg);
}

.foreground {
  background-image: url(https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F1%2F5%2F5%2F9%2F19439551-3-eng-GB%2FA%20logo%20of%20OYO%20is%20seen%20at%20hotel%20room%20in%20Noida%209th%20October.%28Photo%20by%20Akira%20Kodaka%29%E3%80%80DSC02115-3.jpg?source=nar-cms);
  mask-image: linear-gradient(var(--direction), rgba(0,0,0,1) 40%, rgba(0,0,0,0) 60%);
  mask-position: 50% 50%;
}


</style>
