import Home from "../pages/Home.vue";
import Catalog from "../pages/Catalog.vue";
import Contacts from "../pages/Contacts.vue";
import Testimonials from "../pages/Testimonials.vue";
import Cart from "../pages/Cart.vue";

export default [
  {
    path: "/Home",
    name: "Home",
    component: Home,
    meta: { title: "Home" }
  },
  {
    path: "/Catalog",
    name: "Catalog",
    component: Catalog,
    meta: { title: "Catalog" }
  },
  {
    path: "/Contacts",
    name: "Contacts",
    component: Contacts,
    meta: { title: "Contacts" }
  },
  {
    path: "/Testimonials",
    name: "Testimonials",
    component: Testimonials,
    meta: { title: "Testimonials" }
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
    meta: { title: "Cart" }
  }
];
