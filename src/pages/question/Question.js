import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import '../../style/survey.css'
import QuestionList from '../../components/QuestionList';


export default function Question() {


    return (
        <>
            <Sidebar />
            <Header />
            <QuestionList />
        </>
    )
}

