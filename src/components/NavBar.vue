<template>
  <div class="bg-nav-green flex flex-col items-center">
  <header class="md:w-[1280px] w-full">
<RouterLink to="/" class="flex items-center justify-center">
  <img alt="Tidslerne logo" class="logo" src="@/assets/tidslerneLogo.svg" width="200" height="150" />
</RouterLink>

    <div class="wrapper w-4/4">

      <nav class="textNav flex flex-col md:flex-row justify-end text-light-green ">

        <router-link to="/fordele" class="font-bold hover:text-logo-purple ease-in duration-300">Medlemsfordele</router-link>

        <div class="arrangementerDropDown hidden md:block">
          <a class="font-bold hover:text-logo-purple ease-in duration-300" href="https://tidslerne.nemtilmeld.dk/" target="_blank" rel="noopener noreferrer">Arrangementer</a>
          <div class="arrangementerDropDownContent hidden z-1 absolute bg-button-green text-light-green rounded-sm py-2 ">
            <a class="dropDown-link" href="https://tidslerne.nemtilmeld.dk/" target="_blank" rel="noopener noreferrer">For patienter</a>
            <a class="dropDown-link " href="https://tidslerne.nemtilmeld.dk/" target="_blank" rel="noopener noreferrer">For støttemedlemmer</a>
          </div>
        </div>

        <div class="arrangementerDropDown block md:hidden">
          <div class="font-bold py-1" @click="toggleArrangementerMobile">Arrangementer</div>
          <div class="arrangementerDropDownContent bg-button-green text-light-green rounded-sm py-2" v-show="isArrangementerMobileOpen">
            <a class="dropDown-link" href="https://tidslerne.nemtilmeld.dk/" target="_blank" rel="noopener noreferrer">For patienter</a>
            <a class="dropDown-link " href="https://tidslerne.nemtilmeld.dk/" target="_blank" rel="noopener noreferrer">For støttemedlemmer</a>
          </div>
        </div>

        <div class="artiklerDropDown hidden md:block">
          <RouterLink class="font-bold hover:text-logo-purple ease-in duration-300" to="/artikler">Artikler</RouterLink>
          <div class="artiklerDropDownContent hidden z-1 absolute bg-button-green text-light-green rounded-sm py-2">
            <RouterLink class="dropDown-link" to="/artikler">Patienthistorier</RouterLink>
            <RouterLink class="dropDown-link" to="/artikler">Behandling i Udlandet</RouterLink>
            <RouterLink class="dropDown-link" to="/artikler">Konventionel</RouterLink>
            <RouterLink class="dropDown-link" to="/artikler">Komplementær</RouterLink>
            <RouterLink class="dropDown-link" to="/artikler">Følge og senskader</RouterLink>
          </div>
        </div>

        <div class="artiklerDropDown block md:hidden">
          <div class="font-bold py-1" @click="toggleArtiklerMobile">Artikler</div>
          <div class="artiklerDropDownContent hidden bg-button-green text-light-green rounded-sm py-2" v-show="isArtiklerMobileOpen">
            <RouterLink class="dropDown-link" to="/artikler">Patienthistorier</RouterLink>
            <RouterLink class="dropDown-link" to="/artikler">Behandling i Udlandet</RouterLink>
            <RouterLink class="dropDown-link" to="/artikler">Konventionel</RouterLink>
            <RouterLink class="dropDown-link" to="/artikler">Komplementær</RouterLink>
            <RouterLink class="dropDown-link" to="/artikler">Følge og senskader</RouterLink>
          </div>
        </div>

        <div class="omOsDropDown hidden md:block">
          <RouterLink class="font-bold hover:text-logo-purple ease-in duration-300" to="/om-os">Om os</RouterLink>
          <div class="omOsDropDownContent hidden z-1 absolute bg-button-green text-light-green rounded-sm py-2">
            <RouterLink class="dropDown-link " to="/om-os">Hvem er vi?</RouterLink>
            <RouterLink class="dropDown-link " to="/bladet">Tidslerne Bladet</RouterLink>
            <a href="https://tojkurven.dk/?s=tidslerne&post_type=product" target="_blank" rel="noopener noreferrer" class="dropDown-link">Merch</a>
            <RouterLink class="dropDown-link " to="#">Kontakt os</RouterLink>
            <RouterLink class="dropDown-link " to="#">Støt os</RouterLink>
            <RouterLink class="dropDown-link " to="#">Facebook Grupper</RouterLink>
            <RouterLink class="dropDown-link " to="#">Nyhedsbrev</RouterLink>
          </div>
        </div>

        <div class="omOsDropDown block md:hidden">
          <div class="font-bold py-1" @click="toggleOmOsMobile">Om os</div>
          <div class="omOsDropDownContent hidden bg-button-green text-light-green rounded-sm py-2" v-show="isOmOsMobileOpen">
            <RouterLink class="dropDown-link " to="/om-os">Hvem er vi?</RouterLink>
            <RouterLink class="dropDown-link " to="/bladet">Tidslerne Bladet</RouterLink>
          <a href="https://tojkurven.dk/?s=tidslerne&post_type=product" target="_blank" rel="noopener noreferrer" class="dropDown-link">Merch</a>
            <RouterLink class="dropDown-link " to="#">Kontakt os</RouterLink>
            <RouterLink class="dropDown-link " to="#">Støt os</RouterLink>
            <RouterLink class="dropDown-link " to="#">Facebook Grupper</RouterLink>
            <RouterLink class="dropDown-link " to="#">Nyhedsbrev</RouterLink>
          </div>
        </div>

        <div class="infoDropDown hidden md:block">
          <RouterLink class="font-bold hover:text-logo-purple ease-in duration-300" to="/info">Info</RouterLink>
          <div class="infoDropDownContent hidden z-1 absolute bg-button-green text-light-green rounded-sm py-2">
             <RouterLink class="dropDown-link " to="/fordele">Medlemsfordele</RouterLink>
            <RouterLink class="dropDown-link " to="#">Privatspolitik</RouterLink>
            <RouterLink class="dropDown-link" to="#">Vejledning til Zoom</RouterLink>
            <RouterLink class="dropDown-link " to="#">Vedtægter</RouterLink>
            <RouterLink class="dropDown-link " to="#">Søg Legater</RouterLink>
          </div>
        </div>

        <div class="infoDropDown block md:hidden">
          <div class="font-bold py-1" @click="toggleInfoMobile">Info</div>
          <div class="infoDropDownContent hidden bg-button-green text-light-green rounded-sm py-2" v-show="isInfoMobileOpen">
             <RouterLink class="dropDown-link " to="/fordele">Medlemsfordele</RouterLink>
            <RouterLink class="dropDown-link " to="#">Privatspolitik</RouterLink>
            <RouterLink class="dropDown-link" to="#">Vejledning til Zoom</RouterLink>
            <RouterLink class="dropDown-link " to="#">Vedtægter</RouterLink>
            <RouterLink class="dropDown-link " to="#">Søg Legater</RouterLink>
          </div>
        </div>

        <a class="font-bold hover:text-logo-purple ease-in duration-300" href="https://medlem.tidslerne.dk/" target="_blank" rel="noopener noreferrer">Login/Tilmeld </a>
      </nav>
    </div>
  </header>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isArrangementerMobileOpen = ref(false)
function toggleArrangementerMobile() {
  isArrangementerMobileOpen.value = !isArrangementerMobileOpen.value
}

const isArtiklerMobileOpen = ref(false)
function toggleArtiklerMobile() {
  isArtiklerMobileOpen.value = !isArtiklerMobileOpen.value
}

const isOmOsMobileOpen = ref(false)
function toggleOmOsMobile() {
  isOmOsMobileOpen.value = !isOmOsMobileOpen.value
}

const isInfoMobileOpen = ref(false)
function toggleInfoMobile() {
  isInfoMobileOpen.value = !isInfoMobileOpen.value
}
</script>

<style lang="scss" scoped>
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
  margin-top: 2rem;
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

.dropDown-link {
padding: 2px 15px;
}

.dropDown-link:hover{
text-decoration: underline;
}

/* Drop down menuer */
.arrangementerDropDown:hover .arrangementerDropDownContent {
  display: block;
}

.artiklerDropDown:hover .artiklerDropDownContent {
  display: block;
}

.omOsDropDown:hover .omOsDropDownContent {
  display: block;
}

.infoDropDown:hover .infoDropDownContent {
  display: block;
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
