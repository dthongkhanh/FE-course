<template>
  <DefaultLayout :hasShadow="true">
    <div class="md:hidden video bg-[#C0C0C0] h-[210px] md:h-[380px] md:rounded-[30px] flex">
      <button
        class="w-[53px] h-[53px] md:w-[105px] md:h-[105px] rounded-full md:rounded-[30px] bg-[#1B1B1B] bg-opacity-50 flex m-auto"
      >
        <div class="hidden md:block md:m-auto">
          <svg
            width="28"
            height="39"
            viewBox="0 0 28 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.352295 36.3591V2.46433C0.352295 0.479065 2.62602 -0.683042 4.22246 0.527486L26.8145 17.4749C28.1207 18.4433 28.1207 20.3801 26.8145 21.3486L4.22246 38.296C2.62602 39.5065 0.352295 38.3444 0.352295 36.3591Z"
              fill="#3DCBB1"
            />
          </svg>
        </div>
        <div class="m-auto md:hidden">
          <svg
            width="15"
            height="20"
            viewBox="0 0 15 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.891113 18.6414V1.51046C0.891113 0.507076 2.03669 -0.0802715 2.84102 0.531549L14.2236 9.09704C14.8817 9.58649 14.8817 10.5654 14.2236 11.0549L2.84102 19.6203C2.03669 20.2322 0.891113 19.6448 0.891113 18.6414Z"
              fill="#C5322A"
            />
          </svg>
        </div>
      </button>
    </div>
    <div class="container max-w-sm md:max-w-md lg:max-w-lg mx-auto relative my-3 md:my-10">
      <div class="course-info mb-6 hidden md:block">
        <p class="text-base text-dark-90">Development / Mobile Engineer</p>
        <p class="text-[32px] leading-[42px] font-bold">Make Uber Clone App</p>
        <div class="flex">
          <p class="text-base text-[#C5322A]">Steven Arnatouvic</p>
          <div class="rating flex items-center justify-between ml-4 w-[148px]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00007 14.5195L13.1501 17.0295C13.9101 17.4895 14.8401 16.8095 14.6401 15.9495L13.5401 11.2295L17.2101 8.04952C17.8801 7.46952 17.5201 6.36952 16.6401 6.29952L11.8101 5.88952L9.92007 1.42952C9.58007 0.619521 8.42007 0.619521 8.08007 1.42952L6.19007 5.87952L1.36007 6.28952C0.480073 6.35952 0.120073 7.45952 0.790073 8.03952L4.46007 11.2195L3.36007 15.9395C3.16007 16.7995 4.09007 17.4795 4.85007 17.0195L9.00007 14.5195Z"
                fill="#F4D876"
              />
            </svg>
            <p class="text-base">4.8</p>
            <p class="text-dark-60 text-sm">(1,812 ratings)</p>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 grid-flow-row gap-0 md:gap-6">
        <div class="hidden md:grid lg:grig md:col-span-3 lg:col-span-2">
          <div class="video bg-[#C0C0C0] h-[210px] md:h-[380px] md:rounded-[30px] flex">
            <button
              class="w-[53px] h-[53px] md:w-[105px] md:h-[105px] rounded-full md:rounded-[30px] bg-[#1B1B1B] bg-opacity-50 flex m-auto"
            >
              <div class="hidden md:block md:m-auto">
                <svg
                  width="28"
                  height="39"
                  viewBox="0 0 28 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.352295 36.3591V2.46433C0.352295 0.479065 2.62602 -0.683042 4.22246 0.527486L26.8145 17.4749C28.1207 18.4433 28.1207 20.3801 26.8145 21.3486L4.22246 38.296C2.62602 39.5065 0.352295 38.3444 0.352295 36.3591Z"
                    fill="#3DCBB1"
                  />
                </svg>
              </div>
              <div class="m-auto md:hidden">
                <svg
                  width="15"
                  height="20"
                  viewBox="0 0 15 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.891113 18.6414V1.51046C0.891113 0.507076 2.03669 -0.0802715 2.84102 0.531549L14.2236 9.09704C14.8817 9.58649 14.8817 10.5654 14.2236 11.0549L2.84102 19.6203C2.03669 20.2322 0.891113 19.6448 0.891113 18.6414Z"
                    fill="#C5322A"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div class="col-span-3 md:hidden">
          <div class="course-info my-4">
            <p class="text-base font-bold">Make Uber Clone App</p>
            <p class="text-sm text-primary">Steven Arnatouvic</p>
          </div>
          <div class="blocker flex items-center justify-between mb-4">
            <div class="price">
              <p class="text-base mr-2 uppercase">US$22.40</p>
              <div class="discount flex items-center">
                <p class="text-dark-60 line-through text-[10px] mr-2">$30.13</p>
                <p class="uppercase bg-[#A04AE3] rounded-sm text-[8px] font-bold text-white p-1">
                  20%
                </p>
              </div>
            </div>
            <div class="rating">
              <div class="flex items-center justify-end">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00007 14.5195L13.1501 17.0295C13.9101 17.4895 14.8401 16.8095 14.6401 15.9495L13.5401 11.2295L17.2101 8.04952C17.8801 7.46952 17.5201 6.36952 16.6401 6.29952L11.8101 5.88952L9.92007 1.42952C9.58007 0.619521 8.42007 0.619521 8.08007 1.42952L6.19007 5.87952L1.36007 6.28952C0.480073 6.35952 0.120073 7.45952 0.790073 8.03952L4.46007 11.2195L3.36007 15.9395C3.16007 16.7995 4.09007 17.4795 4.85007 17.0195L9.00007 14.5195Z"
                    fill="#F4D876"
                  />
                </svg>
                <p class="text-base ml-2">4.8</p>
              </div>

              <p class="text-dark-60 text-[10px]">(1,812 ratings)</p>
            </div>
          </div>
        </div>
        <div class="hidden lg:block">
          <div class="bg-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.05)] p-6 h-full">
            <div class="blocker">
              <div class="price flex items-center">
                <p class="font-bold text-2xl mr-2 uppercase">US$22.40</p>
                <p class="text-dark-60 line-through text-base">$30.13</p>
              </div>
              <div class="discount uppercase bg-[#A04AE3] rounded-sm text-white p-1 inline">
                20% OFF
              </div>
              <div class="btn btn-primary btn-large flex justify-center my-5">Buy</div>
              <div
                class="btn btn-outline btn-large flex justify-center items-center border-dark-60 text-dark-60"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.0004 5.70604C14.9071 3.47437 18.4387 2.56437 21.2987 4.51437C22.8154 5.55437 23.7687 7.30937 23.8337 9.15104C23.9746 13.3544 20.2587 16.7235 14.5712 21.8802L14.4521 21.9885C13.6287 22.7469 12.3612 22.7469 11.5379 21.9994L11.4296 21.9019L11.3641 21.8424C5.7135 16.7085 2.01598 13.3491 2.16706 9.16187C2.23206 7.30937 3.18539 5.55437 4.70206 4.51437C7.56206 2.55354 11.0937 3.47437 13.0004 5.70604ZM13.0004 20.396L13.1087 20.2877C18.2654 15.6185 21.6671 12.531 21.6671 9.4002C21.6671 7.23354 20.0421 5.60854 17.8754 5.60854C16.2071 5.60854 14.5821 6.68104 14.0187 8.1652H11.9929C11.4187 6.68104 9.79373 5.60854 8.12539 5.60854C5.95873 5.60854 4.33373 7.23354 4.33373 9.4002C4.33373 12.531 7.73539 15.6185 12.8921 20.2877L13.0004 20.396Z"
                    fill="#1B1B1B"
                    fill-opacity="0.6"
                  />
                </svg>
                <span class="ml-2">Wishlist</span>
              </div>
              <ul class="text-dark-90 text-base">
                <li class="flex my-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20 3H4C3.45 3 3 3.45 3 4V20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20V4C21 3.45 20.55 3 20 3ZM9 7H7V9H9V7ZM16 9H12C11.45 9 11 8.55 11 8C11 7.45 11.45 7 12 7H16C16.55 7 17 7.45 17 8C17 8.55 16.55 9 16 9ZM16 13H12C11.45 13 11 12.55 11 12C11 11.45 11.45 11 12 11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13ZM12 17H16C16.55 17 17 16.55 17 16C17 15.45 16.55 15 16 15H12C11.45 15 11 15.45 11 16C11 16.55 11.45 17 12 17ZM7 11H9V13H7V11ZM9 15H7V17H9V15ZM5 19H19V5H5V19Z"
                      fill="#1B1B1B"
                      fill-opacity="0.6"
                    />
                  </svg>
                  <span class="ml-2">22 Section</span>
                </li>
                <li class="flex my-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21 3.5H3C1.9 3.5 1 4.4 1 5.5V18.5C1 19.6 1.9 20.5 3 20.5H21C22.1 20.5 23 19.6 23 18.5V5.5C23 4.4 22.1 3.5 21 3.5ZM21 17.5C21 18.05 20.55 18.5 20 18.5H12V5.5H20C20.55 5.5 21 5.95 21 6.5V17.5ZM13.75 9H19.25C19.66 9 20 9.34 20 9.75C20 10.16 19.66 10.5 19.25 10.5H13.75C13.34 10.5 13 10.16 13 9.75C13 9.34 13.34 9 13.75 9ZM19.25 11.5H13.75C13.34 11.5 13 11.84 13 12.25C13 12.66 13.34 13 13.75 13H19.25C19.66 13 20 12.66 20 12.25C20 11.84 19.66 11.5 19.25 11.5ZM13.75 14H19.25C19.66 14 20 14.34 20 14.75C20 15.16 19.66 15.5 19.25 15.5H13.75C13.34 15.5 13 15.16 13 14.75C13 14.34 13.34 14 13.75 14Z"
                      fill="#1B1B1B"
                      fill-opacity="0.6"
                    />
                  </svg>
                  <span class="ml-2">152 Lectures</span>
                </li>
                <li class="flex my-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21 5.9001H13.41L16.35 2.9601C16.55 2.7601 16.55 2.4501 16.35 2.2501C16.15 2.0501 15.84 2.0501 15.64 2.2501L12 5.8901L8.36 2.2501C8.16 2.0501 7.85 2.0501 7.65 2.2501C7.45 2.4501 7.45 2.7601 7.65 2.9601L10.59 5.9001H3C1.9 5.9001 1 6.7901 1 7.9001V19.9001C1 21.0001 1.9 21.9001 3 21.9001H21C22.1 21.9001 23 21.0001 23 19.9001V7.9001C23 6.7901 22.1 5.9001 21 5.9001ZM10.5 17.0501L14.48 14.7701C15.15 14.3901 15.15 13.4201 14.48 13.0301L10.5 10.7501C9.83 10.3701 9 10.8601 9 11.6201V16.1701C9 16.9401 9.83 17.4301 10.5 17.0501ZM4 19.9001H20C20.55 19.9001 21 19.4501 21 18.9001V8.9001C21 8.3501 20.55 7.9001 20 7.9001H4C3.45 7.9001 3 8.3501 3 8.9001V18.9001C3 19.4501 3.45 19.9001 4 19.9001Z"
                      fill="#1B1B1B"
                      fill-opacity="0.6"
                    />
                  </svg>
                  <span class="ml-2">21h 33m total lenghts</span>
                </li>
                <li class="flex my-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14 4.65179V4.45179C14 3.82179 14.63 3.37179 15.21 3.60179C18.6 4.89179 21 8.16179 21 12.0018C21 15.8418 18.6 19.1118 15.21 20.4018C14.63 20.6218 14 20.1818 14 19.5518V19.3518C14 18.9718 14.24 18.6418 14.6 18.5018C17.18 17.4718 19 14.9418 19 12.0018C19 9.06179 17.18 6.53179 14.6 5.50179C14.25 5.36179 14 5.03179 14 4.65179ZM3 10.0018V14.0018C3 14.5518 3.45 15.0018 4 15.0018H7L10.29 18.2918C10.92 18.9218 12 18.4718 12 17.5818V6.41179C12 5.52179 10.92 5.07179 10.29 5.70179L7 9.00179H4C3.45 9.00179 3 9.45179 3 10.0018ZM16.5 12.0018C16.5 10.2318 15.48 8.71179 14 7.97179V16.0218C15.48 15.2918 16.5 13.7718 16.5 12.0018Z"
                      fill="#1B1B1B"
                      fill-opacity="0.6"
                    />
                  </svg>
                  <span class="ml-2">English</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row-span-3 col-span-2 md:block">
          <div class="tab-menu">
            <ul class="flex">
              <li
                v-for="(menu, index) in menus"
                :key="index"
                :class="[
                  'text-sm',
                  'md:text-base',
                  'text-dark-60',
                  'mr-6',
                  {
                    'text-black border-b-[#C5322A] border-b-2': menu.type === 'active'
                  }
                ]"
              >
                {{ menu.label }}
              </li>
            </ul>
          </div>
          <div class="about text-base">
            <p class="font-bold my-2">About Course</p>
            <p>
              Vue (pronounced /vjuː/, like view) is a progressive framework for building user
              interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to
              be incrementally adoptable. The core library is focused on the view layer only, and is
              easy to pick up and integrate with other libraries or existing projects. On the other
              hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications
              when used in combination with modern tooling and supporting libraries.
            </p>
          </div>
          <ReviewItem :reviews="reviews" />
        </div>
        <div class="hidden md:block lg:hidden">
          <div class="bg-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.05)] p-6 h-full">
            <div class="blocker">
              <ul class="text-dark-90 text-base">
                <li class="flex my-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20 3H4C3.45 3 3 3.45 3 4V20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20V4C21 3.45 20.55 3 20 3ZM9 7H7V9H9V7ZM16 9H12C11.45 9 11 8.55 11 8C11 7.45 11.45 7 12 7H16C16.55 7 17 7.45 17 8C17 8.55 16.55 9 16 9ZM16 13H12C11.45 13 11 12.55 11 12C11 11.45 11.45 11 12 11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13ZM12 17H16C16.55 17 17 16.55 17 16C17 15.45 16.55 15 16 15H12C11.45 15 11 15.45 11 16C11 16.55 11.45 17 12 17ZM7 11H9V13H7V11ZM9 15H7V17H9V15ZM5 19H19V5H5V19Z"
                      fill="#1B1B1B"
                      fill-opacity="0.6"
                    />
                  </svg>
                  <span class="ml-2">22 Section</span>
                </li>
                <li class="flex my-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21 3.5H3C1.9 3.5 1 4.4 1 5.5V18.5C1 19.6 1.9 20.5 3 20.5H21C22.1 20.5 23 19.6 23 18.5V5.5C23 4.4 22.1 3.5 21 3.5ZM21 17.5C21 18.05 20.55 18.5 20 18.5H12V5.5H20C20.55 5.5 21 5.95 21 6.5V17.5ZM13.75 9H19.25C19.66 9 20 9.34 20 9.75C20 10.16 19.66 10.5 19.25 10.5H13.75C13.34 10.5 13 10.16 13 9.75C13 9.34 13.34 9 13.75 9ZM19.25 11.5H13.75C13.34 11.5 13 11.84 13 12.25C13 12.66 13.34 13 13.75 13H19.25C19.66 13 20 12.66 20 12.25C20 11.84 19.66 11.5 19.25 11.5ZM13.75 14H19.25C19.66 14 20 14.34 20 14.75C20 15.16 19.66 15.5 19.25 15.5H13.75C13.34 15.5 13 15.16 13 14.75C13 14.34 13.34 14 13.75 14Z"
                      fill="#1B1B1B"
                      fill-opacity="0.6"
                    />
                  </svg>
                  <span class="ml-2">152 Lectures</span>
                </li>
                <li class="flex my-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21 5.9001H13.41L16.35 2.9601C16.55 2.7601 16.55 2.4501 16.35 2.2501C16.15 2.0501 15.84 2.0501 15.64 2.2501L12 5.8901L8.36 2.2501C8.16 2.0501 7.85 2.0501 7.65 2.2501C7.45 2.4501 7.45 2.7601 7.65 2.9601L10.59 5.9001H3C1.9 5.9001 1 6.7901 1 7.9001V19.9001C1 21.0001 1.9 21.9001 3 21.9001H21C22.1 21.9001 23 21.0001 23 19.9001V7.9001C23 6.7901 22.1 5.9001 21 5.9001ZM10.5 17.0501L14.48 14.7701C15.15 14.3901 15.15 13.4201 14.48 13.0301L10.5 10.7501C9.83 10.3701 9 10.8601 9 11.6201V16.1701C9 16.9401 9.83 17.4301 10.5 17.0501ZM4 19.9001H20C20.55 19.9001 21 19.4501 21 18.9001V8.9001C21 8.3501 20.55 7.9001 20 7.9001H4C3.45 7.9001 3 8.3501 3 8.9001V18.9001C3 19.4501 3.45 19.9001 4 19.9001Z"
                      fill="#1B1B1B"
                      fill-opacity="0.6"
                    />
                  </svg>
                  <span class="ml-2">21h 33m total lenghts</span>
                </li>
                <li class="flex my-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14 4.65179V4.45179C14 3.82179 14.63 3.37179 15.21 3.60179C18.6 4.89179 21 8.16179 21 12.0018C21 15.8418 18.6 19.1118 15.21 20.4018C14.63 20.6218 14 20.1818 14 19.5518V19.3518C14 18.9718 14.24 18.6418 14.6 18.5018C17.18 17.4718 19 14.9418 19 12.0018C19 9.06179 17.18 6.53179 14.6 5.50179C14.25 5.36179 14 5.03179 14 4.65179ZM3 10.0018V14.0018C3 14.5518 3.45 15.0018 4 15.0018H7L10.29 18.2918C10.92 18.9218 12 18.4718 12 17.5818V6.41179C12 5.52179 10.92 5.07179 10.29 5.70179L7 9.00179H4C3.45 9.00179 3 9.45179 3 10.0018ZM16.5 12.0018C16.5 10.2318 15.48 8.71179 14 7.97179V16.0218C15.48 15.2918 16.5 13.7718 16.5 12.0018Z"
                      fill="#1B1B1B"
                      fill-opacity="0.6"
                    />
                  </svg>
                  <span class="ml-2">English</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="bg-[url('@/images/card-right.png')] h-[472px] rounded-[18px] bg-cover">
            <div class="p-6">
              <p class="font-bold bg-primary text-xs inline rounded-sm text-white p-[4px]">
                WEBINAR
              </p>
              <p class="font-normal text-xl text-[#F9F9F9] text-opacity-90 my-2">Ana Kursova</p>
              <P class="font-bold text-base md:text-[32px] text-white md:leading-[42px]"
                >Masterclass in Design Thinking, Innovation & Creativity</P
              >
              <button
                class="btn-outline border-[#FFD130] text-[#FFD130] font-bold text-xs p-[8px_16px] rounded-[3px] mt-2"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <ThePromo />
    </div>
    <div
      class="bg-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.05)] py-10 hidden md:block lg:hidden fixed bottom-0 left-0 right-0"
    >
      <div class="container max-w-sm md:max-w-md lg:max-w-lg mx-auto h-full flex items-center">
        <div class="price">
          <p class="font-bold text-base mr-2 uppercase">
            US$22.40 <span class="text-dark-60 line-through text-sm">$30.13</span>
          </p>

          <div class="discount uppercase bg-[#A04AE3] rounded-sm text-white p-1 inline text-sm">
            20% OFF
          </div>
        </div>
        <div class="flex ml-auto w-1/2 justify-between items-center">
          <div
            class="btn-outline btn-large flex justify-center items-center border-dark-60 text-dark-60 w-[48%]"
          >
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.5004 5.70616C15.4071 3.47449 18.9387 2.56449 21.7987 4.51449C23.3154 5.55449 24.2687 7.30949 24.3337 9.15116C24.4746 13.3545 20.7587 16.7237 15.0712 21.8803L14.9521 21.9887C14.1287 22.747 12.8612 22.747 12.0379 21.9995L11.9296 21.902L11.8641 21.8425C6.2135 16.7086 2.51598 13.3492 2.66706 9.16199C2.73206 7.30949 3.68539 5.55449 5.20206 4.51449C8.06206 2.55366 11.5937 3.47449 13.5004 5.70616ZM13.5004 20.3962L13.6087 20.2878C18.7654 15.6187 22.1671 12.5312 22.1671 9.40033C22.1671 7.23366 20.5421 5.60866 18.3754 5.60866C16.7071 5.60866 15.0821 6.68116 14.5187 8.16533H12.4929C11.9187 6.68116 10.2937 5.60866 8.62539 5.60866C6.45873 5.60866 4.83373 7.23366 4.83373 9.40033C4.83373 12.5312 8.23539 15.6187 13.3921 20.2878L13.5004 20.3962Z"
                fill="#1B1B1B"
                fill-opacity="0.6"
              />
            </svg>

            <p class="ml-2 text-base">Wishlist</p>
          </div>
          <div class="btn-primary btn-large flex justify-center w-[48%] text-base">Buy</div>
        </div>
      </div>
    </div>
    <div
      class="bg-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.05)] py-5 md:hidden fixed bottom-0 left-0 right-0"
    >
      <div class="max-w-sm md:max-w-md lg:max-w-lg mx-auto flex items-center justify-between">
        <div
          class="btn-outline btn-small flex justify-center items-center border-dark-60 text-dark-60 w-[48%]"
        >
          <svg
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.5004 5.70616C15.4071 3.47449 18.9387 2.56449 21.7987 4.51449C23.3154 5.55449 24.2687 7.30949 24.3337 9.15116C24.4746 13.3545 20.7587 16.7237 15.0712 21.8803L14.9521 21.9887C14.1287 22.747 12.8612 22.747 12.0379 21.9995L11.9296 21.902L11.8641 21.8425C6.2135 16.7086 2.51598 13.3492 2.66706 9.16199C2.73206 7.30949 3.68539 5.55449 5.20206 4.51449C8.06206 2.55366 11.5937 3.47449 13.5004 5.70616ZM13.5004 20.3962L13.6087 20.2878C18.7654 15.6187 22.1671 12.5312 22.1671 9.40033C22.1671 7.23366 20.5421 5.60866 18.3754 5.60866C16.7071 5.60866 15.0821 6.68116 14.5187 8.16533H12.4929C11.9187 6.68116 10.2937 5.60866 8.62539 5.60866C6.45873 5.60866 4.83373 7.23366 4.83373 9.40033C4.83373 12.5312 8.23539 15.6187 13.3921 20.2878L13.5004 20.3962Z"
              fill="#1B1B1B"
              fill-opacity="0.6"
            />
          </svg>

          <p class="ml-2">Wishlist</p>
        </div>
        <div class="btn-primary btn-small flex justify-center w-[48%]">Buy</div>
      </div>
    </div>
  </DefaultLayout>
  <RouterView />
</template>

<script setup lang="ts">
import ReviewItem from '@/components/ReviewItem.vue'
import ThePromo from '@/components/ThePromo.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref } from 'vue'

const menus = ref([
  { label: 'Description', type: '' },
  { label: 'Courses', type: 'active' },
  { label: 'Description', type: '' }
])

const reviews = ref([
  {
    avt: 'https://s3-alpha-sig.figma.com/img/6fb1/2dd9/4761d0b747352f178c49faa623d741c6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDbQozfjFIaQmvBzwWaS6eSw8iIC61KWMqgb7pNgLJ9QmuOQknGvKdGWTryAEeCmZ7~8ku-8Lv5laDBSAPxn-6MJY8zsSGmqVMgNVm62j3T9DqGeNtK8pmm4dnLL4rRRGoqGqw4kvCc~rw7Z-9CIaCGFtzhJOcF9RBKd2GdpfZDez7W53cmgSFzqZtHLvExJLlYROCb~n6e80KG2x4lNcIJyv1KbjC4GVqO819QT-jBpFZOQEgi6sRTYHxgzbd3~HPixH6ggOPMrltydKVJLv-P8E~e6KoVIyKu0hZGiHD1aBrzB50DtrsLpFRQNrG2M0XRmZtn~C14Vi2Mnwy~46Q__',
    name: 'Leonardo  Da Vinci',
    time: 'Today',
    content: "Loved the course. I've learned some very subtle tecniques,"
  },
  {
    avt: 'https://s3-alpha-sig.figma.com/img/292d/9ae2/d886fbea146ee2a35e563a3f0efad276?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ImZlqau8l7Cj5-mK1gAvFTHfW-b6feCZFueMzS3LAoObP~6MMMo~V8S6iGNjQ5NwhvMy9Q0Oq~SDKEwEsxid~WgtyD8taYPPX2-9a0ANsXFz28pPFY32F4ibwg4fqZBKdup5BCoo9MhnMKJaP6zN5uxgemO~Sy~pag-hsxe8FfngWJdtlMQyKdFS3I8xUAdIdppWcozWaeMh0YmzkHIRKVGLjHqTHZ6Jlv44TKYl99Sf6tnUjPt27NbArBU9uqgtSLd5BBLiN12x5lVacgk6ND1onLPj32i8BHCzy9ywZ9SXp3ViK4QCaoDqA3k3nzy92kvDxaTfylNQlYI9zPQm0A__',
    name: 'Titania  S',
    time: 'Today',
    content:
      'I loved the course, it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Kitani Studio'
  },
  {
    avt: 'https://s3-alpha-sig.figma.com/img/6482/97a1/3c76bf8606e775a9aff03066e3b9e9b6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=low-NxGIgVIZDGTtdzxz58xdQ3p2g8mCxyRIV74gVhBgNIzfVZXgljMtUcAQYchxJDi69-GrL6-rauwKyn-5zSANd9u74WfDn~NR4a-bYy9iyM0QkNherq0K8I5xyLtrCajhbTG3aGAN8XH5tP1LkFmrsPIfwWJXFPmqyVaDIjqhu6cEoTLlNNZUgy94xMn7u-Azg5E~2RP~LqB3llo~pNk4-J~fqcc5c0Z4cU5OsG0Li2IhumIGGIGAtq91uSijjQqTJNiGZmnVXp8WIfgKKDxVPtVXUZtbj6r8~LpIlxvvv2Paw~BMogUVdE4bno7VjHJRf0RFTBM4XC9uGcNksw__',
    name: 'Zhirkov',
    time: 'Today',
    content:
      'Yes. I just emphasize that the use of Photoshop, for non-users, becomes difficult to follow. What requires a course to master it. Safe and very didactic teacher.'
  },
  {
    avt: 'https://s3-alpha-sig.figma.com/img/960c/dd48/3c8d95585216ffe9d8c1a50708e30d5e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hKH4p2rtbyFlHuGidskBEVKthUe~Km9HOmfr7wgBP-146okGaaK3DRDLgcSS3XXliXq7nDvjHUGi1xUJB0IQrJVIPki235mmam26z~DjAkpUqUGOmoMgbXM2LcFWa6wL4XKXHYgtzOWWEdkk4e7TMX9spqmIdGeyTOQmlEEdbQC1ysmUhiGYcYH03zoQrc6x4Y9YTr4UBk2vbz~lyI~vqgj6s4I8ZfCbETZv~kcPpzhnvrcccEehnIrEAheNpnPHvEgqfRNZiO4iBh4SuBr4sbb~eypAxYMgB58no5iaV8hG5Sm733KdravDCbhZeVSX4wqnLlJDh6YhDYqOdlkYJQ__',
    name: 'Miphoska',
    time: 'Today',
    content:
      "I haven't finished the course yet, as I would like to have some feedback from the teacher, about the comments I shared on the forum 3 months ago, and I still haven't had any answer. I think the course is well structured, however the explanations and videos are very quick for beginners. However, it is good to go practicing."
  }
])
</script>

<style scoped></style>
