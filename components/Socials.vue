<template>
  <nav class="mt-2 mb-2 flex space-x-2 md:space-x-4">
    <span class="text-white hover:cursor-pointer hover:text-black">
      <NuxtLink to="https://github.com/henrikvtcodes" class="no-underline" target="_blank">
        <Github class="sm:w-10 w-7 h-auto" />
      </NuxtLink>
    </span>
    <span class="text-white hover:cursor-pointer hover:text-twitter ">
      <NuxtLink to="https://twitter.com/henrik_tech" class="no-underline" target="_blank">
        <Twitter class="sm:w-10 w-7 h-auto" />
      </NuxtLink>
    </span>
  </nav>
</template>

<script lang="ts">
import { Github, Twitter } from 'lucide-vue-next';

export default {
  name: 'Socials',
  components: {
    Github,
    Twitter,
  },
}

</script>