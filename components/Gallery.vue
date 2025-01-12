<template>
    <div class="flex flex-wrap gap-4  justify-center mt-[30px] mb-[50px]">
            <div
                v-for="(src, index) in imgs"
                :key="index"
                class="pic"
                @click="() => showImg(index)"
                >
                <img :src="src" />
            </div>

            <VueEasyLightbox
                :visible="visibleRef"
                :imgs="imgs"
                :index="indexRef"
                @hide="onHide"
                />
    </div>

</template>

<script setup>

    const visibleRef = ref(false);

    const indexRef = ref(0);

    const showImg = (index) => {
    indexRef.value = index;
    visibleRef.value = true;
    };
    const onHide = () => (visibleRef.value = false);
    
    // Props
    defineProps({
        imgs: Array
    }); 

</script>