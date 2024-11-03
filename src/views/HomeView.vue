<script setup lang="ts">
import Buttons from '@/components/Buttons.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import HeroSection from '@/components/Home/HeroSection.vue';
import FeaturePost from '@/components/Home/FeaturePost.vue';
import AboutUs from '@/components/Home/AboutUs.vue';
import Category from '@/components/Home/Category.vue';
import SpecialPost from '@/components/Home/SpecialPost.vue';
import AuthorList from '@/components/Home/AuthorList.vue';
import logocomponent from '@/components/Home/logocomponent.vue';
import testimonials from '@/components/Home/testimonials.vue';
import JoinOutTeam from '@/components/Home/JoinOutTeam.vue';
</script>

<template>
  <MainLayout>
    <main class="flex-grow">
      <HeroSection/>
      <FeaturePost/>
      <AboutUs/>
      <Category/>
      <SpecialPost/>
      <AuthorList/>
      <logocomponent/>
      <testimonials/>
      <JoinOutTeam/>
      <!-- Rest of the sections following same pattern -->
      <!-- Featured Posts Section -->
      <!-- About Us Section -->
      <!-- Categories Section -->
      <!-- Authors Section -->
      <!-- Testimonials Section -->
    </main>
  </MainLayout>
</template>
