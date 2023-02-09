<script>
import { mapGetters, mapActions } from "vuex";
import ImageItem from "./ImageItem.vue";
import LoadingSpinner from "./LoadingSpinner.vue";
import chunkArray from "../utils/chunkyArray.js";

export default {
  name: "ProfileGrid",
  components: {
    ImageItem,
    LoadingSpinner,
  },
  created() {
    this.fetchProfiles();
    this.updateList();
    this.$watch(
      "data",
      function () {
        this.updateList();
      },
      { deep: true }
    );
  },

  mounted() {
    this.$refs["wrapper"].addEventListener("scroll", this.loadItems);
    this.loadItems();
  },
  // beforeUnmount() {
  //   this.$refs["wrapper"].removeEventListener("scroll", this.loadItems);
  // },
  data() {
    return {
      items: [],
      page: 0,
      loading: false,
      itemsToDisplay: [],
    };
  },
  methods: {
    ...mapActions(["fetchProfiles"]),
    updateList() {
      const chunckedArray = chunkArray(this.allProfiles, 8);
      this.items = chunckedArray;
      this.itemsToDisplay = chunckedArray[0];
    },
    loadItems() {
      if (this.page == this.items.length - 1) return;
      const element = this.$refs["end-of-list"];
      if (!element) return;
      const position = element.getBoundingClientRect();
      if (position.top >= 0 && !this.loading) {
        this.loading = true;
        this.page++;
        setTimeout(() => {
          this.itemsToDisplay = [
            ...this.itemsToDisplay,
            ...this.items[this.page],
          ];
          this.loading = false;
          this.loadItems();
        }, 500);
      }
    },
  },
  computed: mapGetters(["allProfiles"]),
};
</script>

<template>
  <div class="wrapper" ref="wrapper">
    <div v-if="allProfiles.length == 0">
      <LoadingSpinner />
    </div>
    <div v-else class="profiles">
      <ImageItem
        v-for="item in itemsToDisplay"
        :key="item.id"
        :src="item.data"
        :id="item.id"
      />
    </div>
    <div
      v-show="page !== items.length - 1 || !loading"
      id="end-of-list"
      ref="end-of-list"
    />
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 1280px;
  margin: 4rem auto;
  padding: 0 20px;
}
.profiles {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  gap: 2rem;
}
</style>
