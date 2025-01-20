<template>
  <div class="details" :class="{ 'details--open': project.toggle }">
    <h3 class="project-title">{{ project.name }}</h3>
    <p class="project-description">
      {{ $t(`portfolio.${project.id}.description`) }}
    </p>
    <!-- // Fix this -->
    <h3 v-if="tasksFromTranslations.length" class="project-title">
      {{ $t('portfolio.tasks') }}
    </h3>
    <ul v-if="tasksFromTranslations.length" class="project-tasks">
      <li v-for="task in tasksFromTranslations" :key="task.title">
        <h3>{{ task.title }} :</h3>
        <p>{{ task.description }}</p>
      </li>
    </ul>
    <!-- Here  -->
    <h3 v-if="project.functionalities" class="project-title">
      {{ $t('portfolio.functionalities') }}
    </h3>
    <ul v-if="project.functionalities" class="project-bullet-points">
      <li v-for="(func, index) in project.functionalities" :key="func + index">
        {{ func }}
      </li>
    </ul>
    <h3 v-if="project.stack" class="project-title">
      {{ $t('portfolio.stack') }}
    </h3>
    <ul v-if="project.stack" class="project-bullet-points">
      <li v-for="(tech, index) in project.stack" :key="tech + index">
        {{ tech }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import i18n from '@/i18n';

import { Project } from '@/types/project';
import { computed } from 'vue';

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

.project-bullet-points {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  margin-bottom: 0;
  padding: 0;

  & li {
    margin-left: 20px;
  }
}
</style>
