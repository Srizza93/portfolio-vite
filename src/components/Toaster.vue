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
  >
    <p>{{ toasterMessage }}</p>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import { useToasterStore } from '@/store/toaster';
import { MessageTypeEnum } from '@/types/toaster';

const toasterStore = useToasterStore();
const { toasterMessage, messageType } = storeToRefs(toasterStore);

onMounted(() => {
  toasterStore.closeToaster();
});
</script>

<style lang="scss" scoped>
.toaster {
  position: fixed;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  padding: 15px 30px;
  border-radius: 5px;
  margin: 30px auto;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  white-space: nowrap;

  &--visible {
    animation: slideIn 0.5s ease-out forwards;
  }

  &--error {
    background-color: #ef4444;
  }

  &--success {
    background-color: #15b8a6;
  }

  &--info {
    background-color: #3b81f6;
  }

  &--warning {
    background-color: #eab305;
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
