<script setup>

import { useBladetDatabase } from '@/modules/useBladetDatabase';

const { bladet } = useBladetDatabase();

console.log(bladet);

</script>

<template>
  <div class="relative w-full h-[400px] md:h-[800px]">
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/midt-om-natten.png');"></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <!-- Tekst -->
    <div class="relative z-10 container mx-auto px-4 text-center">
      <h1 class="text-light-green font-headline font-bold text-[64px] pt-75">
        Bladet Tidslerne
      </h1>
    </div>
  </div>

  <div class="p-5"></div>

   <!-- artikel = blad
        artikler = bladet-->

    <div>
    <div class="flex flex-wrap">
          <!-- repeat blad thumbnail -->
          <div class="flex flex-wrap w-full gap-4 justify-center">
            <a :href="blad.pdf" class="w-3./12" v-for="blad in bladet" :key="blad.id">
              <img :src="blad.thumbnail" alt="{{ blad.name }} thumbnail" class="h-70 w-full object-cover rounded-[5px]" />
              <p class="text-2xl">{{ blad.name }}</p>
              <p>{{ blad.description }}</p>
            </a>
          </div>
        </div>
  </div>

   <!-- BLAD SLUT HER -->


  <h1 class="text-dark-green font-bold text-[48px]">Bladet</h1>

  <div class="p-5"></div>

  <button class="bg-button-green text-light-green px-6 py-3 rounded-[5px] text-lg">
    Se mere
  </button>


  <div class="p-5"></div>
</template>



<style></style>
