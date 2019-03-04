<template>
    <div>
         <div class="miniNav">
        <ul>
            <li class="miniNav--item--currency">currency : GBP <i class="fas fa-angle-down"></i></li>
            <li class="miniNav--item--register"><router-link to="/SignIn">register</router-link></li>
            <li class="miniNav--item--sign"><router-link to="/SignIn">Sign in</router-link></li>
            <li class="miniNav--item--cart"><i class="fas fa-shopping-cart"></i>Empty<i class="fas fa-angle-down"></i></li>
        </ul>
        </div>
        <mobile-Menu/>
        <nav class="navbar">
            <ul class="container">
                <router-link to="/"><img class="logo" src="@/assets/logo.png" height="20px" width="100px"></router-link>
               <div class="dropdown">
                            <li class="navbar--item dropbtn"><a href="#">Mens<i class="fas fa-angle-down"></i></a></li>
                            <div class="dropdown-content">
                                <h5>Casual</h5>
                              <a href="#">Shirts</a>
                              <a href="#">Jackets</a>
                              <a href="#">Jeans</a>
                              <a href="#">Shoes</a>
                              <a href="#">Hats</a>
                            </div>
                            <div class="dropdown-content right">
                                <h5>Casual</h5>
                              <a href="#">Shirts</a>
                              <a href="#">Jackets</a>
                              <a href="#">Jeans</a>
                              <a href="#">Shoes</a>
                              <a href="#">Hats</a>
                            </div>
                          </div> 
                <li class="navbar--item"><a href="#">Womens<i class="fas fa-angle-down"></i></a></li>
                <router-link to="/about" class="navbar--item">Brands</router-link>
                <li class="navbar--item"><a href="#">Local stores<i class="fas fa-angle-down"></i></a></li>
                <li class="navbar--item"><a href="#">Look Book<i class="fas fa-angle-down"></i></a></li>
                <li class="search navbar--item">
                    <input type="text" class="search-input" placeholder="Search">
                  </li>
            </ul>
        </nav>
      
    </div>
</template>
<script>
import mobileMenu from "@/components/mobileMenu";
export default {
  components: {
    mobileMenu

  }
}
</script>

<style lang="scss">
@import '../style/styles';
  
</style>
