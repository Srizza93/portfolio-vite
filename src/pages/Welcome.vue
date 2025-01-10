<template>
  <div class="welcome">
    <div class="introduction">
      <p class="introduction__message">
        {{ $t('welcome.introduction', { name: 'Simone Rizza' }) }}
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
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import FolioButton from '@/components/FolioButton.vue';
import { HOME_PATH } from '@/constants/pageEndpoints';

const router = useRouter();

function goToHome() {
  // setTimeout(() => {
  //   router.push(HOME_PATH);
  // }, 7000);
}

onMounted(() => {
  goToHome();
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
  flex-direction: column;
  width: min-content;

  &__message {
    width: 0;
    margin: 0 auto;
    overflow: hidden;
    color: white;
    font-size: 6vw;
    font-weight: bold;
    white-space: nowrap;
    animation: coding-introduction 2s steps(20, end) forwards,
      blink-caret 1s 2.5;
  }
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
  from {
    border-right: 3px solid white;
  }
  to {
    border-right: 3px solid transparent;
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
