<template>
  <div
    v-for="project in projects"
    :key="project.name"
    class="project-container"
  >
    <div class="time-circle">
      <div class="time-circle__relative">
        <span class="time-circle__relative--date"
          >{{ $t(`portfolio.months[${project.date[0]}]`) }}
          {{ project.date[1] }}</span
        >
      </div>
    </div>
    <div class="project" :class="{ 'project--open': project.toggle }">
      <img
        class="project-image"
        :src="getFilePath(project.image)"
        :alt="project.name"
      />
      <a v-if="project.link" :href="project.link" class="project-link">
        {{ $t('portfolio.visit') }}
      </a>
      <a v-if="project.github" :href="project.github" class="project-link">
        {{ $t('portfolio.github') }}
      </a>

      <folio-button
        class="project-button"
        @folio-button-click="openDetails(project)"
      >
        <span v-if="!project.toggle">{{ $t('portfolio.showDetails') }}</span>
        <span v-else>{{ $t('portfolio.closeDetails') }}</span>
      </folio-button>
      <project-details :project="project" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import FolioButton from '@/components/FolioButton.vue';
import ProjectDetails from './ProjectDetails.vue';

import { getFilePath } from '@/services/fileService';

import { Project } from '@/types/project';

defineProps<{
  projects: Project[];
}>();

function openDetails(project: Project) {
  project.toggle = !project.toggle;
}
</script>

<style lang="scss" scoped>
.project-container {
  position: relative;
  padding: 0 30px 0 60px;
  margin-top: 30px;

  &:first-child {
    margin-top: 0;
  }
}

.time-circle {
  position: absolute;
  top: 50%;
  left: -9px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #dedede;

  &__relative {
    position: relative;

    &--date {
      position: absolute;
      top: -10px;
      left: 20px;
      color: #888888;
      font-weight: bold;
    }
  }
}

.project {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  border: 1px solid #dedede;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &--open {
    height: 100%;
  }
}

.project-image {
  display: block;
  width: 100%;
  height: 400px;
  border-radius: 15px 15px 0 0;
  margin-bottom: 15px;
  padding: 5px;
  object-fit: contain;
  border-bottom: 1px solid #dedede;
}

.project-link {
  color: #0474b3;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 15px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
    color: #035a91;
  }
}

.project-button {
  width: 90%;
  margin: 0 auto 15px auto;
}

@media screen and (max-width: 500px) {
  .project-image {
    height: 200px;
    object-fit: cover;
  }
}
</style>
