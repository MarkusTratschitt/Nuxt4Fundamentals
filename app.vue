<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout />
      <NuxtPage />
      
  </div>
</template>

<script setup>

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - My movie site` : "My movie site";
  },
});
</script>