<template>
  <div id="app">
    <site-Header/>
    <router-view/>
    <site-Footer/>
  </div>
</template>

<script>
import siteHeader from "@/components/siteHeader";
import SiteFooter from "@/components/siteFooter";
import Home from "@/views/Home";
export default {
  components: {
    siteHeader,
    SiteFooter,
    Home
  }
}
</script>
