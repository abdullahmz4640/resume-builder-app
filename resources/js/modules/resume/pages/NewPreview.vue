<script setup lang="ts">
    import { ArrowLeft, Code2, Link, Mail, MapPin, Phone } from '@lucide/vue'
    import { computed } from 'vue'
    import { useResumeStore } from '../stores/resumeStore'

    const store = useResumeStore()

    const skills = computed(() => store.resume.skill.filter(Boolean))
    const interests = computed(() => store.resume.interest.filter(Boolean))
    const education = computed(() => store.resume.education.filter((item) => item.degree || item.school || item.year))
    const experience = computed(() => store.resume.experience.filter((item) => item.role || item.company || item.duration || item.description))

    const goBack = (): void => {
        router.visit('/app/resumes/create')
    }
</script>

<template>
    <Head title="Resume Preview" />

    <main class="min-h-screen bg-[#e8eceb] px-4 py-10 text-slate-800 sm:px-8 print:bg-white print:p-0">
        <div class="mx-auto mb-5 flex max-w-[1020px] items-center justify-between print:hidden">
            <button
                type="button"
                class="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"
                @click="goBack"
            >
                <ArrowLeft class="size-4" />
                Back to editor
            </button>

            <span class="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">Live preview</span>
        </div>

        <article
            class="resume-sheet mx-auto min-h-[1120px] max-w-[1020px] overflow-hidden bg-white shadow-[0_24px_80px_rgba(15,23,42,0.16)] print:min-h-0 print:max-w-none print:shadow-none"
        >
            <header class="relative overflow-hidden bg-[#102f2d] px-8 py-12 text-white sm:px-14 sm:py-16">
                <div class="absolute -top-24 -right-20 size-72 rounded-full border-[46px] border-[#d2a95a]/15" />
                <div class="absolute right-36 -bottom-24 size-48 rounded-full bg-[#d2a95a]/10" />
                <div class="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div>
                        <p class="mb-4 text-xs font-bold tracking-[0.32em] text-[#e3bd70] uppercase">Professional resume</p>
                        <h1 class="max-w-3xl font-serif text-5xl leading-[0.95] font-semibold tracking-tight sm:text-7xl">
                            {{ store.resume.name || 'Your Name' }}
                        </h1>
                        <p class="mt-5 text-base font-medium tracking-[0.18em] text-slate-200 uppercase sm:text-lg">
                            {{ store.resume.field || 'Your Professional Field' }}
                        </p>
                    </div>

                    <div class="grid gap-3 text-sm text-slate-200">
                        <a v-if="store.resume.email" :href="`mailto:${store.resume.email}`" class="contact-link">
                            <Mail class="size-4 text-[#e3bd70]" />
                            {{ store.resume.email }}
                        </a>
                        <a v-if="store.resume.phone" :href="`tel:${store.resume.phone}`" class="contact-link">
                            <Phone class="size-4 text-[#e3bd70]" />
                            {{ store.resume.phone }}
                        </a>
                        <a v-if="store.resume.linkedin" :href="store.resume.linkedin" class="contact-link" target="_blank" rel="noreferrer">
                            <Link class="size-4 text-[#e3bd70]" />
                            {{ store.resume.linkedin }}
                        </a>
                        <a v-if="store.resume.gitAccount" :href="store.resume.gitAccount" class="contact-link" target="_blank" rel="noreferrer">
                            <Code2 class="size-4 text-[#e3bd70]" />
                            {{ store.resume.gitAccount }}
                        </a>
                        <div
                            v-if="!store.resume.email && !store.resume.phone && !store.resume.linkedin && !store.resume.gitAccount"
                            class="contact-link"
                        >
                            <MapPin class="size-4 text-[#e3bd70]" />
                            Contact details
                        </div>
                    </div>
                </div>
            </header>

            <div class="grid lg:grid-cols-[minmax(0,1fr)_320px]">
                <div class="px-8 py-12 sm:px-14 sm:py-14">
                    <section v-if="store.resume.about" class="resume-section">
                        <h2 class="section-title">Profile</h2>
                        <p class="mt-5 text-[15px] leading-7 whitespace-pre-line text-slate-600">{{ store.resume.about }}</p>
                    </section>

                    <section v-if="experience.length" class="resume-section">
                        <h2 class="section-title">Experience</h2>
                        <div class="mt-7 space-y-9">
                            <div v-for="(item, index) in experience" :key="index" class="relative border-l border-slate-200 pl-7">
                                <span class="absolute top-1 -left-[5px] size-2.5 rounded-full bg-[#c4943d] ring-4 ring-[#f8f1e4]" />
                                <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                                    <h3 class="text-lg font-bold text-[#102f2d]">{{ item.role || 'Position' }}</h3>
                                    <span v-if="item.duration" class="shrink-0 text-xs font-bold tracking-wider text-[#a4772d] uppercase">{{
                                        item.duration
                                    }}</span>
                                </div>
                                <p v-if="item.company" class="mt-1 text-sm font-semibold text-slate-500">{{ item.company }}</p>
                                <p v-if="item.description" class="mt-3 text-sm leading-6 whitespace-pre-line text-slate-600">
                                    {{ item.description }}
                                </p>
                            </div>
                        </div>
                    </section>

                    <section v-if="store.resume.project" class="resume-section">
                        <h2 class="section-title">Selected Projects</h2>
                        <p class="mt-5 text-[15px] leading-7 whitespace-pre-line text-slate-600">{{ store.resume.project }}</p>
                    </section>

                    <section v-if="!store.resume.about && !experience.length && !store.resume.project" class="resume-section">
                        <h2 class="section-title">Profile</h2>
                        <p class="mt-5 text-[15px] leading-7 text-slate-400">Your professional summary, experience and projects will appear here.</p>
                    </section>
                </div>

                <aside class="bg-[#f4f1ea] px-8 py-12 sm:px-10 sm:py-14">
                    <section v-if="education.length" class="sidebar-section">
                        <h2 class="sidebar-title">Education</h2>
                        <div class="mt-6 space-y-7">
                            <div v-for="(item, index) in education" :key="index">
                                <p v-if="item.year" class="text-xs font-bold tracking-[0.14em] text-[#a4772d] uppercase">{{ item.year }}</p>
                                <h3 v-if="item.degree" class="mt-2 font-serif text-lg leading-snug font-bold text-[#102f2d]">{{ item.degree }}</h3>
                                <p v-if="item.school" class="mt-1 text-sm leading-5 text-slate-600">{{ item.school }}</p>
                            </div>
                        </div>
                    </section>

                    <section v-if="skills.length" class="sidebar-section">
                        <h2 class="sidebar-title">Expertise</h2>
                        <div class="mt-6 flex flex-wrap gap-2">
                            <span
                                v-for="skill in skills"
                                :key="skill"
                                class="rounded-sm bg-white px-3 py-2 text-xs font-semibold text-[#234744] shadow-sm ring-1 ring-black/5"
                            >
                                {{ skill }}
                            </span>
                        </div>
                    </section>

                    <section v-if="interests.length" class="sidebar-section">
                        <h2 class="sidebar-title">Interests</h2>
                        <ul class="mt-6 grid gap-3 text-sm text-slate-600">
                            <li v-for="interest in interests" :key="interest" class="flex items-center gap-3">
                                <span class="size-1.5 rounded-full bg-[#c4943d]" />
                                {{ interest }}
                            </li>
                        </ul>
                    </section>

                    <section v-if="!education.length && !skills.length && !interests.length" class="sidebar-section">
                        <h2 class="sidebar-title">Details</h2>
                        <p class="mt-5 text-sm leading-6 text-slate-400">Education, skills and interests will appear here.</p>
                    </section>
                </aside>
            </div>
        </article>
    </main>
</template>

<style scoped>
    .contact-link {
        display: flex;
        max-width: 18rem;
        align-items: center;
        gap: 0.75rem;
        overflow-wrap: anywhere;
    }

    .resume-section + .resume-section {
        margin-top: 3rem;
    }

    .section-title,
    .sidebar-title {
        display: flex;
        align-items: center;
        gap: 0.875rem;
        color: #102f2d;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 1.35rem;
        font-weight: 700;
        letter-spacing: 0.04em;
    }

    .section-title::after,
    .sidebar-title::after {
        height: 1px;
        flex: 1;
        background: #d8d5ce;
        content: '';
    }

    .sidebar-section + .sidebar-section {
        margin-top: 2.75rem;
        border-top: 1px solid #d8d5ce;
        padding-top: 2.75rem;
    }

    @media print {
        .resume-sheet {
            print-color-adjust: exact;
        }
    }
</style>
