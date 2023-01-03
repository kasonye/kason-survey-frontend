import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import RecordsDetail from '../../components/RecordsDetail';

export default function Records() {


    return (
        <>
            <Sidebar />
            <Header />
            <br />
            <br />
            <RecordsDetail />
        </>
    )

}