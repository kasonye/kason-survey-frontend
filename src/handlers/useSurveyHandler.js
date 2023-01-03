import { useNavigate } from 'react-router-dom';
import * as surveySvc from '../services/SurveySvc'
import useSurveyStore  from '../stores/useSurveyStore';
import useMsgPopupStore from '../stores/useMsgPopupStore';

export default function useSurveyHandler(){
    const navigate = useNavigate();
    const result = {};
    const store = useSurveyStore(); 
    const msgStore = useMsgPopupStore();

    result.submit = () =>{
        if (!validate()) return;
    }
    
    
    result.requestSurveyList = async ()=>{
        const surveyList = await surveySvc.getSurvey();
        store.setValue({surveyList})
    }

    const validate = e => {
        
        for(var i=0;i<store.surveyList.length;i++){
            console.log(store.surveyList[i].value)
            if(store.surveyList[i].value===null){
                showMsg('Error', 'Please input survey.')
                return false;
            }
        }
        navigate("/contact")
    }
    const showMsg = (title, message) => {
        msgStore.setValue({ visible: true, title, message });
    }

    return result;
}