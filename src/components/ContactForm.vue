<template>
    <div class="max-w-xl mx-auto py-16 px-8">
      <!-- Bagian Judul dan Deskripsi -->
      <h2 class="text-center text-sm font-bold text-gray-800 mb-2">CONTACT US</h2>
      <h1 class="text-center text-3xl font-bold text-gray-800 mb-4">Let’s Start a Conversation</h1>
      <p class="text-center text-gray-500 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim.
      </p>
  
      <!-- Bagian Informasi Kontak -->
        <div class="bg-yellow-400 p-6 rounded-lg mb-8 flex justify-between text-gray-800">
        <div>
            <p class="text-[#4C4C4C] font-sen text-[14px] leading-[32px] text-left">Working hours</p>
            <div class="border-b border-[#4C4C4C] mb-2" style="border-width: 1px;"></div> <!-- Garis di bawah Working hours -->
            <p class="font-bold text-[#4C4C4C] font-sen text-[20px] leading-[20px] text-left">Monday To Friday</p>
            <p class="font-bold text-[#4C4C4C] font-sen text-[20px] leading-[20px] text-left">9:00 AM to 8:00 PM</p>
            <p class="text-[#4C4C4C] font-sen text-[16px] leading-[20px] text-left">Our Support Team is available 24/7</p>
        </div>
        <div>
            <p class="font-bold text-[#4C4C4C] font-sen text-[20px] leading-[32px] text-left">Contact Us</p>
            <div class="border-b border-[#4C4C4C] mb-2" style="border-width: 1px;"></div> <!-- Garis di bawah Contact Us -->
            <p class="font-bold text-[#4C4C4C] font-sen text-[14px] leading-[20px] text-left">020 7993 2905</p>
            <p class="text-[#4C4C4C] font-sen text-[14px] leading-[20px] text-left">help@finstreet.com</p>
        </div>
        </div>



  
      <!-- Form Kontak -->
      <form @submit.prevent="submitForm" class="space-y-4">
        <input 
          type="text" 
          placeholder="Full Name" 
          class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        <div class="flex space-x-4">
          <select 
            class="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Province</option>
            <option>Jawa Timur</option>
            <option>Jawa Tengah</option>
          </select>
          <select 
            class="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>City</option>
            <option>Surakarta</option>
            <option>Magelang</option>
          </select>
        </div>
  
        <textarea 
          placeholder="Message" 
          class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        ></textarea>
  
        <button 
          type="submit" 
          class="w-full p-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  const submitForm = () => {
    alert("tersimpan!");
  };
  </script>
  