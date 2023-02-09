<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import ProfileGrid from "../components/ProfileGrid.vue";
import HeroImage from "../components/HeroImage.vue";
import SearchBar from "../components/SearchBar.vue";

export default {
  components: {
    SearchBar,
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
  <SearchBar />
  <ProfileGrid @src="(url) => (imgUrl = url)" />
</template>
