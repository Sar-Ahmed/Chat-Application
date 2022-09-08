import React from 'react'
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { Button } from '@mui/material';
import { auth } from '../utils/firebase';

const SignIn = () => {
    const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }
  return (
    <div>
      <Button 
      variant='contained'
      onClick={handleGoogleLogin}
      >Sign in with Google</Button>
    </div>
  )
}

export default SignIn
