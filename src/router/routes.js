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
        path: "/admin",
        name: "Admin",
        component: () => import("pages/AdminPage.vue"),
        meta: {
          title: "Admin!",
          requiresAuth: true,
          requiresAdmin: true,
          disableIfLoggedIn: false,
        },
      },
      {
        path: "/adminer",
        name: "Adminer",
        component: () => import("pages/AdminerPage.vue"),
        meta: {
          title: "Adminer!",
          requiresAuth: true,
          requiresAdmin: true,
          disableIfLoggedIn: false,
        },
      },
      {
        path: "/profile",
        name: "Profile",
        component: () => import("pages/ProfilePage.vue"),
        meta: {
          title: "Profile!",
          requiresAuth: true,
          disableIfLoggedIn: false,
        },
      },
      {
        path: "/history",
        name: "History",
        component: () => import("pages/HistoryPage.vue"),
        meta: {
          title: "Gecmis!",
          requiresAuth: true,
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
      {
        path: "/privacy",
        name: "Privacy",
        component: () => import("pages/PrivacyPage.vue"),
        meta: {
          title: "Privacy!",
          requiresAuth: false,
          disableIfLoggedIn: false,
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
