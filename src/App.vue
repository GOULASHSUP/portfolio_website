<template>
  <div class="min-h-screen flex flex-col">
    <navbar_section />
    <main class="flex-1 bg-zinc-900">
      <router-view />
    </main>
    <footer_section />
  </div>
</template>

<script setup>
import navbar_section from "/src/components/navbar_section.vue";
import footer_section from "/src/components/footer_section.vue";
</script>