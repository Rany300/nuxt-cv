<script setup lang="ts">
import { ref } from "vue";
import { useNotification } from "naive-ui";
import { Profile } from "@/assets/data/profile";
const notification = useNotification();

const email = ref("");
const name = ref("");
const message = ref("");

const submitForm = async () => {
  const sendMail = async () =>
    await $fetch("/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: name.value,
        subject: "Contact request from " + email.value,
        text: message.value,
      }),
    });

  try {
    await sendMail();
    email.value = "";
    name.value = "";
    message.value = "";

    notification.success({
      title: "Message sent!",
    });
  } catch (error) {
    notification.error({
      title: "Failed to send message.",
    });
  }
};
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <div class="form-component">
      <div class="split">
        <div class="personal-section">
          <div class="profile-picture-container">
            <div class="name-and-job">
              <h2 class="profile-name">{{ Profile.name }}</h2>
              <p class="profile-job">{{ Profile.job }}</p>
            </div>
            <img
              :src="Profile.avatars[1]"
              alt="Profile Picture"
              class="profile-picture" />
          </div>
          <div class="profile-details">
            <p>
              <font-awesome-icon icon="envelope" class="phone-icon" />
              {{ Profile.email }}
            </p>
            <p>
              <font-awesome-icon icon="phone" class="phone-icon" />
              {{ Profile.phone }}
            </p>
          </div>
        </div>
        <div class="contact-form-container">
          <h2 class="form-title">Contact Me</h2>
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-field">
              <label for="email" class="form-label">Email:</label>
              <input
                type="email"
                id="email"
                v-model="email"
                required
                class="form-input" />
            </div>
            <div class="form-field">
              <label for="name" class="form-label">Name:</label>
              <input
                type="text"
                id="name"
                v-model="name"
                required
                class="form-input" />
            </div>
            <div class="form-field">
              <label for="message" class="form-label">Message:</label>
              <textarea
                id="message"
                v-model="message"
                rows="5"
                required
                class="form-textarea"></textarea>
            </div>
            <button type="submit" class="form-submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-component {
  @apply flex flex-col items-center justify-center bg-gray-900 rounded-lg overflow-hidden md:w-2/3 sm:w-full;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.profile-name {
  @apply text-5xl font-bold mb-2;
}

.profile-job {
  @apply text-xl;
}

.split {
  @apply flex flex-row w-full h-full;
}

.personal-section {
  @apply flex flex-col items-center justify-center mb-8 w-1/2;
}



.profile-picture {
  @apply w-80 h-80 object-cover filter brightness-75 rounded-full m-4;
}

.phone-section {
  @apply absolute top-4 left-4 flex items-center;
  color: white;
  font-size: 1.5rem;
  z-index: 10;
}

.phone-icon {
  @apply mr-2;
}

.phone-number {
  @apply text-white font-semibold;
}

.contact-form-container {
  @apply bg-gray-800 p-6 shadow-lg w-1/2 ml-4;
}

.personal-text {
  @apply text-3xl font-bold mx-2 text-center text-white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.form-title {
  @apply text-3xl font-bold mb-4 text-center;
}

.form-field {
  @apply mb-4;
}

.form-label {
  @apply block font-semibold mb-1;
}

.form-input,
.form-textarea {
  @apply w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 text-black;
}

.form-textarea {
  @apply resize-none;
}

.form-submit {
  @apply w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors duration-200;
}
</style>
