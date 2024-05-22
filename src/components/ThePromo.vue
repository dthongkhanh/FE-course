<template>
  <div
    class="hidden md:flex promo-simple items-center justify-between h-[100px] lg:h-[184px] bg-[url('@/images/bg-prom.png')] bg-cover rounded-xl px-5 md:px-20"
  >
    <div class="title text-white">
      <p class="font-bold text-lg lg:text-[32px]">Join and get amazing discount</p>
      <p class="hidden md:block font-normal text-sm text-white text-opacity-60 lg:text-2xl">
        With our responsive themes and mobile and desktop apps
      </p>
    </div>
    <div class="flex items-center justify-between w-1/3">
      <form
        class="rounded-[3px] flex p-1 md:p-3 bg-[#F9F9F94D] text-[#F9F9F9] w-[65%] items-center"
      >
        <input
          type="search"
          placeholder="Email Address"
          required
          class="bg-transparent w-full h-full border-none font-normal placeholder-[#F9F9F9] text-opacity-60 focus:outline-none focus:text-[#F9F9F9] text-[6px] md:text-base"
        />
        <button type="submit"><IconSearchWhite /></button>
      </form>
      <button
        class="btn-primary btn-medium w-[30%] px-1 py-2 md:p-2 text-[6px] md:text-base h-full"
      >
        Subscribe
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconSearchWhite from './icons/IconSearchWhite.vue'
</script>

<style scoped></style>
