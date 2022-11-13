import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import { db, auth } from "src/boot/firebase";

import { getUser } from "src/service/UserData";

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state: {
      user: null,
      profileAdmin: null,
      profileEmail: null,
      profileFirstName: null,
      profileLastName: null,
      profileUsername: null,
      profileId: null,
      profileApproved: null,
      profileInitials: null,
    },
    modules: {
      // example
    },
    mutations: {
      updateUser(state, payload) {
        state.user = payload;
      },
      setProfileAdmin(state, payload) {
        state.profileAdmin = payload;
      },
      setProfileInfo(state, doc) {
        state.profileId = doc.id;
        state.profileEmail = doc.email;
        state.profileFirstName = doc.firstName;
        state.profileLastName = doc.lastName;
        state.profileUsername = doc.username;
        state.profileApproved = doc.isApproved;
      },
      setProfileInitials(state) {
        state.profileInitials =
          state.profileFirstName.match(/(\b\S)?/g).join("") +
          state.profileLastName.match(/(\b\S)?/g).join("");
      },
      changeFirstName(state, payload) {
        state.profileFirstName = payload;
      },
      changeLastName(state, payload) {
        state.profileLastName = payload;
      },
      changeUsername(state, payload) {
        state.profileUsername = payload;
      },
    },
    actions: {
      async getCurrentUser({ commit }, user) {
        const dbResults = await getUser(auth.currentUser.uid);
        commit("setProfileInfo", dbResults);
        commit("setProfileInitials");
        const token = await user.getIdTokenResult();
        const admin = await token.claims.admin;
        commit("setProfileAdmin", admin);
      },
      async updateUserSettings({ commit, state }) {
        const dataBase = await db.collection("users").doc(state.profileId);
        await dataBase.update({
          firstName: state.profileFirstName,
          lastName: state.profileLastName,
          username: state.profileUsername,
        });
        commit("setProfileInitials");
      },
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
