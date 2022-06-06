<template>
  <main
    class="min-h-screen w-screen bg-gradient-to-tr from-orange-500 via-blue-400 to-purple-400 flex justify-center items-center">
    <NuxtLayout name="infocard">
      <ProfilePic />
      <Name />
      <p class="max-w-md px-4 text-white">
        Hi! I&apos;m Henrik VT, a teenage software developer and general
        technology enthusiast. I&apos;m interested in high/low level
        programming, distributed systems, robotics, AV, and 🚆 TRAINS. You
        should check out my blog and links below. 😄
      </p>
      <Navlinks />
      <Socials />
    </NuxtLayout>
  </main>
</template>

<script lang="ts" setup>
useSEO()
</script>