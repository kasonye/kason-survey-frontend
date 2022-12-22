import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/survey.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import useSurveyHandler from '../../handlers/useSurveyHandler';
import useSurveyStore from '../../stores/useSurveyStore';
import MsgPopup from '../../components/MsgPopup/MsgPopup';

const Survey = () => {
    const handler = useSurveyHandler();
    const store = useSurveyStore();
    useEffect(() => {
        handler.requestSurveyList();
    }, [])


    const updateAnswer = (questionIndex, index) => e => {
        const surveyList = store.surveyList
        surveyList[questionIndex].value = e.target.value

    }

    const next = e => {
       handler.submit()
    }




    return (
        <>
            <div id='box'>
                <div id='title'>ASL Survey</div>
            </div>
            {
                store.surveyList.map((item, questionIndex) => (

                    <div className='questionBox' key={questionIndex}>
                        <div>
                            <p style={{ fontSize: '20px', marginLeft: '2%' }}>{questionIndex+1}.{item.questionTitle}</p>
                        </div>
                        <div>
                            {
                                item.options.map((i, index) => (
                                    <Container key={index}>
                                        <Row>
                                            <Col md={{ span: 8 }}>
                                                <InputGroup>
                                                    <InputGroup.Radio value={i.optionContent} name={item.questionId} onChange={updateAnswer(questionIndex, index)} />
                                                    <Form.Control disabled value={i.optionContent} />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <br />
                                    </Container>
                                ))
                            }

                        </div>
                    </div>
                ))
            }


            <br />
            <br />
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 4 }}>
                        <Button variant="primary" style={{ width: '50%' }} onClick={next}>Next</Button>
                    </Col>
                </Row>

                <br />
                <br />
            </Container>
            <MsgPopup/>
        </>
    )

}
export default Survey;