import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';   // Agregado para importar Bootstrap
import router from './routes';   // Importación del archivo routes.js

window.$ = window.jQuery = require('jquery');

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
