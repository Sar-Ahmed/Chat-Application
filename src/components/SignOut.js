import { Button } from '@mui/material'
import React from 'react'
import { auth } from '../utils/firebase'

const SignOut = () => {
  return (
    <div>
      <Button 
      variant='contained'
      onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  )
}

export default SignOut
