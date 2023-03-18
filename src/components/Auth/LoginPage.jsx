import React, { useState, useEffect } from 'react'
import { auth } from '../../context/firebaseconfig';
import { signInWithEmailAndPassword} from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
import { Link, Navigate } from 'react-router-dom';
import { SignupPage } from './SignupPage';
import { AuthDetails } from './AuthDetails';

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [AuthUser, setAuthUser] = useState(null);

    useEffect(()=>{
        const listen = onAuthStateChanged(auth , (user)=>{
            if(user){
                setAuthUser(user);
            }else{
                setAuthUser(null);
            }
        })
    }, [])

  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
      console.log(userCredential);
     }).catch ((error)=>{
      console.log(error);
     })
    }  
  return (
    <div>
      <form onSubmit={signin}>
        <h1>Sign In</h1>
        <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button type='login'>Log In</button>
      
      </form>
      
      <a href='/signup'>Sign Up</a>
      <AuthDetails/>
      
    </div>
  )
}



