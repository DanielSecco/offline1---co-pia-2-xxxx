import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import router from './router'
import {store} from './store/store'
import * as config from './assets/js/config.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueMDCAdapter from 'vue-mdc-adapter';
import Vuex from 'vuex'
import VueFire from 'vuefire'
import 'swiper/dist/css/swiper.css'
import './registerServiceWorker'

require('../public/src/js/promise.js')
require('../public/src/js/fetch.js')
//require('../public/src/js/idb.js')
require('../public/src/js/material.min.js')
require('../public/src/js/utility.js')
//require('./index.js')
Vue.use(ElementUI);
Vue.use(VueFire)
Vue.use(Vuex)
Vue.use(VueMDCAdapter)
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.config.productionTip = false
// set firebase/firestore
var $ = require('jquery')
var defaultApp = firebase.initializeApp(config.configFirebase);
export const firestore = firebase.firestore()
import './assets/js/pushnoty.js'

firestore.settings({
    timestampsInSnapshots: true
});
firestore.enablePersistence().then(function () {
        console.log('persistence ok')
    })
    .catch(function (err) {
        store.dispatch('setErro', err)
    });
//////////////// promise
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('This is executed once the timer is done!');
        reject({
            code: 500,
            message: 'An error occurred!'
        });
        //console.log('This is executed once the timer is done!');
    }, 100);
});
if (!window.Promise) {
    window.Promise = promise;
};
///////////////////////interface
function updateUI(data) {
    for (var i = 0; i < data.length; i++) {
        writeData('trees', data[i]);
        //console.log(data);
    }
};

function updateUI2(data) {
    for (var i = 0; i < data.length; i++) {
        delete data[i].image;
        writeData('posts', data[i]);
    }
};
// header fetch(url,{myInit})
var myInit = {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*/*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    mode: 'cors'
};
//////
var networkDataReceived = false;
fetch(config.urlTree)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        networkDataReceived = true;
        window.furlf = data;
        // console.log(data.foto + '<???>' + jhg);
        console.log('From web FETCH 1 >', data);
        var dataArray = [];
        var uio = [];
        for (var key in data) {
            dataArray.push(data[key]);
            uio.push(data[key]);
            // writeData('trees', data[key]);
        }
        updateUI(dataArray);
        //window.ltt = uio[0];
        window.dados1 = uio;
        // console.log(uio.length + '<???>' + jhg);
        return window.dados1, window.furlf;
    }).catch(function (err) {
        console.log(err);
    });
networkDataReceived = false;
fetch(config.url2)
    .then(function (res) {
        console.log(res);
        return res.json();
    })
    .then(function (data) {
        networkDataReceived = true;
        // console.log(data.foto + '<???>' + jhg);
        console.log('From web FETCH post fire >', data);
        var dataArray = [];
        $("#imgf").text('');
        for (var key in data) {
            dataArray.push(data[key]);
            $("#imgf").append("<p> " + data[key].data + '----' + data[key].id + '-->' + data[key].hora + "</p><br> ");
        }
        updateUI2(dataArray);
        // console.log(uio.length + '<???>' + jhg);
    }).catch(function (err) {
        console.log(err);
    });
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');


promise.then(function (text) {
    return text;
}).then(function (newText) {
    console.log(newText);
}).catch(function (err) {
    console.log(err.code, err.message);
});


////// push
