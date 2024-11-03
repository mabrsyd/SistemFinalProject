<script setup lang="ts">

import Buttons from '../Buttons.vue';

</script>

<template>
    <section class="mx-20 my-32 flex flex-col bg-x-blue">
        <section data-layername="aboutUsOurMission" class="flex flex-col">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/11284958b49c455484212cd2d94c3f14/c70f7be6c65e1aeb76cee8cd48a5a2cb205679fe0a4c6afe3ea9f80564c9ec4e?apiKey=11284958b49c455484212cd2d94c3f14&" alt="" class="object-contain self-end aspect-[45.45] max-w-[1061px] w-[1061px] max-md:max-w-full" />
    <section data-layername="background" class="px-20 py-24 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow text-base font-bold text-gray-800 max-md:mt-10 max-md:max-w-full">
            <h2 data-layername="aboutUs" class="self-start font-semibold leading-none uppercase tracking-[3px]">
              ABOUT US
            </h2>
            <h3 data-layername="weAreACommunityOfContentWritersWhoShareTheirLearnings" class="mt-6 text-4xl tracking-tighter leading-10 max-md:max-w-full">
              We are a community of content writers who share their learnings
            </h3>
            <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliqua" class="mt-4 mr-6 leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Buttons label="Read more >"/> 
          </div>
        </article>
        <article class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div class="flex flex-col items-start text-base text-gray-800 max-md:mt-10 max-md:max-w-full">
            <h2 data-layername="ourMision" class="font-semibold leading-none uppercase tracking-[3px]">
              Our mision
            </h2>
            <h3 data-layername="creatingValuableContentForCreativesAllAroundTheWorld" class="mt-6 text-3xl font-bold tracking-tighter leading-10">
              Creating valuable content for creatives all around the world
            </h3>
            <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequat" class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </article>
      </div>
    </section>
  </section>
    </section>
</template>