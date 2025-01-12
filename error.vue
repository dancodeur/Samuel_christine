<script setup lang="ts">

import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
    <NuxtLayout>
        
        <div class="min-h-screen flex flex-col items-center justify-center">
            <UPageError
                :status="404"
                name="Page not found"
                message="The page you are looking for does not exist."
            />
            <NuxtLink to="/">Go back home</NuxtLink>
        </div>  
    </NuxtLayout>
</template>
