<template>
  <DefaultLayout>
    <div>
      <div class="categories container max-w-sm mx-auto overflow-x-auto my-2 md:hidden">
        <ul class="flex items-center justify-between text-center">
          <li
            v-for="(category, index) in categories"
            :key="index"
            :class="[
              'p-[6px] font-normal text-xs first:pl-0 flex-none',
              {
                ' text-primary border-b-primary border-b-2': category.type === 'active'
              }
            ]"
          >
            {{ category.label }}
          </li>
        </ul>
      </div>
      <TheHero class="block md:hidden" />
      <div class="container max-w-sm md:max-w-md lg:max-w-lg mx-auto my-4 md:my-10">
        <TheHero class="hidden md:block" />
        <div class="categories mt-10 mb-10 hidden md:block">
          <ul class="flex w-[100%] items-center justify-between text-center overflow-x-auto">
            <li
              v-for="(category, index) in categories"
              :key="index"
              :class="[
                'rounded-[12px]',
                'text-dark-60',
                'border-solid',
                'border',
                'border-dark-10',
                'border-opacity-10',
                'p-[8px]',
                'font-normal',
                'text-sm',
                'flex-none',
                'mr-2',
                {
                  'border-primary border-opacity-100 text-primary': category.type === 'active'
                }
              ]"
            >
              {{ category.label }}
            </li>
          </ul>
        </div>

        <ListCard :listCourses="listCourses" />
        <div class="popular-instructor">
          <div class="title">
            <p class="text-base md:text-xl font-bold">Popular Instructor</p>
            <p class="text-sm md:text-base text-dark-60">
              We know the best things for You. Top picks for You.
            </p>
          </div>
          <div class="overflow-x-auto flex md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 w-100%">
            <CardInstructor :instructors="instructors" />
          </div>
        </div>
        <ThePromo />
      </div>
    </div>
  </DefaultLayout>
  <RouterView />
</template>

<script setup lang="ts">
import ListCard from '@/components/ListCard.vue'
import CardInstructor from '@/components/CardInstructor.vue'
import { ref } from 'vue'
import ThePromo from '@/components/ThePromo.vue'
import TheHero from '@/components/TheHero.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const categories = ref([
  { label: 'All', type: 'active' },
  { label: 'Adobe Illustrator', type: '' },
  { label: 'Adobe Photoshop', type: '' },
  { label: 'UI Design', type: '' },
  { label: 'Web Programming', type: '' },
  { label: 'Mobile Programming', type: '' },
  { label: 'Backend Development', type: '' },
  { label: 'Vue JS', type: '' }
])

const instructors = ref([
  {
    name: 'Alexander Bastian',
    description: 'Expert Mobile Engineer',
    avt: 'https://s3-alpha-sig.figma.com/img/1422/6848/745ebd09c7f1668bb115736bee727c83?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a4igtnDqZUe7Lk27EcRbXKW1pKGgTj8W~3yXGBQFYcgDet6VYevKccNZE6RcJtPnpD39bj1fTjd3yaBLwe63YVzzBU2lPDKShmXNT4OHKtH2EHq~52VhfMDpaowCc1Q4EhoFsWGn-CnYTNa5p0~IJlZfSVDJY4Ibgr8i6biCisscgd3LjcktLD1ZpTjV1NyEGKHa~92JuFnChmQwPqf8nWa2F4MwaFys-8pChZ0P8ZeE4qKhDPmgrqBzJ2I43v8TWxmM93pTvG33-HB2Fk8KowU4q8ggduHzE7wHbSbxubETtHtGlhnZI4BQCOiLgU3UqBmufhykS1UUP~0OJiP6lg__'
  },
  {
    name: 'Labie Carthaline',
    description: 'Marketing Specialist',
    avt: 'https://s3-alpha-sig.figma.com/img/80e9/dd1a/f7f9a7371e8d72d0801ffd7a3e1d6f31?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MFVenf6fyJmb-H9v69T9M4Cf24VRFUowX~Ofl9tymsFDiMrnyFH9J7VH25K8d3BfvYohzTdBNdXBj5jelL-O7UmadCfrW3OFlV-2OU57BNVPdHpJtbAIb5UWUBTNFB05uXiTIhWLUfuZDzG~HY4J32B-WN09g0swOpT286JdY0DGrHUrqbN6DZxqnJ9KT14KTu-1PVGHp7ObozSKQNLaa6WzBQTl4kH9O~viAK4P9daa1yoPE7cXpFLCJlRSvHyuGnO-k0tqFPrHVKYs~UR9zcNvfbrvrHmTKiPDPpvzmbDCfi11Pxb~OfIcxwpKufJkXhTa77K1FyPgL-dIs9vJfw__'
  },
  {
    name: 'Jonathan Doe',
    description: 'Financial Strategiest',
    avt: 'https://s3-alpha-sig.figma.com/img/4e34/5e5e/4862612c8af439f0369b109eeeb6db45?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gcmTHj9WWZO1Rk8JkUwXyIEigBj-vbyJh76bkOt0yL1uGglEPwgtgeL1rsLtJ5ihzPR3EADS~bY4U4Q1uUTeEtHxU-0teDeVcRphJhrJUM5ZYVbPDGNPA5PsH4BDkOguFDlsTfrNPF41HPoNUbN1WXsskjtp-pdp~t9eHjQo6408iJEpKp7VTNsn18Yg7neDQrY3d-TL1jRNoDIGXcecOAb1O~XBQeE3GInfVIcBzbilgCZhKt0ax0GG8igqQaUu4Zw7~6c55~4FiJY1zEq2ciaks4ZeT98flih~pUS9DtI-SiAs5c2pTRpPS6KdZA9Jxhirsm-YyF6NqI1-BIXDgg__'
  },
  {
    name: 'Kitani Sarasvati',
    description: 'Film Maker & Director',
    avt: 'https://s3-alpha-sig.figma.com/img/d2dc/fcf2/02980a93a70e32c9933d02c02902a5fc?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bWmpHUYPGr7BwVVh1z2DGkF6kqyGNlpkc~wJdq2u~v91xuU23shljlWetQlSuWEaH12U4GqAguVQSZQvksaLskArRUlpaD11shE7KY5n73XF9E7l9BFulFP6gOb3NMERAbHTkmf3cDubl1fKNTpL91mW3McOhW0SlNbhGlVzzqkW9tQgLL2eeC4DCwDRBqMuq9Yj1Svx4r91bAEFzm7JzpVUs963qzS4mjunt7K4TOpThqQJPTKpfFTO~HPE2Juqy7HQUxU~bY6XKrncrNhlX8yBJOKr5mnZ1pUgmeThmlSmm-onkfgExMB1xklMkgOlYdKybNTstqaGzVzsqHUWuA__'
  }
])

const listCourses = ref([
  {
    title: 'More from Kitani Studio',
    description: 'We know the best things for You.  Top picks for You.'
  },
  { title: 'Trending Course', description: 'We know the best things for You.  Top picks for You.' }
])
</script>
