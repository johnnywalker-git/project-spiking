import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app)

import React from 'react'

const register = () => {
  return (
    <div>register</div>
  )
}

export default register