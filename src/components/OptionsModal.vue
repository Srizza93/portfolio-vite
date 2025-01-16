<template>
  <img
    class="options__option options__option--selected modal-opener"
    :src="selectedLanguage?.img"
    :alt="getSelectedLanguageAlt()"
    tabindex="0"
    @keydown.enter="openModal"
    @click="openModal"
  />
  <div
    class="options-modal"
    v-bind:class="{ 'options-modal--open': isModalOpen }"
    tabindex="0"
  >
    <p class="modal-title">{{ $t('global.select-language') }}</p>
    <ul class="options">
      <li v-for="option in options" :key="option.name">
        <img
          class="options__option"
          :src="option.img"
          :alt="getAltImage(option.name)"
          tabindex="0"
          @keydown.enter="selectOption(option.name)"
          @click="selectOption(option.name)"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import i18n from '@/i18n';

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

function getSelectedLanguageAlt() {
  return i18n.global.t('language-modal.selected--alt', {
    language: i18n.global.t(`global.languages.${props.selectedLanguage?.name}`),
  });
}

function getAltImage(optionName: string) {
  return i18n.global.t('language-modal.flag--alt', {
    language: i18n.global.t(`global.languages.${[optionName]}`),
  });
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
  padding: global.$spacing--medium;
  border-radius: global.$border-radius--medium;
  background-color: global.$primary--color;
  border: 2px solid global.$secondary--color;
  z-index: 99999;
  box-shadow: global.$shadow--large;

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
  gap: global.$spacing--small;
  margin: global.$spacing--small 0 0 0;
  padding: 0;
  list-style: none;

  &__option {
    width: global.$icon-size--medium;
    height: global.$icon-size--medium;
    border-radius: global.$border-radius--round;
    cursor: pointer;
    overflow: visible;

    &:hover {
      opacity: global.$opacity--light;
    }

    &--selected {
      position: fixed;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
