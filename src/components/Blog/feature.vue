<script setup lang="ts">
import { useRouter } from 'vue-router';
import Buttons from '../Buttons.vue';

const router = useRouter();
const goToBlogPostView = () => {
  router.push({ name: 'BlogPostView' });
};
</script>

<template>
  <section class="p-20 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
    <div class="flex gap-5 max-md:flex-col">
      <article class="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
        <div class="flex flex-col items-start self-stretch my-auto w-full font-medium max-md:mt-10 max-md:max-w-full">
          <span class="text-base leading-none text-gray-800 uppercase tracking-[3px]">Featured Post</span>
          <h1 class="self-stretch mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
            Step-by-step guide to choosing great font pairs
          </h1>
          <p class="mt-4 text-sm leading-none text-amber-300">
            By <span class="text-amber-300">John Doe</span> | May 23, 2022
          </p>
          <p class="self-stretch mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <Buttons label="Read more >" @click="goToBlogPostView" />
        </div>
      </article>
      <div class="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/11284958b49c455484212cd2d94c3f14/c6b092768f7a218d448245a26948cf0fbc11baf915e08e348841ee64aa0cd10f?apiKey=11284958b49c455484212cd2d94c3f14&" alt="Featured post illustration" class="object-contain grow w-full aspect-[1.43] max-md:mt-10 max-md:max-w-full" />
      </div>
    </div>
  </section>
</template>
