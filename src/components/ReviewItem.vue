<template>
  <div class="review my-10">
    <p class="font-bold my-2">Review</p>
    <div class="block">
      <div v-for="(review, index) in reviews" :key="index" :class="['flex']">
        <div class="object-cover">
          <img :src="review.avt" class="w-[33px] max-w-[33px] h-[33px] rounded-full object-cover" />
        </div>
        <div class="ml-4">
          <p class="text-primary font-bold text-base">{{ review.name }}</p>
          <p class="text-dark-10 text-[10px]">{{ review.time }}</p>
          <p class="text-dark-60 text-sm">{{ review.content }}</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-10">
      <button class="btn-small text-dark-90 rounded-[3px] border-[1px] border-dark-90 font-bold">
        Load more review
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['reviews'])
</script>

<style scoped></style>
