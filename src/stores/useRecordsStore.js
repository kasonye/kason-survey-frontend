import create from "zustand"

const useRecordsStore = create((set, get) => ({
    recordsList:[], 
    
    // setter
    setValue: (payload) => set(state => ({...state,...payload})),
    
}))

export default useRecordsStore;