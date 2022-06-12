<template>
  <div>
    <div class="time-circle">
      <div class="time-circle_sub">
        <span class="time-circle_sub_date">{{ project.date }}</span>
      </div>
    </div>
    <div class="project_subcontainer">
      <img
        class="project_subcontainer_image"
        :src="getImageUrl(project.image)"
        :alt="project.name"
      />
      <button
        class="project_subcontainer_button open-button"
        @click="openDetails(project)"
      >
        Show details
      </button>
      <div
        class="project_subcontainer_details"
        v-bind:class="{ 'open-details': project.toggle }"
      >
        <span class="project_subcontainer_details_title">{{
          project.name
        }}</span>
        <p>{{ project.description }}</p>
        <span
          class="project_subcontainer_details_title"
          v-if="project.functionalities"
          >Functionalities</span
        >
        <ul
          class="project_subcontainer_details_list"
          v-if="project.functionalities"
        >
          <li
            v-for="(functionality, index) in project.functionalities"
            :key="functionality + index"
          >
            {{ functionality }}
          </li>
        </ul>
        <span class="project_subcontainer_details_title">Technologies</span>
        <ul class="project_subcontainer_details_list">
          <li v-for="(tech, index) in project.techs" :key="tech + index">
            {{ tech }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImageUrl(pic) {
      return new URL(`../assets/${pic}`, import.meta.url).href;
    },
    openDetails(project) {
      project.toggle = !project.toggle;
    },
  },
};
</script>

<style lang="stylus" scoped>
.time-circle
 position absolute
 top 50%
 left -10px
 width 15px
 height 15px
 border-radius 50%
 background-color #dedede

.time-circle_sub
 position relative

.time-circle_sub_date
 position absolute
 top -10px
 left 20px
 color 	#888888
 font-weight bold

.project_subcontainer
 display flex
 flex-direction column
 width 100%
 max-width 500px
 border 1px solid #dedede
 border-radius 15px

.project_subcontainer_image
 border-radius 15px 15px 0 0

.project_subcontainer_button
 margin 30px
 border none

.project_subcontainer_details
 max-height 0
 overflow hidden
 transition 1s ease-in
 text-align left

.open-details
 max-height 800px
 padding 30px

.project_subcontainer_details_title
 font-weight bold

.project_subcontainer_details_list
 padding 0
 list-style-type none

@media screen and (max-width 400px)
 .project_subcontainer_button
  padding 15px
  margin 30px 5px
  white-space normal

 .open-details
  padding 10px
</style>
