import create from "zustand"

const useContactStore = create((set, get) => ({
    user:{
        name: '',
        email: '',
        phone: '',
        surveyList:[]
    },
    // setter
    setValue: (payload) => set(state => ({ ...state, ...payload }))
}))

export default useContactStore;