<script lang="ts" setup>
import MainLayout from "~/layouts/Main.vue";
import navigation from "~/components/navigation.vue";
import contactView from "~/components/contactView.vue";
</script>

<template>
   <MainLayout>
    <template v-slot:header>
      <navigation menu-sticky  />
    </template>
    <template v-slot:default>
      <contactView />
    </template>
    <template v-slot:footer>
    </template>
  </MainLayout>
</template>

<style scoped></style>
