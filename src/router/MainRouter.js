import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes,Navigate } from "react-router-dom"
import Login  from '../pages/login/Login';
import Finish from '../pages/finish/Finish';
import Contact from '../pages/contact/Contact';
import Survey from '../pages/survey/Survey'
import Question from '../pages/question/Question';
import QuestionDetail from '../pages/questionDetail/QuestionDetail';
import Records from '../pages/records/Records';

function MainRouter() {

  return (

    <Routes>
      <Route path='/' element={<Survey/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/finish' element={<Finish/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/survey' element={<Survey/>}/>
      <Route path='/question' element={<Question/>}/>
      <Route path='/detail/:id' element={<QuestionDetail/>}/>
      <Route path='/detail' element={<QuestionDetail/>}/>
      <Route path='/records' element={<Records/>}/>
      <Route path='*' element={<Navigate to="/survey"/>}/>
    </Routes>
  )
}

const Home = () => {
  return <div>hello world</div>
}

export default MainRouter;