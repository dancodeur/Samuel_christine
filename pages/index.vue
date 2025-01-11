<template>

    <!--Hero section-->
    
    <ULandingHero data-scroll-section data
        title="Immortalisez vos instants les plus précieux avec élégance."
        description="Racontez votre histoire à travers des images empreintes de pureté et d’élégance."
        :links="[{ label: 'Voir la galerie', icon: 'i-heroicons-camera', size: 'lg' }]"
    />

    
    <!--Services-->
    
    <UPageGrid data-scroll-section>
        <UPageCard v-for="(module, index) in modules" :key="index" v-bind="module" target="_blank">
            <template #description data-scroll
            data-scroll-speed="2">
                <span class="line-clamp-2">{{ module.description }}</span>
            </template>
        </UPageCard>
    </UPageGrid>

    <!--Galerie-->

    <section class="mt-[50px] space-y-6">

        <h2 class="text-2xl font-semibold text-center" id="galerie">Galerie</h2>

        <div class="flex flex-wrap gap-4  justify-center">
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

    

    <!--Témoignages-->

    
    <UPageColumns class="mt-[50px]">
        <UPageCard v-for="(testimonial, index) in testimonials" :key="index">
        <q class="italic text-gray-500 dark:text-gray-400">
            {{ testimonial.quote }}
        </q>

        <div class="flex gap-x-3 items-center mt-3">
            <UAvatar :src="testimonial.author.src" :alt="testimonial.author.name" size="sm" />

            <div class="min-w-0 text-sm">
            <p class="font-semibold">
                {{ testimonial.author.name }}
            </p>
            <p class="truncate">
                {{ testimonial.author.job }}
            </p>
            </div>
        </div>
        </UPageCard>
    </UPageColumns>

    <!--About section-->

    <ULandingSection 
    id="about"
    title="Samuel Christine"
    description="Passionné par l'art de capturer l'instant, je suis un photographe professionnel spécialisé dans [portraits, mariages, événements, etc.].Je m’engage à raconter votre histoire à travers des images uniques et significatives." "
    :features="[{ name: 'Photographie événementielle', description: 'Conférences, séminaires, soirées de lancement ou team building.', icon: 'i-heroicons-camera' }, { name: 'Services variés', description: 'Je propose une gamme de services variés, pour répondre aux besoins des particuliers et des professionnels.', icon: 'i-heroicons-square-3-stack-3d' }]"
    align="right"
  >
    <img
      src="https://picsum.photos/500/600"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    />
  </ULandingSection>

  <!--End section-->

  <UDivider
    label="Design by Dan Elenga"
    :ui="{ label: 'text-primary-500 dark:text-primary-400' }"
  />

    


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
        "https://picsum.photos/id/237/300/400",
        "https://picsum.photos/id/137/300/400",
        "https://picsum.photos/id/37/300/400",
        "https://picsum.photos/id/117/300/400",
        "https://picsum.photos/id/47/300/400",
        "https://picsum.photos/id/77/300/400",
        "https://picsum.photos/id/17/300/400",
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