import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import useContactStore from '../stores/useContactStore';
import useContactHandler from '../handlers/useContactHandler';




export default function ContactForm() {
  const store = useContactStore();

  const handler = useContactHandler();
  const submit =  e =>{
    handler.submit();
  }


  const updateName = e =>{
    store.contact['userName'] = e.target.value
  }

  const updateEmail = e =>{
    store.contact['userEmail'] = e.target.value
  }

  const updatePhone = e =>{
    store.contact['userPhone'] = e.target.value
  }
  

  return (
    <div className='box'>
      <div className="title">
        <b>
          Congratulation!
        </b>
      </div>
      <div>
        <div style={{ width:'65%', margin: '2% 0 0 17%', fontSize: '23px' }}>
          Thank you for participating! You have answered all questions and have a chance to win a gift! Please fill in the following fields:
        </div>
      </div>

      <form>
        <div>
          <input type='text' id='contactName' name='name' className='form-control' style={{ width: '65%', height: '50px', margin: '4% 0 0 17%' }}   onChange={updateName} placeholder="Name" />
        </div>
        <div>
          <input type='text' name='email' className='form-control' style={{ width: '65%', height: '50px', margin: '4% 0 0 17%' }}  onChange={updateEmail} placeholder="Email" />
        </div>

        <div>
          <input type='text' name='phone' className='form-control' style={{ width: '65%', height: '50px', margin: '4% 0 0 17%' }}  onChange={updatePhone} placeholder="Contact Number" />
        </div>
        <div>
          <Button variant="primary" style={{ width: '45%', height: '50px', margin: '4% 0 3% 27%' }} onClick={submit}>Submit</Button>
        </div>
      </form>
    </div>
    
    

  );
}