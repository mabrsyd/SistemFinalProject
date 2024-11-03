<script setup lang="ts">
import Buttons from '../Buttons.vue';
</script>

<template>
  <main class="flex-grow">
    <section class="hero relative flex flex-col w-full text-base font-bold text-white min-h-[720px]">
      <img loading="lazy" src="@/assets/images/misc/cover.png" alt="Hero background image" class="object-cover absolute inset-0 w-full h-full"/>
      <div class="relative flex flex-col items-start px-10 py-24 w-full max-md:px-5 max-md:py-10">
        <p class="font-semibold leading-none uppercase tracking-[3px]">
          <span class="font-medium">Posted on</span>
          <span class="font-black"> startup</span>
        </p>
        <h1 class="mt-6 text-6xl tracking-tighter leading-[64px] w-full max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
          Step-by-step guide to choosing great font pairs
        </h1>
        <p class="mt-6 leading-7">
          By <span class="text-x-blue">James West</span> | May 23, 2022
        </p>
        <p class="mt-4 leading-7 w-full max-md:max-w-full">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <Buttons label="Read More >" />
      </div>
    </section>
  </main>
</template>
