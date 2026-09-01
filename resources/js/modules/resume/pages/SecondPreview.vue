<script setup lang="ts">
    import { AtSign, BriefcaseBusiness, Code2, GraduationCap, Link, Phone, Sparkles } from '@lucide/vue'
    import { computed } from 'vue'
    import { useResumeStore } from '../stores/resumeStore'

    const store = useResumeStore()

    const skills = computed(() => store.resume.skill.filter(Boolean))
    const interests = computed(() => store.resume.interest.filter(Boolean))
    const education = computed(() => store.resume.education.filter((item) => item.degree || item.school || item.year))
    const experience = computed(() => store.resume.experience.filter((item) => item.role || item.company || item.duration || item.description))
</script>

<template>
    <Head title="Resume Template" />

    <main class="min-h-screen bg-[#dfe6ee] px-4 py-10 text-[#172033] sm:px-8 print:bg-white print:p-0">
        <article
            class="resume-page mx-auto min-h-[1120px] max-w-[1020px] overflow-hidden bg-[#fbfcfe] shadow-[0_28px_80px_rgba(20,35,60,0.2)] print:min-h-0 print:max-w-none print:shadow-none"
        >
            <header class="relative border-b-[10px] border-[#49a7a1] bg-[#132945] px-8 py-12 text-white sm:px-14 sm:py-16">
                <div class="pointer-events-none absolute top-0 right-0 h-full w-2/5 overflow-hidden">
                    <div class="absolute -top-24 -right-20 size-72 rotate-12 rounded-[4rem] bg-[#49a7a1]/20" />
                    <div class="absolute right-28 -bottom-28 size-60 rotate-45 rounded-[3rem] border-[24px] border-white/5" />
                </div>

                <div class="relative max-w-3xl">
                    <div class="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.26em] text-[#71d0c9] uppercase">
                        <span class="h-px w-10 bg-[#71d0c9]" />
                        Curriculum Vitae
                    </div>
                    <h1 class="text-5xl leading-none font-black tracking-[-0.045em] sm:text-7xl">
                        {{ store.resume.name || 'Your Name' }}
                    </h1>
                    <p class="mt-5 text-base font-semibold tracking-[0.2em] text-slate-300 uppercase sm:text-lg">
                        {{ store.resume.field || 'Professional Title' }}
                    </p>
                </div>
            </header>

            <div class="grid lg:grid-cols-[310px_minmax(0,1fr)]">
                <aside class="bg-[#eef3f7] px-8 py-11 sm:px-10 sm:py-14">
                    <section>
                        <h2 class="side-heading">Contact</h2>
                        <div class="mt-6 grid gap-4 text-sm text-slate-600">
                            <a v-if="store.resume.email" :href="`mailto:${store.resume.email}`" class="contact-row">
                                <span class="icon-box"><AtSign class="size-4" /></span>
                                <span>{{ store.resume.email }}</span>
                            </a>
                            <a v-if="store.resume.phone" :href="`tel:${store.resume.phone}`" class="contact-row">
                                <span class="icon-box"><Phone class="size-4" /></span>
                                <span>{{ store.resume.phone }}</span>
                            </a>
                            <a v-if="store.resume.linkedin" :href="store.resume.linkedin" target="_blank" rel="noreferrer" class="contact-row">
                                <span class="icon-box"><Link class="size-4" /></span>
                                <span>{{ store.resume.linkedin }}</span>
                            </a>
                            <a v-if="store.resume.gitAccount" :href="store.resume.gitAccount" target="_blank" rel="noreferrer" class="contact-row">
                                <span class="icon-box"><Code2 class="size-4" /></span>
                                <span>{{ store.resume.gitAccount }}</span>
                            </a>
                            <p v-if="!store.resume.email && !store.resume.phone && !store.resume.linkedin && !store.resume.gitAccount" class="text-slate-400">
                                Your contact details
                            </p>
                        </div>
                    </section>

                    <section v-if="skills.length" class="side-section">
                        <h2 class="side-heading">Core Skills</h2>
                        <div class="mt-6 grid gap-4">
                            <div v-for="skill in skills" :key="skill">
                                <div class="mb-2 flex items-center gap-3">
                                    <span class="size-1.5 rounded-full bg-[#49a7a1]" />
                                    <span class="text-sm font-semibold text-[#243852]">{{ skill }}</span>
                                </div>
                                <div class="h-1 overflow-hidden rounded-full bg-slate-300/70">
                                    <div class="h-full w-[82%] rounded-full bg-[#49a7a1]" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section v-if="education.length" class="side-section">
                        <h2 class="side-heading">Education</h2>
                        <div class="mt-6 space-y-7">
                            <div v-for="(item, index) in education" :key="index" class="relative pl-5">
                                <span class="absolute top-1.5 left-0 size-2 rounded-full bg-[#49a7a1] ring-4 ring-[#d9e9e9]" />
                                <p v-if="item.year" class="text-[11px] font-bold tracking-widest text-[#388983] uppercase">{{ item.year }}</p>
                                <h3 v-if="item.degree" class="mt-1.5 text-sm leading-5 font-bold text-[#172f4b]">{{ item.degree }}</h3>
                                <p v-if="item.school" class="mt-1 text-xs leading-5 text-slate-500">{{ item.school }}</p>
                            </div>
                        </div>
                    </section>

                    <section v-if="interests.length" class="side-section">
                        <h2 class="side-heading">Interests</h2>
                        <div class="mt-5 flex flex-wrap gap-2">
                            <span v-for="interest in interests" :key="interest" class="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
                                {{ interest }}
                            </span>
                        </div>
                    </section>
                </aside>

                <div class="px-8 py-11 sm:px-14 sm:py-14">
                    <section v-if="store.resume.about">
                        <h2 class="main-heading"><Sparkles class="size-5" /> Professional Profile</h2>
                        <p class="mt-5 border-l-4 border-[#49a7a1] pl-5 text-[15px] leading-7 whitespace-pre-line text-slate-600">
                            {{ store.resume.about }}
                        </p>
                    </section>

                    <section v-if="experience.length" class="main-section">
                        <h2 class="main-heading"><BriefcaseBusiness class="size-5" /> Work Experience</h2>
                        <div class="mt-8 space-y-10">
                            <div v-for="(item, index) in experience" :key="index" class="relative grid gap-3 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-6">
                                <div>
                                    <span v-if="item.duration" class="inline-flex rounded-full bg-[#e0f2f0] px-3 py-1 text-[11px] font-bold tracking-wide text-[#337b76] uppercase">
                                        {{ item.duration }}
                                    </span>
                                </div>
                                <div class="relative border-b border-slate-200 pb-9 last:border-b-0">
                                    <h3 class="text-lg font-extrabold text-[#172f4b]">{{ item.role || 'Position' }}</h3>
                                    <p v-if="item.company" class="mt-1 text-sm font-bold text-[#49a7a1]">{{ item.company }}</p>
                                    <p v-if="item.description" class="mt-4 text-sm leading-6 whitespace-pre-line text-slate-600">{{ item.description }}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section v-if="store.resume.project" class="main-section">
                        <h2 class="main-heading"><Code2 class="size-5" /> Featured Projects</h2>
                        <div class="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(30,50,75,0.06)]">
                            <p class="text-[15px] leading-7 whitespace-pre-line text-slate-600">{{ store.resume.project }}</p>
                        </div>
                    </section>

                    <section v-if="!store.resume.about && !experience.length && !store.resume.project">
                        <h2 class="main-heading"><GraduationCap class="size-5" /> Resume Content</h2>
                        <p class="mt-5 text-[15px] leading-7 text-slate-400">Your profile, professional experience and projects will appear here.</p>
                    </section>
                </div>
            </div>
        </article>
    </main>
</template>

<style scoped>
    .side-section {
        margin-top: 2.75rem;
        border-top: 1px solid #ccd6df;
        padding-top: 2.75rem;
    }

    .side-heading {
        color: #172f4b;
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: 0.22em;
        text-transform: uppercase;
    }

    .side-heading::after {
        display: block;
        width: 2rem;
        height: 3px;
        margin-top: 0.75rem;
        border-radius: 9999px;
        background: #49a7a1;
        content: '';
    }

    .contact-row {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        overflow-wrap: anywhere;
    }

    .icon-box {
        display: inline-flex;
        width: 2rem;
        height: 2rem;
        flex: none;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem;
        background: #172f4b;
        color: #71d0c9;
    }

    .main-section {
        margin-top: 3.5rem;
    }

    .main-heading {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: #172f4b;
        font-size: 1.05rem;
        font-weight: 900;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .main-heading :deep(svg) {
        color: #49a7a1;
    }

    @media print {
        .resume-page {
            print-color-adjust: exact;
        }
    }
</style>
