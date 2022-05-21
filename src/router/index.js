import Home from "../pages/Home.vue";
import Catalog from "../pages/Catalog/Catalog.vue";
import Contacts from "../pages/Contacts.vue";
import Testimonials from "../pages/Testimonials.vue";
import Cart from "../pages/Cart/CartPage.vue";

export default [
  { path: "*", redirect: "/Home" },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    props: true,
    meta: { title: "Home" }
  },
  {
    path: "/Catalog",
    name: "Catalog",
    component: Catalog,
    props: true,
    meta: { title: "Catalog" }
  },
  {
    path: "/Contacts",
    name: "Contacts",
    component: Contacts,
    props: true,
    meta: { title: "Contacts" }
  },
  {
    path: "/Testimonials",
    name: "Testimonials",
    component: Testimonials,
    props: true,
    meta: { title: "Testimonials" }
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
    props: true,
    meta: { title: "Cart" }
  }
];
