import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/survey.css'
import MsgPopup from '../../components/MsgPopup/MsgPopup';
import LoginForm from '../../components/LoginForm';


export default function Login() {

    return (
        <>
             
            <LoginForm/>
            <MsgPopup />
        </>
    )

}
