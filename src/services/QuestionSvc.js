import axios from 'axios'
import request from '../config/request';
import useQuestionStore from '../stores/useQuestionStore';


export const getQuestion = async () => {
    var data = []
    await request.get("survey-api/questions").then((res) => {
        data = res.data
    })
    return data;
}
