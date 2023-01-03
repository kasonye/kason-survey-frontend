import useRecordsStore from "../stores/useRecordsStore";
import * as recordsSvc from '../services/RecordsSvc'

export default function useRecordsHandler(){
    const store = useRecordsStore();
    const result = {}


    result.requestRecordsList = async ()=>{
        const recordsList = await recordsSvc.getRecords();
        store.setValue({recordsList})
        console.log(recordsList)
    }
    return result;
}