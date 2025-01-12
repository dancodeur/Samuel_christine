<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator/>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>

<script setup>

useSeoMeta({
  title: 'Samuel Christine',
  description: 'Samuel Christine is a photographer based in Paris, France.',
  image: 'https://ipx.nuxt.com/f_auto,q_auto/https://res.cloudinary.com/nuxt/image/upload/v1633940000/nuxtjs/cover.jpg',
  url: 'https://samuelchristine.com'
})
</script>
