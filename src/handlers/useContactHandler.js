import { useNavigate } from "react-router-dom";
import useContactStore from "../stores/useContactStore";
import useMsgPopupStore from "../stores/useMsgPopupStore";
import useSurveyStore from "../stores/useSurveyStore";

export default function useContactHandler() {
    const surveyStore = useSurveyStore();
    const navigate = useNavigate()
    const store = useContactStore()
    const msgStore = useMsgPopupStore()
    const result = {};

    result.submit = () => {
        store.user.surveyList = surveyStore.surveyList
        console.log(store)
        if (!validate()) return;
    }


    const validate = e => {
        if (store.user.name === "") {
            showMsg('Error', 'Please input name.')
            return false;
        }
        if (store.user.email === "") {
            showMsg('Error', 'Please input email.')
            return false;
        }
        if (store.user.phone === "") {
            showMsg('Error', 'Please input phone.')
            return false;
        }
        const nameValue = store.user.name
        const phoneValue = store.user.phone
        const emailValue = store.user.email
        var specialKey = "[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'";
        var emailPat = /^(.+)@(.+)$/;
        var phonePat =  /^(2[1-9]|3[145679])\d{6}$/;
        var matchEmail = emailValue.match(emailPat);
        var matchPhone = phoneValue.match(phonePat);


        for (var i = 0; i < nameValue.length; i++) {
            if (specialKey.indexOf(nameValue.substr(i, 1)) != -1) {
                showMsg('Error', 'The name cannot be special key.')
                return false;
            }
        }

        for (var i = 0; i < phoneValue.length; i++) {
            if (specialKey.indexOf(phoneValue.substr(i, 1)) != -1) {
                showMsg('Error', 'The phone cannot be special key.')
                return false;
            }
        }
        if (matchEmail == null) {
            showMsg('Error', 'Please input a valid email address.')
            return false;
        }
        if (matchPhone == null) {
            showMsg('Error', 'Please input a valid phone number.')
            return false;
        }
        navigate("/finish")

    }
    const showMsg = (title, message) => {
        msgStore.setValue({ visible: true, title, message });
    }

    return result;
}