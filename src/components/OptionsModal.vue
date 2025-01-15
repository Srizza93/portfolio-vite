<template>
  <img
    class="options__option options__option--selected modal-opener"
    :src="selectedLanguage?.img"
    alt="Selected language option"
    tabindex="0"
    @keydown.enter="openModal"
    @click="openModal"
  />
  <div
    class="options-modal"
    v-bind:class="{ 'options-modal--open': isModalOpen }"
  >
    <p class="modal-title">{{ $t('global.select-language') }}</p>
    <ul class="options">
      <li v-for="option in options" :key="option.name">
        <img
          class="options__option"
          :src="option.img"
          alt="Modal option"
          tabindex="0"
          @keydown.enter="selectOption(option.name)"
          @click="selectOption(option.name)"
        />
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
  document.addEventListener('click', blurModal);
  document.addEventListener('keydown', trapFocus);
}

function closeModal() {
  document.removeEventListener('click', blurModal);
  document.removeEventListener('keydown', trapFocus);
  emit('close-modal');
}

function selectOption(option: string) {
  emit('select-option', option);
  closeModal();
}

function blurModal(event: Event) {
  if (
    props.isModalOpen &&
    !(event.target as HTMLElement).closest('.options-modal') &&
    !(event.target as HTMLElement).classList.contains('modal-opener')
  ) {
    closeModal();
  }
}

function trapFocus(event: KeyboardEvent) {
  if (event.key === 'Tab') {
    const focusableElements = Array.from(
      document.querySelectorAll('.options-modal .options__option')
    ) as HTMLElement[];
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (focusableElements.length === 0) return;

    if (event.shiftKey) {
      if (
        document.activeElement === firstElement ||
        !document.activeElement?.closest('.options-modal')
      ) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/global';

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
  background-color: global.$primary--color;
  border: 2px solid global.$secondary--color;
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

  &__option {
    width: 48px;
    height: 48px;
    margin: 0 10px;
    border-radius: 50px;
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
