<template>
  <img
    class="options__option options__option--selected modal-opener"
    :src="selectedLanguage?.img"
    alt="Selected language option"
    @click="openModal"
  />
  <div
    class="options-modal"
    v-bind:class="{ 'options-modal--open': isModalOpen }"
  >
    <p class="modal-title">{{ $t('global.select-language') }}</p>
    <ul class="options">
      <li
        v-for="option in options"
        :key="option.name"
        @click="$emit('select-option', option.name)"
      >
        <img class="options__option" :src="option.img" alt="Modal option" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
type Option = {
  name: string;
  img: string;
};

const props = defineProps<{
  selectedLanguage: Option | undefined;
  options: Option[];
  isModalOpen: boolean;
}>();

const emit = defineEmits<{
  'open-modal': [];
  'close-modal': [];
  'select-option': [string];
}>();

function openModal() {
  emit('open-modal');
  document.addEventListener('click', closeModal);
}

function closeModal(event: Event) {
  if (
    props.isModalOpen &&
    !(event.target as HTMLElement).closest('.options-modal') &&
    !(event.target as HTMLElement).classList.contains('modal-opener')
  ) {
    emit('close-modal');
    document.removeEventListener('click', closeModal);
  }
}
</script>

<style lang="scss" scoped>
.options-modal {
  position: fixed;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 30%;
  left: calc(50% - 150px);
  width: 300px;
  padding: 15px;
  border-radius: 15px;
  background-color: white;
  border: 2px solid #0474b3;
  z-index: 99999;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &--open {
    display: flex;
  }
}

.modal-title {
  margin: 0;
}

.options {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 15px 0 0 0;
  padding: 0;

  & li {
    margin: 0 10px;
  }

  &__option {
    width: 100%;
    height: auto;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    &--selected {
      position: fixed;
      bottom: 0;
      right: 0;
      max-width: 50px;
    }
  }
}
</style>
