import Home from "../pages/Home.vue";
import Catalog from "../pages/Catalog.vue";
import Contacts from "../pages/Contacts.vue";
import Testimonials from "../pages/Testimonials.vue";
import Cart from "../pages/Cart.vue";

export default [
  { path: "*", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { title: "Home" }
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog,
    meta: { title: "Catalog" }
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
    meta: { title: "Contacts" }
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials,
    meta: { title: "Testimonials" }
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: { title: "Cart" }
  }
];
