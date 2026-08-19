import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Education {
    school: string;
    degree: string;
    year: string;
}

interface Experience {
    company: string;
    role: string;
    duration: string;
    description: string;
}

interface Resume {
    name: string;
    field: string;
    about: string;
    email: string;
    phone: string;
    linkedin: string;
    gitAccount: string;
    education: Education[];
    interest: string[];
    skill: string[];
    experience: Experience[];
    project: string;
}

export const useResumeStore = defineStore('resume', () => {
    const resume = ref<Resume>({
        name: '',
        field: '',
        about: '',
        email: '',
        phone: '',
        linkedin: '',
        gitAccount: '',

        education: [
            {
                school: '',
                degree: '',
                year: '',
            },
        ],

        interest: [''],

        skill: [''],

        experience: [
            {
                company: '',
                role: '',
                duration: '',
                description: '',
            },
        ],

        project: '',
    });

    const showPreview = ref(false);

    const addEducation = (): void => {
        resume.value.education.push({
            school: '',
            degree: '',
            year: '',
        });
    };

    const removeEducation = (index: number): void => {
        if (resume.value.education.length > 1) {
            resume.value.education.splice(index, 1);
        }
    };

    const addExperience = (): void => {
        resume.value.experience.push({
            company: '',
            role: '',
            duration: '',
            description: '',
        });
    };

    const removeExperience = (index: number): void => {
        if (resume.value.experience.length > 1) {
            resume.value.experience.splice(index, 1);
        }
    };

    const addSkill = (): void => {
        resume.value.skill.push('');
    };

    const removeSkill = (index: number): void => {
        if (resume.value.skill.length > 1) {
            resume.value.skill.splice(index, 1);
        }
    };

    const addInterest = (): void => {
        resume.value.interest.push('');
    };

    const removeInterest = (index: number): void => {
        if (resume.value.interest.length > 1) {
            resume.value.interest.splice(index, 1);
        }
    };

    const togglePreview = (status: boolean): void => {
        showPreview.value = status;
    };

    return {
        resume,
        showPreview,

        addEducation,
        removeEducation,

        addExperience,
        removeExperience,

        addSkill,
        removeSkill,

        addInterest,
        removeInterest,

        togglePreview,
    };
});