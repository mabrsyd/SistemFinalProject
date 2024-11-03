<script setup lang="ts">
import Buttons from '@/components/Buttons.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import aboutus from '@/components/About/aboutus.vue';
import Mission from '@/components/About/mission.vue';
import ourtime from '@/components/About/ourtime.vue';
import whywestarted from '@/components/About/whywestarted.vue';
import listauthor from '@/components/About/listauthor.vue';
import JoinOutTeam from '@/components/Home/JoinOutTeam.vue';
</script>

<template>
  <MainLayout>
    <main class="flex-grow">
    <aboutus/>
    <Mission/>
    <ourtime/>
    <whywestarted/>
    <listauthor/>
    <JoinOutTeam/>
    </main>
  </MainLayout>
</template>
