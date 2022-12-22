import axios from 'axios'
import request from '../config/request'

export const getQuestionDetail = async (id) => {
    var data = []
    await request.get("survey-api/questions/"+ id).then((res) => {
        data = res.data
    })
    return data;
}
