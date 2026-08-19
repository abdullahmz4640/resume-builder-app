<script setup lang="ts">
import { useResumeStore } from '../../stores/resumeStore';

const store = useResumeStore();
</script>

<template>
    <!-- Full Name -->
    <div>
        <label class="mb-2 block text-lg font-semibold">
            Full Name
        </label>

        <input
            v-model="store.resume.name"
            type="text"
            class="w-full rounded border p-3"
            placeholder="e.g. Muhammad Abdullah"
        />
    </div>

    <!-- Professional Field -->
    <div>
        <label class="mb-2 block text-lg font-semibold">
            Professional Field
        </label>

        <input
            v-model="store.resume.field"
            type="text"
            class="w-full rounded border p-3"
            placeholder="e.g. Frontend Developer"
        />
    </div>

    <!-- About -->
    <div class="col-span-2">
        <label class="mb-2 block text-lg font-semibold">
            About
        </label>

        <textarea
            v-model="store.resume.about"
            class="h-25 w-full rounded border p-3"
            placeholder="Write something about yourself..."
        ></textarea>
    </div>

    <!-- Email -->
    <div>
        <label class="mb-2 block text-lg font-semibold">
            Email
        </label>

        <input
            v-model="store.resume.email"
            type="email"
            class="w-full rounded border p-3"
            placeholder="example@email.com"
        />
    </div>

    <!-- Phone -->
    <div>
        <label class="mb-2 block text-lg font-semibold">
            Phone
        </label>

        <input
            v-model="store.resume.phone"
            type="text"
            class="w-full rounded border p-3"
            placeholder="+92 300 1234567"
        />
    </div>

    <!-- LinkedIn -->
    <div>
        <label class="mb-2 block text-lg font-semibold">
            LinkedIn
        </label>

        <input
            v-model="store.resume.linkedin"
            type="text"
            class="w-full rounded border p-3"
            placeholder="LinkedIn profile URL"
        />
    </div>

    <!-- GitHub -->
    <div>
        <label class="mb-2 block text-lg font-semibold">
            GitHub Account
        </label>

        <input
            v-model="store.resume.gitAccount"
            type="text"
            class="w-full rounded border p-3"
            placeholder="GitHub profile URL"
        />
    </div>
</template>