import { useNavigate } from "react-router-dom";
import useContactStore from "../stores/useContactStore";
import useMsgPopupStore from "../stores/useMsgPopupStore";
import useSurveyStore from "../stores/useSurveyStore";
import * as contactSvc from '../services/ContactSVC'

export default function useContactHandler() {
    const surveyStore = useSurveyStore();
    const navigate = useNavigate()
    const store = useContactStore()
    const msgStore = useMsgPopupStore()
    const result = {};

    result.submit = () => {
        store.contact.surveyList = surveyStore.surveyList
        console.log(store)
        if (!validate()) return;
    }


    const validate = e => {
        if (store.contact.userName === "") {
            showMsg('Error', 'Please input name.')
            return false;
        }
        if (store.contact.userEmail === "") {
            showMsg('Error', 'Please input email.')
            return false;
        }
        if (store.contact.userPhone === "") {
            showMsg('Error', 'Please input phone.')
            return false;
        }
        const nameValue = store.contact.userName
        const phoneValue = store.contact.userPhone
        const emailValue = store.contact.userEmail
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
        contactSvc.savaRecord(store.contact);
        navigate("/finish")

    }
    const showMsg = (title, message) => {
        msgStore.setValue({ visible: true, title, message });
    }

    return result;
}