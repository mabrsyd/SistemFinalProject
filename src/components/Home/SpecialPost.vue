<template>
  <div 
    class="flex flex-col md:flex-row mx-auto mt-10 w-full max-w-[1280px] h-auto md:h-[705px] bg-white shadow-lg border border-gray-300 overflow-hidden"
  >
    <div class="relative w-full md:w-[60%] h-[300px] md:h-full">
      <img loading="lazy" src="@/assets/images/misc/background.jpg" alt="Background Image" class="w-full h-full object-cover">
    </div>
    <div class="flex flex-col justify-center p-4 md:p-8 w-full md:w-[40%] h-auto md:h-[584px]">
      <h5 class="text-gray-500 uppercase text-xs md:text-sm font-semibold mb-2">Why We Started</h5>
      <h2 class="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
        It started out as a simple idea and evolved into our passion
      </h2>
      <p class="text-gray-600 text-base md:text-lg mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </p>
      <Buttons label="Discover our story >"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Buttons from '../Buttons.vue'; 
</script>
