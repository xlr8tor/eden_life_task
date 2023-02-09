<script lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "ProfileDetails",
  props: {
    id: { type: String },
  },

  setup(props) {
    const store = useStore();
    const profile = computed(() => {
      return store.getters.getProfile(props.id);
    });
    const match = computed(() => {
      const regex = /breeds\/(\w+)\//;
      const match = profile.value.data.match(regex);
      return match ? match[1] : null;
    });

    return {
      profile,
      match,
    };
  },
};
</script>
<template>
  <div class="profile flex">
    <h2 v-if="match.value">{{ match.value }}</h2>
    <img class="img" :src="profile.data" />
  </div>
</template>

<style scoped>
h2 {
  margin-top: 2rem;
  text-transform: capitalize;
  font-size: 2rem;
  font-weight: 700;
}

img {
  position: absolute;
  bottom: -150px;
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
}

.profile {
  position: relative;
  background: #ededed;
  width: 500px;
  height: 300px;
  margin: 0 auto;
  margin-top: 0;
  padding-top: 0.2px;
  border-radius: 4px;
  animation: moveUp 2s ease-in-out;
  animation-fill-mode: forwards;
}

.flex {
  display: flex;

  justify-content: space-around;
}

@keyframes moveUp {
  0% {
    transform: translateY(150px);
  }
  100% {
    transform: translateY(0px);
  }
}

@media (min-width: 426px) {
  .profile {
    margin-top: 6rem;
  }
}
</style>
