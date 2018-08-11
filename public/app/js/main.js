require('../css/main.css');

import Vue from 'vue';
import startScreen from './components/startScreen.vue';
new Vue({
    render: h => h(startScreen)
}).$mount('#start');