import create from "zustand"

const useSurveyStore = create((set, get) => ({
    surveyList:[],  
    
    // setter
    setValue: (payload) => set(state => ({...state,...payload})),
    
}))

export default useSurveyStore;
