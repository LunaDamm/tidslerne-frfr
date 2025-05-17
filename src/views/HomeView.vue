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
  <main>

<div class="heroImg p-70 w-4/4"></div>



<section class="medlemOgFordele flex pb-16">
<div class="Imgcontainer p-40 w-2/4 rounded-sm"></div>

<div class="flex flex-col items-center justify-center pl-48 ">
<p class="OverskriftButton w-72 text-dark-green pb-4">Halløjsa! Bliv medlem her og få en masse fordele</p>
<div class="flex flex-col gap-4 w-full items-center font-bold">

<a href="https://medlem.tidslerne.dk/" class=" bg-button-green text-light-green px-8 text-[20px] py-2 rounded-sm mb-4 w-72 flex justify-center items-center">Medlem</a>

<a href="https://medlem.tidslerne.dk/" class=" bg-button-green text-light-green px-8 py-2 text-[20px] rounded-sm mb-4 w-72 flex justify-center items-center">Fordele</a>

</div>
</div>
</section>

<section class="senesteNyt flex flex-col">
  <div class="text-dark-green text-[48px] font-bold">
    <h2>Seneste Nyt</h2>
  </div>
  <div class="flex flex-wrap">
          <!-- repeat artikel thumbnail -->
          <div class="flex flex-wrap w-full gap-4 justify-center">
            <router-link :to="`/artikler/${artikel.id}`" class="w-3./12" v-for="artikel in newestArtikler" :key="artikel.id">
              <img :src="artikel.image" alt="{{ artikel.name }} thumbnail" class="h-70 w-full object-cover rounded-[5px]" />
              <p class="text-2xl">{{ artikel.name }}</p>
              <p>{{ artikel.description }}</p>
            </router-link>
            <a class="w-3/12" href="https://tojkurven.dk/?s=tidslerne&post_type=product">
              <img src="/public/images/merchTidslerne.png" class="h-100 rounded-[5px] w-full object-cover" alt="">
            </a>
          </div>
        </div>


  <div class="flex justify-center mt-6">
    <RouterLink class="buttonTekstArtikler bg-button-green text-light-green text-[20px] px-8 py-2 w-72 font-bold rounded-sm flex justify-center"
      to="/artikler"> Læs flere artikler </RouterLink>
  </div>
</section>

<section class="arrangementerKnapper">
  <div class="flex justify-center gap-4">
    <a class="buttonTekst bg-button-green text-light-green px-8 py-2 w-72 text-[20px] font-bold rounded-sm flex justify-center text-center"
     href="https://tidslerne.nemtilmeld.dk/">Arrangementer for patienter</a>

    <a class="buttonTekst bg-button-green text-light-green px-8 py-2 w-72 text-[20px] font-bold rounded-sm flex justify-center text-center"
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
