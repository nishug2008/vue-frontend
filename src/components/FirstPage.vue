<template>
  <div class="bg-gray-100 min-h-screen text-gray-800 font-sans">
    <!-- Header -->
    <header class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-indigo-600">FormEase</h1>
        <nav>
          <RouterLink to="/login" class="text-gray-700 hover:text-indigo-600 mx-3">Login</RouterLink>
          <RouterLink to="/register" class="text-gray-700 hover:text-indigo-600 mx-3">Sign Up</RouterLink>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-indigo-50 py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-extrabold text-indigo-700">Build Powerful Forms with Ease</h2>
        <p class="mt-4 text-gray-600">
          Design, share, and analyze forms effortlessly. Whether you're collecting feedback or running surveys,
          FormEase helps you do it all.
        </p>
        <div class="mt-8">
          <RouterLink
            to="/formBuilder"
            class="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 shadow"
          >
            Create Form
          </RouterLink>
          <RouterLink
            to="/my-forms"
            class="ml-4 border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-100"
          >
            View My Forms
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white mt-16 py-6 text-center text-gray-500 text-sm">
      © 2025 FormEase. All rights reserved.
    </footer>
  </div>
</template>




