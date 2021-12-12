<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*Fonts */
/*Ubuntu */
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');
/*Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,500;0,600;0,800;0,900;1,100;1,200&family=Ubuntu+Mono&display=swap');
/*Variables  */
:root{
  --globalFont:  'Poppins', sans-serif;;

  }
  /*-------------Scroll bar -------- */
::-webkit-scrollbar {
  width: 10px;
  height: 30px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10rem;

}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10rem;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;

}


#app {
    font-family: var(--globalFont);

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#home-page{
  min-height: 100vh;

  }   

  #about{

  }

</style>
