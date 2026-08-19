<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { useResumeStore } from '../stores/resumeStore.js';
// import EducationForm from '../components/form-sections/EducationForm.vue';
// import ExperienceForm from '../components/form-sections/ExperienceForm.vue';
// import PersonalInfo from '../components/form-sections/PersonalInfo.vue';

const store = useResumeStore();
</script>

<template>
    <form
        class="flex min-h-screen w-screen justify-center bg-gray-900 pt-20 pb-20"
    >
        <div class="w-[700px] rounded-lg bg-white p-8 shadow-lg">
            <h2
                class="mb-10 flex justify-center text-2xl font-bold text-gray-800"
            >
                Resume Form
            </h2>

            <div class="grid grid-cols-2 gap-6">
                <!-- Personal Information -->
                <PersonalInfo />

                <!-- Skills -->
                <div class="col-span-2 mt-4 border-t pt-4">
                    <div class="mb-4 flex items-center justify-between">
                        <label class="text-xl font-bold text-gray-800">
                            Skills
                        </label>

                        <button
                            type="button"
                            class="transition-transform hover:scale-110"
                            @click="store.addSkill"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        v-for="(item, index) in store.resume.skill"
                        :key="index"
                        class="mb-2 flex gap-2"
                    >
                        <input
                            v-model="store.resume.skill[index]"
                            type="text"
                            class="w-full rounded border p-2"
                            placeholder="Enter skill"
                        />

                        <button
                            v-if="store.resume.skill.length > 1"
                            type="button"
                            class="text-red-500"
                            @click="store.removeSkill(index)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Education -->
                <EducationForm />

                <!-- Experience -->
                <ExperienceForm />

                <!-- Interests -->
                <div class="col-span-2 mt-4 border-t pt-4">
                    <div class="mb-4 flex items-center justify-between">
                        <label class="text-xl font-bold text-gray-800">
                            Interests
                        </label>

                        <button
                            type="button"
                            class="hover:scale-110"
                            @click="store.addInterest"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        v-for="(item, index) in store.resume.interest"
                        :key="index"
                        class="mb-2 flex gap-2"
                    >
                        <input
                            v-model="store.resume.interest[index]"
                            type="text"
                            class="w-full rounded border p-2"
                            placeholder="Enter interest"
                        />

                        <button
                            v-if="store.resume.interest.length > 1"
                            type="button"
                            class="text-red-500"
                            @click="store.removeInterest(index)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244-2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Projects -->
                <div class="col-span-2">
                    <label class="mb-2 block text-lg font-semibold">
                        Projects
                    </label>

                    <textarea
                        v-model="store.resume.project"
                        class="h-25 w-full rounded border p-3"
                    ></textarea>
                </div>
            </div>

            <!-- Buttons -->
            <div class="mt-8 flex items-center justify-between">
                <Link
                    href="/"
                    class="inline-flex items-center justify-center rounded-lg bg-gray-600 px-6 py-3 text-lg font-medium text-white shadow-md transition-colors hover:bg-gray-700"
                >
                    Back to Home
                </Link>

                <button
                    type="submit"
                    class="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 px-6 py-3 text-lg font-medium text-white shadow-md transition-transform hover:scale-105"
                >
                    Preview
                </button>
            </div>
        </div>
    </form>
</template>