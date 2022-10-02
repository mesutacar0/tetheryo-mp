import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { auth } from "src/boot/firebase";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | TetherYo!`;
    next();
  });

  Router.beforeEach(async (to, from, next) => {
    console.log("from", from);
    console.log("to", to);
    let user = auth.currentUser;
    console.log("user", user);
    let admin = null;
    if (user) {
      let token = await user.getIdTokenResult();
      admin = token.claims.admin;
    }
    if (to.matched.some((res) => res.meta.requiresAuth)) {
      console.log("requires Auth");
      if (user) {
        if (to.matched.some((res) => res.meta.requiresAdmin)) {
          if (admin) {
            return next();
          }
          return next({ name: "Buy" });
        }
        return next();
      }
      return next({ name: "Buy" });
    }
    if (to.matched.some((res) => res.meta.disableIfLoggedIn)) {
      console.log("disable If loggedin");
      if (user) {
        console.log("disabled and user");
        return next({ name: "Buy" });
      }
      return next();
    }
    return next();
  });

  return Router;
});
