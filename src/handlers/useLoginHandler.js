import useMsgPopupStore from '../stores/useMsgPopupStore'
import useLoginStore from '../stores/useLoginStore'
import * as loginSvc from '../services/LoginSvc'
import { useNavigate } from 'react-router-dom';

export default function useLoginHandler(){
    const store = useLoginStore();
    const msgStore = useMsgPopupStore();
    const navigate = useNavigate(); 
    
    const result = {}

    result.login = () => {
        if (!validate()) return;
    }

    
    const validate = async() => {
        if (store.admin.username === "") {
            showMsg('Error', 'Please input username.')
            return false;
        }
        if (store.admin.password === "") {
            showMsg('Error', 'Please input password.')
            return false;
        }
        const data = await loginSvc.checkToken(store.admin)
        if(data==1400){
            navigate("/records");
        }
        

    }
    const showMsg = (title, message) => {
        msgStore.setValue({ visible: true, title, message });
    }

    return result;
}