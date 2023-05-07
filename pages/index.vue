<script lang="ts" setup>
import MainLayout from "~/layouts/Main.vue";


</script>

<template>
  <MainLayout>
    <template v-slot:header>
      <div class="header">
        <font-awesome-icon icon="fa-brands fa-twitter-square" />

      </div>
    </template>
    <template v-slot:default>
      This will be injected as the default slot.
    </template>
    <template v-slot:footer>
      This will be injected as the footer slot.
    </template>
  </MainLayout>
</template>

<style scoped></style>
