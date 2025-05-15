<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-nav-green">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper w-4/4">

      <nav class="textNav flex flex-col md:flex-row justify-end text-light-green ">
        <RouterLink to="/">Hjem</RouterLink>
        <div class="arrangementerDropDown">
          <button class="nav-link">Arrangementer</button>
          <div class="arrangementerDropDownContent hidden z-1 absolute bg-button-green text-light-green rounded-sm py-2">
            <a class="dropDown-link" href="https://tidslerne.nemtilmeld.dk/">For patienter</a>
            <a class="dropDown-link" href="https://tidslerne.nemtilmeld.dk/">For støttemedlemmer</a>
          </div>
        </div>

        <div class="artiklerDropDown">
          <RouterLink class="nav-link" to="/artikler">Artikler</RouterLink>
          <div class="artiklerDropDownContent hidden z-1 absolute bg-button-green text-light-green rounded-sm py-2">
            <RouterLink class="dropDown-link" to="/artikler">Patienthistorier</RouterLink>
            <RouterLink class="dropDown-link" to="/artikler">Behandling i Udlandet</RouterLink>
            <RouterLink class="dropDown-link" to="/artikler">Konventionel</RouterLink>
            <RouterLink class="dropDown-link" to="/artikler">Komplementær</RouterLink>
            <RouterLink class="dropDown-link" to="/artikler">Følge og senskader</RouterLink>
          </div>
        </div>

        <div class="omOsDropDown">
          <RouterLink class="nav-link" to="/om-os">Om os</RouterLink>
          <div class="omOsDropDownContent hidden z-1 absolute bg-button-green text-light-green rounded-sm py-2">
            <RouterLink class="dropDown-link" to="/om-os">Hvem er vi?</RouterLink>
            <RouterLink class="dropDown-link" to="/bladet">Tidslerne Bladet</RouterLink>
            <RouterLink class="dropDown-link" to="/kontakt-os">Kontakt os</RouterLink>
            <RouterLink class="dropDown-link" to="/støt-os">Støt os</RouterLink>
            <RouterLink class="dropDown-link" to="/facebook">Facebook Grupper</RouterLink>
            <RouterLink class="dropDown-link" to="/nyhedsbrev">Nyhedsbrev</RouterLink>
          </div>
        </div>

        <div class="infoDropDown">
          <RouterLink class="nav-link" to="/info">Info</RouterLink>
          <div class="infoDropDownContent hidden z-1 absolute bg-button-green text-light-green rounded-sm py-2">
            <RouterLink class="dropDown-link" to="/privatspolitik">Privatspolitik</RouterLink>
            <RouterLink class="dropDown-link" to="/zoom-vejledning">Vejledning til Zoom</RouterLink>
            <RouterLink class="dropDown-link" to="/vedtægter">Vedtægter</RouterLink>
            <RouterLink class="dropDown-link" to="/søg-legater">Søg Legater</RouterLink>
          </div>
        </div>

        <a class="nav-link" href="https://medlem.tidslerne.dk/">Login/Tilmeld</a>
      </nav>
    </div>
  </header>

  <RouterView />


  <footer>
    <div class="w-4/4 bg-nav-green">
      <div class="footerBigBox text-light-green flex flex-col md:flex-row">
        <div class="footerBox1 ">
        <RouterLink class="footer-link" to="/kontakt-os">Kontakt os</RouterLink>
        <RouterLink class="footer-link" to="/privatpolitik">Privatpolitik</RouterLink>
        <RouterLink class="footer-link" to="/artikler">Artikler</RouterLink>
      </div>

      <div class="footerBox2">
        <RouterLink class="footer-link" to="/merch">Merch</RouterLink>
        <a class="footer-link" href="https://medlem.tidslerne.dk/">Login</a>
        <a class="footer-link" href="https://medlem.tidslerne.dk/">Bliv medlem</a>
      </div>
    </div>
    </div>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
  border-left: 1px solid var(--color-border);
  padding: 5px 30px;
}

button {
  display: block;
  border-left: 1px solid var(--color-border);
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

.footer-link {
  display: block;
  font-weight: bold;
}

.footerBigBox {
font-size: 20px;
padding: 33px 0 33px 117px;
}

.footerBox1 {
margin-right: 197px;
}

.footerBox2 {
margin-right: 197px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

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
