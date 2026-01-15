// import { type RouteConfig, index } from "@react-router/dev/routes";

// export default [index("pages/Home.tsx")] satisfies RouteConfig;
import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  // "/" -> "/home"
  index("pages/Home.tsx"),

  // Auth (no bottom nav)
  layout("layouts/AuthLayout.tsx", [
    route("sign-in", "pages/auth/SignIn.tsx"),
    route("sign-up", "pages/auth/SignUp.tsx"),
    route("forgot-password", "pages/auth/ForgotPassword.tsx"),
  ]),

  // App shell (top bar + bottom nav)
  layout("layouts/AppLayout.tsx", [
    route("wishlist", "pages/Wishlist.tsx"),
    route("pause", "pages/Pause.tsx"),
    route("insights", "pages/Insights.tsx"),

    // top-right user icon -> Me
    route("me", "pages/Me.tsx"),
    route("settings", "pages/Settings.tsx"),

    // wish detail
    route("wish/:wishId", "pages/WishDetail.tsx"),

    // modals (Add/Edit)  — 파일이 app/modals에 있다고 했으니 여기로
    route("wishlist/new", "modals/AddWish.tsx"),
    route("wish/:wishId/edit", "modals/EditWish.tsx"),
  ]),
] satisfies RouteConfig;
