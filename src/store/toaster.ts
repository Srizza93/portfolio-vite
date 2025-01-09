import { defineStore } from 'pinia';

import { MessageType, MessageTypeEnum } from '@/types/toaster';

type State = {
  toasterMessage: string;
  messageType: MessageType;
};

export const useToasterStore = defineStore('toaster', {
  state: (): State => ({
    toasterMessage: '',
    messageType: MessageTypeEnum.ERROR,
  }),
  actions: {
    setMessage(toasterMessage: string, messageType: MessageType) {
      this.toasterMessage = toasterMessage;
      this.messageType = messageType;
    },
    clearMessage() {
      this.toasterMessage = '';
      this.messageType = MessageTypeEnum.ERROR;
    },
  },
});
