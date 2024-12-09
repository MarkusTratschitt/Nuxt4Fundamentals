<template>
<div>
  <p> 
    {{message}} 
  </p>
</div> 
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default"
});
let route = useRoute();
let message = computed(() => `I'm on team ${route.params.teamSlug} and my user id is ${route.params.userId}`)
</script>