import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useMsgPopupStore from '../../stores/useMsgPopupStore';
import './style.css'

export default function MsgPopup() {
  const store = useMsgPopupStore();
  if (!store.visible) return '';

  const handleClose = e => {
    store.setValue({ visible: false })
  }

  return (
    <div className="modal-back" onClick={handleClose}>
      <div className="modal-dialog">
        <div className='msg-title'>{store.title}</div>
        <div className='msg-message'>{store.message}</div>
        <hr></hr>
        <div className='modal-action'>
          <button className='modal-button'>OK</button>
        </div>
      </div>
    </div>
  )
}