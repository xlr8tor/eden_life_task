<script setup>
const props = defineProps(["src"]);
</script>
<template>
  <div class="jumbotron"></div>
</template>

<style scoped>
.jumbotron {
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    v-bind("props.src"), var(--darkGrey);
  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: animateHeroImage 1s;
}

@keyframes animateHeroImage {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
