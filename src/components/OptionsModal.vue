<template>
  <img
    class="option option--selected"
    :src="selectedLanguage.img"
    alt="Selected language option"
    @click="$emit('open-modal')"
  />
  <div
    class="options-modal"
    v-bind:class="{ 'options-modal--open': isModalOpen }"
  >
    <img
      v-for="option in options"
      class="option"
      :key="option.name"
      :src="option.img"
      alt="Modal option"
      @click="$emit('select-option', option.name)"
    />
  </div>
</template>

<script lang="ts" setup>
type Option = {
  name: string;
  img: string;
};

defineProps<{
  selectedLanguage: Option;
  options: Option[];
  isModalOpen: boolean;
}>();

defineEmits<{
  'open-modal': [];
  'select-option': [string];
}>();
</script>

<style lang="scss" scoped>
.options-modal {
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: calc(50% - 150px);
  width: 300px;
  height: 130px;
  padding: 30px;
  border-radius: 15px;
  background-color: #0474b3;
  z-index: 99999;

  &--open {
    display: flex;
  }
}

.option {
  width: 50px;
  height: auto;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &--selected {
    position: fixed;
    bottom: 0;
    right: 0;
  }
}
</style>
