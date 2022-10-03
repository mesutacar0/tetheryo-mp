const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/sell",
        name: "Sell",
        component: () => import("pages/SellTether.vue"),
        meta: {
          title: "Satis Yap!",
          requiresAuth: false,
          disableIfLoggedIn: false,
        },
      },
      {
        path: "/buy",
        name: "Buy",
        component: () => import("pages/BuyTether.vue"),
        meta: {
          title: "Alis Yap!",
          requiresAuth: false,
          disableIfLoggedIn: false,
        },
      },
      {
        path: "/login",
        name: "Login",
        component: () => import("pages/LoginPage.vue"),
        meta: {
          title: "Login!",
          requiresAuth: false,
          disableIfLoggedIn: true,
        },
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("pages/RegisterPage.vue"),
        meta: {
          title: "Register!",
          requiresAuth: false,
          disableIfLoggedIn: true,
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
