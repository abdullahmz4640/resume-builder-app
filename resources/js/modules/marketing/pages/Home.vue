<template>
    <Head title="Welcome" />

    <div class="min-h-screen bg-gray-900 px-6 py-8">
        <div class="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[1002px] flex-col">
            <!-- Header -->
            <header class="mb-10 w-full">
                <div class="flex items-center gap-4">
                    <!-- Logo -->
                    <div class="h-12 w-12 flex-none rounded-xl bg-gradient-to-tr from-rose-500 to-amber-400 shadow-xl ring-1 ring-white/30"></div>

                    <!-- Text -->
                    <div>
                        <p class="text-sm font-semibold tracking-wider text-[#f59e0b] uppercase">Resume Builder</p>

                        <h2 class="mt-1 text-2xl font-bold text-white">Craft standout resumes with ease</h2>
                    </div>
                </div>
            </header>

            <!-- Main Content -->
            <main class="flex flex-1 items-center rounded-3xl bg-white p-8 shadow-2xl md:p-12">
                <div class="grid w-full gap-10 md:grid-cols-2 md:items-center">
                    <!-- Left Content -->
                    <section class="space-y-6">
                        <h1 class="text-4xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-5xl">
                            Create Your
                            <span class="bg-gradient-to-br from-pink-500 to-orange-400 bg-clip-text text-transparent"> Professional Resume </span>
                        </h1>

                        <p class="max-w-xl text-lg leading-8 text-gray-600">
                            Create a professional resume in minutes. Add your personal information, education, experience, skills and projects in one
                            simple form.
                        </p>

                        <div class="pt-3">
                            <Link
                                href="/app/resumes/create"
                                class="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 px-7 py-3 text-lg font-medium text-white shadow-md transition-transform hover:scale-105"
                            >
                                Create My Resume
                            </Link>
                        </div>
                    </section>

                    <!-- Right Highlights -->
                    <aside class="flex justify-center">
                        <div class="w-full max-w-md rounded-2xl border border-gray-200 bg-gray-50 p-7 shadow-lg">
                            <h3 class="mb-6 text-2xl font-bold text-gray-800">Why Resume Builder?</h3>

                            <ul class="space-y-5">
                                <li class="flex items-start gap-4">
                                    <span
                                        class="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-400 text-sm font-bold text-white"
                                    >
                                        ✓
                                    </span>

                                    <div>
                                        <p class="font-semibold text-gray-800">Professional Templates</p>

                                        <p class="mt-1 text-sm text-gray-500">Create clean and ATS-friendly resumes.</p>
                                    </div>
                                </li>

                                <li class="flex items-start gap-4">
                                    <span
                                        class="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-400 text-sm font-bold text-white"
                                    >
                                        ✓
                                    </span>

                                    <div>
                                        <p class="font-semibold text-gray-800">Easy to Customize</p>

                                        <p class="mt-1 text-sm text-gray-500">Add education, experience, skills and projects.</p>
                                    </div>
                                </li>

                                <li class="flex items-start gap-4">
                                    <span
                                        class="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-400 text-sm font-bold text-white"
                                    >
                                        ✓
                                    </span>

                                    <div>
                                        <p class="font-semibold text-gray-800">Ready to Export</p>

                                        <p class="mt-1 text-sm text-gray-500">Prepare your resume for sharing and PDF export.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    </div>
</template>
