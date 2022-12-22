import useMsgPopupStore from '../stores/useMsgPopupStore'
import useLoginStore from '../stores/useLoginStore'
import { useNavigate } from 'react-router-dom';

export default function useLoginHandler(){
    const store = useLoginStore();
    const msgStore = useMsgPopupStore()
    const navigate = useNavigate();
    const result = {}

    result.login = () => {
        if (!validate()) return;
    }


    const validate = e => {
        if (store.form.username === "") {
            showMsg('Error', 'Please input username.')
            return false;
        }
        if (store.form.password === "") {
            showMsg('Error', 'Please input password.')
            return false;
        }
        navigate("/records")
    }
    const showMsg = (title, message) => {
        msgStore.setValue({ visible: true, title, message });
    }

    return result;
}