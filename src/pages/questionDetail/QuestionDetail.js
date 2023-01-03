import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import './style.css'
import useQuestionDetailStore from '../../stores/useQuestionDetailStore';
import useQuestionDetailHandler from '../../handlers/useQuestionDetailHandler'
import useQuestionStore from '../../stores/useQuestionStore';
import request from '../../config/request';
import { message } from 'antd';
import Detail from '../../components/Detail';




export default function QuestionDetail() {

    return (
        <>
            <Sidebar />
            <Header />
            <Detail />
        </>
    )

}