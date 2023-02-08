import axios from "axios";

const state = {
  profiles: [],
};

const getters = {
  allProfiles: (state) => state.profiles,
  getProfile: (state) => (id) => {
    return state.profiles[id];
  },
};

const actions = {
  async fetchProfiles({ commit }) {
    const response = await axios.get(
      "https://dog.ceo/api/breeds/image/random/50"
    );
    commit("setProfiles", response.data);
    commit("setProfiles", response.data);
  },
};

const mutations = {
  setProfiles: (state, profiles) =>
    (state.profiles = [...state.profiles, ...profiles.message]),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
