<template>
  <div v-if="show" class="flex bg-[#1B1B1B] bg-opacity-60 fixed inset-0 z-10">
    <div
      class="modal w-full h-full md:w-[800px] md:h-[550px] bg-white md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 absolute rounded-lg flex"
    >
      <button @click="closeForm" class="hidden md:flex absolute right-2 top-2">✕</button>
      <div
        class="left hidden md:flex w-1/2 bg-[url('@/images/login.png')] bg-cover bg-center h-full"
      ></div>
      <div class="right md:w-1/2 right-0 p-5">
        <div class="logo hidden md:flex">
          <a href="/"><IconLogo /></a>
        </div>
        <p class="text-dark-60 text-base mt-2 mb-4">
          Join us and get more benefits. We promise to keep your data safely.
        </p>
        <form class="" action="#" method="POST">
          <div
            class="email flex items-center w-full h-full border-b-[1px] md:border-0 md:bg-[#F9F9F9] bg-opacity-90 md:rounded p-3 mb-2"
          >
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block h-full w-full bg-transparent border-0 flex-grow placeholder-dark-60 focus:outline-none"
              placeholder="Email Address"
            />
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.5 3.5H3.5C2.5375 3.5 1.75875 4.2875 1.75875 5.25L1.75 15.75C1.75 16.7125 2.5375 17.5 3.5 17.5H17.5C18.4625 17.5 19.25 16.7125 19.25 15.75V5.25C19.25 4.2875 18.4625 3.5 17.5 3.5ZM17.5 14.875C17.5 15.3562 17.1062 15.75 16.625 15.75H4.375C3.89375 15.75 3.5 15.3562 3.5 14.875V7L9.5725 10.7975C10.1412 11.1562 10.8588 11.1562 11.4275 10.7975L17.5 7V14.875ZM3.5 5.25L10.5 9.625L17.5 5.25H3.5Z"
                fill="#1B1B1B"
                fill-opacity="0.6"
              />
            </svg>
          </div>
          <div
            class="password flex items-center w-full h-full border-b-[1px] md:border-0 md:bg-[#F9F9F9] bg-opacity-90 md:rounded p-3 mb-3"
          >
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="password"
              required
              class="block h-full w-full bg-transparent border-0 flex-grow placeholder-dark-60 focus:outline-none"
              placeholder="Password"
            />
            <svg
              width="15"
              height="19"
              viewBox="0 0 15 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.75 6.4375H11.875V4.6875C11.875 2.2725 9.915 0.3125 7.5 0.3125C5.085 0.3125 3.125 2.2725 3.125 4.6875V6.4375H2.25C1.2875 6.4375 0.5 7.225 0.5 8.1875V16.9375C0.5 17.9 1.2875 18.6875 2.25 18.6875H12.75C13.7125 18.6875 14.5 17.9 14.5 16.9375V8.1875C14.5 7.225 13.7125 6.4375 12.75 6.4375ZM7.5 14.3125C6.5375 14.3125 5.75 13.525 5.75 12.5625C5.75 11.6 6.5375 10.8125 7.5 10.8125C8.4625 10.8125 9.25 11.6 9.25 12.5625C9.25 13.525 8.4625 14.3125 7.5 14.3125ZM4.875 4.6875V6.4375H10.125V4.6875C10.125 3.235 8.9525 2.0625 7.5 2.0625C6.0475 2.0625 4.875 3.235 4.875 4.6875Z"
                fill="#1B1B1B"
                fill-opacity="0.6"
              />
            </svg>
          </div>
          <button
            type="submit"
            class="bg-[#C42A22] text-white font-bold md:btn-primary btn-medium rounded-[14px] w-full"
          >
            Login
          </button>
        </form>
        <p class="my-4 text-center">or you can</p>
        <div
          class="login-facebook btn-medium rounded-[14px] w-full bg-[#4267B2] text-white mb-2 font-bold"
        >
          <a href="#" class="flex items-center justify-center">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8411 3.09286e-10H1.15106C0.84506 0.00207934 0.552299 0.125099 0.336656 0.342217C0.121013 0.559335 -7.06435e-06 0.852928 3.09286e-10 1.15894V19.8489C0.00207934 20.1549 0.125099 20.4477 0.342217 20.6633C0.559335 20.879 0.852928 21 1.15894 21H11.2179V12.8796H8.48794V9.69938H11.2179V7.36312C11.2179 4.6515 12.8756 3.16312 15.2946 3.16312C16.1109 3.15966 16.9268 3.20173 17.7384 3.28912V6.132H16.0584C14.7459 6.132 14.4926 6.762 14.4926 7.6755V9.69938H17.64L17.22 12.8796H14.49V21H19.8411C20.1484 21 20.4432 20.8779 20.6606 20.6606C20.8779 20.4432 21 20.1484 21 19.8411V1.15106C20.9979 0.84506 20.8749 0.552299 20.6578 0.336656C20.4407 0.121013 20.1471 -7.06435e-06 19.8411 3.09286e-10Z"
                fill="white"
              />
            </svg>
            <div class="ml-2">Continue with Facebook</div>
          </a>
        </div>
        <div
          class="login-apple btn-medium rounded-[14px] w-full bg-[#1B1B1B] text-white mb-2 font-bold"
        >
          <a href="#" class="flex items-center justify-center">
            <svg
              width="17"
              height="21"
              viewBox="0 0 17 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8508 11.1566C13.8792 14.3346 16.5304 15.3922 16.5598 15.4056C16.5374 15.4802 16.1362 16.9128 15.163 18.3925C14.3217 19.6717 13.4486 20.9463 12.0732 20.9727C10.7217 20.9986 10.2871 20.1389 8.74201 20.1389C7.19734 20.1389 6.71451 20.9463 5.43518 20.9986C4.10755 21.0509 3.09657 19.6153 2.24832 18.3407C0.515024 15.7335 -0.809575 10.9733 0.969027 7.76014C1.8526 6.16446 3.43161 5.15402 5.14548 5.12811C6.44918 5.10223 7.67971 6.04065 8.47668 6.04065C9.27314 6.04065 10.7685 4.91212 12.3405 5.07786C12.9986 5.10636 14.8459 5.35444 16.0321 7.16093C15.9365 7.22257 13.8279 8.49974 13.8508 11.1566V11.1566ZM11.3109 3.35296C12.0157 2.46528 12.4901 1.22955 12.3607 0C11.3447 0.0424842 10.1162 0.704394 9.38742 1.59159C8.73433 2.37724 8.16236 3.63472 8.31669 4.83994C9.44912 4.93109 10.606 4.24121 11.3109 3.35297"
                fill="white"
              />
            </svg>

            <div class="ml-2">Continue with Apple</div>
          </a>
        </div>
        <div
          class="login-google btn-medium border-[1px] border-black rounded-[14px] w-full border-opacity-10 font-bold"
        >
          <a href="#" class="flex items-center justify-center">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_427_4120"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="10"
                y="8"
                width="11"
                height="11"
              >
                <path
                  d="M20.58 10.7385C20.58 9.99401 20.5132 9.27805 20.3891 8.59082H10.5V12.6524H16.1509C15.9075 13.9649 15.1677 15.077 14.0557 15.8215V18.4561H17.4491C19.4346 16.6281 20.58 13.9363 20.58 10.7385Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_427_4120)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5 18.4561H20.58V8.59082H10.5V18.4561Z"
                  fill="#5070A8"
                />
              </g>
              <mask
                id="mask1_427_4120"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="1"
                y="12"
                width="17"
                height="10"
              >
                <path
                  d="M10.4997 21.0002C13.3347 21.0002 15.7116 20.0599 17.4488 18.4563L14.0555 15.8218C13.1152 16.4518 11.9125 16.824 10.4997 16.824C7.76495 16.824 5.45014 14.977 4.62453 12.4951H1.11658V15.2156C2.84431 18.6472 6.39514 21.0002 10.4997 21.0002Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask1_427_4120)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.11658 21.0002H17.4488V12.4951H1.11658V21.0002Z"
                  fill="#2F9E4F"
                />
              </g>
              <mask
                id="mask2_427_4120"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="5"
                width="5"
                height="11"
              >
                <path
                  d="M4.62477 12.495C4.41473 11.8651 4.2954 11.1921 4.2954 10.5C4.2954 9.80803 4.41473 9.13507 4.62477 8.50505V5.78467H1.11682C0.405699 7.20214 0 8.80576 0 10.5C0 12.1944 0.405699 13.7981 1.11682 15.2155L4.62477 12.495Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask2_427_4120)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 15.2155H4.62477V5.78467H0V15.2155Z"
                  fill="#EFB529"
                />
              </g>
              <mask
                id="mask3_427_4120"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="1"
                y="0"
                width="17"
                height="9"
              >
                <path
                  d="M10.4997 4.17613C12.0413 4.17613 13.4254 4.70594 14.5136 5.74637L17.5252 2.73478C15.7067 1.04049 13.3299 0 10.4997 0C6.39514 0 2.84431 2.35297 1.11658 5.7846L4.62453 8.50498C5.45014 6.02319 7.76495 4.17613 10.4997 4.17613Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask3_427_4120)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.11658 8.50498H17.5252V0H1.11658V8.50498Z"
                  fill="#D53E36"
                />
              </g>
            </svg>
            <div class="ml-2">Continue with Google</div>
          </a>
        </div>
        <div class="mt-4 flex text-dark-60 justify-center">
          <p>Need an Account?</p>
          <a href="" class="text-primary font-bold">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconLogo from './icons/IconLogo.vue'

const props = defineProps(['show'])
const emit = defineEmits(['close-form'])
const closeForm = () => {
  emit('close-form')
}
</script>

<style scoped></style>
