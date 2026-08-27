<script setup lang="ts">
    import { ArrowRight, Download, FileText, Layers, PenLine, ShieldCheck, Sparkles, Wand2 } from '@lucide/vue'

    const createResumeHref = appRoutes.resumes.create.url()

    const heroStats = [
        { value: '5 min', label: 'Average build time' },
        { value: '100%', label: 'ATS-friendly output' },
        { value: '0', label: 'Design skills needed' }
    ]

    const featureCards = [
        {
            icon: Layers,
            title: 'Professional templates',
            description: 'Recruiter-ready layouts that stay readable on screen, in print and inside a PDF.'
        },
        {
            icon: PenLine,
            title: 'One simple form',
            description: 'Personal info, education, experience, skills, interests and projects in a single guided flow.'
        },
        {
            icon: Wand2,
            title: 'Live preview',
            description: 'Every change renders instantly, so you always see exactly what a recruiter will see.'
        },
        {
            icon: ShieldCheck,
            title: 'ATS-safe structure',
            description: 'Clear sections and plain text output that applicant tracking systems can actually parse.'
        },
        {
            icon: Download,
            title: 'Export ready',
            description: 'Prepare your resume for sharing or PDF export without reformatting anything by hand.'
        },
        {
            icon: FileText,
            title: 'Nothing to install',
            description: 'Runs in the browser. Open the builder, fill it in and keep editing whenever you want.'
        }
    ]

    const buildSteps = [
        {
            title: 'Fill the form',
            description: 'Add your details section by section. Add or remove skills, education and experience rows as you go.'
        },
        {
            title: 'Check the preview',
            description: 'Open the live preview to review spacing, tone and ordering before anyone else sees it.'
        },
        {
            title: 'Send it out',
            description: 'Export or share the finished resume and start applying with something you are proud of.'
        }
    ]
</script>

<template>
    <Head title="Welcome" />

    <div class="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 selection:bg-pink-500/30">
        <div class="pointer-events-none absolute inset-0" aria-hidden="true">
            <div
                class="ambient-orb ambient-orb-one absolute -top-40 -left-32 size-[30rem] rounded-full bg-gradient-to-tr from-pink-600/40 via-rose-500/30 to-orange-400/30 blur-[120px]"
            />
            <div
                class="ambient-orb ambient-orb-two absolute top-1/4 -right-40 size-[34rem] rounded-full bg-gradient-to-tr from-fuchsia-600/30 via-pink-500/25 to-amber-300/25 blur-[130px]"
            />
            <div
                class="ambient-orb ambient-orb-three absolute -bottom-52 left-1/4 size-[28rem] rounded-full bg-gradient-to-tr from-rose-500/25 to-yellow-300/20 blur-[120px]"
            />
            <div class="ambient-grid absolute inset-0" />
        </div>

        <div class="relative z-10 mx-auto w-full max-w-6xl px-6 pt-8 pb-20 sm:px-8">
            <header class="flex animate-in items-center justify-between gap-4 animation-duration-700 fill-mode-both fade-in slide-in-from-top-4">
                <div class="flex items-center gap-3">
                    <span
                        class="flex size-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-500 to-orange-400 shadow-lg ring-1 shadow-pink-500/30 ring-white/25"
                    >
                        <Sparkles class="size-6 text-white" />
                    </span>

                    <span class="grid">
                        <span class="text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase">Resume Builder</span>
                        <span class="text-sm font-medium text-slate-300">Craft standout resumes with ease</span>
                    </span>
                </div>

                <UiButton
                    size="sm"
                    as-child
                    class="hidden rounded-full border border-white/15 bg-white/5 px-4 text-slate-200 hover:bg-white/10 hover:text-white sm:inline-flex"
                >
                    <Link :href="createResumeHref">Open builder</Link>
                </UiButton>
            </header>

            <main>
                <section class="mt-16 lg:mt-24">
                    <div>
                        <p
                            class="inline-flex animate-in items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-200 backdrop-blur delay-100 animation-duration-700 fill-mode-both fade-in slide-in-from-bottom-4"
                        >
                            <span class="relative flex size-2">
                                <span class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span class="relative inline-flex size-2 rounded-full bg-emerald-400" />
                            </span>
                            Free to use · No sign-up · Instant preview
                        </p>

                        <h1
                            class="mt-6 animate-in text-4xl leading-[1.08] font-extrabold tracking-tight text-white delay-200 animation-duration-700 fill-mode-both fade-in slide-in-from-bottom-6 sm:text-5xl lg:text-6xl"
                        >
                            Create your
                            <span class="gradient-text">professional resume</span>
                            in minutes
                        </h1>

                        <p
                            class="mt-6 max-w-xl animate-in text-lg leading-8 text-slate-300 delay-300 animation-duration-700 fill-mode-both fade-in slide-in-from-bottom-6"
                        >
                            Add your personal information, education, experience, skills and projects in one simple form. The layout, spacing and
                            export-ready structure are handled for you.
                        </p>

                        <div
                            class="mt-9 flex animate-in flex-wrap items-center gap-4 delay-500 animation-duration-700 fill-mode-both fade-in slide-in-from-bottom-6"
                        >
                            <UiButton
                                size="lg"
                                as-child
                                class="group relative h-13 overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 px-8 text-base font-semibold text-white shadow-xl shadow-pink-500/25 hover:shadow-2xl hover:shadow-pink-500/40 hover:brightness-110"
                            >
                                <Link :href="createResumeHref">
                                    Create my resume
                                    <ArrowRight class="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    <span class="cta-shine pointer-events-none" aria-hidden="true" />
                                </Link>
                            </UiButton>

                            <UiButton
                                variant="ghost"
                                size="lg"
                                as-child
                                class="h-13 rounded-full border border-white/15 bg-white/5 px-6 text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white"
                            >
                                <a href="#how-it-works">See how it works</a>
                            </UiButton>
                        </div>

                        <div
                            class="mt-12 grid max-w-lg animate-in grid-cols-3 gap-4 border-t border-white/10 pt-8 delay-700 animation-duration-700 fill-mode-both fade-in slide-in-from-bottom-6"
                        >
                            <div v-for="stat in heroStats" :key="stat.label">
                                <p class="text-2xl font-bold text-white sm:text-3xl">{{ stat.value }}</p>
                                <p class="mt-1 text-xs leading-5 text-slate-400">{{ stat.label }}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="scroll-reveal mt-28 lg:mt-36">
                    <div class="max-w-2xl">
                        <p class="text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase">Why Resume Builder</p>

                        <h2 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need, nothing you don't</h2>

                        <p class="mt-4 text-base leading-7 text-slate-400">
                            Focused tooling that keeps you writing content instead of fighting margins and font sizes.
                        </p>
                    </div>

                    <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <article
                            v-for="(feature, index) in featureCards"
                            :key="feature.title"
                            class="reveal-stagger group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-pink-500/10"
                            :style="{ '--reveal-order': index }"
                        >
                            <span class="card-glow pointer-events-none" aria-hidden="true" />

                            <span
                                class="relative flex size-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-500/90 to-orange-400/90 text-white shadow-lg shadow-pink-500/20 transition-transform duration-300 group-hover:scale-110"
                            >
                                <component :is="feature.icon" class="size-5" />
                            </span>

                            <h3 class="relative mt-5 text-lg font-semibold text-white">{{ feature.title }}</h3>

                            <p class="relative mt-2 text-sm leading-6 text-slate-400">{{ feature.description }}</p>
                        </article>
                    </div>
                </section>

                <section id="how-it-works" class="scroll-reveal mt-28 scroll-mt-10 lg:mt-36">
                    <div class="max-w-2xl">
                        <p class="text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase">How it works</p>

                        <h2 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Three steps to a finished resume</h2>
                    </div>

                    <ol class="mt-12 grid gap-5 md:grid-cols-3">
                        <li
                            v-for="(step, index) in buildSteps"
                            :key="step.title"
                            class="reveal-stagger relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-white/20"
                            :style="{ '--reveal-order': index }"
                        >
                            <span
                                class="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-500 to-orange-400 text-base font-bold text-white shadow-lg shadow-pink-500/25"
                            >
                                {{ index + 1 }}
                            </span>

                            <h3 class="mt-5 text-lg font-semibold text-white">{{ step.title }}</h3>

                            <p class="mt-2 text-sm leading-6 text-slate-400">{{ step.description }}</p>
                        </li>
                    </ol>
                </section>

                <section
                    class="scroll-reveal relative mt-28 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-pink-500/15 via-rose-500/10 to-amber-400/15 p-10 text-center shadow-2xl shadow-black/40 sm:p-14 lg:mt-36"
                >
                    <span class="cta-glow pointer-events-none" aria-hidden="true" />

                    <div class="relative">
                        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Your next opportunity starts with one page</h2>

                        <p class="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300">
                            Open the builder, fill in your details and walk away with a resume you can send today.
                        </p>

                        <UiButton
                            size="lg"
                            as-child
                            class="group relative mt-8 h-13 overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 px-8 text-base font-semibold text-white shadow-xl shadow-pink-500/25 hover:shadow-2xl hover:shadow-pink-500/40 hover:brightness-110"
                        >
                            <Link :href="createResumeHref">
                                Create my resume
                                <ArrowRight class="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                                <span class="cta-shine pointer-events-none" aria-hidden="true" />
                            </Link>
                        </UiButton>
                    </div>
                </section>
            </main>

            <footer class="mt-20 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
                <p>Resume Builder — build, preview and export in one place.</p>

                <p>Built with Laravel, Inertia and Vue.</p>
            </footer>
        </div>
    </div>
</template>

<style scoped>
    .gradient-text {
        background-image: linear-gradient(100deg, #f472b6 0%, #fb923c 35%, #fbbf24 50%, #fb923c 65%, #f472b6 100%);
        background-size: 200% 100%;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }

    .ambient-grid {
        background-image:
            linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px);
        background-size: 64px 64px;
        mask-image: radial-gradient(ellipse 75% 55% at 50% 0%, black 35%, transparent 100%);
        -webkit-mask-image: radial-gradient(ellipse 75% 55% at 50% 0%, black 35%, transparent 100%);
    }

    .cta-shine {
        position: absolute;
        inset: 0;
        background: linear-gradient(105deg, transparent 35%, rgb(255 255 255 / 0.45) 50%, transparent 65%);
        transform: translateX(-130%);
        transition: transform 700ms ease;
    }

    .group:hover .cta-shine {
        transform: translateX(130%);
    }

    .card-glow {
        position: absolute;
        top: -40%;
        right: -20%;
        height: 16rem;
        width: 16rem;
        border-radius: 9999px;
        background: radial-gradient(circle, rgb(244 114 182 / 0.35), transparent 65%);
        opacity: 0;
        transition: opacity 300ms ease;
    }

    .group:hover .card-glow {
        opacity: 1;
    }

    .cta-glow {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 50% 0%, rgb(244 114 182 / 0.22), transparent 60%);
    }

    @keyframes orb-drift-one {
        to {
            transform: translate3d(60px, 40px, 0) scale(1.08);
        }
    }

    @keyframes orb-drift-two {
        to {
            transform: translate3d(-70px, -30px, 0) scale(1.06);
        }
    }

    @keyframes orb-drift-three {
        to {
            transform: translate3d(40px, -50px, 0) scale(1.05);
        }
    }

    @keyframes text-shimmer {
        to {
            background-position: -200% 0;
        }
    }

    @keyframes scroll-reveal {
        from {
            opacity: 0;
            transform: translateY(28px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        .gradient-text {
            animation: text-shimmer 9s linear infinite;
        }

        .ambient-orb-one {
            animation: orb-drift-one 19s ease-in-out infinite alternate;
        }

        .ambient-orb-two {
            animation: orb-drift-two 23s ease-in-out infinite alternate;
        }

        .ambient-orb-three {
            animation: orb-drift-three 27s ease-in-out infinite alternate;
        }
    }
    /* Scroll-driven reveals stay CSS-only so SSR markup renders identically and browsers
       without view() timelines simply show the sections without an entrance animation. */
    @supports (animation-timeline: view()) {
        @media (prefers-reduced-motion: no-preference) {
            .scroll-reveal,
            .reveal-stagger {
                animation: scroll-reveal 1s linear both;
                animation-timeline: view();
                animation-range: entry 8% cover 34%;
            }

            .reveal-stagger {
                animation-range: entry calc(6% + var(--reveal-order, 0) * 5%) cover calc(30% + var(--reveal-order, 0) * 5%);
            }
        }
    }

    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation: none !important;
        }
    }
</style>
