import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import useLoginHandler from '../handlers/useLoginHandler';
import useLoginStore from '../stores/useLoginStore';



export default function LoginForm() {
    const store = useLoginStore();
    const handler = useLoginHandler();  
    
    const login = e => {
        handler.login() 
    }

    const updateUsername = e => {
        store.admin['username'] = e.target.value
    }
    const updatePassword = e => {
        store.admin['password'] = e.target.value
    }

    return (
        <>
            <div>
                <div className="login">

                    <div className='loginTitle'>Admin Login</div>
                    <form style={{ margin: '10% 0 0 20%', width: '60%' }}>
                        <input type='text' name='username' className='form-control' placeholder="Username" onChange={updateUsername} />
                        <br />
                        <br />
                        <input type="password" name="password" className="form-control" placeholder="password" onChange={updatePassword} />
                        <br />
                        <br />
                        <Button variant="primary" style={{ width: '100%' }} onClick={login}>Login</Button>
                    </form>
                </div>
            </div>
        </>
    )

}