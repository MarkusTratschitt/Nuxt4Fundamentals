<template>
  <div>
    <form @submit.prevent="search">
      <input type="text" v-model="query">
      <button>Search</button>
    </form>
    <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none;">
      <li v-for="movie in movies" :key="movie.imdbID">
        <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
          <NuxtImg :src="movie.Poster" :alt="movie.title" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>


<script setup>
let query = ref("Star Wars");
let movies = ref([]);
async function search() {
  let { Search } = await $fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=3854c19b&s=${query.value}`)
  movies.value = Search;
}
search();
</script>


<style scoped>

</style>
