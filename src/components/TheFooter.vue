<template>
  <div class="bg-[#1B1B1B] w-full">
    <div class="max-w-sm md:max-w-md lg:max-w-lg text-base mx-auto">
      <div class="text-white container flex justify-between pt-10 pb-11">
        <div class="">
          <a href="#"><IconLogoWhite /></a>
        </div>
        <ul class="text-[8px] leading-6 md:text-sm md:leading-7 lg:text-base lg:leading-8">
          <li>Web Programming</li>
          <li>Mobile Programming</li>
          <li>Java Beginner</li>
          <li>PHP Beginner</li>
        </ul>
        <ul class="text-[8px] leading-6 md:text-sm md:leading-7 lg:text-base lg:leading-8">
          <li>Adobe Illustrator</li>
          <li>Adobe Photoshop</li>
          <li>Design Logo</li>
        </ul>
        <ul class="text-[8px] leading-6 md:text-sm md:leading-7 lg:text-base lg:leading-8">
          <li>Writing Course</li>
          <li>Photography</li>
          <li>Video Making</li>
        </ul>
      </div>
      <div
        class="text-[#F9F9F9] text-opacity-60 border-t border-solid border-[#F9F9F9] border-opacity-10 py-4 flex"
      >
        <p class="text-[8px] md:text-sm lg:text-base">
          Copyright © MyCourse.io 2024. All Rights Reserved
        </p>
        <div class="ml-auto">
          <ul class="flex w-full items-center justify-between">
            <li><IconTwitter /></li>
            <li><IconInstagram /></li>
            <li><IconFacebook /></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconFacebook from './icons/IconFacebook.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconLogoWhite from './icons/IconLogoWhite.vue'
import IconTwitter from './icons/IconTwitter.vue'
</script>
