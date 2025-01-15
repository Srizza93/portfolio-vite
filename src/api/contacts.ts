import data from '@/assets/data.json';
import { Contact } from '@/types/contacts';

export function getContactsData(): Promise<Contact[]> {
  return Promise.resolve(JSON.parse(JSON.stringify(data))).then(
    (response) => response.personalInfo.contacts
  );
}
