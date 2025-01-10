<template>
  <div class="welcome">
    <div class="introduction">
      <p ref="messageRef" class="introduction__message">
        <span class="caret"></span>
      </p>
    </div>
    <div class="button-box">
      <folio-button theme="x-light">Access</folio-button>
      <img
        class="button-box__mouse"
        src="@/assets/cursor.png"
        alt="arrow-mouse"
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

function playAnimation() {
  const message = i18n.global.t('welcome.introduction', {
    name: 'Simone Rizza',
  });
  let index = 0;
  const interval = setInterval(() => {
    if (index === message.length) {
      clearInterval(interval);
      // router.push(HOME_PATH);
      return;
    }
    messageRef.value!.textContent += message[index];
    index++;
  }, 100);
}

onMounted(() => {
  playAnimation();
});
</script>

<style lang="scss">
.folio-button {
  animation: button-click 0.6s linear 3.5s;
  pointer-events: none;
}

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
</style>

<style lang="scss" scoped>
.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  min-width: 100%;
  height: 100%;
  padding: 30px 15px;
  background-color: #0474b3;
  transition-duration: 2s;
}

.introduction {
  display: flex;

  &__message {
    margin: 0 auto;
    color: white;
    font-size: 32px;
    font-weight: bold;
  }
}

.caret {
  height: 100%;
  width: 3px;
  border-left: 1px solid white;
  animation: blink-caret 1.1s infinite steps(1, start);
}

.button-box {
  position: relative;
  display: flex;
  margin-top: 60px;

  &__mouse {
    position: absolute;
    animation: mouse 0.5s steps(15) 3s;
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
    visibility: hidden; // Completely hides at the end of the cycle
    opacity: 0; // Fade out
  }
}

@keyframes mouse {
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
