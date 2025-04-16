import './styles/Login.css';
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
function Login(){
    const[email, setemail] =useState('');
    const[password,setPassword] = useState('');

    const handSubmit=(e) => {
        e.preventDefault();
        console.log('Email',email);
        console.log('Password',password);
        
    }
    return(
        <div className="Login">

        </div>
    )
}
export default Login;