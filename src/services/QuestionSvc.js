import request from '../config/request';


export const getQuestion = async () => {
    var data = []
    await request.get("survey-api/questions").then((res) => {
        data = res.data
    })
    return data;
}

export const modifyLocation = async (question) => {
    const code = await request.put("survey-api/questions", question).then((res) => {
        return res.code;
    })
    return code;
}

export const enabledQuestion = async (question) => {
    const code = await request.put("survey-api/questions/enabled", question).then((res) => {
        return res.code;
    })
    return code;
}
