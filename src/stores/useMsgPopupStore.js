import create from 'zustand'

const useMsgPopupStore = create((set, get) => ({
    msg:'',
    title:'',
    visible:false,
    // setter
    setValue: (payload) => set(state => ({ ...state, ...payload }))
}))

export default useMsgPopupStore;