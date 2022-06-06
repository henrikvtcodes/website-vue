<template>
  <main
    class="min-h-screen w-screen bg-gradient-to-tr from-orange-500 via-blue-400 to-purple-400 flex justify-center items-center">
    <NuxtLayout name="infocard">
      <ProfilePic />
      <NuxtLink to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <a className="no-underline" target="_blank">
          <h1 className="lg:text-7xl md:text-6xl text-5xl mt-2 mb-4 font-extrabold text-white hover:cursor-pointer">
            Henrik VT
          </h1>
        </a>
      </NuxtLink>
      <p className=" max-w-md px-4 text-white">
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
