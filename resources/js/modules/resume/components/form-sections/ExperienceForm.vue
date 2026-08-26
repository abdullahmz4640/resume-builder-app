<script setup lang="ts">
    import { useResumeStore } from '../../stores/resumeStore'

    const store = useResumeStore()
</script>

<template>
    <div class="col-span-2 mt-4 border-t pt-4">
        <!-- Header -->
        <div class="mb-4 flex items-center justify-between">
            <label class="text-xl font-bold text-gray-800"> Experience </label>

            <button type="button" class="transition-transform hover:scale-110" @click="store.addExperience">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>

        <!-- Experience List -->
        <div v-for="(exp, index) in store.resume.experience" :key="index" class="bg-gray-25 mb-6 rounded-lg border border-gray-200 p-4">
            <!-- Experience Header -->
            <div class="mb-4 flex items-center justify-between border-b pb-2">
                <span class="text-sm font-bold text-gray-500"> Job #{{ index + 1 }} </span>

                <button v-if="store.resume.experience.length > 1" type="button" class="text-red-500" @click="store.removeExperience(index)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244-2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                    </svg>
                </button>
            </div>

            <!-- Experience Fields -->
            <div class="grid grid-cols-2 gap-4">
                <!-- Company -->
                <div>
                    <label class="mb-1 block text-sm font-semibold"> Company </label>

                    <input v-model="exp.company" type="text" class="w-full rounded border p-2" placeholder="Company Name" />
                </div>

                <!-- Role -->
                <div>
                    <label class="mb-1 block text-sm font-semibold"> Role </label>

                    <input v-model="exp.role" type="text" class="w-full rounded border p-2" placeholder="e.g. Frontend Developer" />
                </div>

                <!-- Duration -->
                <div class="col-span-2">
                    <label class="mb-1 block text-sm font-semibold"> Duration </label>

                    <input v-model="exp.duration" type="text" class="w-full rounded border p-2" placeholder="e.g. 2022 - 2024" />
                </div>
            </div>
        </div>
    </div>
</template>
