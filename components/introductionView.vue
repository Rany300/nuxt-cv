<script lang="ts" setup>
const name = ref<HTMLSpanElement | null>(null);
const img = ref<HTMLImageElement | null>(null);
const introText = ref<HTMLHeadingElement | null>(null);
const textContainer = ref<HTMLDivElement | null>(null);

const fadeInObserver = ref<IntersectionObserver | null>(null);

const typing = (element: HTMLElement, text: string, delay: number) => {
  let i = 0;
  const type = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, delay);
    }
  };
  type();
};

const scrollTo = (element: HTMLElement) => {
  element.scrollIntoView({
    behavior: "smooth",
  });
};

onMounted(() => {
  typing(name.value!, "Daniel", 100);

  const options = {
    rootMargin: "0px",
    threshold: 0.5,
  };
  fadeInObserver.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //switch elemtn type
        switch (entry.target) {
          case introText.value:
            entry.target.classList.add("fadeIn");
            break;
          case img.value:
            entry.target.classList.add("fadeInScaleUp");
            entry.target.classList.add("cursor-pointer");
            break;
        }
      }
    });
  }, options);

  fadeInObserver.value.observe(img.value!);
  fadeInObserver.value.observe(introText.value!);
});
</script>

<template>
  <div class="flex flex-col justify-between h-screen">
    <div
      class="flex flex-col justify-center items-center h-full m-12 gap-y-32"
      ref="textContainer">
      <h1 class="text-8xl font-bold mt-32 text-center typing">
        Hi, I'm <span class="text-blue-500" ref="name"></span>
      </h1>
      <h2 class="text-4xl font-bol text-center font-bold fadeIn opacity-0">
        I'm a passionate full-stack developer and tech enthusiast.
      </h2>
      <ClientOnly>
        <font-awesome-icon
          icon="fa-circle-arrow-down"
          class="text-5xl text-slate-300 animate-pulse cursor-pointer"
          v-if="textContainer"
          @click="scrollTo(textContainer)" />
      </ClientOnly>
    </div>
  </div>
  <div
    class="flex flex-col justify-center items-center h-full m-12 gap-y-56"
    ref="textContainer">
    <img
      src="/pictures/profile-pic1.jpeg"
      class="rounded-full opacity-0"
      ref="img" 
      />
    <h2
      class="text-4xl font-bol text-center font-bold cursor-pointer opacity-0"
      ref="introText">
      Click <span class="text-blue underline">here</span> to learn more about
      me.
    </h2>
  </div>
</template>

<style scoped lang="scss">
.typing {
  @apply text-white;

  &::after {
    content: "|";
    animation: blink 0.7s infinite;

    @keyframes blink {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
}

.fadeIn {
  @apply text-white;
  animation: fadeIn 1s ease-in-out forwards;
  animation-delay: 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}

.fadeOut {
  @apply text-white;
  animation: fadeOut 1s ease-in-out forwards;
  animation-delay: 1.5s;

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}

.fadeInScaleUp {
  animation: fadeInScaleUp 1s ease-in-out forwards;
  animation-delay: 1s;
}

@keyframes fadeInScaleUp {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
