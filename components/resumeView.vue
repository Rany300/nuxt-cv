<script lang="ts" setup>
import timeLine from './timeLine.vue';

const timelineEvents = [
  {
    id: 1,
    title: 'Event 1',
    date: 'June 1, 2023',
    content: '<p>This is the content of Event 1.</p>',
    imageUrl: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  },
  {
    id: 2,
    title: 'Event 2',
    date: 'June 3, 2023',
    content: '<p>This is the content of Event 2.</p>',
    imageUrl: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  },
];

</script>

<template>
  <div class="resume-page">
    <timeLine :events="timelineEvents" />
  </div>
</template>

<style scoped lang="scss">

.resume-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

</style>
