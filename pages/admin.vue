<template lang="pug">
  div Hello user 
    
</template>

<script setup>
definePageMeta({
  layout: "default",
  middleware: ["auth"],
})
</script>

<style lang="less">

</style>