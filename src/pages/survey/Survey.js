import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/survey.css'
import MsgPopup from '../../components/MsgPopup/MsgPopup';
import SurveyList from '../../components/SurveyList';

const Survey = () => {

    return (
        <>
            <SurveyList/>
            <MsgPopup />
        </>
    )

}
export default Survey;