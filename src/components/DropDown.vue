<script>
export default {
  props: {
    title: String,
    content: Array
  },
  data() {
    return {
      isOpen: false
    }
  }
}

</script>

<template>
  <div class="flex flex-col">
    <div @click="isOpen = !isOpen"
         class="flex items-center | text-mediumGray | mr-5 | hover:cursor-pointer | mobile:m-0">
      <div class="mr-1">
        {{ title }}
      </div>
      <div>
        <img v-if="!isOpen" src="../assets/icon-arrow-down.svg">
        <img v-if="isOpen" src="../assets/icon-arrow-up.svg">
      </div>
    </div>
    <div v-if="isOpen" class=" flex flex-col | absolute mt-6 mobile:block mobile:z-0 | bg-white | drop-shadow-lg | rounded-xl">
      <div v-for="obj in content" class="flex items-center ml-3 mr-3 mt-2 mb-2">
        <img :src="obj.img" class="mr-1">
        <span class="mt-1">{{ obj.title }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>