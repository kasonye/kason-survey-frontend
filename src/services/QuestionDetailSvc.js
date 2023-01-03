import axios from 'axios'
import request from '../config/request'


export const getQuestionDetail = async (id) => {
    var data = []
    await request.get("survey-api/questions/" + id).then((res) => {
        data = res.data
    })
    return data;
}

export const deleteOption = async (id) => {
    const code = await request.delete("survey-api/options/" + id).then((res) => {
       return res.code;
    })
    return code
}

export const saveQuestion = async (questionDetail) => {
    const code = await request.post("survey-api/questions", questionDetail).then((res) => {
        return res.code;
    })
    return code
}

export const updateQuestion = async (questionDetail) => {
    const code = await request.put("survey-api/questions", questionDetail).then((res) => {
        return res.code;
    })
    return code
}

