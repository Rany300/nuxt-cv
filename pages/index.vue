<script lang="ts" setup>
import MainLayout from "~/layouts/Main.vue";
import introduction from "~/components/introduction.vue";
import navigation from "~/components/navigation.vue";


</script>

<template>
  <MainLayout>
    <template v-slot:header>
      <navigation menu-sticky  />
    </template>
    <template v-slot:default>
      <introduction />
    </template>
    <template v-slot:footer>
    </template>
  </MainLayout>
</template>

<style scoped lang="scss">








</style>
