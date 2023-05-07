<script lang="ts" setup></script>

<template>
  <div class="layout">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot name="default" />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  @apply bg-dark-gray text-white min-h-screen flex flex-col;
}
</style>
