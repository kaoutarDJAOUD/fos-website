<template>
  <div>
    <section id="Home" class="md:h-screen">
      <home-section></home-section>
    </section>
    <section id="Program" class="">
      <programm-section></programm-section>
    </section>
  </div>
</template>

<script setup>
</script>

<style>
#Home {
  clip-path: polygon(85% 0, 100% 0, 100% 85%, 15% 100%, 0 100%, 0 10%);
  background-color: rgba(4, 99, 128);
}
.title {
  font-size: 2rem;
  color: #046380;
  font-family: "Montserrat";
  font-weight: bold;
}

</style>