<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar
  },
}
</script>

<template>

  <NavBar/>
  <div class="grid grid-cols-main | mr-20 ml-20 mt-2 | p-10 | max-h-[40vh] |
              mobile:flex mobile:flex-col mobile:m-0 mobile:mt-5 mobile:p-0">
    <div class="hidden w-screen mobile:block">
      <img src="./assets/image-hero-mobile.png" alt="hero_image" class="max-w-full">
    </div>

    <div class="flex flex-col mobile:text-center">
      <div class="flex-grow">
        <h1 class="font-extrabold text-7xl big-desktop:text-8xl | mb-10 mt-10 ml-10 |
                   mobile:text-4xl mobile:mt-6 mobile:ml-0">
          Make<br class="mobile:hidden"/> remote work
        </h1>
        <div class="mr-44 text-mediumGray text-base big-desktop:text-xl | mb-14 ml-10 |
                     mobile:mr-2 mobile:ml-2 mobile:mb-7 mobile:text-[1.05rem]">
          <p>Get your team in sync, no matter your location.<br class="mobile:hidden">
          Streamline processes, create team rituals, and watch productivity soar.</p>
        </div>
        <button class="bg-almostBlack text-almostWhite | p-3 pl-5 pr-5 |
                       rounded-lg | text-sm big-desktop:text-base | ml-10
                       hover:bg-almostWhite hover:text-almostBlack hover:outline hover:outline-almostBlack hover:outline-1
                       mobile:m-0 mobile:text-lg">
          Learn More
        </button>
      </div>
      <div class="flex justify-between items-center | mr-40 ml-10 mobile:ml-0 mobile:mr-0 mobile:mt-10">
        <img src="./assets/client-databiz.svg" alt="client_databiz">
        <img src="./assets/client-audiophile.svg" alt="client_audiophile">
        <img src="./assets/client-meet.svg" alt="client_meet">
        <img src="./assets/client-maker.svg" alt="client_maker">
      </div>
    </div>
    <div class="flex justify-center items-center mobile:hidden">
      <img src="./assets/image-hero-desktop.png" alt="img_hero" class="max-w-full w-10/12">
    </div>
  </div>
</template>

<style scoped>
</style>
