<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: 'Read More >', 
  },
});
</script>

<template>
    <button class="gap-3 px-12 py-4 mt-12 text-lg leading-none border rounded-md bg-x-blue text-white hover:bg-x-yellow max-md:px-5 max-md:mt-10" tabindex="0">
        {{ label }}
    </button>
</template>
