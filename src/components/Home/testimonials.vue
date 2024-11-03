<template>
  <div class="flex flex-col md:flex-row mx-auto w-full max-w-[1280px] h-auto bg-[#f8f4ea] rounded-lg overflow-hidden p-6 md:p-12 mt-10"> 
    <div class="flex flex-col justify-center w-full md:w-1/2 md:pr-12">
      <h5 class="text-gray-500 uppercase text-xs md:text-sm font-semibold mb-2">Testimonials</h5>
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What people say about our blog</h2>
      <p class="text-gray-600 text-base md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
      </p>
    </div>
    <div class="border-t md:border-l md:border-t-0 border-gray-300 my-6 md:my-0 md:mx-8"></div>
    <div class="flex flex-col justify-center w-full md:w-1/2 md:pl-12">
      <p class="text-gray-700 text-base md:text-lg mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="flex items-center space-x-4 mb-6">
        <img loading="lazy" src="@/assets/images/misc/jonathan.png" alt="User Image" class="w-10 h-10 rounded-full">
        <div>
          <p class="font-semibold text-gray-900">Jonathan Vallem</p>
          <p class="text-gray-500 text-sm">New York, USA</p>
        </div>
      </div>
      <div class="flex space-x-2 mt-4">
        <button class="w-8 h-8 bg-white text-gray-600 rounded-full shadow hover:bg-gray-200 transition duration-200">
          ←
        </button>
        <button class="w-8 h-8 bg-gray-900 text-white rounded-full shadow hover:bg-gray-700 transition duration-200">
          →
        </button>
      </div>
    </div>
  </div>
</template>
