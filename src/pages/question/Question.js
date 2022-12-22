import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Button from 'react-bootstrap/Button';
import '../../style/survey.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import useQuestionHandler from '../../handlers/useQuestionHandler';
import useQuestionStore from '../../stores/useQuestionStore';
import editImg from '../../asserts/edit.png';
import upImg from '../../asserts/up.png';
import downImg from '../../asserts/down.png';
import addImg from '../../asserts/add.png';
import { useNavigate } from 'react-router-dom';
import useQuestionDetailStore from '../../stores/useQuestionDetailStore';
import useQuestionDetailHandler from '../../handlers/useQuestionDetailHandler';
import request from '../../config/request';




export default function Question() {
    const questionDetail =
    {
        questionTitle: '',
        options: [
            {
                optionContent: '',
                sequence: ''
            }
        ]
    };
    const detailStore = useQuestionDetailStore();
    const navigate = useNavigate();
    const handler = useQuestionHandler();
    const store = useQuestionStore();
    const questionList = store.questionList
    const detailHandler = useQuestionDetailHandler();
    useEffect(() => {
        handler.requestQuestionList();
    }, [])

    const editQuestion = (id) => {
        detailHandler.requestQuestionDetail(id);
        navigate(`/detail/${id}`)
    }
    const addQuestion = e => {
        detailStore.setValue({ questionDetail })
        navigate("/detail")
    }


    const clickUp = (questionIndex) => e => {
        // questionList[questionIndex].sequence = questionList[questionIndex].sequence - 1
        // questionList[questionIndex - 1].sequence = questionList[questionIndex-1].sequence + 1

        questionList.splice(questionIndex - 1, 1, ...questionList.splice(questionIndex, 1, questionList[questionIndex - 1]));
        for (let i = 0; i < questionList.length; i++) {
            questionList[i].sequence = i + 1
                request.put("survey-api/questions", questionList[i]).then((res) => {

            })
        }
        store.setValue({ questionList })
        console.log(questionList)


    }
    const clickDown = (questionIndex) => e => {
        // questionList[questionIndex].sequence = questionList[questionIndex].sequence + 1
        // questionList[questionIndex + 1].sequence = questionList[questionIndex+1].sequence - 1

        questionList.splice(questionIndex, 1, ...questionList.splice(questionIndex + 1, 1, questionList[questionIndex]));
        for (let i = 0; i < questionList.length; i++) {
            questionList[i].sequence = i + 1
                  request.put("survey-api/questions", questionList[i]).then((res) => {

            })
        }
        store.setValue({ questionList })
        console.log(questionList)


    }
    const enabledQuestion = (questionIndex) => e => {

        if (questionList[questionIndex].enabled == 0) {
            e.target.checked = true
            questionList[questionIndex].enabled = 1
        } else {
            e.target.checked = false
            questionList[questionIndex].enabled = 0
        }
        store.setValue({ questionList })
        request.put("survey-api/questions/enabled", questionList[questionIndex]).then((res) => {

        })
    }


    return (
        <>

            <Sidebar />
            <Header />
            <div className='titleBox'>
                <Container>
                    <Row style={{marginLeft:'1%'}}>
                        <Col > <div style={{ fontSize: '25px' }}><b>Questions</b></div></Col>
                        <Col></Col>
                        <Col md={{ offset: 6 }}><Button variant="primary" style={{ width: '100px' }} onClick={addQuestion}>
                            <img src={addImg} style={{ width: '20px', height: '20px' }} />
                        </Button></Col>

                    </Row>
                </Container>
            </div>
            {

                store.questionList.map((item, questionIndex) => (
                    <div className='questionBox' key={item.questionId}>
                        <Container>
                            <Row style={{marginLeft:'1%'}}>
                                <Col md={6}><p style={{ fontSize: '20px' }}><b>{questionIndex+1}.{item.questionTitle}</b></p></Col>
                                <Col md={{ offset: 4 }}>

                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        onChange={enabledQuestion(questionIndex)}
                                        checked={item.enabled}
                                        style={{ fontSize: '25px' }}
                                    />

                                </Col>
                            </Row>
                            <Row style={{marginLeft:'1%'}}>
                                <Col md={6}>
                                    {

                                        item.options.map((i, optionIndex) => (
                                            <div key={i.optionId}>
                                                <input type="radio" className="form-check-input" style={{ marginRight: '2%'}} disabled={true} />
                                                {i.optionContent}
                                                <br/>
                                            </div>

                                        ))
                                    }
                                </Col>
                                <Col md={{ offset: 4 }}>

                                    <Button disabled={questionIndex == 0} onClick={clickUp(questionIndex)}>
                                        <img src={upImg} style={{ width: '20px', height: '20px' }} />
                                    </Button>
                                    <Button disabled={questionIndex == store.questionList.length - 1} onClick={clickDown(questionIndex)}style={{ marginLeft:'10px' }} >
                                        <img src={downImg} style={{ width: '20px', height: '20px' }} />
                                    </Button>
                                </Col>

                            </Row>

                            <Row style={{marginLeft:'1%'}}>
                                <Col md={{ span: 3, offset: 10 }}>
                                    <Button variant="primary" style={{ width: '100px' }} onClick={() => editQuestion(item.questionId)}>
                                    <img src={editImg} style={{ width: '20px', height: '20px' }} />
                                    </Button>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                ))
            }
        </>
    )
}

