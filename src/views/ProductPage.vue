<template>
    <div>
        <page-Image/>
        <Product-Tabs/>
         <section class="wrapper">
        <aside class="slideshow-container">
    <div class="mySlides ">
        <img src="@/assets/product_big.png" height="500px" width="400px">
    </div>
        <a class="prev" onclick="plusSlides(-1)"><i class="fas fa-angle-left"></i></a>
        <a class="next" onclick="plusSlides(1)"><i class="fas fa-angle-right"></i></a>
</aside>
<aside id="heading" class="product--info">
    <div  class="product--heading">
        <h3>{{  product }}</h3>
    </div>
    <div class="product--rating">
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        <p>3 reviews</p>
        <a href="#">Add a review</a>
        <p>share:</p>
        <span class="fab fa-facebook-f"></span>
        <span class="fab fa-twitter"></span>
        <span class="fab fa-google-plus-g"></span>
        <span class="fab fa-pinterest"></span>
        <span class="fab fa-instagram"></span>
        <span class="far fa-envelope"></span>
    </div>
    <div class="price">
        <span>£107</span>
        
    </div>
    <div class="product--stock">
        <p><strong> Availabilty:</strong><span id="stock" v-if="inStock">In stock</span><span v-else>out of stock</span></p>
    </div>
    <div class="product--desctiption">
        <p><strong>Product code: </strong><span>#213324</span></p>
        <p class="tags"><strong>Tags:</strong> <span>Classic, Old-school</span></p>
        <p class="fisk">
            Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse<br> 
            est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec <br> 
            tempor lorem a pretium justo interdum.
        </p>
        <li v-for="detail in details" :key="detail">{{ detail }}</li>
    </div>
    <div class="product--selection">
        <div class="product--selection--color">
            <h4>Select color</h4>
        <select class="select--color">
            <option v-for="color in colors" :key="color" value="Select color">{{  color }}</option>
        </select>
        </div>
        <div class="product--selection--size">
        <h4>Select size</h4>
        <select class="select--size">
            <option v-for="size in sizes" :key="size" value="Select size">{{ size }}</option>
        </select>
        </div>
        <div class="product--selection--qty">
            <h4>Qty</h4>
            <form >              
                <input type="number" name="quantity" min="1" max="5">             
            </form>
        </div>
    </div>
    <div class="product-buttons">
        <button class="cart" type="button"><i class="fas fa-shopping-cart"></i>Add to cart</button>
        <button class="cart" type="button"><i class="far fa-heart"></i>Add to lookbook</button>
    </div>
</aside>
         </section>
    </div>
</template>
<script>
import ProductTabs from "@/components/ProductTabs"
import pageImage from "@/components/pageImage"
export default {
    components: {
        ProductTabs,
        pageImage
    },
    name: 'stock',
    data: function() {
        return {
            inStock: false
        }
    },
    name: 'product',
    data: function() {
        return {
            product: 'Mens shirt',
            details: ["Normal fit", "Polyester", "Enviroment friendly"],
            colors: ["select color", "red", "blue", "Green"],
            sizes: ["xtra-small", "small", "medium", "large", "x-large"]
        }
    }
}
</script>
<style lang="scss">
 @import '../style/styles'; 
</style>

