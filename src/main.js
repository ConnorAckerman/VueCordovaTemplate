import '@babel/polyfill';
import Vue from 'vue';
import vuetify from './plugins/vuetify';
import './plugins/vuetify-extra';
import App from './App.vue';
import router from './router/index';
import i18n from './i18n';
import Vue2TouchEvents from "vue2-touch-events";

import store from "./store";

require('./assets/styles/main.css')
Vue.use(Vue2TouchEvents, {
  disableClick: true,
  tapTolerance: 5,
});
Vue.config.productionTip = false

const init = () => {
  new Vue({
    el: '#app',
    vuetify,
    router,
    i18n,
    render: h => h(App)
  }).$mount('#app')
};

// Wait for the deviceready event to start the render
document.addEventListener("deviceready", () => {
  // eslint-disable-next-line
  console.log("Ready, Render the App");
  init();
});

// If we are not in Cordova, manually trigger the deviceready event
const isCordovaApp = (typeof window.cordova !== "undefined");
if (!isCordovaApp){
  document.dispatchEvent(new CustomEvent("deviceready", {}));
}