<template>
  <navbar_section />
  <router-view />
  <footer_section />
</template>

<script setup>
import navbar_section from "/src/components/navbar_section.vue";
import footer_section from "/src/components/footer_section.vue";
</script>