<template>
  <div class="contact-details" v-if="contactsData">
    <h3 class="contact-details__title">{{ $t('navigation.contacts') }}</h3>
    <ul v-if="contactsData.length" class="contact-details__list">
      <li
        v-for="contact in contactsData"
        :key="'contact-' + contact.name"
        class="contact"
      >
        <a class="contact__link" :href="contact.link">
          <img
            class="contact__link__icon"
            :src="getFilePath(contact.name + '.png')"
            :alt="contact.name"
          />
          <span>{{ contact.text }}</span>
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
import { onMounted, ref, type Ref } from 'vue';
import i18n from '@/i18n';

import { getFilePath } from '@/services/fileService';
import { getContactsData } from '@/api/contacts';
import { Contact } from '@/types/contacts';
import { copyToClipboard, mapContactsData } from '@/services/contactsService';

import { useToasterStore } from '@/store/toaster';

const toasterStore = useToasterStore();
const contactsData: Ref<Contact[] | null> = ref(null);
const copyIcons = {
  copy: 'copy-clipboard.png',
  check: 'check.png',
  error: 'cross.png',
};

function getData(): Promise<void> {
  return getContactsData()
    .then((response: Contact[]) => {
      contactsData.value = mapContactsData(response);
    })
    .catch(() => {
      toasterStore.setMessage(i18n.global.t('global.error'));
    });
}

onMounted(() => {
  getData();
});
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
  gap: global.$spacing--xsmall;
  margin: global.$spacing--medium 0;

  &__link {
    display: flex;
    align-items: center;
    gap: global.$spacing--small;
    color: global.$secondary--color;
    text-decoration: none;

    &__icon {
      max-width: global.$icon-size--small;
    }
  }

  &__link:hover {
    opacity: global.$opacity--light;
  }

  &__copy {
    width: global.$icon-size--small;
    height: global.$icon-size--small;
    padding: global.$spacing--xsmall;
    cursor: pointer;

    &--to-copy:hover {
      opacity: global.$opacity--light;
    }
  }
}
</style>
