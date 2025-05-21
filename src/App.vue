<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>

  <NavBar />

<div class="flex flex-col justify-center items-center">
  <RouterView class="max-w-[1280px]" />
</div>

  <Footer />


</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  margin-left: 20px;
  margin-top: 15px;
  /* display: block; */
  /* margin: 0 auto 2rem; */

}

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  /* margin-top: 2rem; */
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: block;
  padding: 5px 30px;
}

button {
  display: block;
  padding: 5px 30px;
}

nav a:first-of-type {
  border: 0;
}

.textNav {
  font-size: 20px;
}

.nav-link {
  font-weight: bold;
}

.dropDown-link {
padding: 2px 15px;
}

.dropDown-link:hover{
text-decoration: underline;
}

.footer-link {
  display: block;
  font-weight: bold;
}

.footerBigBox {
font-size: 20px;
padding: 33px 0 33px 117px;
}

.footerBox2 {
margin-right: 400px ;}


.facebookLogo{
  border-right: solid 2px var(--color-light-green);
  padding-right: 15px;
}


.instagramLogo{
  margin-right: 117px;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  /* .logo {
    margin: 0 2rem 0 0;
  } */

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
