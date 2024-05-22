<template>
  <div class="hero">
    <div
      class="h-[125px] md:h-[400px] md:rounded-2xl bg-primary flex items-center text-white bg-[url('@/images/hero1.png')] bg-cover bg-center relative w-full"
    >
      <div class="pattern ml-6 md:ml-16 md:w-[50%] lg:w-[35%]">
        <p class="font-bold text-sm md:leading-[62px] md:text-5xl">Learn something new everyday.</p>
        <p class="font-normal text-[8px] md:text-base">
          Become professionals and ready to join the world.
        </p>
        <button
          class="text-xs btn-outline md:bg-white md:text-primary md:rounded-[18px] py-2 px-4 md:text-xl font-bold mt-2 md:mt-8"
        >
          Explore Photography
        </button>
      </div>
      <div
        class="info w-2/3 lg:w-1/2 items-center absolute bottom-4 md:left-1/3 lg:left-1/2 pr-8 hidden md:flex"
      >
        <div class="flex items-center">
          <img
            class="thumbnail w-14 h-14 rounded-full border-4 border-white"
            src="@/images/info-image.png"
          />
          <div class="ml-4">
            <p class="text-base font-bold">Jessica Wong</p>
            <p class="text-sm">Photographer</p>
          </div>
        </div>
        <div class="basic-info text-right ml-auto">
          <p class="text-base">Winner Photo 2017 Awwards</p>
          <p class="text-sm">Joined Klevr since 2006</p>
        </div>
      </div>
      <div class="info items-center absolute bottom-2 right-2 block text-right md:hidden">
        <p class="text-[10px] font-bold">Jessica Wong</p>
        <p class="text-[8px]">Photographer</p>
      </div>
      <div
        class="chevron-left px-3 py-6 bg-white bg-opacity-20 hidden md:flex items-center justify-between absolute bottom-1/2 translate-y-1/2 left-0"
      >
        <IconChevronLeft class="m-auto" />
      </div>
      <div
        class="chevron-right px-3 py-6 bg-white bg-opacity-20 hidden md:flex items-center justify-between absolute bottom-1/2 translate-y-1/2 right-0"
      >
        <IconChevronRight class="m-auto" />
      </div>
    </div>
    <div class="control hidden md:flex items-center justify-between w-11 m-auto mt-4">
      <div class="rounded-full bg-primary border-0 w-2 h-2"></div>
      <div class="rounded-full bg-dark-10 border-0 w-1 h-1"></div>
      <div class="rounded-full bg-dark-10 border-0 w-1 h-1"></div>
      <div class="rounded-full bg-dark-10 border-0 w-1 h-1"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconChevronLeft from './icons/IconChevronLeft.vue'
import IconChevronRight from './icons/IconChevronRight.vue'
</script>

<style scoped></style>
