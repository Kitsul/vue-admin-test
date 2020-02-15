import Vue from 'vue'
import Vuelidate from "vuelidate";
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filtres/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

const firebaseConfig = {
  apiKey: "AIzaSyDg9h6vVduxMZm7GmSdKYXgM4pmSc91rVk",
  authDomain: "vue-kitsul.firebaseapp.com",
  databaseURL: "https://vue-kitsul.firebaseio.com",
  projectId: "vue-kitsul",
  storageBucket: "vue-kitsul.appspot.com",
  messagingSenderId: "1767642112",
  appId: "1:1767642112:web:275d9a10bf6ebc486574e5",
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


