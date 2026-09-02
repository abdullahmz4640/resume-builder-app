<script setup lang="ts">
    import { computed } from 'vue'
    import { useResumeStore } from '../stores/resumeStore'

    const store = useResumeStore()
    const skills = computed(() => store.resume.skill.filter(Boolean))
    const interests = computed(() => store.resume.interest.filter(Boolean))
    const education = computed(() => store.resume.education.filter((item) => item.degree || item.school || item.year))
    const experience = computed(() => store.resume.experience.filter((item) => item.role || item.company || item.duration || item.description))
</script>

<template>
    <Head title="Resume Template Three" />

    <main class="min-h-screen bg-[#e9e3dc] px-4 py-10 text-[#282522] sm:px-8 print:bg-white print:p-0">
        <article
            class="resume-paper mx-auto min-h-[1120px] max-w-[1020px] overflow-hidden bg-[#fffdf9] shadow-[0_30px_90px_rgba(69,54,41,0.2)] print:min-h-0 print:max-w-none print:shadow-none"
        >
            <div class="grid lg:grid-cols-[minmax(0,1fr)_300px]">
                <div class="px-8 py-12 sm:px-14 sm:py-16">
                    <header class="relative border-b border-[#cfc5ba] pb-12">
                        <span class="absolute -top-16 left-0 text-[10rem] leading-none font-black text-[#d9644a]/8 select-none">R</span>
                        <p class="relative text-xs font-bold tracking-[0.34em] text-[#d15d45] uppercase">Personal portfolio</p>
                        <h1 class="relative mt-5 max-w-3xl font-serif text-5xl leading-[0.95] font-medium tracking-tight sm:text-7xl">
                            {{ store.resume.name || 'Your Name' }}
                        </h1>
                        <p class="relative mt-5 text-sm font-bold tracking-[0.22em] text-stone-500 uppercase">
                            {{ store.resume.field || 'Professional Field' }}
                        </p>
                    </header>

                    <section v-if="store.resume.about" class="content-section">
                        <p class="eyebrow">01 / Profile</p>
                        <p class="mt-5 font-serif text-xl leading-8 whitespace-pre-line text-stone-600 italic">“{{ store.resume.about }}”</p>
                    </section>

                    <section v-if="experience.length" class="content-section">
                        <p class="eyebrow">02 / Experience</p>
                        <div class="mt-7 space-y-10">
                            <div v-for="(item, index) in experience" :key="index" class="grid gap-3 sm:grid-cols-[1fr_auto] sm:gap-6">
                                <div>
                                    <h2 class="font-serif text-2xl font-semibold text-[#302b27]">{{ item.role || 'Position' }}</h2>
                                    <p v-if="item.company" class="mt-1 text-sm font-bold tracking-wide text-[#d15d45] uppercase">
                                        {{ item.company }}
                                    </p>
                                    <p v-if="item.description" class="mt-4 text-sm leading-7 whitespace-pre-line text-stone-600">
                                        {{ item.description }}
                                    </p>
                                </div>
                                <p v-if="item.duration" class="text-xs font-bold tracking-wider text-stone-400 uppercase sm:pt-2">
                                    {{ item.duration }}
                                </p>
                            </div>
                        </div>
                    </section>

                    <section v-if="store.resume.project" class="content-section">
                        <p class="eyebrow">03 / Projects</p>
                        <div class="mt-6 border-l-4 border-[#d9644a] bg-[#f8f2ec] px-6 py-5">
                            <p class="text-[15px] leading-7 whitespace-pre-line text-stone-600">{{ store.resume.project }}</p>
                        </div>
                    </section>

                    <section v-if="!store.resume.about && !experience.length && !store.resume.project" class="content-section">
                        <p class="eyebrow">01 / Profile</p>
                        <p class="mt-5 text-sm leading-7 text-stone-400">Your profile, experience and projects will appear here.</p>
                    </section>
                </div>

                <aside class="bg-[#292624] px-8 py-12 text-stone-200 sm:px-10 sm:py-16">
                    <section>
                        <p class="aside-heading">Contact</p>
                        <div class="mt-6 grid gap-4 text-sm leading-6 text-stone-400">
                            <a v-if="store.resume.email" :href="`mailto:${store.resume.email}`" class="contact-item"
                                ><span>Email</span>{{ store.resume.email }}</a
                            >
                            <a v-if="store.resume.phone" :href="`tel:${store.resume.phone}`" class="contact-item"
                                ><span>Phone</span>{{ store.resume.phone }}</a
                            >
                            <a v-if="store.resume.linkedin" :href="store.resume.linkedin" target="_blank" rel="noreferrer" class="contact-item"
                                ><span>LinkedIn</span>{{ store.resume.linkedin }}</a
                            >
                            <a v-if="store.resume.gitAccount" :href="store.resume.gitAccount" target="_blank" rel="noreferrer" class="contact-item"
                                ><span>GitHub</span>{{ store.resume.gitAccount }}</a
                            >
                            <p v-if="!store.resume.email && !store.resume.phone && !store.resume.linkedin && !store.resume.gitAccount">
                                Contact details
                            </p>
                        </div>
                    </section>

                    <section v-if="education.length" class="aside-section">
                        <p class="aside-heading">Education</p>
                        <div class="mt-6 space-y-7">
                            <div v-for="(item, index) in education" :key="index">
                                <p v-if="item.year" class="text-[10px] font-bold tracking-[0.2em] text-[#ef876f] uppercase">{{ item.year }}</p>
                                <h2 v-if="item.degree" class="mt-2 font-serif text-lg leading-6 font-semibold text-white">{{ item.degree }}</h2>
                                <p v-if="item.school" class="mt-1 text-xs leading-5 text-stone-400">{{ item.school }}</p>
                            </div>
                        </div>
                    </section>

                    <section v-if="skills.length" class="aside-section">
                        <p class="aside-heading">Skills</p>
                        <div class="mt-6 flex flex-wrap gap-2">
                            <span
                                v-for="skill in skills"
                                :key="skill"
                                class="rounded-full border border-stone-600 px-3 py-1.5 text-xs font-medium text-stone-300"
                                >{{ skill }}</span
                            >
                        </div>
                    </section>

                    <section v-if="interests.length" class="aside-section">
                        <p class="aside-heading">Interests</p>
                        <ul class="mt-6 space-y-3 text-sm text-stone-400">
                            <li v-for="interest in interests" :key="interest" class="flex items-center gap-3">
                                <span class="h-px w-5 bg-[#d9644a]" />{{ interest }}
                            </li>
                        </ul>
                    </section>
                </aside>
            </div>
        </article>
    </main>
</template>

<style scoped>
    .content-section {
        margin-top: 3.25rem;
    }
    .eyebrow {
        color: #d15d45;
        font-size: 0.7rem;
        font-weight: 800;
        letter-spacing: 0.22em;
        text-transform: uppercase;
    }
    .aside-section {
        margin-top: 3rem;
        border-top: 1px solid #4b4642;
        padding-top: 3rem;
    }
    .aside-heading {
        color: #fff;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 1.25rem;
        font-weight: 600;
    }
    .aside-heading::after {
        display: block;
        width: 2.5rem;
        height: 2px;
        margin-top: 0.75rem;
        background: #d9644a;
        content: '';
    }
    .contact-item {
        display: grid;
        overflow-wrap: anywhere;
    }
    .contact-item span {
        color: #ef876f;
        font-size: 0.6rem;
        font-weight: 800;
        letter-spacing: 0.18em;
        text-transform: uppercase;
    }
    @media print {
        .resume-paper {
            print-color-adjust: exact;
        }
    }
</style>
