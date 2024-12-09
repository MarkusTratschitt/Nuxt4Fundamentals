<template>
  <div>
    <pre>
      {{ data }}
    </pre>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default"
});
let route = useRoute();
let { data } = await useFetch(
  `https://www.omdbapi.com/?apikey=3854c19b&i=${route.params.id}`,
  {
 pick: ["Plot", "Title", "Poster"],
    key: `/movies/${route.params.id}`,
    onResponse({ request, response }) {
      if (response._data.Error === "Incorrect IMDb ID.") {
        showError({ statusCode: 404, statusMessage: "Page Not Found" });
      }
    },
  }
);
useHead({
  title: data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot },
    { property: "og:description", content: data.value.Plot },
    { property: "og:image", content: data.value.Poster },
    { name: "twitter:card", content: `summary_large_image` },
  ],
});
</script>

<style lang="less">

</style>