// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

firebase.initializeApp({messagingSenderId: "your senderID"});
const messaging = firebase.messaging();

messaging.requestPermission()
  .then(function() {
    return messaging.getToken()
  })
  .then(function(token){
    console.log(token)
  })
  .catch(function(err) {
    console.log(err);
  });

messaging.onMessage(function(payload){
  console.log('onMessage: ',payload)
})