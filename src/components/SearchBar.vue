<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      search: "",
      queryTimeout: null,
    };
  },
  watch: {
    search() {
      const timer = 1000;
      if (this.queryTimeout) {
        clearTimeout(this.queryTimeout);
      }
      setTimeout(() => {
        this.fetchProfiles(this.search);
      }, timer);
    },
  },
  methods: {
    ...mapActions(["fetchProfiles"]),
  },
};
</script>

<template>
  <div class="search__container">
    <div class="search__wrapper">
      <input type="text" placeholder="Search Breed" v-model="search" />
    </div>
  </div>
</template>

<style scoped>
.search__container {
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;
}

.search__wrapper {
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);
}

input {
  font-size: var(--fontL);
  position: absolute;
  left: 0;
  margin: 8px 0;
  padding: 0 0 0 60px;
  border: 0;
  width: 95%;
  background: transparent;
  height: 40px;
  color: var(--white);
}

input:focus {
  outline: none;
}
</style>
