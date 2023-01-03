import * as questionDetailSvc from '../services/QuestionDetailSvc'
import useQuestionDetailStore from '../stores/useQuestionDetailStore';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';



export default function useQuestionDetailHandler() {
    const result = {};
    const store = useQuestionDetailStore();
    const navigate = useNavigate();


    result.requestQuestionDetail = async (id) => {
        const questionDetail = await questionDetailSvc.getQuestionDetail(id);
        store.setValue({ questionDetail })
    }
    result.deleteQuestionDetail = async (id) => {
        const code = await questionDetailSvc.deleteOption(id);
        if (code == 1200) {
            message.success("success")
        }
    }
    result.saveQuestionDetail = async (questionDetail) => {
        const code = await questionDetailSvc.saveQuestion(questionDetail);
        if (code == 1300) {
            message.success("success")
            navigate("/question")
        }
    }
    result.updateQuestionDetail = async (questionDetail) => {
        const code = await questionDetailSvc.updateQuestion(questionDetail);
        if (code == 1100) {
            message.success("success")
            navigate("/question")
        }
    }
    return result;
}