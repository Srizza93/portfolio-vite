<template>
  <div class="contact-details">
    <h3 class="contact-details__title">{{ $t('navigation.contacts') }}</h3>
    <ul class="contact-details__list">
      <li
        v-for="contact in contacts"
        :key="'contact-' + contact.id"
        class="contact"
      >
        <a class="contact__link" :href="contact.link">
          <span v-if="showText(contact.id)">{{ contact.text }}</span>
          <img
            v-if="contact.image"
            class="contact__link__icon"
            :src="getFilePath(contact.image.link)"
            :alt="contact.image.name"
          />
        </a>
        <img
          v-if="contact.text"
          :src="getFilePath('copy-clipboard.png')"
          alt="copy-clipboard"
          class="contact__copy"
          @click="copyToClipboard(contact.text)"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';

import { getFilePath } from '@/services/fileService';

type Contact = {
  id: string;
  link: string;
  text: string;
  image?: {
    link: string;
    name: string;
  };
};

const contacts: Ref<Contact[]> = ref([
  {
    id: 'phone',
    link: 'tel:+33772233271',
    text: '+33772233271',
  },
  {
    id: 'email',
    link: 'mailto:simonerizzanl@gmail.com',
    text: 'simonerizzanl@gmail.com',
  },
  {
    id: 'linkedin',
    link: 'https://www.linkedin.com/in/simonerizza1993',
    text: 'https://www.linkedin.com/in/simonerizza1993',
    image: {
      link: 'linkedin.png',
      name: 'linkedin',
    },
  },
]);

function showText(textId: string) {
  return textId === 'phone' || textId === 'email';
}

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error('Failed to copy: ', error);
  }
}
</script>

<style lang="scss" scoped>
.contact-details {
  display: flex;
  flex-direction: column;
  align-items: baseline;

  &__title {
    margin: 0;
  }

  &__list {
    list-style-type: none;
    text-align: left;
    padding: 0;
  }
}

.contact {
  display: flex;
  align-items: center;
  margin: 30px 0;

  &__link {
    display: block;
    color: #0474b3;
    text-decoration: none;

    &__icon {
      max-width: 50px;
    }
  }

  &__link:hover,
  &__copy:hover {
    opacity: 0.7;
  }

  &__copy {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>
