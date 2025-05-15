<script setup>
</script>

<template>
  <main>

<div class="heroImg p-70 w-4/4"></div>

<section class="medlemOgFordele flex">
<div class="Imgcontainer p-40 w-2/4 rounded-sm"></div>

<div class="flex flex-col items-center justify-center p-8">
<p class="OverskriftButton w-2/4">Halløjsa! Bliv medlem af os og få en masse fordele</p>
<div class="flex flex-col gap-4 w-full items-center">
  <button class="buttonTekst bg-button-green text-white px-8 py-2 rounded transition mb-4 w-72">Medlem</button>
    <button class="buttonTekst bg-button-green text-white px-8 py-2 rounded transition w-72">Fordele</button>
</div>
</div>

</section>
</main>
</template>

<style scoped>
.heroImg {
  background-image: url('@/assets/shrekAndÆsel.jpg'); /* ret stien til dit billede */
  background-size: cover;
  background-position: center;
  margin-bottom: 94px;
}

.Imgcontainer{
    background-image: url('@/assets/OldAndYoung.jpg'); /* ret stien til dit billede */
  background-size: cover;
  background-position: center;
}

.buttonTekst{
  font-size: 24px;
}

.OverskriftButton{
  font-size: 30px;
}
</style>
