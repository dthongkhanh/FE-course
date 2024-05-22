<template>
  <div v-for="(listCourse, index) in listCourses" :key="index" class="my-6 md:my-12">
    <div class="title">
      <p class="text-base md:text-xl font-bold">{{ listCourse.title }}</p>
      <p class="text-sm md:text-base text-dark-60">{{ listCourse.description }}</p>
    </div>
    <div class="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:w-100%">
      <CardItem :courses="courses" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CardItem from './CardItem.vue'

const courses = ref([
  {
    avt: 'https://s3-alpha-sig.figma.com/img/1bc2/886a/ed9056a0b937d9b6dac2d6d756fff2d2?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MbIWNIjYNzOz89Wek4g5ktIzkMkfvA~MqVx3lPmqAzpUf~OjmcBiaatCllLBDHa2xmFH2fRaU3lfzwnWOI9YIdAt0kGsGVG~scwyH7VrigJZeGx7uNr6wF58AWB1H7TRgkx0S-rhkDdlvv9bg6ufGn4G1Iz6LrAI5f2KdgbSi1g1VeLMF-o6A9SyA2loO2fO9vGov1LXNSdkJYAFqDJHbXCihjwNzt6nutDoOLqtUeeTa8v4JNaq9L-ssY4tV~BJKAKFu0f~KwtPMxdmLKOrIzms4nO~yDiVEZnYnXkDzewmKy9yB~U3AyA5BFZVtEJU0w9FJdwG3HXZI2AvlUsr~Q__',
    title: 'VUE JS SCRATCH COURSE',
    instructor: 'Kitani Studio',
    desc: 'More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...',
    star: '1.2K',
    priceDiscount: '$24.92',
    price: '$32.90'
  },
  {
    avt: 'https://s3-alpha-sig.figma.com/img/13d6/56b8/53149532a6de40da48658b3f88d91f73?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DeBq1rwtFny1e~dihdi7C6ktKH9HzCtStr00Dr5N4OLUInJRRqHMKa6w-b4pVkJkYSGr0OlJfuSy0gXgEVQ01OtN-RZWJJKE7wEjaCjshmmfQIDhiFKdaXN3n88f5i1JUfVkyv2OxkvFHtrNZe2NegMMqaATSi0hoQelEJkM3mQcxZoTbx2AsIiZLhC5~Iyi9dHaZS9l1bkfejXW2x0452OOmCdVy2VL8CKuKrb~uE6x-PmYmuxO4uLBwsUU6LiOndhQ3Gq1LrLOm6ZduFjWZHUU8JqNCjZhTJPSTIzYbWNqcfVVaM25We3TdRuPzYgRlyqK4fWjqWAU03P3Z1bF2w__',
    title: 'UI DESIGN FOR BEGINNERS',
    instructor: 'Kitani Studio',
    desc: 'Learn how to make web application with Vue.js Framework.',
    star: '1.2K',
    priceDiscount: '$24.92',
    price: '$32.90'
  },
  {
    avt: 'https://s3-alpha-sig.figma.com/img/8bb6/ad24/279a44450b38c3fb0c8168706af3c700?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FW5H-FnEdM~da6qxJj8CrGlJnXK7isLYsFtkANdExIA7AnVPFT8-xoVpqqHOKdReJ8-kY6OBxNWbLuqV5G9qyFA3GRR4f8RgXggLpl3--tBxtvx4RXF-o~tz1QK9~KsjPXgHrTOWaG9hxCtUXW8pUG29OmNCQHW82OG1Zrp7vSr2~miAlyH79CGiY6FVC2wWCKudqdJ1opmE7c9U69HxSI878MCNXWXocaBOmO4NlDKOuytEq~dbH7YnUkpqYIcZzbdT9AeycY9~l2djhEk3ftH9jzysVDyXlL2FiBUkujucwzE8IA96bToFyk8e3RUQwcRMePkKKLEvaklUGUS6Vw__',
    title: 'MOBILE DEV REACT NATIVE',
    instructor: 'Kitani Studio',
    desc: 'More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...',
    star: '1.2K',
    priceDiscount: '$24.92',
    price: '$32.90'
  },
  {
    avt: 'https://s3-alpha-sig.figma.com/img/4052/b68a/1e7b2e53ff988154a520929af731ce8a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lakeACD90ritQ47zAjHC5NFEZtios9ah7u0berCljQIYE0y776amU08vXRd0GupXZR5C0RvKtcXRbU9Db4hrjN60g0mP~ibLjo~yzLCpGPxRLOu7Q8vGcdxW3sbqOpnO96q849tZ89AX94kT3Vi0Wsk9hEWNxhMO1d2KzrQm8ltd9hlWUoLH3z7qs~Sg6uRQsTcci4ovQQZWMlbhJtXgXszZ6Atk~FISkNYLsvHijWYO8vpzGj6rIIXjkMWhzhFxdpZ850c~n5HPc9TBWQu1TyRN-RQ-AAyefBd3iNO~vA9D3ziuAkZM8JPmx3sLfSoZhZs8HPtaL-EYcgmWM8Ssmw__',
    title: 'WEBSITE DEV ZERO TO HERO',
    instructor: 'Kitani Studio',
    desc: 'More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...',
    star: '1.2K',
    priceDiscount: '$24.92',
    price: '$32.90'
  }
])

const props = defineProps(['listCourses'])
</script>

<style scoped></style>
