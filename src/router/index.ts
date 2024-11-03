import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import ContactView from '@/views/ContactView.vue';
import AboutView from '@/views/AboutView.vue';
import CategoryView from '@/views/CategoryView.vue';
import BlogPostView from '@/views/BlogPostView.vue';
import AuthorView from '@/views/AuthorView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/privacy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },

    {path: '/contact-us',
    name: 'Contact',
    component: ContactView,
    },

    {
      path: '/blogpostview',
      name: 'BlogPostView',
      component: BlogPostView
    },

    {
      path: '/author',
      name: 'AuthorView',
      component: AuthorView
    },
  ],
})

export default router
