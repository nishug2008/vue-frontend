<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user = JSON.parse(localStorage.getItem("user"));

const handleLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("Token");
  router.push("/login");
};
</script>

<template>
  <header
    class="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md"
  >
    <h1 class="text-xl font-bold cursor-pointer" @click="router.push('/')">
      Dashboard
    </h1>

    <div class="flex gap-6 items-center">
      <button @click="router.push('/dragdrop-form')" class="hover:underline">
        Create Form
      </button>

      <button @click="router.push('/created-forms')" class="hover:underline">
        Created Forms
      </button>

      <span class="text-sm font-medium">{{ user?.email }}</span>

      <button
        @click="handleLogout"
        class="bg-white text-blue-600 px-4 py-1 rounded hover:bg-blue-100 transition"
      >
        Logout
      </button>
    </div>
  </header>
</template>
