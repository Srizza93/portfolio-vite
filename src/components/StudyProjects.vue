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
    <div
      class="project"
      :class="{ 'project--open': project.toggle }"
      tabindex="0"
    >
      <img
        class="project-image"
        :src="getFilePath(project.image)"
        :alt="project.name"
      />
      <img
        v-if="project.techImage"
        class="tech-image"
        :src="getFilePath(project.techImage)"
        :alt="project.name"
      />
      <a
        :href="project.link"
        class="project-link"
        :class="{ 'project-link--hidden': !project.link }"
      >
        {{ $t("portfolio.visit") }}
      </a>
      <a
        :href="project.github"
        class="project-link"
        :class="{ 'project-link--hidden': !project.github }"
      >
        {{ $t("portfolio.github") }}
      </a>

      <folio-button
        class="project-button"
        @folio-button-click="openDetails(project)"
      >
        <span v-if="!project.toggle">{{ $t("portfolio.showDetails") }}</span>
        <span v-else>{{ $t("portfolio.closeDetails") }}</span>
      </folio-button>
      <project-details :project="project" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import FolioButton from "@/components/FolioButton.vue";
import ProjectDetails from "./ProjectDetails.vue";

import { getFilePath } from "@/services/fileService";

import { Project } from "@/types/project";

defineProps<{
  projects: Project[];
}>();

function openDetails(project: Project) {
  project.toggle = !project.toggle;
}
</script>

<style lang="scss" scoped>
@use "@/assets/global";

.project-container {
  position: relative;
  padding: 0 global.$spacing--medium;

  &:first-child {
    margin-top: 0;
  }
}

.time-circle {
  position: absolute;
  bottom: -54px;
  left: 50%;
  width: 15px;
  height: 15px;
  border-radius: global.$border-radius--round;
  background-color: global.$detail--color;

  &__relative {
    position: relative;

    &--date {
      position: absolute;
      bottom: 0;
      left: -50%;
      color: global.$detail-dark--color;
      font-weight: bold;
      font-size: 14px;
    }
  }
}

.project {
  display: flex;
  flex-direction: column;
  width: 275px;
  border: 1px solid global.$detail--color;
  border-radius: global.$border-radius--medium;
  box-shadow: global.$shadow--large;

  &--open {
    height: 100%;
  }
}

.project-image {
  display: block;
  width: 100%;
  height: 150px;
  border-radius: global.$border-radius--medium global.$border-radius--medium 0 0;
  margin-bottom: global.$spacing--small;
  padding: global.$spacing--xsmall;
  object-fit: contain;
  border-bottom: 1px solid global.$detail--color;
}

.tech-image {
  position: absolute;
  right: -20px;
  width: 100px;
  height: auto;
}

.project-link {
  color: global.$secondary--color;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: global.$spacing--small;
  display: inline-block;

  &--hidden {
    visibility: hidden;
    pointer-events: none;
  }

  &:hover {
    text-decoration: underline;
    color: global.$secondary-dark--color;
  }
}

.project-button {
  width: 90%;
  margin: auto auto global.$spacing--small auto;
}

@media screen and (max-width: 500px) {
  .project-image {
    height: 200px;
    object-fit: cover;
  }
}
</style>
