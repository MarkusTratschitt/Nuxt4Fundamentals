export default defineNuxtRouteMiddleware((to, from) => {
  let userIsLoggedIn = false;
  if (!userIsLoggedIn) {
    return navigateTo({ path: '/login' })
  }
});
