<template>
  <footer>
    <div class="bg-nav-green flex flex-col items-center">
    <div class="md:w-[1280px] w-full">
      <div class="footerBigBox text-light-green flex flex-row justify-center md:justify-between py-[33px] md:px-[58px]">

        <div class="footerBox1 sm:block hidden">
          <RouterLink class="footer-link" to="#">Kontakt os</RouterLink>
          <RouterLink class="footer-link" to="#">Privatpolitik</RouterLink>
          <RouterLink class="footer-link" to="#">Artikler</RouterLink>
        </div>

        <div class="footerBox2 sm:block hidden">
          <RouterLink class="footer-link" to="#">Merch</RouterLink>
          <a class="footer-link" href="https://medlem.tidslerne.dk/">Login</a>
          <a class="footer-link" href="https://medlem.tidslerne.dk/">Bliv medlem</a>
        </div>

        <div class="flex items-center gap-4 mt-6 ml-auto">
          <div class="facebookLogo ">
            <a href="https://www.facebook.com/tidslernedk/">
              <img src="@/assets/facebook.png" alt="Facebook" class="w-10 h-10" />
            </a>
          </div>

          <div class="instagramLogo !md:mr-[117px]">
            <a href="https://instagram.com">
              <img src="@/assets/instagram.png" alt="Instagram" class="w-10 h-10" />
            </a>
          </div>
        </div>

      </div>

    </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
.footer-link {
  display: block;
  font-weight: bold;
}

.footerBigBox {
font-size: 20px;
/* padding: 33px 0 33px 117px; */
}

.footerBox2 {
margin-right: 400px ;}


.facebookLogo{
  border-right: solid 2px var(--color-light-green);
  padding-right: 15px;
}


</style>
