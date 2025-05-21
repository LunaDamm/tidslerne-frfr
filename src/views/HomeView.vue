<script setup>
import { useArtiklerDatabase } from '@/modules/useArtiklerDatabase';
import { computed } from 'vue';

const { artikler } = useArtiklerDatabase();

// Get only the two newest articles
const newestArtikler = computed(() =>
  [...artikler.value]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2)
)
</script>

<template>
  <video autoplay muted loop class="herooo !w-full">
    <source src="@/assets/video/tidslerneHeroVideo.mp4" type="video/mp4">
  </video>
  <div class="absolute !mt-22 top-0 left-0 w-full sm:h-1/2 hidden md:flex items-end justify-center">
    <h1 class="text-white">Velkommen til Tidslerne</h1>
  </div>
  <main>

<!-- <div class="heroImg p-70 !w-full"></div> -->



<section class="medlemOgFordele grid grid-cols-12 pb-16">
<div class="Imgcontainer p-40 rounded-sm col-span-12 sm:col-span-7 w-4/4 sm:w-full bg-10 bg-cover"></div>

<div class="flex flex-col items-center justify-center col-start-1 col-span-12 sm:col-start-9 sm:col-span-3 pt-10 sm:pt-0">
<p class="OverskriftButton w-72 text-dark-green pb-4"><strong>Halløjsa!</strong> Bliv medlem her og få en masse fordele!</p>
<div class="flex flex-col gap-4 w-full items-center font-bold">

<a href="https://medlem.tidslerne.dk/" class=" bg-button-green text-light-green px-8 text-[20px] py-2 rounded-sm mb-4 w-72 flex justify-center items-center transition duration-300 hover:scale-105">Medlem</a>

<RouterLink class=" bg-button-green text-light-green px-8 py-2 text-[20px] rounded-sm mb-4 w-72 flex justify-center items-center transition duration-300 hover:scale-105" to="/fordele">Fordele</RouterLink>
</div>
</div>
</section>

<section class="flex flex-col items-center justify-center !mb-5">
  <h2 class="text-2xl">Tilmeld dig til vores nyhedsbrev her!</h2>
  <input type="text" placeholder="Indtast din email" class="border border-gray-300 rounded-md px-4 py-2 md:w-150 w-80 !mt-2 text-dark-green">
  <button class="bg-button-green text-light-green px-8 py-2 w-72 text-[20px] font-bold rounded-sm flex justify-center !mt-4 transition duration-300 hover:scale-105">Tilmeld</button>
</section>

<section class="senesteNyt flex flex-col sm:px-0 px-5 pt-5 sm:pt-0">
  <div class="senesteNytOverskrift text-dark-green sm:text-[48px] text-[38px] font-bold">
    <h2>Seneste Nyt</h2>
  </div>
  <div class="flex flex-wrap">
          <!-- repeat artikel thumbnail -->
          <div class="forsideArtikler grid sm:grid-cols-3 grid-cols-1 w-full gap-4">
            <router-link :to="`/artikler/${artikel.id}`" class="transition duration-300 hover:scale-105" v-for="artikel in newestArtikler" :key="artikel.id">
              <img :src="artikel.image" :alt=" artikel.name + ' thumbnail'" class="h-70 w-full object-cover rounded-t-[5px] sm:rounded-[5px]" />
              <p class="text-2xl artikelTitle bg-button-green sm:bg-bag-green text-light-green sm:text-dark-green px-2 pt-2">{{ artikel.name }}</p>
              <p class="bg-button-green sm:bg-bag-green text-light-green sm:text-dark-green px-2 pb-2 rounded-b-[5px]">{{ artikel.description }}</p>
            </router-link>
            <a class="" href="https://tojkurven.dk/?s=tidslerne&post_type=product">
              <img src="/src/assets/merchTidslerne.webp" class="h-100 rounded-[5px] w-full object-cover transition duration-300 hover:scale-105" alt="">
            </a>
          </div>
        </div>


  <div class="flex justify-center mt-6">
    <RouterLink class="buttonTekstArtikler bg-button-green text-light-green text-[20px] px-8 py-2 w-72 font-bold rounded-sm flex justify-center transition duration-300 hover:scale-105"
      to="/artikler"> Læs flere artikler </RouterLink>
  </div>
</section>

<section class="arrangementerKnapper">
  <div class="flex justify-center flex-wrap gap-4 ">
    <a class="buttonTekst bg-button-green text-light-green px-8 py-2 w-72 text-[20px] font-bold rounded-sm flex justify-center text-center transition duration-300 hover:scale-105"
     href="https://tidslerne.nemtilmeld.dk/">Arrangementer for patienter</a>

    <a class="buttonTekst bg-button-green text-light-green px-8 py-2 w-72 text-[20px] font-bold rounded-sm flex justify-center text-center transition duration-300 hover:scale-105"
      href="https://tidslerne.nemtilmeld.dk/" >Arrangementer for støttemedlemmer</a>
  </div>
</section>

</main>
</template>

<style scoped>
/* .heroImg {
  background-image: url('@/assets/shrekAndÆsel.jpg');
  background-size: cover;
  background-position: center;
  margin-bottom: 94px;
  width: 100%;
}
 */
.herooo {
    height: 60vh;
    margin-bottom: 94px;
    object-fit: cover;
    object-position: center;
}

.Imgcontainer{
  background-image: url('src/assets/OldAndYoung.jpg'); /* ret stien til dit billede */
  background-position: center;
}

/* .senesteNytOverskrift{
  margin-left: 70px;
}

.forsideArtikler{
  margin-left: 70px;
}
 */
.OverskriftButton{
  font-size: 24px;
}

.buttonTekstArtikler{
margin-top: 40px;
}

.arrangementerKnapper{
  margin-top: 35px;
  margin-bottom: 60px;
}

</style>
