<template>
  <div class="welcome">
    <div class="messages">
      <span class="messages__text message1">Welcome to</span>
      <span class="messages__text message2">Simone Rizza's portfolio</span>
    </div>
    <div class="button-box">
      <folio-button theme="dark">Access</folio-button>
      <img
        class="button-box_mouse"
        src="@/assets/arrow-mouse.png"
        alt="arrow-mouse"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import FolioButton from '@/components/FolioButton.vue';
import { HOME_PATH } from '@/constants/pageEndpoints';

const router = useRouter();

function goToHome() {
  setTimeout(() => {
    router.push(HOME_PATH);
  }, 7000);
}

onMounted(() => {
  goToHome();
});
</script>

<style lang="scss">
.hide-element {
  opacity: 0;
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
  background-color: #0474b3;
  transition-duration: 2s;
}

.messages {
  display: flex;
  flex-direction: column;
  width: min-content;

  &__text {
    width: 0;
    margin: 0 auto;
    overflow: hidden;
    color: white;
    font-size: 6vw;
    font-weight: bold;
    white-space: nowrap;
  }
}

.message1 {
  animation: message-animation 2s steps(20, end) forwards, blink-caret 1s 2.5;
}

.message2 {
  animation: message-animation 3s steps(25, end) 2.5s forwards,
    blink-caret 1s infinite 2.5s;
}

@keyframes message-animation {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from {
    border-right: 3px solid white;
  }
  to {
    border-right: 3px solid transparent;
  }
}

.button-box {
  position: relative;
  display: flex;
  margin-top: 60px;
}

.folio-button {
  animation: button-click 0.6s linear 6.5s;
  pointer-events: none;
}

.button-box_mouse {
  position: absolute;
  animation: mouse 0.5s steps(15) 6s;
  animation-fill-mode: both;
}

@keyframes mouse {
  from {
    top: -50px;
    left: -50px;
  }
  to {
    top: 35px;
    left: 10px;
  }
}

@keyframes button-click {
  to {
    opacity: 0.5;
  }
}
</style>
