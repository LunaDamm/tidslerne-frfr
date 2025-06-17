<template>
  <div>
    <h1 class="pt-15 px-5 md:px-0">Artikler</h1>
    <div class="pb-10 sm:px-0 px-5 pt-5 sm:pt-0">
          <!-- repeat artikel thumbnail -->
          <div class="col-span-1 w-full sm:grid-cols-3 grid-cols-1 gap-4 grid">
            <router-link :to="`/artikler/${artikel.id}`" class="transition duration-300 hover:scale-105" v-for="artikel in sortedArtikler" :key="artikel.id">
              <img :src="artikel.image" :alt="artikel.name + ' thumbnail'" class="h-70 w-full object-cover rounded-t-[5px] sm:rounded-[5px]" />
              <p class="text-2xl artikelTitle bg-button-green sm:bg-bag-green text-light-green sm:text-dark-green px-2 pt-2">{{ artikel.name }}</p>
              <p class="bg-button-green sm:bg-bag-green text-light-green sm:text-dark-green px-2 pb-2 rounded-b-[5px]">{{ artikel.description }}</p>
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

</script>