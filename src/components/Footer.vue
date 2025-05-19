<template>
  <footer>
    <div class="bg-nav-green flex flex-col items-center">
    <div class="w-[1280px]">
      <div class="footerBigBox text-light-green flex flex-row justify-between">

        <div class="footerBox1 ">
          <RouterLink class="footer-link" to="#">Kontakt os</RouterLink>
          <RouterLink class="footer-link" to="#">Privatpolitik</RouterLink>
          <RouterLink class="footer-link" to="#">Artikler</RouterLink>
        </div>

        <div class="footerBox2">
          <RouterLink class="footer-link" to="#">Merch</RouterLink>
          <a class="footer-link" href="https://medlem.tidslerne.dk/">Login</a>
          <a class="footer-link" href="https://medlem.tidslerne.dk/">Bliv medlem</a>
        </div>

        <div class="flex items-center gap-4 mt-6 ml-auto">
          <div class="facebookLogo ">
            <a href="https://www.facebook.com/groups/1480251482282861/?ref=group_header">
              <img src="@/assets/facebook.png" alt="Facebook" class="w-10 h-10" />
            </a>
          </div>

          <div class="instagramLogo">
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
padding: 33px 0 33px 117px;
}

.footerBox2 {
margin-right: 400px ;}


.facebookLogo{
  border-right: solid 2px var(--color-light-green);
  padding-right: 15px;
}


.instagramLogo{
  margin-right: 117px;
}
</style>
