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
        Bladet 'Tidslerne'
      </h1>
    </div>
  </div>

  <div class="p-5"></div>

  <p class="text-dark-green text-[18px]">Nedenfor har du alle udgivne medlemsblade Tidslerne.</p>
  <br></br>
  <p class="text-dark-green text-[18px]">Du kan læse bladene direkte her fra siden. Klik på et blad for at åbne det.</p>

<div class="p-5"></div>

<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
  <a
    v-for="blad in bladet"
    :key="blad.id"
    :href="blad.pdf"
    class="block transform transition duration-300 hover:scale-[1.02] hover:shadow-lg rounded-lg"
  >
    <img
      :src="blad.thumbnail"
      :alt="blad.name + ' thumbnail'"
      class="w-full object-contain rounded-[5px] max-h-[220px] md:max-h-[260px] lg:max-h-[350px] transition duration-300 hover:scale-105"
    />
    <p class="text-2xl mt-2 font-semibold text-center">{{ blad.name }}</p>
    <p class="text-center">{{ blad.description }}</p>
  </a>
</div>









   <!-- BLAD SLUT HER -->



  <div class="p-5"></div>

<div class="w-full flex justify-center mt-10">
  <button class="bg-button-green text-light-green px-6 py-3 rounded-[5px] text-lg">
    Se mere
  </button>
</div>


  <div class="p-5"></div>
</template>



<style></style>
