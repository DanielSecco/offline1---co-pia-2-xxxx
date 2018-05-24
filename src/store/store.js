import Vue from 'vue';
import Vuex from 'vuex';
import datasettings from './modules/datasettings';
//import logininfo from './modules/logininfo';



Vue.use(Vuex);

export const store = new Vuex.Store({
   
    modules: {
        datasettings
        //logininfo
    }
});