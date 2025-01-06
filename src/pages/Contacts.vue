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
          {{ contact.text }}
          <img
            v-if="contact.image"
            class="contact__link__icon"
            :src="getFilePath(contact.image.link)"
            :alt="contact.image.name"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';

import { getFilePath } from '@/services/fileService';

type Contact = {
  id: number;
  link: string;
  text: string;
  image?: {
    link: string;
    name: string;
  };
};

const contacts: Ref<Contact[]> = ref([
  {
    id: 1,
    link: 'tel:+33772233271',
    text: '+33772233271',
  },
  {
    id: 2,
    link: 'mailto:simonerizzanl@gmail.com',
    text: 'simonerizzanl@gmail.com',
  },
  {
    id: 3,
    link: 'https://www.linkedin.com/in/simonerizza1993',
    text: '',
    image: {
      link: 'linkedin.png',
      name: 'linkedin',
    },
  },
]);
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
  }
}

.contact {
  margin: 30px 0;

  &__link {
    display: block;
    width: 100%;
    padding: 15px;
    color: #0474b3;
    text-decoration: none;

    &__icon {
      max-width: 50px;
    }
  }

  &__link:hover {
    animation: push-text 0.2s linear forwards;
  }
}

@keyframes push-text {
  0% {
    padding-left: 15px;
  }
  100% {
    padding-left: 50px;
  }
}
</style>
