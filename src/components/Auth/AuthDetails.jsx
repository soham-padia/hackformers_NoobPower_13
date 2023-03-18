import { onAuthStateChanged } from 'firebase/auth';
import React, {useEffect, useState} from 'react'
import { auth } from '../../context/firebaseconfig';

export const AuthDetails = () => {
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
    
  return (
    <div>{AuthUser? <div>
        <p>{`Signed In as ${AuthUser.email}`}</p>
        <a href='/'>Go to home page</a>
    </div> : <p>Signed Out</p>}</div>
  )
}
