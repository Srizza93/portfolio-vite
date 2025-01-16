<template>
  <div
    class="toaster"
    :class="{
      'toaster--visible': toasterMessage,
      'toaster--error': messageType === MessageTypeEnum.ERROR,
      'toaster--success': messageType === MessageTypeEnum.SUCCESS,
      'toaster--info': messageType === MessageTypeEnum.INFO,
      'toaster--warning': messageType === MessageTypeEnum.WARNING,
    }"
    role="alert"
  >
    <p>{{ toasterMessage }}</p>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import { useToasterStore } from '@/store/toaster';
import { MessageTypeEnum } from '@/types/toaster';

const toasterStore = useToasterStore();
const { toasterMessage, messageType } = storeToRefs(toasterStore);
</script>

<style lang="scss" scoped>
@use '@/assets/global';

.toaster {
  position: fixed;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  color: global.$primary--color;
  padding: global.$spacing-vertical-horizontal--medium;
  border-radius: global.$border-radius--small;
  margin: global.$spacing--medium auto;
  font-size: global.$font-size--small;
  font-weight: bold;
  text-align: left;
  white-space: nowrap;

  &--visible {
    animation: slideIn 0.4s linear forwards;
  }

  &--error {
    background-color: global.$error--color;
  }

  &--success {
    background-color: global.$succes--color;
  }

  &--info {
    background-color: global.$info--color;
  }

  &--warning {
    background-color: global.$warning--color;
  }
}

@keyframes slideIn {
  0% {
    top: -100%;
  }
  100% {
    top: 0;
  }
}
</style>
