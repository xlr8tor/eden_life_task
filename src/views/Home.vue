<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import ProfileGrid from "../components/ProfileGrid.vue";
import HeroImage from "../components/HeroImage.vue";

export default {
  components: {
    ProfileGrid,
    HeroImage,
  },
  data() {
    return {
      imgUrl: "",
    };
  },
};
</script>

<template>
  <HeroImage :src="`url(${imgUrl})`" />
  <ProfileGrid @src="(url) => (imgUrl = url)" />
</template>
