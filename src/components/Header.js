import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/survey.css'
import logoutImg from '../asserts/logout.png';
import { useNavigate } from 'react-router-dom';



export default function Header() {
    const navigate = useNavigate();
    const logout = () =>{
        sessionStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <>
            <div className='header'>
                <div>
                    <b className='headerTitle'>ASL</b>
                    <img src={logoutImg} className='logout' onClick={logout}/>
                </div>
                
            </div>
        </>
    )

}