<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-nav-green">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper w-3/4">

      <nav class="textNav flex flex-col md:flex-row justify-end text-light-green ">
        <div class="arrangementerDropDown">
          <button class="">Arrangementer</button>
          <div class="arrangementerDropDownContent hidden z-1 absolute w-50 bg-button-green text-light-green">
            <a href="https://tidslerne.nemtilmeld.dk/">For patienter</a>
            <a href="https://tidslerne.nemtilmeld.dk/">For støttemedlemmer</a>
          </div>
        </div>

        <div class="artiklerDropDown">
          <RouterLink to="/artikler">Artikler</RouterLink>
          <div class="artiklerDropDownContent hidden z-1 absolute w-50 bg-button-green text-light-green">
            <RouterLink to="/artikler">Patienthistorier</RouterLink>
            <RouterLink to="/artikler">Behandling i Udlandet</RouterLink>
            <RouterLink to="/artikler">Konventionel</RouterLink>
            <RouterLink to="/artikler">Komplementær</RouterLink>
            <RouterLink to="/artikler">Følge og senskader</RouterLink>
          </div>
        </div>

        <div class="omOsDropDown">
          <RouterLink to="/om-os">Om os</RouterLink>
          <div class="omOsDropDownContent hidden z-1 absolute w-50 bg-button-green text-light-green">
            <RouterLink to="/om-os">Hvem er vi?</RouterLink>
            <RouterLink to="/bladet">Tidslerne Bladet</RouterLink>
            <RouterLink to="/kontakt-os">Kontakt os</RouterLink>
            <RouterLink to="/støt-os">Støt os</RouterLink>
            <RouterLink to="/facebook">Facebook Grupper</RouterLink>
            <RouterLink to="/nyhedsbrev">Nyhedsbrev</RouterLink>
          </div>
        </div>

        <div class="infoDropDown">
          <RouterLink to="/info">Info</RouterLink>
          <div class="infoDropDownContent hidden z-1 absolute w-50 bg-button-green text-light-green">
            <RouterLink to="/privatspolitik">Privatspolitik</RouterLink>
            <RouterLink to="/zoom-vejledning">Vejledning til Zoom</RouterLink>
            <RouterLink to="/vedtægter">Vedtægter</RouterLink>
            <RouterLink to="/søg-legater">Søg Legater</RouterLink>
          </div>
        </div>

        <a href="https://medlem.tidslerne.dk/">Login/Tilmeld</a>
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
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.textNav {
  font-size: 20px;
  font-weight: bold;

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
