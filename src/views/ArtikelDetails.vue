<template>
  <div class="">
    <img class="" :src="artikel.image" alt="">
    <div class="">
        <h1 class="text-2xl"> {{ artikel.name }}</h1>
        <p class="">Af {{ artikel.author }}, {{ artikel.authorEmail }}</p>
        <div v-html="artikel.txt"></div>
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
