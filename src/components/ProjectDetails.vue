<template>
  <div class="details" :class="{ 'details--open': project.toggle }">
    <section>
      <h3 class="project-title">{{ project.name }}</h3>
      <p>
        {{ $t(`portfolio.${project.id}.role`) }} -
        {{ $t(`portfolio.${project.id}.company`) }}
      </p>
      <p class="project-description">
        {{ $t(`portfolio.${project.id}.description`) }}
      </p>
    </section>
    <project-section
      v-if="tasksFromTranslations.length"
      :title="$t('portfolio.tasks')"
      :list-items="tasksFromTranslations"
      is-tasks
    />
    <project-section
      v-if="project.functionalities"
      :title="$t('portfolio.functionalities')"
      :list-items="project.functionalities"
    />
    <project-section
      v-if="project.stack"
      :title="$t('portfolio.stack')"
      :list-items="project.stack"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import i18n from '@/i18n';
import { Project } from '@/types/project';

import ProjectSection from '@/components/ProjectSection.vue';

const props = defineProps<{
  project: Project;
}>();

const tasksFromTranslations = computed(() =>
  Object.values(i18n.global.tm(`portfolio.${props.project.id}.tasks`))
);
</script>

<style lang="scss" scoped>
@use '@/assets/global';

.details {
  width: 100%;
  max-height: 0;
  overflow: hidden;
  text-align: left;
  line-height: global.$line-height--medium;
  visibility: hidden;

  &--open {
    max-height: max-content;
    visibility: visible;
    padding: global.$spacing--small;
  }
}

.project-title {
  margin: 0;
}

.project-description {
  white-space: pre-wrap;
}
</style>
