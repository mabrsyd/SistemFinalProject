<script setup lang="ts">
</script>

<template>
  <footer class="flex overflow-hidden flex-col justify-center px-20 py-14 w-full bg-x-black max-md:px-5">
      <div class="flex flex-wrap gap-5 justify-between items-start w-full text-base leading-7 text-white">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/11284958b49c455484212cd2d94c3f14/126b103af58def3ab10d3b44482b83e94c5d574de86b7b2b556e4c84e809e2d2?apiKey=11284958b49c455484212cd2d94c3f14&" alt="Footer logo" class="object-contain shrink-0 max-w-full aspect-[5] w-[140px]" />
        <nav class="flex gap-6">
          <a href="/" class="hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Home</a>
          <router-link to="/blog" class="hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Blog</router-link>
          <a href="/about" class="hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">About us</a>
          <a href="/contact-us" class="hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Contact </a>
          <router-link to="/privacy" class="hover:text-x-yellow">Privacy Policy</router-link>
        </nav>
      </div>

      <section class="newsletter px-16 py-20 mt-14 w-full bg-x-light bg-opacity-5 max-md:px-5">
        <form class="flex gap-5 max-md:flex-col">
          <div class="w-6/12 max-md:w-full">
            <h2 class="text-4xl font-bold tracking-tighter leading-10 text-white">
              Subscribe to our newsletter to get latest updates and news
            </h2>
          </div>
          <div class="w-6/12 max-md:w-full">
            <div class="flex flex-wrap gap-6 mt-1">
              <label for="email" class="sr-only">Email Address</label>
              <input 
                type="email" 
                id="email"
                required
                placeholder="Enter Your Email"
                class="grow px-6 py-6 text-base leading-loose bg-x-light bg-opacity-5 border border-solid border-x-mediumgrey text-x-mediumgrey"
              />
              <button type="submit" class="gap-3 px-12 py-4 text-lg font-bold leading-none text-white whitespace-nowrap bg-x-blue hover:bg-x-yellow focus:outline-none focus:ring-2 focus:ring-blue-300">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </section>

      <address class="flex flex-wrap gap-5 justify-between mt-12 text-base leading-7 text-white not-italic">
        <p class="opacity-70">Finstreet 118 2561 Fintown</p>
        <div class="social-links mt-3">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/11284958b49c455484212cd2d94c3f14/606cdc1dfa85eab2c4e5e7b240930a84d1900402c896c6b8a5b0ce4c22d53d70?apiKey=11284958b49c455484212cd2d94c3f14&" alt="Social media links" class="object-contain w-36 max-w-full aspect-[9.01]" />
        </div>
      </address>
      <p class="text-base leading-7 text-white opacity-70">
        Hello@finsweet.com 020 7993 2905
      </p>
    </footer>
</template>
