import { Contact } from '@/types/contacts';
import { MessageTypeEnum } from '@/types/toaster';
import i18n from '@/i18n';
import { useToasterStore } from '@/store/toaster';

const toasterDelay = 1500;

export function mapContactsData(data: Contact[]) {
  return data.map((contact: Contact) => ({
    ...contact,
    isCopying: false,
    isCopySuccessful: false,
  }));
}

export async function copyToClipboard(contact: Contact) {
  await navigator.clipboard
    .writeText(contact.text)
    .then(() => {
      contact.isCopying = true;
      contact.isCopySuccessful = true;

      useToasterStore().setMessage(
        i18n.global.t('contacts.copy-clipboard-success'),
        MessageTypeEnum.SUCCESS,
        toasterDelay
      );
    })
    .catch(() => {
      contact.isCopying = true;

      useToasterStore().setMessage(
        i18n.global.t('contacts.copy-clipboard-error')
      );
    })
    .finally(() => {
      setTimeout(() => {
        contact.isCopying = false;
        contact.isCopySuccessful = false;
      }, toasterDelay);
    });
}
