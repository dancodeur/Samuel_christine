<template>

    <section class="mt-[50px] space-y-6">

        <div class="flex flex-wrap gap-1  justify-center">
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

    </section>

  </template>
  
  

<script setup>
    import { ref } from 'vue';

    


    const testimonials = [{
        quote: 'Nostrud reprehenderit magna deserunt dolor.',
        author: {
            name: 'Evan you',
            job: 'Creator of Vue.js and Vite',
            src: 'https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/yyx990803'
        }
        }, {
        quote: 'Irure irure dolore Lorem dolor anim velit id fugiat minim cupidatat dolore nulla Lorem aliquip cillum.',
        author: {
            name: 'Guillermo Rauch',
            job: 'Co-founder and CEO of Vercel',
            src: 'https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/rauchg'
        }
        }, {
        quote: 'Magna labore amet velit eiusmod velit dolor cillum sunt est tempor ea commodo fugiat amet tempor.',
        author: {
            name: 'Addy Osmani',
            job: 'Chief Engineer of Chrome',
            src: 'https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/addyosmani'
        }
        }, {
        quote: 'Culpa amet do sit officia non magna cillum ullamco dolore qui sunt occaecat.',
        author: {
            name: 'Sarah Drasner',
            job: 'Director of Engineering, Google',
            src: 'https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/sdras'
        }
        }, {
        quote: 'Ex veniam eu incididunt.',
        author: {
            name: 'Dominik Angerer',
            job: 'Co-founder of Storyblok',
            src: 'https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/DominikAngerer'
        }
        }, {
        quote: 'Nostrud id Lorem laborum ut eiusmod voluptate aliquip non esse sint occaecat.',
        author: {
            name: 'Savas Vedova',
            job: 'Sernior Frontend Engineer at GitLab',
            src: 'https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/svedova'
        }
        }];


        const visibleRef = ref(false);
        const indexRef = ref(0);

        const imgs = [
        "https://picsum.photos/id/237/400/500",
        "https://picsum.photos/id/137/400/500",
        "https://picsum.photos/id/167/400/500",
        "https://picsum.photos/id/90/400/500",
        "https://picsum.photos/id/360/400/500",
        "https://picsum.photos/id/257/400/500",
        "https://picsum.photos/id/1/400/500",
        ];

        const showImg = (index) => {
        indexRef.value = index;
        visibleRef.value = true;
        };
        const onHide = () => (visibleRef.value = false);

        /**
         * Modules services
         */
        const modules = [{
            title: 'Photographie Événementielle',
            description: 'Culpa amet do sit officia non magna cillum ullamco dolore qui sunt occaecat',
            to: '',
            icon: 'i-simple-icons:googlecalendar'
            }, {
            title: 'Séances Photo Thématiques',
            description: 'tempor ea commodo fugiat amet tempor.',
            to: '',
            icon: 'i-simple-icons:storybook'
            }, {
            title: 'Photographie Lifestyle',
            description: 'Nostrud reprehenderit magna deserunt dolor.',
            to: '',
            icon: 'i-simple-icons:instagram'
        }];


       

</script>