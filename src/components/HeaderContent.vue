<script setup lang="ts">

</script>

<template>
  <nav class="px-12 w-full h-[80px] bg-x-black flex items-center justify-between">
    <img src="@/assets/images/logo/logo-join-sistem.png" alt="Join Sistem Logo">
    <ul class="flex gap-4">
      <li>
        <RouterLink to="/" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/blog" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Blog</RouterLink>
      </li>
      <li>
        <RouterLink to="/about" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">About Us</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact-us" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">contact Us</RouterLink>
      </li>
    </ul>
    <RouterLink to="/contact-us" class="bg-x-blue px-4 py-2 rounded-full text-white hover:bg-x-yellow transition duration-150 ease-in-out">Contact Us</RouterLink>
  </nav>
</template>
