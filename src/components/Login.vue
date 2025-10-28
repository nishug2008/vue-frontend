<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import axios from "axios";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleSubmit = async () => {
   console.log("Email : ",email.value,"Password : ",password.value);

   const loginData = {
       email : email.value,
       password:password.value,
   };

   try {
    const response = await axios.post("http://localhost:8080/users/login", loginData);
    if (response.status === 200) {
      const user = response.data;
      alert("Logged In");

      localStorage.setItem("user", JSON.stringify(user));

      console.log(user);

      if (user.role === "ADMIN") {
        router.push("/admin-dashboard");
      } else {
        router.push("/all-forms");
      }
    }
  } catch (error) {
    console.error("Error in login", error);
    alert("Failed to Login");
  }
};
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <!-- Login Box -->
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-semibold text-center mb-6">Login</h2>

      <!-- Login Form -->
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Email Input -->
        <div class="relative">
          <input
            type="email"
            placeholder="Email"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            v-model="email"
            required
          />
        </div>

        <!-- Password Input -->
        <div class="relative">
          <input
            type="password"
            placeholder="Password"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            v-model="password"
            required
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      <!-- Forgot Password & Sign Up Links -->
      <div class="text-center mt-4 text-sm">
        <p class="text-gray-600">
          Forgot password?
          <RouterLink to="#" class="text-blue-500 hover:underline"
            >Reset here</RouterLink
          >
        </p>
        <p class="text-gray-600">
          Don't have an account?
          <RouterLink to="/register" class="text-blue-500 hover:underline"
            >Sign up</RouterLink
          >
        </p>
      </div>
    </div>
  </div>
</template>
