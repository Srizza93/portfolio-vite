import { defineStore } from 'pinia';

import { MessageType, MessageTypeEnum } from '@/types/toaster';

type State = {
  toasterMessage: string;
  messageType: MessageType;
  timeoutId: number;
};

const toasterDelay = 4000;

export const useToasterStore = defineStore('toaster', {
  state: (): State => ({
    toasterMessage: '',
    messageType: MessageTypeEnum.ERROR,
    timeoutId: 0,
  }),
  actions: {
    setMessage(
      toasterMessage: string,
      messageType?: MessageType,
      delay?: number
    ) {
      clearTimeout(this.timeoutId);

      this.toasterMessage = toasterMessage;

      if (messageType) {
        this.messageType = messageType;
      }

      this.closeToaster(delay);
    },
    clearMessage() {
      this.toasterMessage = '';
    },
    closeToaster(delay?: number) {
      this.timeoutId = setTimeout(() => {
        this.clearMessage();
      }, delay || toasterDelay);
    },
  },
});
