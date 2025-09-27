<template>
  <div class="study-projects-container">
    <div class="study-projects-container__sub">
      <StudyProjects
        v-if="studyProjects"
        :projects="studyProjects"
        is-gallery
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import StudyProjects from "./StudyProjects.vue";
import { Project } from "@/types/project";

defineProps<{
  studyProjects?: Project[];
}>();
</script>

<style lang="scss" scoped>
@use "@/assets/global";

.study-projects-container {
  display: flex;
  overflow-y: auto;
  width: 100%;
  padding-bottom: 15px;

  &__sub {
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 0 0 45px 0;
    border-bottom: 3px solid global.$detail--color;
  }
}
</style>
