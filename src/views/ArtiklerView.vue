<template>
  <div>
    <h1>sakfjklasdjkdjdasl</h1>
    <div class="flex flex-wrap">
          <!-- repeat artikel thumbnail -->
          <div class="flex flex-wrap w-full gap-4 justify-center">
            <router-link :to="`/artikler/${artikel.id}`" class="w-3./12" v-for="artikel in artikler" :key="artikel.id">
              <img :src="artikel.image" alt="{{ artikel.name }} thumbnail" class="h-70 w-full object-cover rounded-[5px]" />
              <p class="text-2xl">{{ artikel.name }}</p>
              <p>{{ artikel.description }}</p>
            </router-link>
          </div>
        </div>
  </div>
</template>

<script setup>

/* import { ref, computed } from 'vue'; */

import { useArtiklerDatabase } from '@/modules/useArtiklerDatabase';

const { artikler } = useArtiklerDatabase();

console.log(artikler); // Check if Artikler contains data



</script>

<style lang="scss" scoped>

</style>
