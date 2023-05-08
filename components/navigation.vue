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
  <div :class="{ 'fixed-menu': menuSticky }">
    <div class="flex justify-end m-4">
      <font-awesome-icon
        icon="list"
        class="text-3xl cursor-pointer menu-icon"
        :class="{ 'rotate-90': menuOpen }"
        @click="toggleMenu" />
    </div>
    <div class="menu"></div>
  </div>
</template>

<style scoped lang="scss">
.menu-icon {
  @apply transition-all;
  transition-duration: 0.3s;
  transform-origin: center;
}

.rotate-90 {
  transform: rotate(450deg);
}

.fixed-menu {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
