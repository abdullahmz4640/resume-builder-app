<script setup lang="ts"></script>

<template>
    <Head title="Welcome" />

    <div
        class="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-rose-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
    >
        <!-- Decorative blobs -->
        <div
            class="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-gradient-to-tr from-rose-200 to-pink-300 opacity-40 blur-3xl"
        />
        <div
            class="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-gradient-to-tr from-amber-200 to-yellow-300 opacity-30 blur-3xl"
        />

        <div class="relative z-10 mx-auto w-full max-w-5xl px-6 py-20">
            <transition name="fade-up" appear>
                <header class="mb-10 flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="h-12 w-12 flex-none rounded-xl bg-gradient-to-tr from-rose-500 to-amber-400 shadow-xl ring-1 ring-white/30" />
                        <div>
                            <p class="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-300">Resume Builder</p>
                            <p class="text-sm font-medium text-slate-700 dark:text-slate-200">Craft standout resumes with ease</p>
                        </div>
                    </div>
                </header>
            </transition>

            <transition name="fade-up" appear>
                <main class="relative grid gap-10 rounded-3xl bg-white/60 p-8 shadow-2xl backdrop-blur-md dark:bg-slate-900/60">
                    <div class="grid gap-8 sm:grid-cols-2 sm:items-center">
                        <section class="space-y-6">
                            <h1
                                class="transform text-4xl leading-tight font-extrabold tracking-tight text-slate-900 transition-all duration-700 ease-out sm:text-5xl dark:text-white"
                            >
                                Welcome to Resume Builder
                            </h1>
                            <p class="text-lg text-slate-600 dark:text-slate-300">
                                Create premium resumes in minutes using modern templates, privacy-first storage, and one-click PDF export.
                            </p>

                            <div class="mt-6 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/dashboard"
                                    class="btn-primary inline-flex transform items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
                                >
                                    Create My Resume
                                </Link>
                            </div>
                        </section>

                        <aside class="flex items-center justify-center">
                            <div class="w-full max-w-md">
                                <div
                                    class="rounded-xl bg-gradient-to-tr from-rose-50 to-amber-50 p-6 shadow-lg dark:from-slate-800 dark:to-slate-900"
                                >
                                    <p class="text-sm font-medium text-slate-700 dark:text-slate-300">Highlights</p>
                                    <ul class="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                                        <li class="flex items-start gap-3">
                                            <span class="mt-1 inline-block h-2 w-2 rounded-full bg-rose-500" />
                                            Polished, ATS-friendly templates
                                        </li>
                                        <li class="flex items-start gap-3">
                                            <span class="mt-1 inline-block h-2 w-2 rounded-full bg-amber-400" />
                                            Secure cloud storage
                                        </li>
                                        <li class="flex items-start gap-3">
                                            <span class="mt-1 inline-block h-2 w-2 rounded-full bg-sky-400" />
                                            Export to PDF and share links
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </main>
            </transition>
        </div>

        <div class="absolute inset-x-0 bottom-0 -mb-10 h-40 bg-gradient-to-t from-white/60 to-transparent backdrop-blur-md" />
    </div>
</template>

<style scoped>
    /* Fade up transition for hero elements */
    .fade-up-enter-from {
        opacity: 0;
        transform: translateY(18px) scale(0.995);
    }
    .fade-up-enter-active {
        transition:
            opacity 700ms cubic-bezier(0.2, 0.9, 0.2, 1),
            transform 700ms cubic-bezier(0.2, 0.9, 0.2, 1);
    }
    .fade-up-enter-to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }

    /* Premium button styles */
    .btn-primary {
        background: linear-gradient(90deg, #794a52 0%, #ac5f40 50%, #facc15 100%);
        box-shadow:
            0 8px 30px rgba(250, 130, 100, 0.12),
            inset 0 -2px 6px rgba(54, 49, 49, 0.06);
        position: relative;
    }
    .btn-primary::after {
        content: '';
        position: absolute;
        inset: -1px;
        z-index: -1;
        border-radius: 9999px;
        background: linear-gradient(90deg, rgba(255, 159, 122, 0.15), rgba(250, 200, 60, 0.12));
        filter: blur(8px);
        opacity: 0;
        transition: opacity 300ms ease;
    }
    .btn-primary:hover::after {
        opacity: 1;
    }

    /* subtle utility tweaks */
    .blur-3xl {
        filter: blur(48px);
    }
</style>
