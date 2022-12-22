import axios from "axios";

export const getRecords = async () =>{
    const {data} = await axios.get('/data/records.json');
    return data;
}