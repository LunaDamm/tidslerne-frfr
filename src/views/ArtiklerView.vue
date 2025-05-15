<template>
  <div>
    <h1>sakfjklasdjkdjdasl</h1>
    <div class="flex flex-wrap">
          <!-- repeat artikel thumbnail -->
          <div class="flex flex-wrap p-2">
            <router-link :to="`/artikler/${artikel.id}`" class="w-1/3" v-for="artikel in artikler" :key="artikel.id">
              <img :src="artikel.image" alt="{{ artikel.name }} thumbnail" class="w-full h-60" />
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
