<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import feature from '@/components/Blog/feature.vue'
import AllPost from '@/components/Blog/blogpost.vue'
import CategorySection from '@/components/Blog/categorysection.vue'
import JoinOutTeam from '@/components/Home/JoinOutTeam.vue'

</script>

<template>
  <MainLayout>
    <AllPost category="News" title="Some title" description="Some description" />
    <feature>
    </feature>
    <CategorySection>
    </CategorySection>
    <JoinOutTeam>
    </JoinOutTeam>
  </MainLayout>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'BlogLayout'
})

</script>

<style scoped>

</style>