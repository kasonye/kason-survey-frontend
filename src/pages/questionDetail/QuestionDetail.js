import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate, useParams } from 'react-router-dom';
import './style.css'
import useQuestionDetailStore from '../../stores/useQuestionDetailStore';
import useQuestionDetailHandler from '../../handlers/useQuestionDetailHandler'
import useQuestionStore from '../../stores/useQuestionStore';
import request from '../../config/request';



export default function QuestionDetail() {
    const params = useParams();
    const navigate = useNavigate();
    const store = useQuestionDetailStore();
    const handler = useQuestionDetailHandler();
    const questionStore = useQuestionStore();
    const questionDetail = store.questionDetail;
    const questionList = questionStore.questionList;

    const addOption = e => {
        questionDetail.options.push({
            optionContent: '',
            sequence: ''
        })
        store.setValue({ questionDetail })
    }

    const updateQuestion = e => {
        questionDetail.questionTitle = e.target.value
        store.setValue({ questionDetail })
    }
    const updateOptions = (index) => e => {
        questionDetail.options[index].optionContent = e.target.value
        questionDetail.options[index].sequence = index + 1
        store.setValue({ questionDetail })
    }
    const deleteOption = (index) => e => {
      
        if(Object.values(params).length>0){
            request.delete("survey-api/options/"+ questionDetail.options[index].optionId).then((res) => {
                
            })
        }
            questionDetail.options.splice(index, 1)
            store.setValue({ questionDetail })
        
       
    }
    const cancel = e => {
        navigate("/question")
    }
    const saveQuestion = e => {
        if(Object.values(params).length>0){
            request.put("survey-api/questions",questionDetail).then((res) => {
                navigate("/question")
            })
        }else{
            questionDetail.sequence = questionList.length + 1
            request.post("survey-api/questions", questionDetail).then((res) => {
                navigate("/question")
            })
        }
       
    }
    return (
        <>
            <Sidebar />
            <Header />
            <div className='questionDetail'>
                <Container>
                    <Row style={{marginLeft:'2%'}}>
                        <Col md={6}> <h4><b>Question Detail</b></h4></Col>
                    </Row>
                    <br />
                    <Row style={{marginLeft:'2%'}}><h4><b>Question:</b></h4></Row>
                    <Row style={{marginLeft:'2%'}}>
                        <Col md={11}><input type='text' className='form-control' value={store.questionDetail.questionTitle} onChange={updateQuestion} /></Col>
                    </Row>
                    <br />
                    <Row style={{marginLeft:'2%'}}><h4><b>Options:</b></h4></Row>
                    {
                        store.questionDetail.options.map((item, index) => (
                            <div key={index}>
                                <Row style={{marginLeft:'2%'}}>
                                    <Col md={11}><input type='text' className='form-control' value={store.questionDetail.options[index].optionContent} onChange={updateOptions(index)} /></Col>
                                    <Col style={{marginTop:'5px'}}><CloseButton onClick={deleteOption(index)} /></Col>
                                </Row>
                                <br />
                            </div>
                        ))
                    }

                    <br />
                    <Row>
                    </Row>
                    <br />
                    
                    <Row style={{marginLeft:'2%'}}>
                        <Col md={{ span: 5 }}><Button variant="primary" onClick={addOption}>Add Option</Button></Col>
                        <Col md={{ span: 5 }}><Button variant="primary" onClick={saveQuestion}>Save Question</Button></Col>
                        <Col md={{ span: 2 }}><Button variant="primary" onClick={cancel}>Cancel</Button></Col>
                    </Row>
                </Container>
            </div>

        </>
    )

}