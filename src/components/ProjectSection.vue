<template>
  <section class="project-section">
    <h3 class="project-section__title">{{ title }}</h3>
    <ul v-if="isTasks" class="tasks">
      <li v-for="task in listItems" :key="task.title">
        <h4 class="tasks__title">{{ task.title }} :</h4>
        <p class="tasks__description">{{ task.description }}</p>
      </li>
    </ul>
    <ul v-else class="project-bullet-points">
      <li v-for="(item, index) in listItems" :key="item + index">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  listItems: any[];
  isTasks?: boolean;
}>();
</script>

<style lang="scss" scoped>
@use '@/assets/global';

.project-section {
  font-size: global.$font-size--small;

  &__title {
    text-align: center;
    margin-bottom: 0;
    background-color: global.$secondary--color;
    color: global.$primary--color;
    border-radius: global.$border-radius--small;
  }
}

.project-bullet-points {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  margin-bottom: 0;
  padding: 0;

  & li {
    margin-left: global.$spacing--small;
  }
}

.tasks {
  padding: 0;
  list-style-type: none;

  &__title {
    margin-bottom: 0;
  }
  &__description {
    font-size: global.$font-size--small;
    margin: 0;
  }
}
</style>
