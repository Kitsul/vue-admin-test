import Vue from 'vue'
import Vuelidate from "vuelidate";
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filtres/date.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.component('Loader', Loader)

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIXER,
  authDomain: "vue-kitsul.firebaseapp.com",
  databaseURL: "https://vue-kitsul.firebaseio.com",
  projectId: "vue-kitsul",
  storageBucket: "vue-kitsul.appspot.com",
  messagingSenderId: process.env.VUE_APP_VUE_APP_SENDER,
  appId: process.env.VUE_APP_APP,
  measurementId: "G-RF0HSTETRP"
};
firebase.initializeApp(firebaseConfig);


let app
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});


