import create from "zustand"

const useQuestionStore = create((set, get) => ({
    questionList:[],

    // setter
    setValue: (payload) => set(state => ({...state,...payload}))
}))

export default useQuestionStore;
