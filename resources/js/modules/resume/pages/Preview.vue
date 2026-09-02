<script setup lang="ts">
    import { ref } from 'vue'
    import { useResumeStore } from '../stores/resumeStore'

    import backgroundImage from '@/assets/img/background.png?inline'
    import emailIcon from '@/assets/img/email.png?inline'
    import githubIcon from '@/assets/img/github.png?inline'
    import linkedinIcon from '@/assets/img/linkedin.png?inline'
    import phoneIcon from '@/assets/img/phone.png?inline'

    const store = useResumeStore()

    const clickedValues = ref<string[]>([])

    const myImages = [
        {
            id: 1,
            name: 'Email',
            src: emailIcon
        },
        {
            id: 2,
            name: 'Github',
            src: githubIcon
        },
        {
            id: 3,
            name: 'Linkedin',
            src: linkedinIcon
        },
        {
            id: 4,
            name: 'Phone',
            src: phoneIcon
        }
    ]

    const goBack = () => {
        router.visit('/app/resumes/create')
    }

    const imageClick = (item: (typeof myImages)[number]) => {
        if (clickedValues.value.length >= 4) {
            return
        }

        let valueToShow = ''

        if (item.name === 'Email') {
            valueToShow = store.resume.email
        } else if (item.name === 'Github') {
            valueToShow = store.resume.gitAccount
        } else if (item.name === 'Linkedin') {
            valueToShow = store.resume.linkedin
        } else if (item.name === 'Phone') {
            valueToShow = store.resume.phone
        }

        if (valueToShow && !clickedValues.value.includes(valueToShow)) {
            clickedValues.value.push(valueToShow)
        }
    }
</script>

<template>
    <div class="relative min-h-screen w-full bg-black/75">
        <!-- Hero Section -->
        <div class="relative min-h-[60vh] w-full bg-cover bg-center bg-no-repeat pb-10" :style="{ backgroundImage: `url(${backgroundImage})` }">
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/75"></div>

            <!-- Bottom Gradient -->
            <div class="absolute inset-x-0 bottom-0 h-19 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>

            <!-- Header -->
            <header class="relative z-10 flex h-16 items-center bg-black/10 px-9 shadow-lg lg:px-16">
                <h1 class="font-serif text-5xl font-semibold text-green-400">resume</h1>
            </header>

            <!-- Name -->
            <div class="relative z-10 mt-20 px-6 lg:ml-[175px]">
                <h1 class="font-serif text-white sm:text-2xl lg:text-3xl">
                    Hello,
                    <br />
                    My name is

                    <span class="mt-2 block font-serif text-3xl text-green-500 md:text-5xl lg:mt-0 lg:ml-2 lg:inline-block lg:text-6xl">
                        {{ store.resume.name }}
                    </span>
                </h1>
            </div>

            <!-- Field -->
            <div class="relative z-10 mt-4 px-6 lg:mt-6 lg:ml-[175px]">
                <h1 class="font-serif text-lg text-white md:text-2xl lg:text-3xl">
                    I'm

                    <span class="ml-1 font-serif text-xl text-green-500 md:text-3xl lg:ml-2 lg:text-4xl">
                        {{ store.resume.field }}
                    </span>
                </h1>
            </div>

            <!-- Contact Icons -->
            <div class="relative z-10 mt-18 flex flex-wrap items-center gap-6 px-6 lg:ml-[175px] lg:gap-10">
                <div v-for="item in myImages" :key="item.id" class="flex flex-col">
                    <img
                        :src="item.src"
                        :alt="item.name"
                        class="h-10 w-10 cursor-pointer object-contain invert transition-transform hover:scale-110"
                        @click="imageClick(item)"
                    />
                </div>
            </div>

            <!-- Selected Contact Values -->
            <div class="relative z-10 mt-8 flex flex-wrap gap-3 px-6 lg:mt-10 lg:ml-[175px] lg:gap-4">
                <div
                    v-for="(value, index) in clickedValues"
                    :key="index"
                    class="rounded-lg border border-green-500 bg-green-500/20 px-4 py-2 font-serif text-green-400"
                >
                    {{ value }}
                </div>
            </div>
        </div>

        <!-- Resume Content -->
        <div class="mt-20 grow space-y-20 pb-20">
            <!-- About -->
            <div v-if="store.resume.about" class="max-w-4xl px-6 lg:ml-[175px]">
                <h2 class="border-l-4 pl-4 font-serif text-3xl font-bold text-green-400">About Me</h2>

                <p class="mt-4 font-serif text-lg leading-relaxed whitespace-pre-line text-gray-300 italic">"{{ store.resume.about }}"</p>
            </div>

            <!-- Education -->
            <div v-if="store.resume.education?.length" class="max-w-4xl px-6 lg:ml-[175px]">
                <h2 class="border-l-4 pl-4 font-serif text-3xl font-bold text-green-400">Education</h2>

                <div v-for="(education, index) in store.resume.education" :key="index" class="mt-4 mb-6">
                    <h3 v-if="education.degree" class="text-xl font-bold text-white">
                        {{ education.degree }}
                    </h3>

                    <p v-if="education.school" class="font-semibold text-green-500">
                        {{ education.school }}
                    </p>

                    <p v-if="education.year" class="text-sm text-gray-400">
                        {{ education.year }}
                    </p>
                </div>
            </div>

            <!-- Skills -->
            <div v-if="store.resume.skill?.length" class="max-w-4xl px-6 lg:ml-[175px]">
                <h2 class="border-l-4 pl-4 font-serif text-3xl font-bold text-green-400">Skills</h2>

                <div class="mt-4 flex max-w-xl flex-wrap gap-3">
                    <span
                        v-for="(skill, index) in store.resume.skill"
                        :key="index"
                        v-show="skill"
                        class="rounded-full border border-green-500/30 bg-gray-800 px-4 py-1 text-green-400"
                    >
                        {{ skill }}
                    </span>
                </div>
            </div>

            <!-- Experience -->
            <div v-if="store.resume.experience?.length" class="max-w-4xl px-6 lg:ml-[175px]">
                <h2 class="border-l-4 pl-4 font-serif text-3xl font-bold text-green-400">Experience</h2>

                <div v-for="(experience, index) in store.resume.experience" :key="index" class="mt-4 mb-6">
                    <h3 v-if="experience.role" class="text-xl font-bold text-white">
                        {{ experience.role }}
                    </h3>

                    <p v-if="experience.company || experience.duration" class="font-semibold text-green-500">
                        {{ experience.company }}

                        <span v-if="experience.company && experience.duration" class="text-gray-400"> | </span>

                        <span v-if="experience.duration" class="text-sm text-gray-400">
                            {{ experience.duration }}
                        </span>
                    </p>
                </div>
            </div>

            <!-- Projects -->
            <div v-if="store.resume.project" class="max-w-4xl px-6 lg:ml-[175px]">
                <h2 class="border-l-4 pl-4 font-serif text-3xl font-bold text-green-400 uppercase">Projects</h2>

                <p class="mt-4 text-lg leading-relaxed whitespace-pre-line text-gray-300">
                    {{ store.resume.project }}
                </p>
            </div>

            <!-- Interests -->
            <div v-if="store.resume.interest?.length" class="max-w-4xl px-6 lg:ml-[175px]">
                <h2 class="border-l-4 pl-4 font-serif text-3xl font-bold text-green-400 uppercase">Interests</h2>

                <div class="mt-6 flex max-w-xl flex-wrap gap-3">
                    <span
                        v-for="(interest, index) in store.resume.interest"
                        :key="index"
                        v-show="interest"
                        class="rounded-full border border-green-500/30 bg-gray-800 px-4 py-1 text-green-400"
                    >
                        {{ interest }}
                    </span>
                </div>
            </div>
        </div>

        <!-- Back Button -->
        <div class="px-6 pb-20 lg:ml-[175px]">
            <button
                type="button"
                class="relative inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 px-6 py-3 text-lg font-medium text-white transition-colors hover:from-pink-600 hover:to-orange-500"
                @click="goBack"
            >
                ← Back
            </button>
        </div>
    </div>
</template>
