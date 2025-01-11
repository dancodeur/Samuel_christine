<template>
    <UHeader :links="links">
        <template #logo>
           <h1>Samuel Photo</h1>
        </template>

        <template #right>
            <UColorModeButton />

            <!-- <UButton to="https://github.com/nuxt/ui" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" /> -->
        </template>

    </UHeader>

    <UContainer>
      <slot />
    </UContainer>


    <!--Footer Links-->

    <UFooter>
        <template #left>
        © {{ new Date().getFullYear() }} Samuel Christine - Tous droits réservés
        </template>

        <template #right>
            <UButton icon="i-simple-icons-x" color="gray" variant="ghost" to="#" target="_blank" />
            <UButton icon="i-simple-icons-instagram" color="gray" variant="ghost" to="#" target="_blank" />
            <UButton icon="i-simple-icons-facebook" color="gray" variant="ghost" to="#" target="_blank" />
        </template>
    </UFooter>

</template>

<script setup>

const links = [{
        label: 'Galerie',
        icon: 'i-heroicons-camera',
        to: '#galerie'
        }, {
        label: 'A propos',
        icon: 'i-heroicons-square-3-stack-3d',
        to: '#about'
        }]; 

</script>