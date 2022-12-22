import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/survey.css'
import Button from 'react-bootstrap/Button';
import useContactStore from '../../stores/useContactStore';
import MsgPopup from '../../components/MsgPopup/MsgPopup';
import useContactHandler from '../../handlers/useContactHandler';



export default function Contact() {
  const store = useContactStore();

  const handler = useContactHandler();
  const submit =  e =>{
    handler.submit();
  }


  const updateName = e =>{
    store.user['name'] = e.target.value
  }

  const updateEmail = e =>{
    store.user['email'] = e.target.value
  }

  const updatePhone = e =>{
    store.user['phone'] = e.target.value
  }
  

  return (
    <div id='box'>
      <div id="title">
        <b>
          Congratulation!
        </b>
      </div>
      <div>
        <div style={{ margin: '2%', fontSize: '23px' }}>
          Thank you for participating! You have answered all questions and have a chance to win a gift! Please fill in the following fields:
        </div>
      </div>

      <form>
        <div>
          <input type='text' id='contactName' name='name' className='form-control' style={{ width: '65%', height: '50px', margin: '5% 0 0 17%' }}   onChange={updateName} placeholder="Name" />
        </div>
        <div>
          <input type='text' name='email' className='form-control' style={{ width: '65%', height: '50px', margin: '5% 0 0 17%' }}  onChange={updateEmail} placeholder="Email" />
        </div>

        <div>
          <input type='text' name='phone' className='form-control' style={{ width: '65%', height: '50px', margin: '5% 0 0 17%' }}  onChange={updatePhone} placeholder="Contact Number" />
        </div>
        <div>
          <Button variant="primary" style={{ width: '65%', height: '50px', margin: '5% 0 3% 17%' }} onClick={submit}>Submit</Button>
        </div>
      </form>
      <MsgPopup/>
    </div>
    
    

  );
}