<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <div id="footer">
      {...💚} <span class="italic">spread the vue love</span>
    </div>
  </div>

</template>

<style>
  body {
    background-color: #2B3D50;
  }
#app {
  font-family: 'Dank Mono';
  color: #9E9EA1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav {
  padding: 0px 9px 9px 3px;
  text-decoration: none;
}

#nav a {
  font-family: 'Unica One';
  padding: 0px 9px 9px 3px;
  font-size: 2em;
  color: #9E9EA1;
  text-decoration: none;
}

#nav a:hover {
  color: pink;
  border-bottom: 3px solid pink;
}

#nav a.router-link-exact-active {
  color: #42b983;
  border-bottom: 3px solid  #42b983;
}
  #footer{
    position:absolute;
    bottom:0;
    width:100%;
    height:60px;   /* Height of the footer */
  }
  .italic {
    font-style: italic;
  }
</style>
