import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { slide as Menu } from 'react-burger-menu'
import '../style/survey.css'
import { Route, Routes,Link} from "react-router-dom"






export default function Sidebar() {

    return (
        <>
            <Menu>
                <Link to="/question" id='questions'>Questions</Link>
                
                <Link to="/records" id='records'>Records</Link>
            </Menu>

        </>
    )

}

