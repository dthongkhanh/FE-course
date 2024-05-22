<template>
  <div
    v-for="(instructor, index) in instructors"
    :key="index"
    class="card-instructor bg-center bg-cover my-10 relative flex-none text-white w-[42%] md:w-full h-[400px] rounded-[3px] md:rounded-[18px] mr-4"
    :style="{ backgroundImage: `url(${instructor.avt})` }"
  >
    <div class="name text-center absolute w-full bottom-5">
      <p class="font-bold text-2xl">{{ instructor.name }}</p>
      <p class="text-base font-normal">{{ instructor.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['instructors'])
</script>
