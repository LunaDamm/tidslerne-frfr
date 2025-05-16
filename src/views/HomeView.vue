<script setup>
</script>

<template>
  <main>

<div class="heroImg p-70 w-4/4"></div>



<section class="medlemOgFordele flex pb-16">
<div class="Imgcontainer p-40 w-2/4 rounded-sm"></div>

<div class="flex flex-col items-center justify-center pl-48 ">
<p class="OverskriftButton w-72 text-dark-green pb-4">Halløjsa! Bliv medlem her og få en masse fordele</p>
<div class="flex flex-col gap-4 w-full items-center font-bold">

<a href="https://medlem.tidslerne.dk/" class="buttonTekst bg-button-green text-light-green px-8 py-2 rounded-sm mb-4 w-72 flex justify-center items-center">Medlem</a>

<a href="https://medlem.tidslerne.dk/" class="buttonTekst bg-button-green text-light-green px-8 py-2 rounded-sm mb-4 w-72 flex justify-center items-center">Fordele</a>

</div>
</div>
</section>

<section class="senesteNyt flex flex-col">
  <div class="text-dark-green text-[48px] font-bold">
    <p>Seneste Nyt</p>
  </div>
  <div class="flex justify-center mt-6">
    <RouterLink class="buttonTekst bg-button-green text-light-green px-8 py-2 w-72 font-bold rounded-sm flex justify-center"
      to="/artikler"> Læs flere artikler </RouterLink>
  </div>
</section>

<section class="arrangementerKnapper">
  <div class="flex justify-center gap-4">
    <a class="buttonTekst bg-button-green text-light-green px-8 py-2 w-72 font-bold rounded-sm flex justify-center"
     href="https://tidslerne.nemtilmeld.dk/">Arrangementer for patienter</a>

    <a class="buttonTekst bg-button-green text-light-green px-8 py-2 w-72 font-bold rounded-sm flex justify-center"
      href="https://tidslerne.nemtilmeld.dk/" >Arrangementer for støttemedlemmer</a>
  </div>
</section>

</main>
</template>

<style scoped>
.heroImg {
  background-image: url('@/assets/shrekAndÆsel.jpg'); /* ret stien til dit billede */
  background-size: cover;
  background-position: center;
  margin-bottom: 94px;
}

.Imgcontainer{
    background-image: url('@/assets/OldAndYoung.jpg'); /* ret stien til dit billede */
  background-size: cover;
  background-position: center;
}

.buttonTekst{
  font-size: 24px;
}

.OverskriftButton{
  font-size: 24px;
}

.arrangementerKnapper{
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
