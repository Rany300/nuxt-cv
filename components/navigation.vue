<script lang="ts" setup>
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

defineProps({
  menuSticky: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  
  <div :class="{ 'sticky-menu-bar': menuSticky }" class="menu-bar">
    <nuxt-link to="/" class="page-name">Rany.dev</nuxt-link>
    <div class="flex justify-end m-4">
      <ClientOnly>
        <font-awesome-icon
          icon="list"
          class="text-3xl cursor-pointer menu-icon"
          :class="{ 'rotate-90': menuOpen }"
          @click="toggleMenu" />
      </ClientOnly>
    </div>
  </div>
  <transition name="slide" mode="out-in">
    <div class="menu" v-if="menuOpen">
      <h2 class="text-7xl font-bold text-white p-4 text-center">
        Daniel REDING
      </h2>
      <NuxtLink to="/resume">Resume</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <NuxtLink to="/contact">Contact Me</NuxtLink>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.menu-icon {
  @apply transition-all;
  transition-duration: 0.3s;
  transform-origin: center;
}

.page-name {
  @apply cursor-pointer text-4xl m-4 font-bold text-white sticky top-0;
}

.rotate-90 {
  transform: rotate(450deg);
}

.sticky-menu-bar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #333333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 999;
}

.menu-bar {
  @apply flex justify-between items-center;
  z-index: 100;
}

.menu {
  @apply fixed flex flex-col top-0 left-0 w-[80vh] h-screen bg-gray-800;
  z-index: 100;

  a {
    @apply transition-all text-3xl text-white p-4 hover:bg-red-500 hover:text-gray-100;
    transition-duration: 0.3s;
    color: white;
    text-decoration: none;

    margin: 1rem;

    background-color: #363d45;
    &:hover {
      background-color: #4b5563;
    }
  }

  h2 {
    font-family: "Inter", sans-serif;
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin: 2rem auto;
    color: white;
    text-align: center;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);

    &::after {
      content: ".";
      @apply text-red-600 animate-pulse text-7xl;
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-out;
}
.slide-enter-to {
  position: fixed;
  top: 0;
  left: 0;
}
.slide-enter-from {
  position: fixed;
  top: 0;
  left: -100%;
}

.slide-leave-to {
  position: fixed;
  top: 0;
  left: -100%;
}

.slide-leave-from {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
