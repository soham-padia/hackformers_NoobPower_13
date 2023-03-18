import React, { useState } from 'react'
import { auth } from '../../context/firebaseconfig';
import {createUserWithEmailAndPassword} from "firebase/auth";
import { AuthDetails } from './AuthDetails';



export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
      console.log(userCredential);
     }).catch ((error)=>{
      console.log(error);
     })
    }  
  return (
    <div>
      <form onSubmit={signUp}>
        <h1>Create a new account</h1>
        <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button type='login'>Sign Up</button>
      </form>
      <p>Already have an account? 
      <span><a href='/login'> Sign In</a></span>
      <AuthDetails/>
      </p>
      
      
    </div>
  )
}
