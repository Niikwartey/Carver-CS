import React, { useContext } from 'react';
import GoogleAuthBtn from '../GoogleAuthBtn';
import './style.css';

function Login() {
  return (
    <div className="Login">
      <GoogleAuthBtn />
    </div>
  );
}

 
export default Login;