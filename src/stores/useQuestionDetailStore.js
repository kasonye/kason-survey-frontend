import create from "zustand"

const useQuestionDetailStore = create((set, get) => ({
    questionDetail: {
        questionTitle: '',
        options: [
            {
                optionContent: '',
                sequence: ''
            }
        ]
    },
    // setter
    setValue: (payload) => set(state => ({ ...state, ...payload }))
}))

export default useQuestionDetailStore;