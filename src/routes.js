//Este archivo fue creado basado en lo visto en pág. 9 - Lectura Vue Router (Parte 1)
// Agregados componentes NotFound, Articulo, SobreMi y Post
// y agrego al objeto routes los path, name y component de cada caso.
import Vue from "vue";
import Router from "vue-router";
//componentes
import Inicio from "./components/Inicio";
//import Contacto from "./components/Contacto.vue";
//import NotFound from "./components/NotFound.vue";
import Articulo from "./components/Articulo";
//import SobreMi from "./components/SobreMi.vue";
//import Post from "./components/Post.vue";

import AdmiSimple from "./components/AdmiSimple";
import AdmiAvanzado from "./components/AdmiAvanzado";
import DireccionEquivocada from "./components/DireccionEquivocada";

const LazyPortada = () => import("./components/NotFound");
const LazySobreMi = () => import("./components/SobreMi");
const LazyContacto = () => import("./components/Contacto");
const LazyPost = () => import("./components/Post");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Inicio",
      component: Inicio,
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/inicio",
      redirect: "/",
    },
    {
      path: "/portada",
      redirect: "/",
    },

    {
      path: "/contacto",
      name: "LazyContacto",
      component: LazyContacto,
      alias: ["/contactame"],
    },
    {
      path: "/post",
      name: "LazyPost",
      component: LazyPost,
      children: [
        {
          path: ":articulo",
          component: Articulo,
          name: "Articulo",
        },
      ],
    },
    {
      path: "/sobremi",
      name: "LazySobreMi",
      component: LazySobreMi,
      alias: ["/acerca"],
    },
    {
      path: "/administrador/simple",
      component: AdmiSimple,
    },
    {
      path: "/administrador/avanzado",
      component: AdmiAvanzado,
    },
    {
      path: "/administrador/*",
      component: DireccionEquivocada,
    },
    {
      path: "*",
      name: "LazyPortada",
      component: LazyPortada,
    },
  ],
});
