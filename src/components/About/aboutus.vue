<template>
  <div 
    class="flex flex-col md:flex-row items-center bg-white p-6 md:p-8 rounded-lg mx-4 md:mx-auto max-w-5xl mt-40"
  >
    <div class="flex-1 mb-4 md:mb-0">
      <h2 class="text-sm text-gray-500 uppercase mb-2">About Us</h2>
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900">
        We are a team of content writers who share their learnings
      </h1>
    </div>

    <div class="flex-1 text-gray-600">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </div>

  <!-- Statistics Section -->
  <section class="flex relative flex-col items-start px-20 pt-64 mx-auto max-w-full min-h-[444px] w-[1280px] max-md:px-5 max-md:pt-24">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d98c405a947850aac06115bd1837eba5a67dd108c0b2b6d0d0bfe6f6618cbb5a?placeholderIfAbsent=true&apiKey=79875f50433f4dddb865cc88bfb43a5c" alt="" class="object-cover absolute inset-0 size-full" />
    <article class="flex relative flex-col max-w-full w-[862px]">
      <section class="px-12 py-8 max-w-full bg-blue-600 w-[630px] max-md:px-5">
        <div class="flex gap-5 max-md:flex-col">
          <article class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow text-white max-md:mt-10">
              <h2 class="self-start text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">12+</h2>
              <p class="text-base leading-7">Blogs Published</p>
            </div>
          </article>
          <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow text-white max-md:mt-10">
              <h2 class="self-start text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">18K+</h2>
              <p class="text-base leading-7">Views on Finsweet</p>
            </div>
          </article>
          <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow text-white max-md:mt-10">
              <h2 class="text-6xl font-bold tracking-tighter leading-none max-md:mr-2.5 max-md:text-4xl">30K+</h2>
              <p class="text-base leading-7">Total active Users</p>
            </div>
          </article>
        </div>
      </section>
      <div class="flex flex-wrap gap-px">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bc96f499ca32af7118424249567bcb1bf42a3e1d0414b47cbcdd9ef2d9dc2cd?placeholderIfAbsent=true&apiKey=79875f50433f4dddb865cc88bfb43a5c" alt="" class="object-contain grow shrink-0 aspect-[13.51] basis-0 fill-amber-300 w-fit" />
      </div>
    </article>
  </section>
</template>

<script lang="ts">
export default {
  name: "AboutUs",
};
</script>

