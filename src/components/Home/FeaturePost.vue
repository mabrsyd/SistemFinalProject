<script setup lang="ts">
import Buttons from '../Buttons.vue';

</script><template>
    <section class="mx-20 my-32 flex flex-col">
        <div class="flex gap-5 justify-between text-4xl font-bold leading-none text-gray-800 max-md:mr-0.5 max-md:max-w-full">
          <h1 class="tracking-tighter">Featured Post</h1>
          <h2 class="tracking-tighter">All Posts</h2>
          <a href="#" class="my-auto text-base leading-7 text-x-yellow" tabindex="0">View All</a>
        </div>

        <div class="mt-8 w-full max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <article class="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col items-start p-8 mx-auto w-full font-bold border border-x-mediumgrey border-opacity-10 max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/11284958b49c455484212cd2d94c3f14/be3591a6d975ba91e7e8607e8b756becfeb5ea66cabdcabe3f7a441f131042f6?apiKey=11284958b49c455484212cd2d94c3f14&" alt="Featured blog post" class="object-contain self-stretch w-full aspect-[1.9] max-md:max-w-full" />
                <div class="mt-8 text-sm font-medium leading-none text-x-darkgrey">
                  By <span class="text-x-yellow">John Doe</span> | <time datetime="2022-05-23">May 23, 2022</time>
                </div>
                <h3 class="self-stretch mt-4 text-3xl tracking-tighter leading-10 text-x-black max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </h3>
                <p class="mt-4 text-base leading-7 text-x-mediumgrey max-md:max-w-full">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
                <Buttons label="Read More >" />
              </div>
            </article>

            <aside class="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full ">
              <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
                <article v-for="(post, index) in 4" :key="index" :class="['flex flex-col items-start py-7 pr-20 pl-8 max-md:px-5 max-md:max-w-full flex-grow', index % 2 === 1 ? 'bg-x-lightyellow' : 'bg-x-white']">
                  <div class="text-sm font-medium leading-none text-x-darkgrey">
                    By <span class="text-x-yellow">John Doe</span> | <time datetime="2021-08-23">Aug 23, 2021</time>
                  </div>
                  <h4 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                    8 Figma design systems that you can download for free today.
                  </h4>
                </article>
              </div>
            </aside>
          </div>
        </div>
      </section>
</template>