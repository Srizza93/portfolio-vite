<template>
  <div class="details" :class="{ 'details--open': project.toggle }">
    <h3 class="project-title">{{ project.name }}</h3>
    <p class="project-description">
      {{ $t(`portfolio.${project.description}`) }}
    </p>
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
import { Project } from '@/types/project';

defineProps<{
  project: Project;
}>();
</script>

<style lang="scss" scoped>
.details {
  width: 100%;
  max-height: 0;
  overflow: hidden;
  text-align: left;
  line-height: 30px;
  visibility: hidden;

  &--open {
    max-height: 10000px;
    visibility: visible;
    padding: 15px;
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
