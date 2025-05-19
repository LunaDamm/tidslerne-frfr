<template>
  <div class="bg-nav-green flex flex-col items-center">
  <header class="w-[1280px]">
<RouterLink to="/">
  <img alt="Tidslerne logo" class="logo" src="@/assets/tidslerneLogo.svg" width="200" height="150" />
</RouterLink>

    <div class="wrapper w-4/4">

      <nav class="textNav flex flex-col md:flex-row justify-end text-light-green ">
        <div class="arrangementerDropDown">
          <button class="nav-link hover:text-logo-purple ease-in duration-300">Arrangementer</button>
          <div class="arrangementerDropDownContent hidden z-1 absolute bg-button-green text-light-green rounded-sm py-2 ">
            <a class="dropDown-link" href="https://tidslerne.nemtilmeld.dk/">For patienter</a>
            <a class="dropDown-link " href="https://tidslerne.nemtilmeld.dk/">For støttemedlemmer</a>
          </div>
        </div>

        <div class="artiklerDropDown">
          <RouterLink class="nav-link hover:text-logo-purple ease-in duration-300" to="/artikler">Artikler</RouterLink>
          <div class="artiklerDropDownContent hidden z-1 absolute bg-button-green text-light-green rounded-sm py-2">
            <RouterLink class="dropDown-link" to="/artikler">Patienthistorier</RouterLink>
            <RouterLink class="dropDown-link" to="/artikler">Behandling i Udlandet</RouterLink>
            <RouterLink class="dropDown-link" to="/artikler">Konventionel</RouterLink>
            <RouterLink class="dropDown-link" to="/artikler">Komplementær</RouterLink>
            <RouterLink class="dropDown-link" to="/artikler">Følge og senskader</RouterLink>
          </div>
        </div>

        <div class="omOsDropDown">
          <RouterLink class="nav-link hover:text-logo-purple ease-in duration-300" to="/om-os">Om os</RouterLink>
          <div class="omOsDropDownContent hidden z-1 absolute bg-button-green text-light-green rounded-sm py-2">
            <RouterLink class="dropDown-link " to="/om-os">Hvem er vi?</RouterLink>
            <RouterLink class="dropDown-link " to="/bladet">Tidslerne Bladet</RouterLink>
            <RouterLink class="dropDown-link " to="#">Kontakt os</RouterLink>
            <RouterLink class="dropDown-link " to="#">Støt os</RouterLink>
            <RouterLink class="dropDown-link " to="#">Facebook Grupper</RouterLink>
            <RouterLink class="dropDown-link " to="#">Nyhedsbrev</RouterLink>
          </div>
        </div>

        <div class="infoDropDown">
          <RouterLink class="nav-link hover:text-logo-purple ease-in duration-300" to="/info">Info</RouterLink>
          <div class="infoDropDownContent hidden z-1 absolute bg-button-green text-light-green rounded-sm py-2">
            <RouterLink class="dropDown-link " to="#">Privatspolitik</RouterLink>
            <RouterLink class="dropDown-link" to="#">Vejledning til Zoom</RouterLink>
            <RouterLink class="dropDown-link " to="#">Vedtægter</RouterLink>
            <RouterLink class="dropDown-link " to="#">Søg Legater</RouterLink>
          </div>
        </div>

        <a class="nav-link hover:text-logo-purple ease-in duration-300" href="https://medlem.tidslerne.dk/">Login/Tilmeld</a>
      </nav>
    </div>
  </header>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
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

.nav-link {
  font-weight: bold;
}

.dropDown-link {
padding: 2px 15px;
}

.dropDown-link:hover{
text-decoration: underline;
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
