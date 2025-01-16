<template>
  <div v-if="welcomeData" class="welcome">
    <p class="introduction">
      <span
        ref="messageRef"
        :aria-label="
          $t('welcome.introduction', {
            name: welcomeData?.name,
          })
        "
      ></span>
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
        :alt="$t('welcome.cursor-animation')"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import i18n from '@/i18n';

import { useToasterStore } from '@/store/toaster';
import { getWelcomeData } from '@/api/welcome';
import { WelcomeDto } from '@/types/welcomeDto';

import FolioButton from '@/components/FolioButton.vue';
import { HOME_PATH } from '@/constants/pageEndpoints';

const router = useRouter();
const toasterStore = useToasterStore();

const welcomeData = ref<WelcomeDto | null>(null);
const messageRef = ref<HTMLParagraphElement | null>(null);
const intervalId = ref<number | null>(null);
const messageIndex = ref(0);

function playAnimation() {
  const message = i18n.global.t('welcome.introduction', {
    name: welcomeData.value?.name,
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

function getData(): Promise<void> {
  return getWelcomeData()
    .then((response: WelcomeDto) => {
      welcomeData.value = response;
    })
    .catch(() => {
      goToHome();
      toasterStore.setMessage(i18n.global.t('global.error'));
    });
}

onMounted(async () => {
  await getData();
  playAnimation();
});
</script>

<style lang="scss">
@use '@/assets/global';

.hide-element {
  opacity: 0;
}

@keyframes button-click {
  from {
    opacity: 1;
  }
  to {
    opacity: global.$opacity--light;
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
@use '@/assets/global';

.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  min-width: 100%;
  height: 100%;
  padding: global.$spacing-vertical-horizontal--large;
  background-color: global.$secondary--color;
  transition-duration: 2s;
}

.introduction {
  margin: 0 auto;
  color: global.$primary--color;
  font-size: global.$font-size--xlarge;
  font-weight: bold;
}

.caret {
  height: 100%;
  width: 3px;
  border-left: 1px solid global.$primary--color;
  animation: blink-caret 1.1s infinite steps(1, start);
}

.button-box {
  position: relative;
  display: flex;
  margin-top: global.$spacing--large;

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
