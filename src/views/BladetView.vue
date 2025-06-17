<script setup>

import { useBladetDatabase } from '@/modules/useBladetDatabase';

const { bladet } = useBladetDatabase();

console.log(bladet);

</script>

<template>
  <div class="relative z-0 !w-full h-[400px] md:h-[600px]">
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('/images/midt-om-natten.png');"
    ></div>
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative z-10 container mx-auto px-4 text-center flex items-center justify-center h-full">
      <h1 class="text-light-green font-headline font-bold text-[32px]! sm:text-[40px]! md:text-[48px]! lg:text-[64px]! leading-tight">
        Bladet 'Tidslerne'
      </h1>
    </div>
  </div>

    <div class="p-5"></div>

  <div class="container mx-auto px-4">
    <div class="my-8">
      <p class="text-dark-green text-[18px] font-main">Nedenfor har du alle udgivne medlemsblade fra Tidslerne.</p>
      <br />
      <p class="text-dark-green text-[18px] font-main">Du kan læse bladene direkte her fra siden. Klik på et blad for at åbne det.</p>
    </div>

      <div class="p-5"></div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      <a
        v-for="blad in [...bladet].reverse()"
        :key="blad.id"
        :href="blad.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="block rounded-[5px] overflow-hidden transition duration-300 hover:scale-105"
      >
        <img
          :src="blad.thumbnail"
          :alt="blad.name + ' thumbnail'"
          loading="lazy"
          class="w-full h-auto object-cover"
        />
      </a>
    </div>

      <div class="p-5"></div>

    <div class="w-full flex justify-center">
      <button class="bg-button-green text-light-green px-6 py-3 rounded-[5px] font-bold button-text transition duration-300 hover:scale-108">
        Se mere
      </button>
    </div>
  </div>

  <div class="p-5"></div>
</template>

<style scoped>

.button-text{
  font-size: 20px;
}

</style>
