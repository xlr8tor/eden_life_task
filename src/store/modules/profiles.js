import axios from "axios";
let id = 0;
let key = "profiles";
let profiles = localStorage.getItem(key);

const state = {
  profiles: profiles ? JSON.parse(profiles) : [],
};

const getters = {
  allProfiles: (state) => state.profiles,
  getProfile: (state) => (id) => {
    return state.profiles.find((profile) => profile.id == id);
  },
};

const actions = {
  async fetchProfiles({ commit }) {
    const instance = axios.create({
      baseURL: "https://dog.ceo/api/breeds/image/random/50",
    });
    const response = await instance.get().then((profile) => profile.data);
    const response_second = await instance
      .get()
      .then((profile) => profile.data);
    commit("setProfiles", [...response.message, ...response_second.message]);
    commit("clearStorage");
    commit("persistProfiles");
  },
  async searchProfiles({ commit }, searchTerm) {
    const response = await axios.get(
      `https://dog.ceo/api/breed/${searchTerm}/images`
    );
    console.log(response);
  },
};

const mutations = {
  setProfiles: (state, profiles) => {
    let updated_state = profiles.map((item) => ({
      id: id++,
      data: item,
    }));
    state.profiles = updated_state;
  },
  persistProfiles: (state) => {
    localStorage.setItem(key, JSON.stringify(state.profiles));
  },
  clearStorage: (key) => {
    id = 0;
    localStorage.removeItem(key);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
