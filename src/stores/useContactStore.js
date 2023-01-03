import create from "zustand"

const useContactStore = create((set, get) => ({
    contact:{
        userName: '',
        userEmail: '',
        userPhone: '',
        surveyList:[]
    },
    // setter
    setValue: (payload) => set(state => ({ ...state, ...payload }))
}))

export default useContactStore;