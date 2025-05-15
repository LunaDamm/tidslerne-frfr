<template>
  <div class="">
    <img class="" :src="artikel.image" alt="">
    <div class="">
      <div class="pb-4">
        <h1 class="text-2xl font-bold"> {{ artikel.name }}</h1>
        <p v-if="artikel.author" class="">Af {{ artikel.author }}</p><p v-if="artikel.authorEmail">{{ artikel.authorEmail }}</p>
        </div>
        <div v-html="artikel.txt" class="artikelTekst"></div>
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

<style lang="scss" scoped>

</style>
