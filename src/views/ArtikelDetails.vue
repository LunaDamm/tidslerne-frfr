<template>
  <div class="">

    <img class="artikelHero w-4/4" :src="artikel.image" alt="">
<div class="flex justify-center">
<div class="bg-white w-3/4  p-4">
    <div class="pb-4">
      <h1 class="text-[40px] font-bold">{{ artikel.name }}</h1>
      <p v-if="artikel.author" class="text-gray-400">Af {{ artikel.author }}</p>
      <p v-if="artikel.authorEmail" class="text-gray-400">{{ artikel.authorEmail }}</p>
    </div>
    <div v-html="artikel.txt" class="artikelTekst text-[16px]"></div>
  </div>
</div>

<div class="" >
  <p v-if="artikel.source">Kilde:</p>
        <a class="pb-4" v-if="artikel.source" :href="artikel.source">{{ artikel.source }}</a>
        <p v-for="tag in artikel.tags" :key="tag"> {{ tag }}</p>
</div>

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

</style>
