<template>
    <!--Galerie-->

    <ULandingSection
    icon="i-heroicons-camera"
    title="Galerie"
    description="Explorez ma galerie d'images et découvrez mon travail."
    data-aos="fade-up"
  />

  <!--filter-->

  <UTabs :items="items" class="w-full mx-auto" variant="link" :ui="{ trigger: 'flex-1' }" data-aos="fade-down" data-aos-duration="800" >
    <template #portrait>
      <Gallery :imgs="imgs_portrait" />
    </template>
    <template #paysage>
      <Gallery :imgs="paysage_imgs" />
    </template>
    <template #nature>
      <Gallery :imgs="nature_imgs" />
    </template>
  </UTabs>
</template>

<script setup>

import { ref } from 'vue';


    /**
     * Image data
     */

    const imgs_portrait = ref([
        "https://picsum.photos/id/77/300/400",
        "https://picsum.photos/id/17/300/400",
    ]);

    const paysage_imgs=ref([
      "https://picsum.photos/id/237/300/400",
      "https://picsum.photos/id/137/300/400",
      "https://picsum.photos/id/37/300/400",
    ]); 

    const nature_imgs=ref([
      "https://picsum.photos/id/77/300/400",
      "https://picsum.photos/id/17/300/400",
    ]);

    /**
     * Tabs
    */

    const items = ref([
        {
            label: 'Portrait',
            slot :"portrait",
            description: "Découvrez des photos de portraits."
        },
        {
            label: 'Paysage',
            slot :"paysage",
            description: "Découvrez des photos de paysages."
        },
        {
            label: 'Nature',
            slot :"nature",
            description: "Découvrez des photos de la nature."
            }
    ]); 

</script>

