<script>
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});
export default {
  name: "ImageItem",
  props: ["id", "src"],
  data: () => ({
    intersected: false,
    observer: null,
  }),
  computed: {
    srcUrl() {
      return this.intersected ? this.src : "";
    },
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        this.intersected = true;
        this.observer.disconnect();
      }
    });

    this.observer.observe(this.$el);
  },
  unmounted() {
    this.observer.disconnect();
  },
};
</script>
<template>
  <router-link :to="{ name: 'ProfileDetails', params: { id } }">
    <img class="thumb" :src="srcUrl" />
  </router-link>
</template>

<style scoped>
.thumb {
  width: 100%;
  height: 100%;
  max-width: 720px;
  max-height: 426px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;
}

.thumb:hover {
  opacity: 0.8;
}

@keyframes animateThumb {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
