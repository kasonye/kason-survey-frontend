import * as questionSvc from '../services/QuestionSvc'
import useQuestionStore from '../stores/useQuestionStore';
import { message } from 'antd';


export default function useQuestionHandler() {
    const result = {};
    const store = useQuestionStore();


    result.requestQuestionList = async () => {
        const questionList = await questionSvc.getQuestion();
        store.setValue({ questionList })
    }
    result.modifyQuestionLocation = async (question) => {
        await questionSvc.modifyLocation(question);
    }
    result.enabledQuestion = async (question) => {
        const code = await questionSvc.enabledQuestion(question);
        if (code == 1100) {
            message.success("success");
        } else {
            message.error("fail");
        }
    }

    return result;
}