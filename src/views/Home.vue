<template>
  <div>
      <section class="frontpage col-3">
            <img src="@/assets/frontimage.png" >
            <a href="#" class="frontpage--btn">shop men's collection</a>
        </section>
        <section class="productpage">
            <br>
            <br>
            <hr>
            <div class="filter">
                <ul class="filter--list">
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">New arrivals</a></li>
                    <li><a href="#">Best sellers</a></li>
                    <li><a href="#">Special offers</a></li>
                    <li><a href="#">Coming soon</a></li>
                </ul>
            </div>
    <section class="product"> 
        <div class="product--wrapper">
            <div id="product1" class="product--image--1">
                <router-link to="/ProductPage"><img src="@/assets/product_small.png" height="400px" width="300px"></router-link>
                <div class="top-left"><p><i class="fas fa-pound-sign"></i>149</p></div>
                 <div class="middle">
                    <div class="text">
                        <h4>{{ product }}</h4>
                        <p>{{ details }}</p>
                        <button class="button5"><i class="fas fa-shopping-cart"></i></button>
                        <button class="button5"><i class="far fa-heart"></i></button>
                        <button class="button5"><i class="fas fa-compress-arrows-alt"></i></button>
                    </div>
                  </div>
            </div>
            <div class="product--image--2">
                <img src="@/assets/product_small.png" height="400px" width="300px">
            </div>
            <div class="product--image--3">
                <img src="@/assets/product_big.png" height="600px" width="620px">
            </div>
            <div class="product--image--4">
                <img src="@/assets/product_big.png" height="600px" width="620px">
            </div>
            <div class="product--image--5">
                <img src="@/assets/product_small.png" height="400px" width="300px">
            </div>
           <div class="product--image--6">
                <img src="@/assets/product_small.png" height="400px" width="300px">
            </div>
        </div>
    </section>
        </section>
        <hr>
        <section class="lookbook">
            <div class="lookbook--men">
                <img src="@/assets/lookbook_men.png">
                <a href="#" class="lookbook--btn">View now</a>
            </div>
            <div class="lookbook--woman">
                <img src="@/assets/Lookbook_woman.png">
                <a href="#" class="lookbook--btn">View now</a>
                </div>
            <div class="lookbook--you">
                <img src="@/assets/lookbook_you.png">
                <a href="#" class="lookbook--btn">View now</a>
            </div>
        </section>
  </div>
</template>
<script>
export default {
    name: 'product1',
    data: function() {
        return {
            product: 'Mens shirt',
            details: 'A nice shirt for men'
        }
    }
}
</script>

<style lang="scss">
    @import '../style/styles';
</style>
