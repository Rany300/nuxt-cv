<script lang="ts" setup>
import MainLayout from "~/layouts/Main.vue";
import resume from "~/components/resumeView.vue";
import navigation from "~/components/navigation.vue";
</script>

<template>
   <MainLayout>
    <template v-slot:header>
      <navigation menu-sticky  />
    </template>
    <template v-slot:default>
      <resume />
    </template>
    <template v-slot:footer>
    </template>
  </MainLayout>
</template>

<style scoped></style>
