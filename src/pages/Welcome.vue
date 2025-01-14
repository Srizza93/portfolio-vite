<template>
  <div class="welcome">
    <p class="introduction">
      <span ref="messageRef"></span>
      <span class="caret"></span>
    </p>
    <div class="button-box">
      <folio-button
        theme="x-light"
        @animationend="goToHome"
        @click="goToHomeWithoutAnimation"
        >{{ $t('welcome.access-home') }}</folio-button
      >
      <img
        class="button-box__mouse"
        src="@/assets/cursor.png"
        alt="Mouse cursor animation"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import i18n from '@/i18n';

import FolioButton from '@/components/FolioButton.vue';
import { HOME_PATH } from '@/constants/pageEndpoints';

const router = useRouter();
const messageRef = ref<HTMLParagraphElement | null>(null);
const intervalId = ref<number | null>(null);
const messageIndex = ref(0);

function playAnimation() {
  const message = i18n.global.t('welcome.introduction', {
    name: 'Simone Rizza',
  });
  intervalId.value = setInterval(() => {
    if (messageIndex.value === message.length) {
      playMouseAnimation();
      return;
    }

    if (messageRef.value) {
      messageRef.value.textContent += message[messageIndex.value];
    }
    messageIndex.value++;
  }, 100);
}

function playMouseAnimation() {
  const mouse = document.querySelector('.button-box__mouse') as HTMLElement;
  const button = document.querySelector('.folio-button') as HTMLElement;

  mouse.style.animation = 'mouse-animation 0.5s steps(15) forwards';
  button.style.animation = 'blink-light 1s linear .2s';

  clearAnimationInterval();
}

function clearAnimationInterval() {
  if (intervalId.value !== null) {
    clearInterval(intervalId.value);
  }
}

function goToHomeWithoutAnimation() {
  clearAnimationInterval();
  goToHome();
}

function goToHome() {
  router.push(HOME_PATH);
}

onMounted(() => {
  playAnimation();
});
</script>

<style lang="scss">
.hide-element {
  opacity: 0;
}

@keyframes button-click {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
}

@keyframes mouse-animation {
  from {
    top: -50%;
    left: -50%;
  }
  to {
    top: 10%;
    left: 10%;
  }
}
</style>

<style lang="scss" scoped>
@use '@/assets/global.scss' as *;

.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  min-width: 100%;
  height: 100%;
  padding: 30px 15px;
  background-color: $secondary--color;
  transition-duration: 2s;
}

.introduction {
  margin: 0 auto;
  color: $primary--color;
  font-size: 32px;
  font-weight: bold;
}

.caret {
  height: 100%;
  width: 3px;
  border-left: 1px solid $primary--color;
  animation: blink-caret 1.1s infinite steps(1, start);
}

.button-box {
  position: relative;
  display: flex;
  margin-top: 60px;

  &__mouse {
    position: absolute;
    top: -50%;
    left: -50%;
    animation-fill-mode: both;
  }
}

@keyframes coding-introduction {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  0% {
    visibility: visible;
    opacity: 1;
  }
  50% {
    visibility: visible;
    opacity: 1;
  }
  100% {
    visibility: hidden;
    opacity: 0;
  }
}
</style>
