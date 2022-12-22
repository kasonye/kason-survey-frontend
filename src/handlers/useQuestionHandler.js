import * as questionSvc from '../services/QuestionSvc'
import useQuestionStore from '../stores/useQuestionStore';



export default function useQuestionHandler(){
    const result = {};
    const store = useQuestionStore();
    
    
    result.requestQuestionList = async ()=>{
        const questionList = await questionSvc.getQuestion();
        store.setValue({questionList})
    }
   
    return result;
}