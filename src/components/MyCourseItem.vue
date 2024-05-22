<template>
  <div v-for="(course, index) in myCourses" :key="index" class="card mt-6 mr-4 w-full">
    <div
      class="thumbnail-image bg-cover bg-center text-white h-[100px] md:h-[161px] rounded-[3px] md:rounded-[23px] p-2"
      :style="{ backgroundImage: `url(${course.avt})` }"
    >
      <div
        class="flex items-center justify-center bg-white opacity-40 rounded-full w-[24px] h-[24px] ml-auto"
      >
        <svg
          width="4"
          height="12"
          viewBox="0 0 4 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.00008 3.33341C2.73341 3.33341 3.33341 2.73341 3.33341 2.00008C3.33341 1.26675 2.73341 0.666748 2.00008 0.666748C1.26675 0.666748 0.666748 1.26675 0.666748 2.00008C0.666748 2.73341 1.26675 3.33341 2.00008 3.33341ZM2.00008 4.66675C1.26675 4.66675 0.666748 5.26675 0.666748 6.00008C0.666748 6.73341 1.26675 7.33341 2.00008 7.33341C2.73341 7.33341 3.33341 6.73341 3.33341 6.00008C3.33341 5.26675 2.73341 4.66675 2.00008 4.66675ZM0.666748 10.0001C0.666748 9.26675 1.26675 8.66675 2.00008 8.66675C2.73341 8.66675 3.33341 9.26675 3.33341 10.0001C3.33341 10.7334 2.73341 11.3334 2.00008 11.3334C1.26675 11.3334 0.666748 10.7334 0.666748 10.0001Z"
            fill="#1B1B1B"
            fill-opacity="0.6"
          />
        </svg>
      </div>
    </div>
    <div class="progress rounded-[23px] bg-[#F9F9F9] w-full h-[5px]">
      <div
        class="bg-primary h-[5px] rounded-[23px]"
        :style="{ width: `${getProgress(course)}%` }"
      ></div>
    </div>
    <div class="title font-bold text-xs md:text-base text-black uppercase my-1">
      {{ course.title }}
    </div>
    <div class="instructor flex items-center">
      <IconPerson class="mx-1" />
      <p class="text-primary text-[10px] md:text-sm">{{ course.instructor }}</p>
    </div>
    <div
      :class="[
        'status text-dark-90 text-[10px] md:text-sm',
        {
          'text-primary': getStatus(course) === 'Completed'
        }
      ]"
    >
      {{ getStatus(course) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPerson from './icons/IconPerson.vue'

const props = defineProps(['myCourses'])

const getStatus = (course: any) => {
  if (course.completedVideos == 0) {
    return 'Not Yet Started'
  } else if (course.completedVideos == course.totalVideos) {
    return 'Completed'
  } else {
    return `${course.completedVideos}/${course.totalVideos} Videos Completed`
  }
}

const getProgress = (course: any) => {
  return Math.round((course.completedVideos / course.totalVideos) * 100)
}
</script>

<style scoped></style>
