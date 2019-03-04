<template>
    <div>
    <a href="#main-menu"
     id="main-menu-toggle"
     class="menu-toggle"
     aria-label="Open main menu">
    <span class="sr-only">Open main menu</span>
    <span class="fa fa-bars" aria-hidden="true"></span>
  </a>
  
  
  <nav id="main-menu" class="main-menu" aria-label="Main menu">
    <a href="#main-menu-toggle"
       id="main-menu-close"
       class="menu-close"
       aria-label="Close main menu">
      <span class="sr-only">Close main menu</span>
      <span class="fa fa-close" aria-hidden="true"></span>
    </a>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/ProductPage">Products</router-link></li> 
      <li><router-link to="/About">About</router-link></li>
      <li><router-link to="/SignIn">Sign in</router-link></li>
    </ul>
  </nav>
  <a href="#main-menu-toggle"
     class="backdrop"
     tabindex="-1"
     aria-hidden="true" hidden></a>
    </div>
</template>
