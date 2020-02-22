
export default {
    state: {
        infoRecord: []
    },
    mutations: {
        setInfoRecord(state, info) {
            state.infoRecord.push(info);
        },
        clearInfo(state) {
            state.infoRecord = {}
        }
    },
    actions: {
    },
    getters: {
        infoRecord: s => s.infoRecord
    }
}
