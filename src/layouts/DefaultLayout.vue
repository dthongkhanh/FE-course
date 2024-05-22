<template>
  <div>
    <header :class="{ 'shadow-[0_2px_8px_0_rgba(0,0,0,0.06)]': hasShadow }" :hasShadow="hasShadow">
      <TheHeader />
    </header>
    <main><slot></slot></main>
    <footer><TheFooter /></footer>
  </div>
</template>

<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'

const props = defineProps({
  hasShadow: { type: Boolean, required: false }
})
</script>

<style scoped></style>
