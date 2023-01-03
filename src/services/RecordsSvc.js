import axios from "axios";
import request from '../config/request';

export const getRecords = async () =>{
    var data = []
    await request.get("survey-api/records").then((res) => {
        data = res.data
    })
    return data;
}