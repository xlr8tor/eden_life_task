<script>
import { mapGetters, mapActions } from "vuex";
import ImageItem from "./ImageItem.vue";
import LoadingSpinner from "./LoadingSpinner.vue";

export default {
  name: "ProfileGrid",
  components: {
    ImageItem,
    LoadingSpinner,
  },
  methods: {
    ...mapActions(["fetchProfiles"]),
  },
  computed: mapGetters(["allProfiles"]),
  emits: ["src"],
  created() {
    this.fetchProfiles();
    this.$emit("src", this.allProfiles[0].data);
  },
};
</script>

<template>
  <div class="wrapper">
    <div v-if="allProfiles.length == 0">
      <LoadingSpinner />
    </div>
    <div v-else class="profiles">
      <ImageItem
        v-for="profile in allProfiles"
        :key="profile.id"
        :src="profile.data"
        :id="profile.id"
      />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}
.profiles {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  gap: 2rem;
}
</style>
