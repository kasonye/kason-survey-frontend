import axios from 'axios'
import request from '../config/request';

export const getSurvey = async () => {
    // const {data} = await axios.get('/data/survey.json');
    var data = []
    await request.get("survey-api/survey").then((res) => {
        data = res.data
    })
    return data;
}