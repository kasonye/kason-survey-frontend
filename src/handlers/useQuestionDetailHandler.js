import * as questionDetailSvc from '../services/QuestionDetailSvc'
import useQuestionDetailStore from '../stores/useQuestionDetailStore';



export default function useQuestionDetailHandler(){
    const result = {};
    const store = useQuestionDetailStore();
    
    
    result.requestQuestionDetail = async (id)=>{
        const questionDetail = await questionDetailSvc.getQuestionDetail(id);
        store.setValue({questionDetail})
    }
    return result;
}