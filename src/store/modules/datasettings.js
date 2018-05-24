const state = {
    Idd: '',
    TagN: 0,
    GeoL: {
        latitude: 0,
        longitude: 0
    },

    CodTree: 0,
    UsrN: '',
    TimeStp: '',
    PicI: '',
    ativationData:{},
floadGeo:'xx'
};

const getters = {
    getterID: state => {
        return state.Idd;
    },
    getterTagN: state => {
        return state.TagN;
    },
    getterGeoL: state => {
        return state.GeoL;
    },
    getterCodTree: state => {
        return state.CodTree;
    },
    getterUsrN: state => {
        return state.UsrN;
    },
    getterTimeStp: state => {
        return state.TimeStp;
    },
    getterPicI: state => {
        return state.PicI;
    },
    getterAtivation: state => {
        return state.ativationData;
    },
    getTest: state =>{
        return state.floadGeo;
    }
};

const mutations = {
    chgIdd: (state, payload) => {
        state.Idd = payload;
    },
    chgCodTree: (state, payload) => {
        state.CodTree = payload;
    },
    chgTagN: (state, payload) => {
        state.TagN = payload;
    },
    chgGeoL: (state, payload) => {
        state.GeoL = payload;
    },

    chgUsrN: (state, payload) => {
        state.UsrN = payload;
    },
    chgTimeStp: (state, payload) => {
        state.TimeStp = payload;
    },
    chgPicI: (state, payload) => {
        state.PicI = payload;
    },
    chgAtivation: (state, payload) => {
        state.ativationData = payload;
    },
    chgTest: (state, payload) => {
        state.floadGeo = payload;
    },
};

const actions = {
    setIdd: ({
        commit
    }, payload) => {
        commit('chgIdd', payload);
    },
    setTagN: ({
        commit
    }, payload) => {
        commit('chgTagN', payload);
    },
    setCodTree: ({
        commit
    }, payload) => {
        commit('chgCodTree', payload);
    },
    setGeoL: ({
        commit
    }, payload) => {
        commit('chgGeoL', payload);
    },

    setUsrN: ({
        commit
    }, payload) => {
        commit('chgUsrN', payload);
    },
    setTimeStp: ({
        commit
    }, payload) => {
        commit('chgTimeStp', payload);
    },
    setPicI: ({
        commit
    }, payload) => {
        commit('chgPicI', payload);
    },
    setAtivation: ({
        commit
    }, payload) => {
        commit('chgAtivation', payload);
    },
    setTest: ({
        commit
    }, payload) => {
        commit('chgTest', payload);
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}