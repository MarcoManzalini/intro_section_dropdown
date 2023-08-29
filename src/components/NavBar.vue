<script>
import DropDown from "./DropDown.vue";

export default {
  components: {
    DropDown
  },
  data() {
    return {
      features: [
        {
          "img": "../src/assets/icon-todo.svg",
          "title": "Todo List"
        },
        {
          "img": "../src/assets/icon-calendar.svg",
          "title": "Calendar"
        },
        {
          "img": "../src/assets/icon-reminders.svg",
          "title": "Reminders"
        },
        {
          "img": "../src/assets/icon-planning.svg",
          "title": "Planning"
        },
      ],
      company: [{"title": "History"}, {"title": "Our Team"}, {"title": "Blog"}],
      isMenu: false
    }
  }
}

</script>

<template>
  <!-- Left menu -->
  <div class="h-screen w-[65%] absolute z-20 bg-almostWhite ml-[35%]" :hidden="!isMenu">
    <div class="w-full flex justify-end mt-5">
      <img src="../assets/icon-close-menu.svg" @click="isMenu = !isMenu" class="mr-5 w-1/7">
    </div>
    <div class="flex flex-col text-xl ml-5 | text-mediumGray">
      <DropDown title="Features" :content="features" class="mb-5"/>
      <DropDown title="Company" :content="company" class="mb-5"/>
      <span class="mb-5">Careers</span>
      <span class="mb-5">About</span>
    </div>
  </div>
  <div class="h-screen w-screen absolute z-10 bg-almostBlack opacity-75" :hidden="!isMenu" />

  <nav class="mt-5 ml-8 mr-8 | flex justify-between | text-sm text-mediumGray |
              mobile:w-screen mobile:m-0 mobile:items-center mobile:mt-5">
    <div class="flex items-center">
      <div class="ml-5 mr-5">
        <img src="../assets/logo.svg" alt="logo" class="mr-2 mobile:m-0">
      </div>
      <DropDown title="Features" :content="features" class="mobile:hidden"/>
      <DropDown title="Company" :content="company" class="mobile:hidden"/>
      <span class="mr-5 mobile:hidden">Careers</span>
      <span class="mr-5 mobile:hidden">About</span>
    </div>
    <div class="mobile:hidden">
      <button class="mr-5">
        Login
      </button>
      <button class="outline outline-1 outline-mediumGray | rounded-lg | p-2">
        Register
      </button>
    </div>
    <div class="hidden mr-5 mobile:block" @click="isMenu = !isMenu">
      <img src="../assets/icon-menu.svg">
    </div>
  </nav>
</template>

<style scoped>

</style>