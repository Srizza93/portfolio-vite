<template>
  <div class="portfolio">
    <h3 class="portfolio__title">
      {{ $t("portfolio.studyProjectTitle") }}
    </h3>
    <StudyProjectsCarousel
      v-if="studyProjectsData"
      :study-projects="studyProjectsData"
    />
    <h3 class="portfolio__title portfolio__title--work">
      {{ $t("portfolio.workExperiencesTitle") }}
    </h3>
    <div class="portfolio-subcontainer">
      <Projects v-if="projectsData" :projects="projectsData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, type Ref } from "vue";

import { getWorkProjectsData, getStudyProjectsData } from "@/api/portfolio";
import { useToasterStore } from "@/store/toaster";
import i18n from "@/i18n";

import Projects from "@/components/Projects.vue";
import StudyProjectsCarousel from "@/components/StudyProjectsCarousel.vue";
import { Project } from "@/types/project";

const toasterStore = useToasterStore();

const projectsData: Ref<Project[] | null> = ref(null);
const studyProjectsData: Ref<Project[] | null> = ref(null);

function getWorkProjects(): Promise<void> {
  return getWorkProjectsData()
    .then((response: Project[]) => {
      projectsData.value = response;
    })
    .catch(() => {
      toasterStore.setMessage(i18n.global.t("global.error"));
    });
}

function getStudyProjects(): Promise<void> {
  return getStudyProjectsData()
    .then((response: Project[]) => {
      studyProjectsData.value = response;
    })
    .catch(() => {
      toasterStore.setMessage(i18n.global.t("global.error"));
    });
}

onMounted(() => {
  getWorkProjects();
  getStudyProjects();
});
</script>

<style lang="scss" scoped>
@use "@/assets/global";

.portfolio {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;

  &__title {
    width: 100%;
    text-align: left;
    padding-left: global.$spacing--medium;

    &--work {
      text-align: center;
      margin-top: global.$spacing--large;
    }
  }
}

.portfolio-subcontainer {
  display: flex;
  flex-direction: column;
  border-left: 3px solid global.$detail--color;
}
</style>
