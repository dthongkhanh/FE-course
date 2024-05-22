<template>
  <DefaultLayout :hasShadow="true">
    <div>
      <div class="container max-w-[335px] md:max-w-[675px] mx-auto relative my-4 md:my-10">
        <div class="text-center font-bold text-xl">My Account</div>
        <nav class="tab-menu mt-4 border-b-[1px] md:border-none">
          <ul class="flex w-[100%] items-center justify-between text-center overflow-x-auto">
            <li
              v-for="(menu, index) in listMenu"
              :key="index"
              :class="[
                'text-base mr-6 py-2 flex-none last:mr-0 ',
                {
                  ' border-b-primary border-b-[4px] md:border-b-[2px] font-bold md:font-normal text-primary md:text-black':
                    menu.status === 'active'
                }
              ]"
            >
              {{ menu.title }}
            </li>
          </ul>
        </nav>
        <div class="update max-w-[587px] mx-auto mt-8">
          <form method="post">
            <div class="ava flex justify-center">
              <div id="preview" class="relative w-[80px] h-[80px]">
                <img v-if="url" :src="url" class="rounded-full w-full h-full" />
                <label
                  class="absolute bottom-0 right-0 w-[28px] h-[28px] bg-[#050505] bg-opacity-[77%] rounded-full flex justify-center items-center"
                  for="input-ava"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.62484 5.54167C2.304 5.54167 2.0415 5.27917 2.0415 4.95833V3.79167H0.874837C0.554004 3.79167 0.291504 3.52917 0.291504 3.20833C0.291504 2.8875 0.554004 2.625 0.874837 2.625H2.0415V1.45833C2.0415 1.1375 2.304 0.875 2.62484 0.875C2.94567 0.875 3.20817 1.1375 3.20817 1.45833V2.625H4.37484C4.69567 2.625 4.95817 2.8875 4.95817 3.20833C4.95817 3.52917 4.69567 3.79167 4.37484 3.79167H3.20817V4.95833C3.20817 5.27917 2.94567 5.54167 2.62484 5.54167ZM6.35929 7.58333C6.6719 7.04188 7.24962 6.70833 7.87484 6.70833C8.50005 6.70833 9.07777 7.04188 9.39038 7.58333C9.70299 8.12478 9.70299 8.79188 9.39038 9.33333C9.07777 9.87478 8.50005 10.2083 7.87484 10.2083C7.24962 10.2083 6.6719 9.87478 6.35929 9.33333C6.04669 8.79188 6.04669 8.12478 6.35929 7.58333ZM12.5415 3.79167H10.6923L9.969 3.00417C9.75317 2.765 9.43817 2.625 9.1115 2.625H5.37817C5.47734 2.8 5.5415 2.9925 5.5415 3.20833C5.5415 3.85 5.0165 4.375 4.37484 4.375H3.7915V4.95833C3.7915 5.6 3.2665 6.125 2.62484 6.125C2.409 6.125 2.2165 6.06083 2.0415 5.96167V11.9583C2.0415 12.6 2.5665 13.125 3.20817 13.125H12.5415C13.1832 13.125 13.7082 12.6 13.7082 11.9583V4.95833C13.7082 4.31667 13.1832 3.79167 12.5415 3.79167ZM4.95817 8.45833C4.95817 10.0683 6.26484 11.375 7.87484 11.375C9.48484 11.375 10.7915 10.0683 10.7915 8.45833C10.7915 6.84833 9.48484 5.54167 7.87484 5.54167C6.26484 5.54167 4.95817 6.84833 4.95817 8.45833Z"
                      fill="#F9F9F9"
                      fill-opacity="0.9"
                    />
                  </svg>
                </label>
              </div>
              <input
                type="file"
                id="input-ava"
                accept="image/*"
                @change="onFileChange"
                class="hidden"
              />
            </div>
            <div class="first-name relative">
              <input
                placeholder="First Name"
                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-5 pb-1 text-base font-normal text-dark-90 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-dark-90 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label
                class="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-dark-60 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-[1px] after:border-dark-10 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-dark-90 peer-focus:text-sm"
              >
                First Name
              </label>
            </div>
            <div class="last-name mt-6 relative">
              <input
                placeholder="Last Name"
                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-5 pb-1 text-base font-normal text-dark-90 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-dark-90 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label
                class="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-dark-60 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-[1px] after:border-dark-10 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-dark-90 peer-focus:text-sm"
              >
                Last Name
              </label>
            </div>
            <div class="headline mt-6 relative">
              <input
                placeholder="Headline"
                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-5 pb-1 text-base font-normal text-dark-90 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-dark-90 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label
                class="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-dark-60 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-[1px] after:border-dark-10 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-dark-90 peer-focus:text-sm"
              >
                Headline
              </label>
            </div>
            <div class="lang mt-6 relative border-b-[1px]">
              <label class="flex h-full w-full text-sm font-normal leading-tight text-dark-60">
                Language
              </label>
              <select id="" class="text-base text-dark-90 mt-2 focus:outline-none w-full">
                <option selected>English</option>
                <option value="">Vietnamese</option>
              </select>
            </div>
            <div class="link mt-6 relative">
              <input
                placeholder="Link"
                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-5 pb-1 text-base font-normal text-dark-90 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-dark-90 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label
                class="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-dark-60 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-[1px] after:border-dark-10 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-dark-90 peer-focus:text-sm"
              >
                Link
              </label>
            </div>
            <div class="flex justify-center mt-4 md:mt-10">
              <button class="btn-primary btn-medium w-full md:w-1/3 rounded-[14px]">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref } from 'vue'

const listMenu = ref([
  {
    title: 'Profile',
    status: 'active'
  },
  {
    title: 'Personalisation',
    status: ''
  },
  {
    title: 'Account',
    status: ''
  },
  {
    title: 'Payment Methods',
    status: ''
  },
  {
    title: 'Notifications',
    status: ''
  },
  {
    title: 'Privacy',
    status: ''
  }
])
const url = ref(
  'https://s3-alpha-sig.figma.com/img/95bc/a3ec/af6d28d115834f85b6163b6e58e91c7c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5Bc9~qEtSPhbYUWvpmibv~Ftcp5uetl41vPU8P3IyybLuJZrh5uRhH1DvF~ENDaDmIthvFdJ-UzM9zt1M6IGCISL2KYu-9j1ew2ZJTp3TofK6~TE-V1fsRI3AWDt7MXV1BG7Q6LH6O39oAjjwqrt1fZ~qjJgAezc-kVNkwXsdJ8N8rsnyS-7PAQZ1AV-gazG40nMkVGa3TCkEbVtrQxLEjtffCi-EBok~fpppooAda-1ZklM3J0K~NR08Y5wr4x~R5hrNU5CuR292oYvkhnEk7wzl-vHmEG6CZs3BJZfpBp6ZAc1PUPp7t1BGyIPoQ-nyrVubreEVTElybsvRMsLg__'
)

const onFileChange = (e: Event) => {
  const input = e.target as HTMLInputElement
  if (input.files && input.files[0]) {
    const file = input.files[0]
    url.value = URL.createObjectURL(file)
  }
}

// const previewImage = (event: Event) => {
//   const input = event.target as HTMLInputElement
//   if (input.files && input.files[0]) {
//     const reader = new FileReader()
//     reader.onload = (e) => {
//       if (e.target && typeof e.target.result === 'string') {
//         preview.value = e.target.result
//       }
//     }
//     image.value = input.files[0]
//     reader.readAsDataURL(input.files[0])
//   }
// }
</script>

<style scoped></style>
