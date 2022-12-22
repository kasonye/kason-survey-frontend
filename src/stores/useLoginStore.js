import create from "zustand"


const useLoginStore = create((set, get) => ({
    form:{
        username:'',
        password:''
    },
    // setter
    setValue: (payload) => set(state => ({...state,...payload}))
}))

export default useLoginStore;