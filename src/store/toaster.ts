import { defineStore } from 'pinia';

import { MessageType, MessageTypeEnum } from '@/types/toaster';

const defaultDelay = 7000;

type State = {
  toasterMessage: string;
  messageType: MessageType;
  toasterDelay: number;
  clickCount: number;
  timeoutPointer: number | undefined;
};

export const useToasterStore = defineStore('toaster', {
  state: (): State => ({
    toasterMessage: '',
    messageType: MessageTypeEnum.ERROR,
    toasterDelay: defaultDelay,
    clickCount: 0,
    timeoutPointer: undefined,
  }),
  actions: {
    setMessage(toasterMessage: string, messageType: MessageType) {
      if (this.clickCount > 0) {
        this.resetMessage();
        return;
      }

      this.toasterMessage = toasterMessage;
      this.messageType = messageType;
      this.clickCount += 1;
    },
    clearMessage() {
      this.toasterMessage = '';
      this.messageType = MessageTypeEnum.ERROR;
      this.clickCount = 0;
    },
    closeToaster(delay?: number) {
      if (this.clickCount > 1) {
        this.timeoutPointer = undefined;
        this.clearMessage();
      } else {
        this.timeoutPointer = setTimeout(() => {
          this.clearMessage();
        }, delay || this.toasterDelay);
      }
    },
    resetMessage(delay?: number) {
      clearTimeout(this.timeoutPointer);

      const actualMessage = this.toasterMessage;
      const actualMessageType = this.messageType;

      this.clearMessage();

      setTimeout(() => {
        this.setMessage(actualMessage, actualMessageType);
      }, delay || 500);
    },
  },
});
