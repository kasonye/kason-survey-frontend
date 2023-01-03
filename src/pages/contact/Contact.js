import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MsgPopup from '../../components/MsgPopup/MsgPopup';
import ContactForm from '../../components/ContactForm';



export default function Contact() {


  return (
    <>
      <ContactForm />
      <MsgPopup />
    </>
  );
}