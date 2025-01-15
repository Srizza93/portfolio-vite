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
          v-if="!contact.isCopying"
          :src="getFilePath(copyIcons.copy)"
          :alt="$t('contacts.copy-clipboard--alt')"
          class="contact__copy contact__copy--to-copy"
          tabindex="0"
          @keydown.enter="copyToClipboard(contact)"
          @click="copyToClipboard(contact)"
        />
        <img
          v-else-if="contact.isCopying && contact.isCopySuccessful"
          :src="getFilePath(copyIcons.check)"
          :alt="$t('contacts.copy-clipboard-success--alt')"
          class="contact__copy"
        />
        <img
          v-else
          :src="getFilePath(copyIcons.error)"
          :alt="$t('contacts.copy-clipboard-error--alt')"
          class="contact__copy"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import i18n from '@/i18n';

import { getFilePath } from '@/services/fileService';

import { useToasterStore } from '@/store/toaster';
import { MessageTypeEnum } from '@/types/toaster';

const toasterStore = useToasterStore();

type Contact = {
  id: string;
  link: string;
  text: string;
  image?: {
    link: string;
    name: string;
  };
  isCopying: boolean;
  isCopySuccessful: boolean;
};

const toasterDelay = 1500;

const copyIcons = {
  copy: 'copy-clipboard.png',
  check: 'check.png',
  error: 'cross.png',
};

const contacts: Ref<Contact[]> = ref([
  {
    id: 'phone',
    link: 'tel:+33772233271',
    text: '+33 772233271',
    isCopying: false,
    isCopySuccessful: false,
  },
  {
    id: 'email',
    link: 'mailto:simonerizzanl@gmail.com',
    text: 'simonerizzanl@gmail.com',
    isCopying: false,
    isCopySuccessful: false,
  },
  {
    id: 'linkedin',
    link: 'https://www.linkedin.com/in/simonerizza1993',
    text: 'https://www.linkedin.com/in/simonerizza1993',
    image: {
      link: 'linkedin.png',
      name: 'linkedin',
    },
    isCopying: false,
    isCopySuccessful: false,
  },
]);

function showText(contactId: string) {
  return contactId === 'phone' || contactId === 'email';
}

async function copyToClipboard(contact: Contact) {
  await navigator.clipboard
    .writeText(contact.text)
    .then(() => {
      contact.isCopying = true;
      contact.isCopySuccessful = true;
      toasterStore.setMessage(
        i18n.global.t('contacts.copy-clipboard-success'),
        MessageTypeEnum.SUCCESS,
        toasterDelay
      );
    })
    .catch(() => {
      contact.isCopying = true;
      toasterStore.setMessage(i18n.global.t('contacts.copy-clipboard-error'));
    })
    .finally(() => {
      setTimeout(() => {
        contact.isCopying = false;
        contact.isCopySuccessful = false;
      }, toasterDelay);
    });
}
</script>

<style lang="scss" scoped>
@use '@/assets/global';

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
  margin: global.$spacing--medium 0;

  &__link {
    display: flex;
    color: global.$secondary--color;
    text-decoration: none;

    &__icon {
      max-width: global.$icon-size--medium;
    }
  }

  &__link:hover {
    opacity: global.$opacity--light;
  }

  &__copy {
    width: global.$icon-size--small;
    height: global.$icon-size--small;
    padding: global.$spacing--xsmall;
    margin-left: global.$spacing--xsmall;
    cursor: pointer;

    &--to-copy:hover {
      opacity: global.$opacity--light;
    }
  }
}
</style>
