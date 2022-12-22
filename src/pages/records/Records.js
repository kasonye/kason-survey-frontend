import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import useRecordsHandler from '../../handlers/useRecordsHandler';
import useRecordsStore from '../../stores/useRecordsStore';


export default function Records() {
    const store = useRecordsStore();
    const handler = useRecordsHandler();
    useEffect(() => {
        handler.requestRecordsList();
    }, [])

    const Export = e => {

    }

    return (
        <>
            <Sidebar />
            <Header />
            <br />
            <br />
            <Container>
                <Row>
                    <Col >
                        <div style={{ fontSize: '25px' }}><b>Records</b></div>
                    </Col>
                    <Col md={{ span: 1, offerset: 12 }}>
                        <Button variant="primary" onClick={Export}>Export</Button>
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col>
                        {
                            store.recordsList.length > 0 ? store.recordsList[0].recordData.map((i, index) => (
                                <div style={{ fontSize: '18px' }} key={index}><b>Q{index + 1}:{i.questionTitle}</b></div>
                            )) : <div></div>
                        }
                        <br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Records</th>
                                    <th>FillTime</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    store.recordsList.map((item, userIndex) => (
                                        <tr key={userIndex}>
                                            <td>{userIndex + 1}</td>
                                            <td>{item.userName}</td>
                                            <td>{item.userEmail}</td>
                                            <td>{item.userPhone}</td>
                                            <td>
                                                {
                                                    item.recordData.map((i, recordIndex) => (
                                                        <div key={recordIndex}>Q{recordIndex + 1}:{i.optionContent}</div>
                                                    ))
                                                }
                                            </td>
                                            <td>
                                                <div>{item.createTime}</div>
                                            </td>
                                        </tr>

                                    ))

                                }

                            </tbody>
                        </Table>
                       
                    </Col>
                </Row>
            </Container>


        </>
    )

}