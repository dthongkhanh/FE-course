<template>
  <div
    v-for="(course, index) in courses"
    :key="index"
    class="card mt-6 flex-none w-[285px] mr-4 md:w-full scroll-ms-6"
  >
    <div
      class="thumbnail-image bg-cover bg-center text-white h-[161px] rounded-[3px] md:rounded-[23px]"
      :style="{ backgroundImage: `url(${course.avt})` }"
    >
      <div class="flex w-[108px] items-center justify-between pt-2 pl-3 font-bold text-[8px]">
        <div class="label bg-primary rounded-[3px] md:rounded-[23px] p-[4px]">Best Seller</div>
        <div class="label discount uppercase bg-[#a04ae3] rounded-[3px] md:rounded-[23px] p-[4px]">
          20% OFF
        </div>
      </div>
    </div>
    <div class="title font-bold text-xs md:text-base text-black uppercase my-1">
      {{ course.title }}
    </div>
    <div class="instructor flex items-center">
      <IconPerson class="mx-1" />
      <p class="text-[10px] md:text-sm text-primary">{{ course.instructor }}</p>
    </div>
    <div class="desc text-[10px] md:text-sm font-normal text-dark-90">
      {{ course.desc }}
    </div>
    <div class="rating flex">
      <IconStar />
      <p class="font-normal text-[10px] md:text-sm text-dark-60">({{ course.star }})</p>
    </div>
    <div class="price flex items-center">
      <p class="text-base md:text-xl font-bold mr-2 text-dark-90">{{ course.priceDiscount }}</p>
      <p class="line-through text-xs md:text-base font-normal text-dark-60">{{ course.price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPerson from './icons/IconPerson.vue'
import IconStar from './icons/IconStar.vue'

const props = defineProps(['courses'])
</script>

<style scoped></style>
