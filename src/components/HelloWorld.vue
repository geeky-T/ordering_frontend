<template>

  <main>
  <div style="align:center " class="background">
    <img src="https://oyovacationhomes.com/wp-content/uploads/2016/08/press_logo_traumferienwohnungen.png" alt="logo" width="500px"/>
  </div>
  <!-- <div class="foreground"></div> -->
</main>
  </template>
<script>
export default {
  name: "HelloWorld",
  
};
// let c = 45;

// function draw(){
//   document.documentElement.style.setProperty('--direction', c++ + 'deg');
//   requestAnimationFrame(draw);
// }

// requestAnimationFrame(draw);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
  --direction: -45deg; 
}

body {
  margin: 0;
  padding:50%;
}

main {
  position: relative;
}

div {
  position:relative;
  top: 0;
  left: 0;
  width: 50vw;
  height: 50vh;
  background-size: cover;
  background-repeat: no-repeat;
}

.background {
 
  margin: 7em auto;
}


</style>
