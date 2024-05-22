<template>
  <DefaultLayout :hasShadow="true">
    <div>
      <div class="container max-w-sm md:max-w-md lg:max-w-lg mx-auto relative my-4 md:my-10">
        <TheHero />
        <div class="my-course">
          <div class="hidden md:flex title-sort items-center justify-between">
            <div class="title">
              <p class="font-bold text-xl">My course</p>
              <p class="text-dark-60 text-base">List of your courses</p>
            </div>
            <div class="sort flex">
              <form>
                <select
                  id="rate"
                  class="border border-dark-60 text-base text-dark-90 rounded-[3px] focus:ring-primary focus:border-primary px-[18px] py-[10px]"
                >
                  <option selected>All Rated</option>
                  <option value="">United States</option>
                </select>
              </form>
              <form>
                <select
                  id=""
                  class="border border-dark-60 text-base text-dark-90 rounded-[3px] focus:ring-primary focus:border-primary px-[18px] py-[10px] ml-4"
                >
                  <option selected>Recently added</option>
                  <option value="">United States</option>
                </select>
              </form>
            </div>
          </div>
          <div class="list-course grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-100%">
            <MyCourseItem :myCourses="myCourses" />
          </div>
        </div>
        <BasePagination class="hidden md:block" />
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import MyCourseItem from '@/components/MyCourseItem.vue'
import TheHero from '@/components/TheHero.vue'
import BasePagination from '@/components/atoms/BasePagination.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref } from 'vue'

const myCourses = ref([
  {
    avt: 'https://s3-alpha-sig.figma.com/img/abf9/514e/d05dfd544b8a15f8b74e4c60a96534d1?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mVbFMFsq0UyriBAn63n3H~3WW8rblGQIbkem2ReL6CBADQvubps1T3UtqUP9gAtV2bTADwT31bPuyj6EM0RyN-XqdPMWohR-pHB8BAHR3gNPAdtj8np-lu0lbznb62a6MwhmsKgiigzYZghXied3Y9xKGxyey0C2-Yyd2eNwK9hIs1iYY28wJC6QcJPDGs4bh4MVYzgX72HiJOIA5iuyNomLmU8bdz-PmZ8GXExTPKfa1bGmv-Aa-Hs~NpmBepg-4rDI1tiJun~R06X5XtZ~BTp6NAfht0Jg02S7atu2h56Fb5Nz6EvIC-fmaLBo9Cbr-PfkzhNe8t9od2hvPLpARA__',
    title: 'Java Programming Beginner',
    instructor: 'Kitani Studio',
    completedVideos: 4,
    totalVideos: 10
  },
  {
    avt: 'https://s3-alpha-sig.figma.com/img/8bb6/ad24/279a44450b38c3fb0c8168706af3c700?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FW5H-FnEdM~da6qxJj8CrGlJnXK7isLYsFtkANdExIA7AnVPFT8-xoVpqqHOKdReJ8-kY6OBxNWbLuqV5G9qyFA3GRR4f8RgXggLpl3--tBxtvx4RXF-o~tz1QK9~KsjPXgHrTOWaG9hxCtUXW8pUG29OmNCQHW82OG1Zrp7vSr2~miAlyH79CGiY6FVC2wWCKudqdJ1opmE7c9U69HxSI878MCNXWXocaBOmO4NlDKOuytEq~dbH7YnUkpqYIcZzbdT9AeycY9~l2djhEk3ftH9jzysVDyXlL2FiBUkujucwzE8IA96bToFyk8e3RUQwcRMePkKKLEvaklUGUS6Vw__',
    title: 'iOS 13 & Swift 5 - Complete iOS...',
    instructor: 'Kitani Studio',
    completedVideos: 0,
    totalVideos: 10
  },
  {
    avt: 'https://s3-alpha-sig.figma.com/img/bea9/9bca/2865041df3ac26b9b339b24e61ba8313?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NrFzsPsPO0hAr4poXO9ml-nJx47fuLbQqrAC-SwThzuvxTlcjm7lcsFQzuij48vFPI79XNN52IoEDWPMdu4yto8DXbhZcmlGhu9~Q~LVhXJRbkCfWXJz0SYM~EmYuNMXTgdzd0n~66ECo9bNV-b7JCbP4OEKIf33mSPeifMKO5pTkgwZ9q0qX1FYrhBTUERRB9I-UuF9hi9pMhsLcHbQZQ0dxg9FRSBAiBTZLklbo2dHewl065lQnON5DTkSfWW89TA9YjiHLDAUDi-2SA1wkyGTQsISJiPvDtiy784bI5jICS~nXzACLAFtTHnOmmR1gUNMQqrmKUaE0E9nbzP1fA__',
    title: 'Wordpress Course Intermediate',
    instructor: 'Kitani Studio',
    completedVideos: 3,
    totalVideos: 8
  },
  {
    avt: 'https://s3-alpha-sig.figma.com/img/1bc2/886a/ed9056a0b937d9b6dac2d6d756fff2d2?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MbIWNIjYNzOz89Wek4g5ktIzkMkfvA~MqVx3lPmqAzpUf~OjmcBiaatCllLBDHa2xmFH2fRaU3lfzwnWOI9YIdAt0kGsGVG~scwyH7VrigJZeGx7uNr6wF58AWB1H7TRgkx0S-rhkDdlvv9bg6ufGn4G1Iz6LrAI5f2KdgbSi1g1VeLMF-o6A9SyA2loO2fO9vGov1LXNSdkJYAFqDJHbXCihjwNzt6nutDoOLqtUeeTa8v4JNaq9L-ssY4tV~BJKAKFu0f~KwtPMxdmLKOrIzms4nO~yDiVEZnYnXkDzewmKy9yB~U3AyA5BFZVtEJU0w9FJdwG3HXZI2AvlUsr~Q__',
    title: 'Wordpress Course Intermediate',
    instructor: 'Kitani Studio',
    completedVideos: 0,
    totalVideos: 10
  },
  {
    avt: 'https://s3-alpha-sig.figma.com/img/8bb6/ad24/279a44450b38c3fb0c8168706af3c700?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FW5H-FnEdM~da6qxJj8CrGlJnXK7isLYsFtkANdExIA7AnVPFT8-xoVpqqHOKdReJ8-kY6OBxNWbLuqV5G9qyFA3GRR4f8RgXggLpl3--tBxtvx4RXF-o~tz1QK9~KsjPXgHrTOWaG9hxCtUXW8pUG29OmNCQHW82OG1Zrp7vSr2~miAlyH79CGiY6FVC2wWCKudqdJ1opmE7c9U69HxSI878MCNXWXocaBOmO4NlDKOuytEq~dbH7YnUkpqYIcZzbdT9AeycY9~l2djhEk3ftH9jzysVDyXlL2FiBUkujucwzE8IA96bToFyk8e3RUQwcRMePkKKLEvaklUGUS6Vw__',
    title: 'iOS 13 & Swift 5 - Complete iOS...',
    instructor: 'Kitani Studio',
    completedVideos: 0,
    totalVideos: 10
  },
  {
    avt: 'https://s3-alpha-sig.figma.com/img/abf9/514e/d05dfd544b8a15f8b74e4c60a96534d1?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mVbFMFsq0UyriBAn63n3H~3WW8rblGQIbkem2ReL6CBADQvubps1T3UtqUP9gAtV2bTADwT31bPuyj6EM0RyN-XqdPMWohR-pHB8BAHR3gNPAdtj8np-lu0lbznb62a6MwhmsKgiigzYZghXied3Y9xKGxyey0C2-Yyd2eNwK9hIs1iYY28wJC6QcJPDGs4bh4MVYzgX72HiJOIA5iuyNomLmU8bdz-PmZ8GXExTPKfa1bGmv-Aa-Hs~NpmBepg-4rDI1tiJun~R06X5XtZ~BTp6NAfht0Jg02S7atu2h56Fb5Nz6EvIC-fmaLBo9Cbr-PfkzhNe8t9od2hvPLpARA__',
    title: 'Java Programming Beginner',
    instructor: 'Kitani Studio',
    completedVideos: 10,
    totalVideos: 10
  },
  {
    avt: 'https://s3-alpha-sig.figma.com/img/8bb6/ad24/279a44450b38c3fb0c8168706af3c700?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FW5H-FnEdM~da6qxJj8CrGlJnXK7isLYsFtkANdExIA7AnVPFT8-xoVpqqHOKdReJ8-kY6OBxNWbLuqV5G9qyFA3GRR4f8RgXggLpl3--tBxtvx4RXF-o~tz1QK9~KsjPXgHrTOWaG9hxCtUXW8pUG29OmNCQHW82OG1Zrp7vSr2~miAlyH79CGiY6FVC2wWCKudqdJ1opmE7c9U69HxSI878MCNXWXocaBOmO4NlDKOuytEq~dbH7YnUkpqYIcZzbdT9AeycY9~l2djhEk3ftH9jzysVDyXlL2FiBUkujucwzE8IA96bToFyk8e3RUQwcRMePkKKLEvaklUGUS6Vw__',
    title: 'iOS 13 & Swift 5 - Complete iOS...',
    instructor: 'Kitani Studio',
    completedVideos: 10,
    totalVideos: 10
  },
  {
    avt: 'https://s3-alpha-sig.figma.com/img/bea9/9bca/2865041df3ac26b9b339b24e61ba8313?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NrFzsPsPO0hAr4poXO9ml-nJx47fuLbQqrAC-SwThzuvxTlcjm7lcsFQzuij48vFPI79XNN52IoEDWPMdu4yto8DXbhZcmlGhu9~Q~LVhXJRbkCfWXJz0SYM~EmYuNMXTgdzd0n~66ECo9bNV-b7JCbP4OEKIf33mSPeifMKO5pTkgwZ9q0qX1FYrhBTUERRB9I-UuF9hi9pMhsLcHbQZQ0dxg9FRSBAiBTZLklbo2dHewl065lQnON5DTkSfWW89TA9YjiHLDAUDi-2SA1wkyGTQsISJiPvDtiy784bI5jICS~nXzACLAFtTHnOmmR1gUNMQqrmKUaE0E9nbzP1fA__',
    title: 'Wordpress Course Intermediate',
    instructor: 'Kitani Studio',
    completedVideos: 8,
    totalVideos: 8
  }
])
</script>

<style scoped></style>
