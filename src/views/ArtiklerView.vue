<template>
  <div>
    <h1 class="pt-15">Artikler</h1>
    <div class="pb-10">
          <!-- repeat artikel thumbnail -->
          <div class="col-span-1 w-full gap-4 grid grid-cols-3">
            <router-link :to="`/artikler/${artikel.id}`" class="" v-for="artikel in sortedArtikler" :key="artikel.id">
              <img :src="artikel.image" alt="{{ artikel.name }} thumbnail" class="h-70 w-full object-cover rounded-[5px]" />
              <p class="text-2xl artikelTitle">{{ artikel.name }}</p>
              <p>{{ artikel.description }}</p>
            </router-link>
          </div>
        </div>
  </div>
</template>

<script setup>

/* import { ref, computed } from 'vue'; */

import { useArtiklerDatabase } from '@/modules/useArtiklerDatabase';
import { computed } from 'vue';

const { artikler } = useArtiklerDatabase();

// Sort articles by date (newest first)
const sortedArtikler = computed(() =>
  [...artikler.value].sort((a, b) => new Date(b.date) - new Date(a.date))
)

console.log(artikler); // Check if Artikler contains data



</script>

<style lang="scss" scoped>

</style>
