<script setup lang="ts">
import { ref, onMounted } from "vue";

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  content: string;
  imageUrl?: string;
  isActive?: boolean;
}

const props = defineProps({
  events: {
    type: Array as PropType<TimelineEvent[]>,
    required: true,
  },
});

const timelineLine = ref<HTMLElement | null>(null);

onMounted(() => {
  animateTimelineLine();
});

function animateTimelineLine() {
  if (!timelineLine.value) return;

  const timelineItems =
    timelineLine.value.parentElement?.querySelectorAll(".timeline-item");
  if (!timelineItems) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const event = props.events.find(
        (e) => e.id === Number(entry.target.id)
      );
      if (event) {
        event.isActive = entry.isIntersecting;
      }
    });
  }, {});

  timelineItems.forEach((item) => {
    observer.observe(item);
  });
}
</script>
<template>
    <div class="timeline">
      <div class="timeline-line" ref="timelineLine"></div>
      <div
        v-for="event in events"
        :key="event.id"
        class="timeline-item"
        :class="{ 'timeline-item-active': event.isActive }"
      >
        <div class="timeline-content">
          <div v-if="event.imageUrl" class="timeline-image">
            <img :src="event.imageUrl" alt="Event Image" />
          </div>
          <div class="timeline-text">
            <h3>{{ event.title }}</h3>
            <p>{{ event.date }}</p>
            <div v-html="event.content"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped lang="scss">
  .timeline {
    position: relative;
  
    .timeline-item {
      position: relative;
      display: flex;
      margin-bottom: 40px;
  
      &.timeline-item-active .timeline-content {
        opacity: 1;
        transform: translateY(0);
      }
    }
  
    .timeline-content {
      position: relative;
      flex-grow: 1;
      padding-left: 40px;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  
      .timeline-image img {
        @apply max-w-full;
      }
  
      .timeline-text {
        h3, p {
          margin: 0;
        }
      }
    }
  
    .timeline-line {
      position: absolute;
      top: 0;
      left: 22px;
      bottom: 0;
      width: 2px;
      background-color: #ccc;
      transform-origin: top center;
      animation: drawLine 1s ease-in-out forwards;
  
      @keyframes drawLine {
        0% {
          transform: scaleY(0);
        }
        100% {
          transform: scaleY(1);
        }
      }
    }
  }
  </style>
  