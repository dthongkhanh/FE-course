<template>
  <div class="border-b-black border-b-2 border-opacity-5 md:border-none">
    <div
      class="container max-w-sm md:max-w-md lg:max-w-lg mx-auto flex items-center justify-between h-[60px]"
    >
      <div class="md:hidden">
        <button @click="toggleMenu" class="flex items-center mr-2">
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.33333 1.66667C0.875 1.66667 0.5 1.29167 0.5 0.833333C0.5 0.375 0.875 0 1.33333 0H14.6667C15.125 0 15.5 0.375 15.5 0.833333C15.5 1.29167 15.125 1.66667 14.6667 1.66667H1.33333ZM1.33333 5.83333H14.6667C15.125 5.83333 15.5 5.45833 15.5 5C15.5 4.54167 15.125 4.16667 14.6667 4.16667H1.33333C0.875 4.16667 0.5 4.54167 0.5 5C0.5 5.45833 0.875 5.83333 1.33333 5.83333ZM1.33333 10H14.6667C15.125 10 15.5 9.625 15.5 9.16667C15.5 8.70833 15.125 8.33333 14.6667 8.33333H1.33333C0.875 8.33333 0.5 8.70833 0.5 9.16667C0.5 9.625 0.875 10 1.33333 10Z"
              fill="#3DCBB1"
            />
          </svg>
        </button>
      </div>

      <div class="logo">
        <a href="/">
          <IconLogo />
        </a>
      </div>
      <div class="browse text-sm w-auto hidden md:flex lg:hidden">
        <select class="focus:outline-none">
          <option selected>Browse</option>
          <option value="">a</option>
        </select>
      </div>
      <div
        class="search font-normal text-sm justify-between items-center w-[40%] h-[37px] hidden md:flex"
      >
        <form class="flex w-full h-full bg-[#F9F9F9] bg-opacity-90 rounded p-1">
          <input
            type="search"
            placeholder="Search for course"
            required
            class="block h-full w-full bg-transparent border-0 flex-grow placeholder-dark-60 focus:outline-none"
          />
          <button type="submit">
            <IconSearch />
          </button>
        </form>
      </div>
      <div class="items-center justify-between md:w-[8%] lg:w-1/3 hidden md:flex">
        <a href="#" class="text-base font-normal hidden lg:flex">Become Instructor</a>
        <div class="shopping-cart">
          <IconCart />
        </div>
        <div class="notifications">
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.2901 15.04L14.0001 13.75V8.75C14.0001 5.68 12.3601 3.11 9.50005 2.43V1.75C9.50005 0.92 8.83005 0.25 8.00005 0.25C7.17005 0.25 6.50005 0.92 6.50005 1.75V2.43C3.63005 3.11 2.00005 5.67 2.00005 8.75V13.75L0.710051 15.04C0.0800514 15.67 0.520051 16.75 1.41005 16.75H14.5801C15.4801 16.75 15.9201 15.67 15.2901 15.04ZM4.00005 14.75V8.75C4.00005 6.27 5.51005 4.25 8.00005 4.25C10.4901 4.25 12.0001 6.27 12.0001 8.75V14.75H4.00005ZM10.0001 17.75C10.0001 18.85 9.10005 19.75 8.00005 19.75C6.89005 19.75 6.00005 18.85 6.00005 17.75H10.0001Z"
              fill="#1B1B1B"
            />
          </svg>
        </div>
        <button @click="showLogin = !showLogin" class="btn-outline btn-small hidden lg:flex">
          Login
        </button>
        <button @click="showSignUp = !showSignUp" class="btn-primary btn-small hidden lg:flex">
          <IconSignUp class="fill-current w-4 h-4 mr-2" />
          Sign up
        </button>
      </div>
      <div class="flex w-[55px] items-center justify-between ml-auto right-0 md:hidden">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.66357 2.50008C1.66357 2.95841 2.03857 3.33341 2.49691 3.33341H3.33024L6.33024 9.65841L5.20524 11.6917C4.59691 12.8084 5.39691 14.1667 6.66357 14.1667H15.8302C16.2886 14.1667 16.6636 13.7917 16.6636 13.3334C16.6636 12.8751 16.2886 12.5001 15.8302 12.5001H6.66357L7.58024 10.8334H13.7886C14.4136 10.8334 14.9636 10.4917 15.2469 9.97508L18.2302 4.56675C18.5386 4.01675 18.1386 3.33341 17.5052 3.33341H5.17191L4.61357 2.14175C4.48024 1.85008 4.18024 1.66675 3.86357 1.66675H2.49691C2.03857 1.66675 1.66357 2.04175 1.66357 2.50008ZM6.66357 15.0001C5.74691 15.0001 5.00524 15.7501 5.00524 16.6667C5.00524 17.5834 5.74691 18.3334 6.66357 18.3334C7.58024 18.3334 8.33024 17.5834 8.33024 16.6667C8.33024 15.7501 7.58024 15.0001 6.66357 15.0001ZM13.3386 16.6667C13.3386 15.7501 14.0802 15.0001 14.9969 15.0001C15.9136 15.0001 16.6636 15.7501 16.6636 16.6667C16.6636 17.5834 15.9136 18.3334 14.9969 18.3334C14.0802 18.3334 13.3386 17.5834 13.3386 16.6667Z"
            fill="#1B1B1B"
            fill-opacity="0.6"
          />
        </svg>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.0013 8.95833V13.125L16.0763 14.2C16.6013 14.725 16.2263 15.625 15.4846 15.625H4.5096C3.76793 15.625 3.40126 14.725 3.92626 14.2L5.00126 13.125V8.95833C5.00126 6.39167 6.3596 4.25833 8.75126 3.69167V3.125C8.75126 2.43333 9.3096 1.875 10.0013 1.875C10.6929 1.875 11.2513 2.43333 11.2513 3.125V3.69167C13.6346 4.25833 15.0013 6.4 15.0013 8.95833ZM11.6679 16.4583C11.6679 17.375 10.9179 18.125 10.0013 18.125C9.07626 18.125 8.3346 17.375 8.3346 16.4583H11.6679Z"
            fill="#1B1B1B"
            fill-opacity="0.6"
          />
        </svg>
      </div>
      <div v-if="showMenu" class="w-full bg-purple-300">
        <ul class="">
          <li>Become Instructor</li>
          <li>Cart</li>
          <li>
            <button @click="showLogin = !showLogin" class="btn-outline btn-small w-full">
              Login
            </button>
          </li>
          <li>
            <button @click="showSignUp = !showSignUp" class="btn-primary btn-small w-full">
              <IconSignUp class="fill-current w-4 h-4 mr-2" />
              Sign up
            </button>
          </li>
        </ul>
      </div>
      <LoginView :show="showLogin" @close-form="closeForm" />
      <SignUpView :show="showSignUp" @close-form="closeForm" />
    </div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginView from './LoginView.vue'
import IconCart from './icons/IconCart.vue'
import IconLogo from './icons/IconLogo.vue'
import IconSearch from './icons/IconSearch.vue'
import IconSignUp from './icons/IconSignUp.vue'
import SignUpView from './SignUpView.vue'

const showLogin = ref(false)
const showSignUp = ref(false)
const closeForm = () => {
  showLogin.value = false
  showSignUp.value = false
}

const showMenu = ref(false)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>

<style scoped></style>
