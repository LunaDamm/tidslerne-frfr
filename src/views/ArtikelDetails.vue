<template>
  <div class="">

    <img class="artikelHero w-4/4" :src="artikel.image" alt="">
<div class="flex justify-center ">
<div class="bg-white w-3/4  p-4 rounded-sm ">
    <div class="pb-4">
      <h1 class="text-[40px] text-dark-green font-bold">{{ artikel.name }}</h1>
      <p v-if="artikel.author" class="text-gray-400">Af {{ artikel.author }}</p>
      <p v-if="artikel.authorEmail" class="text-gray-400">{{ artikel.authorEmail }}</p>
    </div>
    <div v-html="artikel.txt" class="artikelTekst text-[16px] text-dark-green"></div>
  </div>
</div>

  </div>

<div class="kilder w-3/4 flex flex-wrap gap-1" >
  <p class=" text-dark-green" v-if="artikel.source">Kilde:</p>
        <a class="text-dark-green hover:text-logo-purple ease-in duration-300" v-if="artikel.source" :href="artikel.source">{{ artikel.source }}</a>
  </div>

<div class="tagKnapper w-3/4 flex flex-wrap gap-3 font-bold">
    <p class="bg-button-green text-light-green px-6 py-1 rounded-sm" v-for="tag in artikel.tags" :key="tag"> {{ tag }}</p>
</div>


</template>

<script setup>
import { computed } from 'vue';
import { useArtiklerDatabase } from '@/modules/useArtiklerDatabase';
import { useRoute } from 'vue-router';

const { artikler } = useArtiklerDatabase();
const route = useRoute();
const artikel = computed(() => {
    return artikler.value.find((m) => m.id === parseInt(route.params.id));
})
</script>

<style scoped>

  .artikelHero {
    height: 70vh;
    margin-bottom: -100px;
    object-fit: cover;
    object-position: center;
    width: 100%;
  }

  .kilder {
    margin-top: 10px;
    margin-left: 160px;
  }

  .tagKnapper {
    margin-top: 10px;
    margin-bottom: 30px;
    margin-left: 160px;
  }

</style>
