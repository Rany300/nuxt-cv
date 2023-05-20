<script setup lang="ts">
import { ref } from "vue";
import { useNotification } from "naive-ui";
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
  <div class="form-component">
    <form class="contact-form" @submit.prevent="submitForm">
      <label for="email" class="form-label">Email:</label>
      <input
        type="email"
        id="email"
        v-model="email"
        required
        class="form-input" />

      <label for="name" class="form-label">Name:</label>
      <input type="text" id="name" v-model="name" required class="form-input" />

      <label for="message" class="form-label">Message:</label>
      <textarea
        id="message"
        v-model="message"
        rows="5"
        required
        class="form-textarea"></textarea>

      <button type="submit" class="form-submit">Submit</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.form-component {
  @apply h-screen flex items-center justify-center;
}
.contact-form {
  @apply max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg;
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
